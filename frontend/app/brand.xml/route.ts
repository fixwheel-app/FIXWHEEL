import { NextResponse } from "next/server";
import { getBrandFamilyStaticParams, getPublicBrandSlugs } from "@/lib/brandRegistry";
import { BRAND_SITEMAP_SERVICE_PATHS, PUBLIC_CITY_SLUGS } from "@/lib/pageRegistry";

export const dynamic = "force-static";

function urlNode(url: string, lastmod: string, priority: string) {
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = [
    `  <url>\n    <loc>https://www.fixwheel.app/brands</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  ];

  // The registry excludes retired aliases from public sitemap entries.
  const brandList = getPublicBrandSlugs({ includeLegacyAliases: true });

  for (const brand of brandList) {
    urls.push(urlNode(`https://www.fixwheel.app/${brand}`, lastmod, "0.8"));
  }

  for (const brand of brandList) {
    for (const city of PUBLIC_CITY_SLUGS) {
      urls.push(urlNode(`https://www.fixwheel.app/${city}/${brand}`, lastmod, "0.8"));
    }
  }

  for (const path of BRAND_SITEMAP_SERVICE_PATHS) {
    urls.push(urlNode(`https://www.fixwheel.app${path}`, lastmod, "0.7"));
  }

  for (const { brand, model } of getBrandFamilyStaticParams()) {
    urls.push(urlNode(`https://www.fixwheel.app/${brand}/${model}`, lastmod, "0.7"));
  }

  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}
