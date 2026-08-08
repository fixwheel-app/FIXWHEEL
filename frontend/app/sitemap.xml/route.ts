import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.fixwheel.app/main.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/service.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/brand.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/becomepartner.xml</loc>
    <lastmod>2026-08-03T19:15:00+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/gurgaon.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/delhi.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/noida.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/faridabad.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/ghaziabad.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/other.xml</loc>
    <lastmod>2026-07-25T19:39:55+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.fixwheel.app/bike-type.xml</loc>
    <lastmod>2026-08-08T12:00:00+00:00</lastmod>
  </sitemap>
</sitemapindex>`, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
