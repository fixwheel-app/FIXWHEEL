import { NextResponse } from 'next/server';
import { MAIN_SITEMAP_PAGES } from '@/lib/pageRegistry';

export const dynamic = 'force-static';

export async function GET() {
  const urlNodes = MAIN_SITEMAP_PAGES.map(({ path, lastModified, changeFrequency, priority }) => {
    const location = path === "/" ? "https://www.fixwheel.app" : `https://www.fixwheel.app${path}`;

    return `  <url>
    <loc>${location}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
