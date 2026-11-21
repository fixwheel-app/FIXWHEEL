import { NextResponse } from "next/server";
import { CITIES_DB } from "@/lib/cityLocalityData";
import { PUBLIC_CITY_SLUGS, ROOT_VEHICLE_TYPE_SLUGS } from "@/lib/pageRegistry";

export const dynamic = "force-static";

export async function GET() {
  let urlsXml = "";
  const now = new Date().toISOString();

  for (const service of ROOT_VEHICLE_TYPE_SLUGS) {
    for (const citySlug of PUBLIC_CITY_SLUGS) {
      const cityConfig = CITIES_DB[citySlug];
      if (!cityConfig) continue;

      const locUrl = `https://www.fixwheel.app/${citySlug}/${service}`;

      urlsXml += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

      if (service === "electric-vehicle") {
        for (const localitySlug of Object.keys(cityConfig.db)) {
          urlsXml += `  <url>
    <loc>https://www.fixwheel.app/${citySlug}/${localitySlug}/electric-vehicle</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
        }
      }

    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
