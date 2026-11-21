import { NextResponse } from "next/server";
import {
  CITY_SERVICE_SLUGS,
  LEGACY_SERVICE_PATHS,
  OFFICIAL_SERVICE_SLUGS,
  PUBLIC_CITY_SLUGS,
} from "@/lib/pageRegistry";

export const dynamic = "force-static";

const SITE_URL = "https://www.fixwheel.app";
const LAST_MODIFIED = "2026-09-17T00:00:00+05:30";

function urlNode(path: string, priority: string) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const serviceIndexes = [
    urlNode("/services", "0.9"),
    ...PUBLIC_CITY_SLUGS.map((city) => urlNode(`/${city}/services`, "0.8")),
  ];
  const officialLandingPages = OFFICIAL_SERVICE_SLUGS.map((service) =>
    urlNode(service === "electric-scooter-repair" ? "/electric-vehicle" : `/services/${service}`, "0.8")
  );
  const officialCityPages = CITY_SERVICE_SLUGS.flatMap((service) =>
    PUBLIC_CITY_SLUGS.map((city) => urlNode(`/${city}/services/${service}`, "0.7"))
  );
  const legacyPages = LEGACY_SERVICE_PATHS.map((path) => urlNode(path, "0.8"));

  return new NextResponse(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...serviceIndexes, ...officialLandingPages, ...officialCityPages, ...legacyPages].join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    }
  );
}
