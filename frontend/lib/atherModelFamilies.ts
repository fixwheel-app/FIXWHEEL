export type AtherVehicleCategory = "EV";

export interface AtherFamilyGroup {
  category: AtherVehicleCategory;
  models: string[];
}

export interface AtherModelFamily {
  name: string;
  slug: string;
  groups: AtherFamilyGroup[];
  legacySlugs?: string[];
}

export const ATHER_MODEL_FAMILIES: AtherModelFamily[] = [
  {
    name: "Rizta",
    slug: "rizta",
    groups: [{ category: "EV", models: ["Rizta S", "Rizta Z"] }],
    legacySlugs: ["rizta_s", "rizta_z"],
  },
  {
    name: "450",
    slug: "450",
    groups: [{ category: "EV", models: ["450S", "450X (2.9 kWh)", "450X (3.7 kWh)", "450 Apex"] }],
    legacySlugs: ["450s", "450x_2_9", "450x_3_7", "450_apex"],
  },
];

export const ATHER_MODEL_SECTIONS: { category: AtherVehicleCategory; families: AtherModelFamily[] }[] = [
  { category: "EV", families: ATHER_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findAtherFamilyBySlug(slug: string): AtherModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return ATHER_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findAtherFamilyByAnySlug(slug: string): AtherModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return ATHER_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
