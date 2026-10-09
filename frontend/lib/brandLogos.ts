const commonsFile = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}`;

/**
 * Central, high-resolution brand artwork used throughout the public site.
 * Vector sources replace the low-resolution favicon service that previously
 * blurred when rendered above favicon size.
 */
export const BRAND_LOGOS = {
  honda: commonsFile("Honda Logo.svg"),
  hero: commonsFile("Hero MotoCorp Logo.svg"),
  bajaj: commonsFile("Bajaj Motorcycles logo.svg"),
  tvs: "https://logotyp.us/file/tvs.svg",
  "royal-enfield": commonsFile("Royal Enfield logo new.svg"),
  yamaha: commonsFile("Yamaha Motor logo.svg"),
  suzuki: commonsFile("Suzuki Motor Corporation logo.svg"),
  ktm: commonsFile("KTM-Logo.svg"),
  vespa: commonsFile("Vespa-logo.svg"),
  aprilia: commonsFile("Aprilia-logo.svg"),
  bmw: commonsFile("BMW.svg"),
  ducati: commonsFile("Logo Ducati.svg"),
  "ola-electric": commonsFile("OLA Electric logo.svg"),
  ather: commonsFile("Ather-logo.svg"),
  jawa: "https://www.jawayezdimotorcycles.com/cdn/shop/files/Rectangle_traced.png?v=1753943031&width=310",
  yezdi: commonsFile("Yezdi Logo.png"),
  "harley-davidson": commonsFile("Harley-Davidson logo.svg"),
  kawasaki: commonsFile("Kawasaki-logo.svg"),
  triumph: commonsFile("Logo Triumph.svg"),
  benelli: "https://logotyp.us/file/benelli.svg",
} as const;

export type BrandLogoSlug = keyof typeof BRAND_LOGOS;

const BRAND_NAME_TO_SLUG: Record<string, BrandLogoSlug> = {
  honda: "honda",
  hero: "hero",
  bajaj: "bajaj",
  tvs: "tvs",
  "royal enfield": "royal-enfield",
  yamaha: "yamaha",
  suzuki: "suzuki",
  ktm: "ktm",
  vespa: "vespa",
  aprilia: "aprilia",
  "bmw motorrad": "bmw",
  bmw: "bmw",
  ducati: "ducati",
  "ola electric": "ola-electric",
  ola: "ola-electric",
  ather: "ather",
  jawa: "jawa",
  yezdi: "yezdi",
  "harley-davidson": "harley-davidson",
  kawasaki: "kawasaki",
  triumph: "triumph",
  benelli: "benelli",
};

export function getBrandLogo(brand: string): string {
  const normalized = brand.trim().toLowerCase();
  const slug = BRAND_NAME_TO_SLUG[normalized] || (normalized as BrandLogoSlug);
  return BRAND_LOGOS[slug] || BRAND_LOGOS.honda;
}
