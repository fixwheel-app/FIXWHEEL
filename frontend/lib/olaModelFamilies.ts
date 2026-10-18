export type OlaVehicleCategory = "EV";

export interface OlaFamilyGroup {
  category: OlaVehicleCategory;
  models: string[];
}

export interface OlaModelFamily {
  name: string;
  slug: string;
  groups: OlaFamilyGroup[];
  legacySlugs?: string[];
}

export const OLA_MODEL_FAMILIES: OlaModelFamily[] = [
  {
    name: "S1 X",
    slug: "s1-x",
    groups: [{ category: "EV", models: ["S1 X (2 kWh)", "S1 X (3 kWh)", "S1 X (4 kWh)", "S1 X+"] }],
    legacySlugs: ["s1x_2", "s1x_3", "s1x_4", "s1x_plus"],
  },
  {
    name: "S1 Air",
    slug: "s1-air",
    groups: [{ category: "EV", models: ["S1 Air"] }],
    legacySlugs: ["s1air"],
  },
  {
    name: "S1 Pro",
    slug: "s1-pro",
    groups: [{ category: "EV", models: ["S1 Pro Gen 2"] }],
    legacySlugs: ["s1pro"],
  },
  {
    name: "Roadster",
    slug: "roadster",
    groups: [{ category: "EV", models: ["Roadster X", "Roadster", "Roadster Pro"] }],
    legacySlugs: ["roadster_x", "roadster_pro"],
  },
];

export const OLA_MODEL_SECTIONS: { category: OlaVehicleCategory; families: OlaModelFamily[] }[] = [
  { category: "EV", families: OLA_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findOlaFamilyBySlug(slug: string): OlaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return OLA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findOlaFamilyByAnySlug(slug: string): OlaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return OLA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
