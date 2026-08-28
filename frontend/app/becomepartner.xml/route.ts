import { NextResponse } from "next/server";
import { PARTNER_CITY_DATA } from "@/lib/partnerData";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main Become Partner landing page
  xml += `  <url>\n    <loc>https://www.fixwheel.app/partner</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

  // City Partner Pages only
  const cityKeys = Object.keys(PARTNER_CITY_DATA);

  for (const cKey of cityKeys) {
    const cityData = PARTNER_CITY_DATA[cKey];
    
    // City partner URL
    xml += `  <url>\n    <loc>https://www.fixwheel.app/partner/${cityData.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

