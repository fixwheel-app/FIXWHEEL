import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./page.client";
import { getWordPressPostBySlug, getAllWordPressPostSlugs } from "@/lib/wordpress";

export const revalidate = 60; // Incremental Static Regeneration every 60s

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllWordPressPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getWordPressPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | FixWheel",
      description: "Blog article not found.",
    };
  }

  const titleText = `${post.title} | FixWheel Blog`;
  const descText = post.excerpt;
  const ogImageUrl = post.image.startsWith("http")
    ? post.image
    : `https://www.fixwheel.app${post.image}`;

  return {
    title: titleText,
    description: descText,
    keywords: (post.keywords || []).join(", "),
    alternates: {
      canonical: `https://www.fixwheel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.fixwheel.app/blog/${post.slug}`,
      siteName: "FixWheel",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getWordPressPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={params.slug.toLowerCase()} post={post} />;
}

