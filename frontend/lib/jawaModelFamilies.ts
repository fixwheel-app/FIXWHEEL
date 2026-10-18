export type JawaVehicleCategory = "Bike";

export interface JawaFamilyGroup {
  category: JawaVehicleCategory;
  models: string[];
}

export interface JawaModelFamily {
  name: string;
  slug: string;
  groups: JawaFamilyGroup[];
  legacySlugs?: string[];
}

export const JAWA_MODEL_FAMILIES: JawaModelFamily[] = [
  {
    name: "42",
    slug: "42",
    groups: [{ category: "Bike", models: ["Jawa 42", "Jawa 42 Bobber", "Jawa 42 FJ"] }],
    legacySlugs: ["jawa42", "jawa42bobber", "jawa42fj"],
  },
  {
    name: "Jawa 350",
    slug: "jawa-350",
    groups: [{ category: "Bike", models: ["Jawa 350"] }],
    legacySlugs: ["jawa350"],
  },
  {
    name: "Perak",
    slug: "perak",
    groups: [{ category: "Bike", models: ["Perak"] }],
  },
];

export const JAWA_MODEL_SECTIONS: { category: JawaVehicleCategory; families: JawaModelFamily[] }[] = [
  { category: "Bike", families: JAWA_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findJawaFamilyBySlug(slug: string): JawaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return JAWA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findJawaFamilyByAnySlug(slug: string): JawaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return JAWA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
