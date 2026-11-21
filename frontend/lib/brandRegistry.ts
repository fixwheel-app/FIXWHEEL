import { APRILIA_MODEL_FAMILIES } from "@/lib/apriliaModelFamilies";
import { ATHER_MODEL_FAMILIES } from "@/lib/atherModelFamilies";
import { BAJAJ_MODEL_FAMILIES } from "@/lib/bajajModelFamilies";
import { BMW_MODEL_FAMILIES } from "@/lib/bmwModelFamilies";
import { HERO_MODEL_FAMILIES } from "@/lib/heroModelFamilies";
import { HONDA_MODEL_FAMILIES } from "@/lib/hondaModelFamilies";
import { JAWA_MODEL_FAMILIES } from "@/lib/jawaModelFamilies";
import { KAWASAKI_PAGE_FAMILIES } from "@/lib/kawasakiModelFamilies";
import { KTM_MODEL_FAMILIES } from "@/lib/ktmModelFamilies";
import { OLA_MODEL_FAMILIES } from "@/lib/olaModelFamilies";
import { ROYAL_ENFIELD_MODEL_FAMILIES } from "@/lib/royalEnfieldModelFamilies";
import { SUZUKI_MODEL_FAMILIES } from "@/lib/suzukiModelFamilies";
import { TVS_MODEL_FAMILIES } from "@/lib/tvsModelFamilies";
import { VESPA_MODEL_FAMILIES } from "@/lib/vespaModelFamilies";
import { YAMAHA_MODEL_FAMILIES } from "@/lib/yamahaModelFamilies";
import { YEZDI_MODEL_FAMILIES } from "@/lib/yezdiModelFamilies";

export type BrandVehicleType = "electric" | "combustion" | "mixed" | "catalog-placeholder";

export interface BrandRegistryEntry {
  /** IDs stored and passed by the booking catalogue. */
  bookingIds: readonly string[];
  displayName: string;
  /** Approved public URL slug. */
  publicSlug: string;
  /** Known former URL slugs; retired when preserveLegacyPages is false. */
  legacyAliases: readonly string[];
  /** Direct permanent redirect destination for retired aliases. */
  redirectTarget: `/${string}`;
  /** Canonical model-family slugs belonging to this brand. */
  modelFamilySlugs: readonly string[];
  vehicleType: BrandVehicleType;
  /** Whether aliases temporarily retain public pages. */
  preserveLegacyPages: boolean;
  indexable: boolean;
  includeInSitemap: boolean;
  decisionNote: string;
}

const familySlugs = (families: ReadonlyArray<{ slug: string }>) => families.map(({ slug }) => slug);

