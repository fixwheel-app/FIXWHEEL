import { NextResponse } from "next/server";
import { getWordPressPosts } from "@/lib/wordpress";

export const revalidate = 300; // Cache sitemap for 5 minutes

export async function GET() {
  const posts = await getWordPressPosts();

  const urlsXml = posts
    .map((post) => {
      let isoDate = new Date().toISOString();
      try {
        const parsed = new Date(post.date);
        if (!isNaN(parsed.getTime())) {
          isoDate = parsed.toISOString();
        }
      } catch {
        // Fallback to today
      }

      return `  <url>
    <loc>https://www.fixwheel.app/blog/${post.slug}</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.fixwheel.app/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${urlsXml}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
