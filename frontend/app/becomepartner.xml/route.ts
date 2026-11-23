import { NextResponse } from "next/server";
import { PARTNER_SITEMAP_PAGE } from "@/lib/pageRegistry";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main Become Partner landing page only
  xml += `  <url>\n    <loc>https://www.fixwheel.app${PARTNER_SITEMAP_PAGE.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${PARTNER_SITEMAP_PAGE.changeFrequency}</changefreq>\n    <priority>${PARTNER_SITEMAP_PAGE.priority}</priority>\n  </url>\n`;

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
