import { BLOG_POSTS, BlogPost, BlogAuthor } from "./blogData";

const WP_API_URL = process.env.WORDPRESS_API_URL || "";

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Helper to decode standard HTML entities returned by WordPress REST API
export function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/&#8230;/g, "…")
    .replace(/&nbsp;/g, " ");
}

// Strip HTML tags for clean text excerpts
export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

// Calculate estimated read time in minutes
function calculateReadTime(contentHtml: string): string {
  const text = stripHtml(contentHtml);
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// Format WordPress ISO date to "Month Day, Year"
function formatWpDate(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
}

// Transform raw WordPress REST API post into FixWheel's BlogPost format
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformWpPost(wpPost: any): BlogPost {
  const title = decodeHtmlEntities(wpPost.title?.rendered || "");
  const rawHtml = wpPost.content?.rendered || "";
  const excerptText = decodeHtmlEntities(stripHtml(wpPost.excerpt?.rendered || "")).slice(0, 180);

  // Extract featured image from _embedded
  const mediaObj = wpPost._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl =
    mediaObj?.source_url ||
    mediaObj?.media_details?.sizes?.large?.source_url ||
    "/blog_oil.jpg";

  // Extract Author from _embedded
  const authorObj = wpPost._embedded?.author?.[0];
  const author: BlogAuthor = {
    name: authorObj?.name ? decodeHtmlEntities(authorObj.name) : "Zakir Hussain",
    role: "Automotive Lead & Master Mechanic",
    avatar: authorObj?.avatar_urls?.["96"] || "/zakir-hussain.png",
    slug: authorObj?.slug || "zakir-hussain",
  };

  // Extract primary category from _embedded["wp:term"][0]
  const categoriesList = wpPost._embedded?.["wp:term"]?.[0] || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const primaryCat = categoriesList.length > 0 ? decodeHtmlEntities(categoriesList[0].name) : "Maintenance";
  
  // Valid category type check
  const allowedCategories = ["Maintenance", "Tips & Tricks", "EV Corner", "Buying Guide"] as const;
  const category = (allowedCategories.find((c) => c.toLowerCase() === primaryCat.toLowerCase()) || "Maintenance") as BlogPost["category"];

  // Extract tags from _embedded["wp:term"][1]
  const tagsList = wpPost._embedded?.["wp:term"]?.[1] || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keywords = tagsList.map((t: any) => decodeHtmlEntities(t.name));
  if (keywords.length === 0) {
    keywords.push("bike maintenance", "doorstep mechanic", "FixWheel");
  }

  return {
    slug: wpPost.slug,
    title,
    excerpt: excerptText || title,
    category,
    date: formatWpDate(wpPost.date),
    readTime: calculateReadTime(rawHtml),
    image: imageUrl,
    author,
    keywords,
    content: [], // Not used when htmlContent is provided
    htmlContent: rawHtml,
  };
}

/**
 * Fetch all published blog posts from WordPress REST API.
 * Automatically falls back to local BLOG_POSTS if WP is offline or not configured.
 */
export async function getWordPressPosts(options?: {
  page?: number;
  perPage?: number;
  categorySlug?: string;
  search?: string;
}): Promise<BlogPost[]> {
  if (!WP_API_URL) {
    return filterFallbackPosts(options);
  }

  try {
    const params = new URLSearchParams({
      _embed: "1",
      status: "publish",
      per_page: String(options?.perPage || 20),
      page: String(options?.page || 1),
    });

    if (options?.search) {
      params.append("search", options.search);
    }

    const res = await fetch(`${WP_API_URL}/posts?${params.toString()}`, {
      next: {
        revalidate: 60, // ISR: 60 seconds background cache revalidation
        tags: ["blog", "blog-posts"],
      },
    });

    if (!res.ok) {
      console.warn(`[WordPress] Failed to fetch posts (${res.status} ${res.statusText}). Using fallback.`);
      return filterFallbackPosts(options);
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return filterFallbackPosts(options);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wpPosts = data.map((item: any) => transformWpPost(item));

    // Also merge offline fallback posts whose slugs are not already in WP
    const existingSlugs = new Set(wpPosts.map((p) => p.slug));
    const fallbackAdditions = BLOG_POSTS.filter((p) => !existingSlugs.has(p.slug));

    return [...wpPosts, ...fallbackAdditions];
  } catch (err) {
    console.error("[WordPress] Error connecting to WordPress API, falling back to local blog data:", err);
    return filterFallbackPosts(options);
  }
}

/**
 * Fetch a single blog post by its slug.
 */
export async function getWordPressPostBySlug(slug: string): Promise<BlogPost | null> {
  const normalizedSlug = slug.toLowerCase();

  if (!WP_API_URL) {
    const localPost = BLOG_POSTS.find((p) => p.slug.toLowerCase() === normalizedSlug);
    return localPost || null;
  }

  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(normalizedSlug)}&_embed=1`, {
      next: {
        revalidate: 60,
        tags: ["blog", `post-${normalizedSlug}`],
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return transformWpPost(data[0]);
      }
    }
  } catch (err) {
    console.error(`[WordPress] Failed fetching slug ${slug} from WP, falling back to local data:`, err);
  }

  // Fallback to local post if available
  const localPost = BLOG_POSTS.find((p) => p.slug.toLowerCase() === normalizedSlug);
  return localPost || null;
}

/**
 * Fetch all slugs for generateStaticParams().
 */
export async function getAllWordPressPostSlugs(): Promise<string[]> {
  const localSlugs = BLOG_POSTS.map((p) => p.slug);

  if (!WP_API_URL) {
    return localSlugs;
  }

  try {
    const res = await fetch(`${WP_API_URL}/posts?_fields=slug&per_page=100`, {
      next: { revalidate: 300, tags: ["blog-slugs"] },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const wpSlugs = data.map((item: any) => item.slug as string);
        return Array.from(new Set([...wpSlugs, ...localSlugs]));
      }
    }
  } catch {
    // Ignore error and return local slugs
  }

  return localSlugs;
}

/**
 * Fetch categories for the blog hub filter.
 */
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  const defaultCategories: WordPressCategory[] = [
    { id: 1, name: "All", slug: "all", count: BLOG_POSTS.length },
    { id: 2, name: "Maintenance", slug: "maintenance", count: 0 },
    { id: 3, name: "Tips & Tricks", slug: "tips-tricks", count: 0 },
    { id: 4, name: "EV Corner", slug: "ev-corner", count: 0 },
    { id: 5, name: "Buying Guide", slug: "buying-guide", count: 0 },
  ];

  if (!WP_API_URL) {
    return defaultCategories;
  }

  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=50&hide_empty=true`, {
      next: { revalidate: 600, tags: ["blog-categories"] },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const wpCats: WordPressCategory[] = data.map((c: any) => ({
          id: c.id,
          name: decodeHtmlEntities(c.name),
          slug: c.slug,
          count: c.count,
        }));
        return [{ id: 0, name: "All", slug: "all", count: 0 }, ...wpCats];
      }
    }
  } catch {
    // Ignore error and return defaults
  }

  return defaultCategories;
}

function filterFallbackPosts(options?: {
  categorySlug?: string;
  search?: string;
}): BlogPost[] {
  let posts = [...BLOG_POSTS];

  if (options?.categorySlug && options.categorySlug !== "all") {
    posts = posts.filter(
      (p) => p.category.toLowerCase().replace(/[^a-z0-9]/g, "-") === options.categorySlug?.toLowerCase()
    );
  }

  if (options?.search) {
    const q = options.search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  }

  return posts;
}
