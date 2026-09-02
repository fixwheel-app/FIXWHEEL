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

      if (service === "sports-bike-service") {
        // Sports bike service: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/sports-bike-service/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "electric-scooter-repair") {
        // Electric scooter repair: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/electric-scooter-repair/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "royal-enfield-service") {
        // Royal enfield service: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/royal-enfield-service/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "commuter-bike-service") {
        // Commuter bike service: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/commuter-bike-service/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "scooty-repair") {
        // Scooty repair: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/scooty-repair/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "premium-bike-service") {
        // Premium bike service: root city URL without /services/ prefix, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/premium-bike-service/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "basic-service") {
        // Basic service: keeps /services/ prefix, 5 city URLs, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/services/basic-service/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

      if (service === "oil-change" || service === "comprehensive-service" || service === "engine-repair" || service === "battery-replacement" || service === "brake-repair" || service === "tyre-replacement" || service === "general-washing") {
        // Keeps /services/ prefix, 5 city URLs, no locality URLs
        urlsXml += `  <url>
    <loc>https://www.fixwheel.app/services/${service}/${citySlug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        continue;
      }

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
