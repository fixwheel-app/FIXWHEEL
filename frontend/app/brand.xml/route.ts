import { NextResponse } from "next/server";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";

export const dynamic = "force-static";

const BRANDS = [
  "aprilia",
  "ather",
  "bajaj",
  "benelli",
  "harley-davidson",
  "hero",
  "honda",
  "jawa",
  "kawasaki",
  "ktm",
  "ola-electric",
  "royal-enfield",
  "suzuki",
  "tvs",
  "vespa",
  "yamaha",
];

const SERVICES = [
  "basic-service",
  "battery-replacement",
  "brake-repair",
  "commuter-bike-service",
  "comprehensive-service",
  "electric-scooter-repair",
  "engine-repair",
  "general-washing",
  "oil-change",
  "premium-bike-service",
  "royal-enfield-service",
  "scooty-repair",
  "sports-bike-service",
  "tyre-replacement",
];

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];
  const allModels = getAllBikeModels();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main Brands index
  xml += `  <url>\n    <loc>https://www.fixwheel.app/brands</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

  // Individual Brand pages
  for (const b of BRANDS) {
    xml += `  <url>\n    <loc>https://www.fixwheel.app/brands/${b}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Individual Service subpages
  for (const s of SERVICES) {
    xml += `  <url>\n    <loc>https://www.fixwheel.app/services/${s}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Individual Bike Model pages
  const addedModelUrls = new Set<string>();
  for (const m of allModels) {
    const bSlug = slugifyModel(m.brandName);
    const mSlug = slugifyModel(m.modelName);
    const url = `https://www.fixwheel.app/brands/${bSlug}/${mSlug}`;

    if (!addedModelUrls.has(url)) {
      addedModelUrls.add(url);
      xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
