export type VespaVehicleCategory = "Scooter";

export interface VespaFamilyGroup {
  category: VespaVehicleCategory;
  models: string[];
}

export interface VespaModelFamily {
  name: string;
  slug: string;
  groups: VespaFamilyGroup[];
  legacySlugs?: string[];
}

export const VESPA_MODEL_FAMILIES: VespaModelFamily[] = [
  {
    name: "VXL",
    slug: "vxl",
    groups: [{ category: "Scooter", models: ["VXL 125", "VXL 150"] }],
    legacySlugs: ["vxl125", "vxl150"],
  },
  {
    name: "SXL",
    slug: "sxl",
    groups: [{ category: "Scooter", models: ["SXL 125", "SXL 150"] }],
    legacySlugs: ["sxl125", "sxl150"],
  },
  {
    name: "LX",
    slug: "lx",
    groups: [{ category: "Scooter", models: ["LX 125"] }],
    legacySlugs: ["lx125"],
  },
  {
    name: "ZX",
    slug: "zx",
    groups: [{ category: "Scooter", models: ["ZX 125"] }],
    legacySlugs: ["zx125"],
  },
];

export const VESPA_MODEL_SECTIONS: { category: VespaVehicleCategory; families: VespaModelFamily[] }[] = [
  { category: "Scooter", families: VESPA_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findVespaFamilyBySlug(slug: string): VespaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return VESPA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findVespaFamilyByAnySlug(slug: string): VespaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return VESPA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
