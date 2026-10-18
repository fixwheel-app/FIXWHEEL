export type YamahaVehicleCategory = "Bike" | "Scooter";

export interface YamahaFamilyGroup {
  category: YamahaVehicleCategory;
  models: string[];
}

export interface YamahaModelFamily {
  name: string;
  slug: string;
  groups: YamahaFamilyGroup[];
  legacySlugs?: string[];
}

export const YAMAHA_MODEL_FAMILIES: YamahaModelFamily[] = [
  {
    name: "FZ",
    slug: "fz",
    groups: [{ category: "Bike", models: ["FZ-FI V3", "FZ-S FI V3 / V4", "FZ-X", "FZ 25 / FZS 25", "FZ16 / FZ-S V2"] }],
    legacySlugs: ["fz_fi", "fzs_fi", "fzx", "fz25", "fz16"],
  },
  {
    name: "R15",
    slug: "r15",
    groups: [{ category: "Bike", models: ["R15 V4", "R15M", "R15 V3", "R15S"] }],
    legacySlugs: ["r15m", "r15v3", "r15s"],
  },
  {
    name: "Fascino",
    slug: "fascino",
    groups: [{ category: "Scooter", models: ["Fascino 125 Fi Hybrid"] }],
  },
  {
    name: "Alpha",
    slug: "alpha",
    groups: [{ category: "Scooter", models: ["Alpha 110"] }],
  },
];

export const YAMAHA_MODEL_SECTIONS: { category: YamahaVehicleCategory; families: YamahaModelFamily[] }[] = [
  { category: "Bike", families: YAMAHA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: YAMAHA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findYamahaFamilyBySlug(slug: string): YamahaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return YAMAHA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findYamahaFamilyByAnySlug(slug: string): YamahaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return YAMAHA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
