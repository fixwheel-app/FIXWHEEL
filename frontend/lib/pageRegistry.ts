export type SitemapDocumentName =
  | "main.xml"
  | "blog.xml"
  | "service.xml"
  | "brand.xml"
  | "becomepartner.xml"
  | "gurgaon.xml"
  | "delhi.xml"
  | "noida.xml"
  | "faridabad.xml"
  | "ghaziabad.xml"
  | "other.xml"
  | "bike-type.xml";

export type PageBehavior = "page" | "generated-page" | "redirect" | "transactional" | "utility";

export interface PageFamilyRegistryEntry {
  id: string;
  routePattern: string;
  canonicalPattern: string | null;
  behavior: PageBehavior;
  indexable: boolean;
  sitemapDocuments: readonly SitemapDocumentName[];
  source: string;
  notes?: string;
}

/**
 * Route-family policy only. It intentionally does not remove or consolidate
 * existing URLs; those decisions require route tests and impression data.
 */
export const PAGE_FAMILY_REGISTRY = [
  { id: "home", routePattern: "/", canonicalPattern: "/", behavior: "page", indexable: true, sitemapDocuments: ["main.xml"], source: "app/page.tsx" },
  { id: "static-content", routePattern: "/{about|contact|faq|how-to-book|privacy-policy|process|terms}", canonicalPattern: "/{slug}", behavior: "page", indexable: true, sitemapDocuments: ["main.xml"], source: "app/{slug}/page.tsx" },
  { id: "author", routePattern: "/author/[slug]", canonicalPattern: "/author/{slug}", behavior: "generated-page", indexable: true, sitemapDocuments: ["main.xml"], source: "app/author/[slug]/page.tsx" },
  { id: "legacy-author", routePattern: "/authors/[slug]", canonicalPattern: null, behavior: "redirect", indexable: false, sitemapDocuments: [], source: "app/authors/[slug]/page.tsx" },
  { id: "blog-index", routePattern: "/blog", canonicalPattern: "/blog", behavior: "page", indexable: true, sitemapDocuments: ["blog.xml"], source: "app/blog/page.tsx" },
  { id: "blog-post", routePattern: "/blog/[slug]", canonicalPattern: "/blog/{slug}", behavior: "generated-page", indexable: true, sitemapDocuments: ["main.xml", "blog.xml"], source: "app/blog/[slug]/page.tsx", notes: "Current duplicate sitemap membership is recorded for Step 3 validation." },
  { id: "booking-selector", routePattern: "/book", canonicalPattern: "/book", behavior: "page", indexable: true, sitemapDocuments: ["main.xml"], source: "app/book/page.tsx" },
  { id: "booking-checkout", routePattern: "/book/checkout", canonicalPattern: "/book/checkout", behavior: "transactional", indexable: false, sitemapDocuments: [], source: "app/book/checkout/page.tsx" },
  { id: "legacy-booking", routePattern: "/booking", canonicalPattern: null, behavior: "redirect", indexable: false, sitemapDocuments: [], source: "app/booking/page.tsx" },
  { id: "confirmation", routePattern: "/confirmation", canonicalPattern: "/confirmation", behavior: "transactional", indexable: false, sitemapDocuments: [], source: "app/confirmation/page.tsx" },
  { id: "delete-account", routePattern: "/delete-account", canonicalPattern: "/delete-account", behavior: "utility", indexable: false, sitemapDocuments: [], source: "app/delete-account/page.tsx" },
  { id: "seo-infrastructure", routePattern: "/{robots.txt|sitemap.xml|*.xml}", canonicalPattern: null, behavior: "utility", indexable: false, sitemapDocuments: [], source: "app/robots.ts and app/*.xml/route.ts" },
  { id: "revalidation-api", routePattern: "/api/revalidate-blog", canonicalPattern: null, behavior: "utility", indexable: false, sitemapDocuments: [], source: "app/api/revalidate-blog/route.ts" },
  { id: "partner", routePattern: "/partner", canonicalPattern: "/partner", behavior: "page", indexable: true, sitemapDocuments: ["main.xml", "becomepartner.xml"], source: "app/partner/page.tsx", notes: "Current duplicate sitemap membership is recorded for Step 3 validation." },
  { id: "pricing", routePattern: "/pricing", canonicalPattern: "/pricing", behavior: "page", indexable: true, sitemapDocuments: ["other.xml"], source: "app/pricing/page.tsx" },
  { id: "services-index", routePattern: "/services", canonicalPattern: "/services", behavior: "page", indexable: true, sitemapDocuments: ["service.xml"], source: "app/services/page.tsx" },
  { id: "city-services-index", routePattern: "/[city]/services", canonicalPattern: "/{city}/services", behavior: "generated-page", indexable: true, sitemapDocuments: ["service.xml"], source: "components/CityServicesPage.tsx" },
  { id: "service-detail", routePattern: "/services/[service]", canonicalPattern: "/services/{service}", behavior: "generated-page", indexable: true, sitemapDocuments: ["service.xml", "brand.xml"], source: "app/services/[service]/page.tsx", notes: "Some service URLs currently appear in both service.xml and brand.xml." },
  { id: "legacy-service", routePattern: "/services/{general-washing|tyre-replacement}", canonicalPattern: null, behavior: "redirect", indexable: false, sitemapDocuments: [], source: "app/services/{service}/page.tsx" },
  { id: "brands-index", routePattern: "/brands", canonicalPattern: "/brands", behavior: "page", indexable: true, sitemapDocuments: ["brand.xml"], source: "app/brands/page.tsx" },
  { id: "brand-detail", routePattern: "/[brand]", canonicalPattern: "/{brand}", behavior: "generated-page", indexable: true, sitemapDocuments: ["brand.xml"], source: "app/[brand]/page.tsx", notes: "Comparison aliases intentionally remain public until impression analysis is complete." },
  { id: "brand-model-family", routePattern: "/[brand]/[model]", canonicalPattern: "/{brand}/{model}", behavior: "generated-page", indexable: true, sitemapDocuments: ["brand.xml"], source: "app/[brand]/[model]/page.tsx" },
  { id: "city", routePattern: "/[city]", canonicalPattern: "/{city}", behavior: "generated-page", indexable: true, sitemapDocuments: ["gurgaon.xml", "delhi.xml", "noida.xml", "faridabad.xml", "ghaziabad.xml"], source: "app/{city}/page.tsx" },
  { id: "locality", routePattern: "/[city]/[locality]", canonicalPattern: "/{city}/{locality}", behavior: "generated-page", indexable: true, sitemapDocuments: ["gurgaon.xml", "delhi.xml", "noida.xml", "faridabad.xml", "ghaziabad.xml"], source: "app/{city}/[locality]/page.tsx" },
  { id: "city-brand", routePattern: "/[city]/[brand]", canonicalPattern: "/{city}/{brand}", behavior: "generated-page", indexable: true, sitemapDocuments: ["brand.xml"], source: "lib/brandCityRoutes.tsx", notes: "Comparison aliases intentionally remain public until impression analysis is complete." },
  { id: "city-service", routePattern: "/[city]/services/[service]", canonicalPattern: "/{city}/services/{service}", behavior: "generated-page", indexable: true, sitemapDocuments: ["service.xml"], source: "lib/locationServiceRoutes.tsx", notes: "The current sitemap intentionally remains unchanged, including its existing repeated battery-replacement entries, until Step 3 validation." },
  { id: "vehicle-type", routePattern: "/{bike|scooty-repair|sports-bike|premium-bike|cruiser-bike|electric-vehicle}", canonicalPattern: "/{vehicleType}", behavior: "page", indexable: true, sitemapDocuments: ["service.xml", "brand.xml"], source: "app/{vehicleType}/page.tsx", notes: "Existing cross-sitemap duplication is recorded for Step 3 validation." },
  { id: "city-vehicle-type", routePattern: "/[city]/[vehicleType]", canonicalPattern: "/{city}/{vehicleType}", behavior: "generated-page", indexable: true, sitemapDocuments: ["bike-type.xml"], source: "lib/locationServiceRoutes.tsx" },
  { id: "locality-electric-vehicle", routePattern: "/[city]/[locality]/electric-vehicle", canonicalPattern: "/{city}/{locality}/electric-vehicle", behavior: "generated-page", indexable: true, sitemapDocuments: ["bike-type.xml"], source: "lib/evLocalityRoutes.tsx" },
] as const satisfies readonly PageFamilyRegistryEntry[];

