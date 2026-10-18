export type KawasakiVehicleCategory = "Bike";

export interface KawasakiModelFamily {
  name: string;
  slug: string;
  groups: { category: KawasakiVehicleCategory; models: string[] }[];
  legacySlugs?: string[];
  bookingOnly?: true;
}

export const KAWASAKI_MODEL_FAMILIES: KawasakiModelFamily[] = [
  {
    name: "Ninja",
    slug: "ninja",
    groups: [{ category: "Bike", models: ["Ninja 300", "Ninja 400", "Ninja 500", "Ninja 650", "Ninja ZX-4R", "Ninja ZX-6R", "Ninja ZX-10R"] }],
    legacySlugs: ["ninja300", "ninja400", "ninja500", "ninja650", "zx4r", "zx6r", "zx10r"],
  },
  { name: "Z", slug: "z", groups: [{ category: "Bike", models: ["Z650", "Z900"] }], bookingOnly: true },
  { name: "Versys", slug: "versys", groups: [{ category: "Bike", models: ["Versys 650", "Versys-X 300"] }], bookingOnly: true },
  { name: "Eliminator", slug: "eliminator", groups: [{ category: "Bike", models: ["Eliminator 450"] }], bookingOnly: true },
  { name: "Vulcan", slug: "vulcan", groups: [{ category: "Bike", models: ["Vulcan S"] }], bookingOnly: true },
  { name: "W", slug: "w", groups: [{ category: "Bike", models: ["W175"] }], bookingOnly: true },
];

export const KAWASAKI_MODEL_SECTIONS = [
  { category: "Bike" as const, families: KAWASAKI_MODEL_FAMILIES },
];

export const KAWASAKI_PAGE_FAMILIES = KAWASAKI_MODEL_FAMILIES.filter((family) => !family.bookingOnly);

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findKawasakiFamilyBySlug(slug: string): KawasakiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return KAWASAKI_PAGE_FAMILIES.find((family) => family.slug === normalized);
}

export function findKawasakiFamilyByAnySlug(slug: string): KawasakiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return KAWASAKI_PAGE_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
