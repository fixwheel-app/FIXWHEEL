import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.fixwheel.app/admin-8472-secret</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.fixwheel.app/pricing</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
