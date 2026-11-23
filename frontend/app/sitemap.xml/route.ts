import { NextResponse } from 'next/server';
import { SITEMAP_DOCUMENTS } from '@/lib/pageRegistry';

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = new Date().toISOString();
  const sitemapNodes = SITEMAP_DOCUMENTS.map(
    ({ path }) => `  <sitemap>
    <loc>https://www.fixwheel.app${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
  ).join('\n');

  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>`, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