export const BRAND_REGISTRY = [
  {
    bookingIds: ["ola"], displayName: "Ola Electric", publicSlug: "ola", legacyAliases: ["ola-electric"],
    redirectTarget: "/ola", modelFamilySlugs: familySlugs(OLA_MODEL_FAMILIES), vehicleType: "electric", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "Approved after 26-day GSC and GA4 review: /ola led; retire /ola-electric.",
  },
  {
    bookingIds: ["ather"], displayName: "Ather", publicSlug: "ather", legacyAliases: [],
    redirectTarget: "/ather", modelFamilySlugs: familySlugs(ATHER_MODEL_FAMILIES), vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["tvs_ev"], displayName: "TVS (EV)", publicSlug: "tvs-ev", legacyAliases: [],
    redirectTarget: "/tvs-ev", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["bajaj_ev"], displayName: "Bajaj (EV)", publicSlug: "bajaj-ev", legacyAliases: [],
    redirectTarget: "/bajaj-ev", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["vida"], displayName: "Vida (Hero)", publicSlug: "vida", legacyAliases: ["vida-hero"],
    redirectTarget: "/vida", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "Approved: /vida led the available 26-day comparison; retire /vida-hero.",
  },
  {
    bookingIds: ["revolt"], displayName: "Revolt", publicSlug: "revolt", legacyAliases: [],
    redirectTarget: "/revolt", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["okinawa"], displayName: "Okinawa", publicSlug: "okinawa", legacyAliases: [],
    redirectTarget: "/okinawa", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["ampere"], displayName: "Ampere", publicSlug: "ampere", legacyAliases: [],
    redirectTarget: "/ampere", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["hero_electric"], displayName: "Hero Electric", publicSlug: "hero-electric", legacyAliases: [],
    redirectTarget: "/hero-electric", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["pure_ev"], displayName: "Pure EV", publicSlug: "pure-ev", legacyAliases: [],
    redirectTarget: "/pure-ev", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["ultraviolette"], displayName: "Ultraviolette", publicSlug: "ultraviolette", legacyAliases: [],
    redirectTarget: "/ultraviolette", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["simple_energy"], displayName: "Simple Energy", publicSlug: "simple-energy", legacyAliases: [],
    redirectTarget: "/simple-energy", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["matter"], displayName: "Matter", publicSlug: "matter", legacyAliases: [],
    redirectTarget: "/matter", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["tork"], displayName: "Tork Motors", publicSlug: "tork-motors", legacyAliases: ["tork"],
    redirectTarget: "/tork-motors", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "User selected /tork-motors; 26-day sample was inconclusive; retire /tork.",
  },
  {
    bookingIds: ["bounce"], displayName: "Bounce", publicSlug: "bounce", legacyAliases: [],
    redirectTarget: "/bounce", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["joy_ebike"], displayName: "Joy E-Bike", publicSlug: "joy-e-bike", legacyAliases: ["joy-ebike"],
    redirectTarget: "/joy-e-bike", modelFamilySlugs: [], vehicleType: "electric", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "User selected /joy-e-bike; 26-day sample was mixed; retire /joy-ebike.",
  },
  {
    bookingIds: ["hero"], displayName: "Hero", publicSlug: "hero", legacyAliases: [],
    redirectTarget: "/hero", modelFamilySlugs: familySlugs(HERO_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["honda"], displayName: "Honda", publicSlug: "honda", legacyAliases: [],
    redirectTarget: "/honda", modelFamilySlugs: familySlugs(HONDA_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["bajaj"], displayName: "Bajaj", publicSlug: "bajaj", legacyAliases: [],
    redirectTarget: "/bajaj", modelFamilySlugs: familySlugs(BAJAJ_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["tvs"], displayName: "TVS", publicSlug: "tvs", legacyAliases: [],
    redirectTarget: "/tvs", modelFamilySlugs: familySlugs(TVS_MODEL_FAMILIES), vehicleType: "mixed", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["royal_enfield"], displayName: "Royal Enfield", publicSlug: "royal-enfield", legacyAliases: [],
    redirectTarget: "/royal-enfield", modelFamilySlugs: familySlugs(ROYAL_ENFIELD_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["yamaha"], displayName: "Yamaha", publicSlug: "yamaha", legacyAliases: [],
    redirectTarget: "/yamaha", modelFamilySlugs: familySlugs(YAMAHA_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["suzuki"], displayName: "Suzuki", publicSlug: "suzuki", legacyAliases: [],
    redirectTarget: "/suzuki", modelFamilySlugs: familySlugs(SUZUKI_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["ktm"], displayName: "KTM", publicSlug: "ktm", legacyAliases: [],
    redirectTarget: "/ktm", modelFamilySlugs: familySlugs(KTM_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["triumph"], displayName: "Triumph", publicSlug: "triumph", legacyAliases: [],
    redirectTarget: "/triumph", modelFamilySlugs: [], vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["kawasaki"], displayName: "Kawasaki", publicSlug: "kawasaki", legacyAliases: [],
    redirectTarget: "/kawasaki", modelFamilySlugs: familySlugs(KAWASAKI_PAGE_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["husqvarna"], displayName: "Husqvarna", publicSlug: "husqvarna", legacyAliases: [],
    redirectTarget: "/husqvarna", modelFamilySlugs: [], vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["jawa"], displayName: "Jawa", publicSlug: "jawa", legacyAliases: [],
    redirectTarget: "/jawa", modelFamilySlugs: familySlugs(JAWA_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["yezdi"], displayName: "Yezdi", publicSlug: "yezdi", legacyAliases: [],
    redirectTarget: "/yezdi", modelFamilySlugs: familySlugs(YEZDI_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["harley"], displayName: "Harley-Davidson", publicSlug: "harley-davidson", legacyAliases: ["harley"],
    redirectTarget: "/harley-davidson", modelFamilySlugs: [], vehicleType: "combustion", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "Approved after 26-day review: more impressions and clicks; retire /harley.",
  },
  {
    bookingIds: ["aprillia"], displayName: "Aprilia", publicSlug: "aprilia", legacyAliases: ["aprillia"],
    redirectTarget: "/aprilia", modelFamilySlugs: familySlugs(APRILIA_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "Approved after 26-day review: stronger search traffic; retire misspelling /aprillia.",
  },
  {
    bookingIds: ["vespa"], displayName: "Vespa", publicSlug: "vespa", legacyAliases: [],
    redirectTarget: "/vespa", modelFamilySlugs: familySlugs(VESPA_MODEL_FAMILIES), vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["bmw"], displayName: "BMW Motorrad", publicSlug: "bmw-motorrad", legacyAliases: ["bmw"],
    redirectTarget: "/bmw-motorrad", modelFamilySlugs: familySlugs(BMW_MODEL_FAMILIES), vehicleType: "mixed", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "Approved after 26-day review: stronger search traffic; retire /bmw.",
  },
  {
    bookingIds: ["ducati"], displayName: "Ducati", publicSlug: "ducati", legacyAliases: [],
    redirectTarget: "/ducati", modelFamilySlugs: [], vehicleType: "combustion", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
  {
    bookingIds: ["benelli"], displayName: "Benelli & Keeway", publicSlug: "benelli", legacyAliases: ["benelli-keeway"],
    redirectTarget: "/benelli", modelFamilySlugs: [], vehicleType: "combustion", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "User selected /benelli; Keeway model traffic existed; retire combined /benelli-keeway.",
  },
  {
    bookingIds: ["other_ev"], displayName: "Other Brand (EV)", publicSlug: "other-ev", legacyAliases: ["other-brand-ev"],
    redirectTarget: "/other-ev", modelFamilySlugs: [], vehicleType: "catalog-placeholder", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "User selected /other-ev booking placeholder; retire /other-brand-ev.",
  },
  {
    bookingIds: ["other_ice"], displayName: "Other Brand", publicSlug: "other-brand", legacyAliases: ["other-ice"],
    redirectTarget: "/other-brand", modelFamilySlugs: [], vehicleType: "catalog-placeholder", preserveLegacyPages: false, indexable: true, includeInSitemap: true, decisionNote: "User selected /other-brand booking placeholder; retire /other-ice.",
  },
  {
    bookingIds: ["all_scooters"], displayName: "Scooters", publicSlug: "scooters", legacyAliases: [],
    redirectTarget: "/scooters", modelFamilySlugs: [], vehicleType: "catalog-placeholder", preserveLegacyPages: true, indexable: true, includeInSitemap: true, decisionNote: "Published brand route; review SEO evidence before any future change.",
  },
] as const satisfies readonly BrandRegistryEntry[];

const normalizeReference = (reference: string) => reference.toLowerCase().trim().replace(/_/g, "-");

const registryByReference = new Map<string, BrandRegistryEntry>();

for (const entry of BRAND_REGISTRY) {
  registryByReference.set(entry.publicSlug, entry);
  entry.legacyAliases.forEach((alias) => registryByReference.set(alias, entry));
  entry.bookingIds.forEach((bookingId) => registryByReference.set(normalizeReference(bookingId), entry));
}

export function getBrandRegistryEntry(reference: string) {
  return registryByReference.get(normalizeReference(reference));
}

export function getCanonicalBrandSlug(reference: string) {
  return getBrandRegistryEntry(reference)?.publicSlug;
}

export function isLegacyBrandAlias(reference: string) {
  const normalized = normalizeReference(reference);
  const entry = getBrandRegistryEntry(normalized);
  return Boolean(entry && entry.legacyAliases.includes(normalized));
}

export function getPublicBrandSlugs(options: { includeLegacyAliases?: boolean } = {}) {
  const includeLegacyAliases = options.includeLegacyAliases ?? true;
  const slugs = BRAND_REGISTRY.flatMap((entry) => [
    ...(entry.indexable && entry.includeInSitemap ? [entry.publicSlug] : []),
    ...(includeLegacyAliases && entry.preserveLegacyPages ? entry.legacyAliases : []),
  ]);

  return Array.from(new Set(slugs));
}

/** Resolve retired brand paths before Next.js serves a static route. */
export function getRetiredBrandRedirect(pathname: string, cities: readonly string[]): string | undefined {
  const parts = pathname.split("/").filter(Boolean);
  const isCityRoute = parts.length === 2 && cities.includes(parts[0]);
  const isBrandsRoute = parts[0] === "brands" && parts.length >= 2;
  const brandIndex = isCityRoute || isBrandsRoute ? 1 : 0;
  const entry = getBrandRegistryEntry(parts[brandIndex] || "");
  if (!entry || entry.preserveLegacyPages || !entry.legacyAliases.includes(parts[brandIndex])) return undefined;

  if (isCityRoute) return `/${parts[0]}/${entry.publicSlug}`;
  if (isBrandsRoute) return entry.redirectTarget;
  const model = parts[1];
  if (parts.length === 2 && model && entry.modelFamilySlugs.includes(model)) {
    return `/${entry.publicSlug}/${model}`;
  }
  return entry.redirectTarget;
}

export function getBrandFamilyStaticParams() {
  return BRAND_REGISTRY.flatMap((entry) =>
    entry.modelFamilySlugs.map((model) => ({ brand: entry.publicSlug, model })),
  );
}
