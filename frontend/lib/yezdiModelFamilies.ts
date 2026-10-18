export type YezdiVehicleCategory = "Bike";

export interface YezdiFamilyGroup {
  category: YezdiVehicleCategory;
  models: string[];
}

export interface YezdiModelFamily {
  name: string;
  slug: string;
  groups: YezdiFamilyGroup[];
  legacySlugs?: string[];
}

export const YEZDI_MODEL_FAMILIES: YezdiModelFamily[] = [
  {
    name: "Roadster",
    slug: "roadster",
    groups: [{ category: "Bike", models: ["Roadster"] }],
  },
  {
    name: "Scrambler",
    slug: "scrambler",
    groups: [{ category: "Bike", models: ["Scrambler"] }],
  },
  {
    name: "Adventure",
    slug: "adventure",
    groups: [{ category: "Bike", models: ["Adventure"] }],
  },
];

export const YEZDI_MODEL_SECTIONS: { category: YezdiVehicleCategory; families: YezdiModelFamily[] }[] = [
  { category: "Bike", families: YEZDI_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findYezdiFamilyBySlug(slug: string): YezdiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return YEZDI_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findYezdiFamilyByAnySlug(slug: string): YezdiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return YEZDI_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
