import { NextResponse } from "next/server";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { HONDA_MODEL_FAMILIES } from "@/lib/hondaModelFamilies";
import { HERO_MODEL_FAMILIES } from "@/lib/heroModelFamilies";
import { BAJAJ_MODEL_FAMILIES } from "@/lib/bajajModelFamilies";
import { ROYAL_ENFIELD_MODEL_FAMILIES } from "@/lib/royalEnfieldModelFamilies";
import { YAMAHA_MODEL_FAMILIES } from "@/lib/yamahaModelFamilies";
import { KTM_MODEL_FAMILIES } from "@/lib/ktmModelFamilies";
import { SUZUKI_MODEL_FAMILIES } from "@/lib/suzukiModelFamilies";
import { OLA_MODEL_FAMILIES } from "@/lib/olaModelFamilies";
import { ATHER_MODEL_FAMILIES } from "@/lib/atherModelFamilies";
import { JAWA_MODEL_FAMILIES } from "@/lib/jawaModelFamilies";
import { YEZDI_MODEL_FAMILIES } from "@/lib/yezdiModelFamilies";
import { APRILIA_MODEL_FAMILIES } from "@/lib/apriliaModelFamilies";
import { VESPA_MODEL_FAMILIES } from "@/lib/vespaModelFamilies";
import { KAWASAKI_PAGE_FAMILIES } from "@/lib/kawasakiModelFamilies";
import { TVS_MODEL_FAMILIES } from "@/lib/tvsModelFamilies";

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
  "oil-change",
  "premium-bike-service",
  "scooty-repair",
  "sports-bike-service",
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
      xml += `  <url>\n    <loc>https://www.fixwheel.app/${c}/${b}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });
  });

  // Individual Service subpages
  for (const s of SERVICES) {
    let locUrl = `https://www.fixwheel.app/services/${s}`;
    if (s === "sports-bike-service") locUrl = "https://www.fixwheel.app/sports-bike";
    if (s === "commuter-bike-service") locUrl = "https://www.fixwheel.app/bike";
    if (s === "scooty-repair") locUrl = "https://www.fixwheel.app/scooty-repair";
    if (s === "premium-bike-service") locUrl = "https://www.fixwheel.app/premium-bike";
    if (s === "electric-scooter-repair") locUrl = "https://www.fixwheel.app/electric-vehicle";
    xml += `  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Honda model generations now share one canonical page per model family.
  for (const family of HONDA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/honda/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Hero model variants now share one canonical page per model family.
  for (const family of HERO_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/hero/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Bajaj model variants now share one canonical page per model family.
  for (const family of BAJAJ_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/bajaj/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Royal Enfield model variants now share one canonical page per model family.
  for (const family of ROYAL_ENFIELD_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/royal-enfield/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Yamaha model variants now share one canonical page per model family.
  for (const family of YAMAHA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/yamaha/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // KTM model variants now share one canonical page per model family.
  for (const family of KTM_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/ktm/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Suzuki model variants now share one canonical page per model family.
  for (const family of SUZUKI_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/suzuki/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Ola Electric model variants now share one canonical page per model family.
  for (const family of OLA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/ola-electric/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Ather model variants now share one canonical page per model family.
  for (const family of ATHER_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/ather/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Jawa model variants now share one canonical page per model family.
  for (const family of JAWA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/jawa/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Yezdi model variants now share one canonical page per model family.
  for (const family of YEZDI_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/yezdi/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Aprilia model variants now share one canonical page per model family.
  for (const family of APRILIA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/aprilia/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Vespa model variants now share one canonical page per model family.
  for (const family of VESPA_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/vespa/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // Ninja variants share the only Kawasaki model-family page.
  for (const family of KAWASAKI_PAGE_FAMILIES) {
    const url = `https://www.fixwheel.app/kawasaki/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  // TVS model variants now share one canonical page per model family.
  for (const family of TVS_MODEL_FAMILIES) {
    const url = `https://www.fixwheel.app/tvs/${family.slug}`;
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
