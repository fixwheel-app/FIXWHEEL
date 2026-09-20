import { NextResponse } from "next/server";

export const dynamic = "force-static";

const SITE_URL = "https://www.fixwheel.app";
const LAST_MODIFIED = "2026-09-17T00:00:00+05:30";

const OFFICIAL_SERVICE_SLUGS = [
  "basic-service",
  "service-engine-oil",
  "jump-start",
  "puncture",
  "running-repair",
  "engine-half",
  "engine-full",
  "carburetor-cleaning",
  "obd-inspection",
  "battery-replacement",
  "disc-replacement",
  "chain-sprocket",
  "pick-drop",
  "ev-service",
];

const LEGACY_SERVICE_URLS = [
  "/services/brake-repair",
  "/services/comprehensive-service",
  "/services/engine-repair",
  "/services/oil-change",
  "/premium-bike-service",
  "/commuter-bike-service",
  "/electric-scooter-repair",
  "/sports-bike-service",
  "/scooty-repair",
];

const SERVICE_CITIES = ["gurgaon", "delhi", "noida", "faridabad", "ghaziabad"];

function urlNode(path: string, priority: string) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const officialLandingPages = OFFICIAL_SERVICE_SLUGS.map((service) =>
    urlNode(`/services/${service}`, "0.8")
  );
  const officialCityPages = OFFICIAL_SERVICE_SLUGS.flatMap((service) =>
    SERVICE_CITIES.map((city) => urlNode(`/services/${service}/${city}`, "0.7"))
  );
  const legacyPages = LEGACY_SERVICE_URLS.map((path) => urlNode(path, "0.8"));

  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...officialLandingPages, ...officialCityPages, ...legacyPages].join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    }
  );
}