export const SITEMAP_DOCUMENTS: ReadonlyArray<{ name: SitemapDocumentName; path: `/${string}` }> = [
  { name: "main.xml", path: "/main.xml" },
  { name: "blog.xml", path: "/blog.xml" },
  { name: "service.xml", path: "/service.xml" },
  { name: "brand.xml", path: "/brand.xml" },
  { name: "becomepartner.xml", path: "/becomepartner.xml" },
  { name: "gurgaon.xml", path: "/gurgaon.xml" },
  { name: "delhi.xml", path: "/delhi.xml" },
  { name: "noida.xml", path: "/noida.xml" },
  { name: "faridabad.xml", path: "/faridabad.xml" },
  { name: "ghaziabad.xml", path: "/ghaziabad.xml" },
  { name: "other.xml", path: "/other.xml" },
  { name: "bike-type.xml", path: "/bike-type.xml" },
];

export type SitemapChangeFrequency = "daily" | "weekly" | "monthly";

export interface StaticSitemapPage {
  path: `/${string}` | "/";
  lastModified: string;
  changeFrequency: SitemapChangeFrequency;
  priority: string;
}

const MAIN_LAST_MODIFIED = "2026-07-25T19:39:55+00:00";

export const MAIN_SITEMAP_PAGES: readonly StaticSitemapPage[] = [
  { path: "/", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "weekly", priority: "1.0" },
  { path: "/about", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/author/sanjay-kumar", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/author/zakir-hussain", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/blog/bike-engine-oil-guide", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/blog/carburetor-vs-fi-maintenance", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/blog/disc-vs-drum-brake-maintenance", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/blog/electric-scooter-battery-care", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/blog/monsoon-bike-care-tips", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/blog/motorcycle-chain-maintenance-guide", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.6" },
  { path: "/book", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/contact", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/faq", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/how-to-book", lastModified: "2026-11-05T00:00:00+00:00", changeFrequency: "monthly", priority: "0.7" },
  { path: "/partner", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/privacy-policy", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/process", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
  { path: "/terms", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "monthly", priority: "0.5" },
];

export const OTHER_SITEMAP_PAGES: readonly StaticSitemapPage[] = [
  { path: "/pricing", lastModified: MAIN_LAST_MODIFIED, changeFrequency: "weekly", priority: "0.5" },
];

export const PARTNER_SITEMAP_PAGE = {
  path: "/partner",
  changeFrequency: "weekly",
  priority: "0.9",
} as const;

export const OFFICIAL_SERVICE_SLUGS = [
  "basic-service",
  "service-engine-oil",
  "diagnosis",
  "jump-start",
  "puncture",
  "running-repair",
  "engine-repair",
  "carburetor-cleaning",
  "obd-inspection",
  "battery-replacement",
  "disc-replacement",
  "chain-sprocket",
  "pick-drop",
  "electric-scooter-repair",
] as const;

export const LEGACY_SERVICE_PATHS = [
  "/services/brake-repair",
  "/services/comprehensive-service",
  "/services/oil-change",
  "/premium-bike",
  "/bike",
  "/sports-bike",
  "/cruiser-bike",
  "/scooty-repair",
] as const;

export const PUBLIC_CITY_SLUGS = ["gurgaon", "delhi", "noida", "faridabad", "ghaziabad"] as const;

export const CITY_SERVICE_SLUGS = [
  ...OFFICIAL_SERVICE_SLUGS.filter(
    (service) => service !== "electric-scooter-repair" && service !== "engine-repair" && service !== "diagnosis",
  ),
  "oil-change",
  "comprehensive-service",
  "battery-replacement",
  "brake-repair",
] as const;

export const ROOT_VEHICLE_TYPE_SLUGS = [
  "sports-bike",
  "bike",
  "scooty-repair",
  "electric-vehicle",
  "premium-bike",
  "cruiser-bike",
] as const;

export const BRAND_SITEMAP_SERVICE_PATHS = [
  "/services/basic-service",
  "/services/battery-replacement",
  "/services/brake-repair",
  "/bike",
  "/services/comprehensive-service",
  "/electric-vehicle",
  "/services/engine-repair",
  "/services/oil-change",
  "/premium-bike",
  "/scooty-repair",
  "/sports-bike",
] as const;

/**
 * Existing sitemap debt that must remain visible to tests while routes are
 * being compared or migrated. Tests fail if any unlisted exception appears.
 */
export const ROUTE_VALIDATION_BASELINE = {
  missingSitemapFamilyIds: [],
  repeatedWithinSitemap: PUBLIC_CITY_SLUGS.map(
    (city) => `/${city}/services/battery-replacement` as const,
  ),
  duplicatedAcrossSitemaps: [
    "/bike",
    "/blog/bike-engine-oil-guide",
    "/blog/carburetor-vs-fi-maintenance",
    "/blog/disc-vs-drum-brake-maintenance",
    "/blog/electric-scooter-battery-care",
    "/blog/monsoon-bike-care-tips",
    "/blog/motorcycle-chain-maintenance-guide",
    "/electric-vehicle",
    "/partner",
    "/premium-bike",
    "/scooty-repair",
    "/services/basic-service",
    "/services/battery-replacement",
    "/services/brake-repair",
    "/services/comprehensive-service",
    "/services/engine-repair",
    "/services/oil-change",
    "/sports-bike",
  ],
} as const;
