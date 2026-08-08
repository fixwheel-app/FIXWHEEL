import { NextResponse } from "next/server";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";

export const dynamic = "force-static";

export async function GET() {
  const serviceSlugs = Object.keys(SERVICES_DB);
  const citySlugs = Object.keys(CITIES_DB);

  let urlsXml = "";
  const now = new Date().toISOString();

  for (const service of serviceSlugs) {
    for (const citySlug of citySlugs) {
      const cityConfig = CITIES_DB[citySlug];
      if (!cityConfig) continue;

      // City level service URL
      urlsXml += `  <url>
    <loc>https://www.fixwheel.app/services/${service}/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

      // Locality level service URLs
      for (const localitySlug of Object.keys(cityConfig.db)) {
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/services/${service}/${citySlug}/${localitySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
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
