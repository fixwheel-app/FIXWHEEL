import { NextResponse } from "next/server";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";

export const dynamic = "force-static";

const CUSTOM_ROOT_SERVICES = [
  "sports-bike-service",
  "commuter-bike-service",
  "scooty-repair",
  "premium-bike-service",
];

export async function GET() {
  const serviceSlugs = Object.keys(SERVICES_DB).filter((service) =>
    CUSTOM_ROOT_SERVICES.includes(service)
  );
  const citySlugs = Object.keys(CITIES_DB);

  let urlsXml = "";
  const now = new Date().toISOString();

  for (const service of serviceSlugs) {
    for (const citySlug of citySlugs) {
      const cityConfig = CITIES_DB[citySlug];
      if (!cityConfig) continue;

      const locUrl = `https://www.fixwheel.app/${citySlug}/${service === "commuter-bike-service" ? "bike" : service}`;

      urlsXml += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

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
