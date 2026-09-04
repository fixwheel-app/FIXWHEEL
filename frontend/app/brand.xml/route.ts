import { NextResponse } from "next/server";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import { BRAND_DETAILS } from "@/lib/brandDetails";

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

const CITIES = ["gurgaon", "delhi", "noida", "faridabad", "ghaziabad"];

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];
  const allModels = getAllBikeModels();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main Brands index
  xml += `  <url>\n    <loc>https://www.fixwheel.app/brands</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

  // Individual Brand pages
  const brandSet = new Set<string>();
  BRANDS.forEach((b) => brandSet.add(slugifyModel(b)));
  Object.keys(BRAND_DETAILS).forEach((b) => brandSet.add(slugifyModel(b)));
  allModels.forEach((m) => brandSet.add(slugifyModel(m.brandName)));

  const brandList = Array.from(brandSet);

  brandList.forEach((b) => {
    xml += `  <url>\n    <loc>https://www.fixwheel.app/${b}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  // Brand City pages (5 cities for all brands)
  brandList.forEach((b) => {
    CITIES.forEach((c) => {
      xml += `  <url>\n    <loc>https://www.fixwheel.app/${b}/${c}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });
  });

  // Individual Service subpages
  for (const s of SERVICES) {
    let locUrl = `https://www.fixwheel.app/services/${s}`;
    if (s === "sports-bike-service") locUrl = "https://www.fixwheel.app/sports-bike-service";
    if (s === "electric-scooter-repair") locUrl = "https://www.fixwheel.app/electric-scooter-repair";
    if (s === "royal-enfield-service") locUrl = "https://www.fixwheel.app/royal-enfield-service";
    if (s === "commuter-bike-service") locUrl = "https://www.fixwheel.app/commuter-bike-service";
    if (s === "scooty-repair") locUrl = "https://www.fixwheel.app/scooty-repair";
    if (s === "premium-bike-service") locUrl = "https://www.fixwheel.app/premium-bike-service";
    xml += `  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Individual Bike Model pages
  const addedModelUrls = new Set<string>();
  for (const m of allModels) {
    const bSlug = slugifyModel(m.brandName);
    const mSlug = slugifyModel(m.modelName);
    const url = `https://www.fixwheel.app/${bSlug}/${mSlug}`;

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
