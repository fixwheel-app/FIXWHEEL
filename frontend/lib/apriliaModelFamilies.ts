export type ApriliaVehicleCategory = "Bike" | "Scooter";

export interface ApriliaFamilyGroup {
  category: ApriliaVehicleCategory;
  models: string[];
}

export interface ApriliaModelFamily {
  name: string;
  slug: string;
  groups: ApriliaFamilyGroup[];
  legacySlugs?: string[];
}

export const APRILIA_MODEL_FAMILIES: ApriliaModelFamily[] = [
  {
    name: "RS",
    slug: "rs",
    groups: [{ category: "Bike", models: ["RS 457", "RS 660"] }],
    legacySlugs: ["rs457", "rs660"],
  },
  {
    name: "Tuono",
    slug: "tuono",
    groups: [{ category: "Bike", models: ["Tuono 660"] }],
    legacySlugs: ["tuono660"],
  },
  {
    name: "SR",
    slug: "sr",
    groups: [{ category: "Scooter", models: ["SR 125", "SR 160"] }],
    legacySlugs: ["sr125", "sr160"],
  },
  {
    name: "SXR",
    slug: "sxr",
    groups: [{ category: "Scooter", models: ["SXR 125", "SXR 160"] }],
    legacySlugs: ["sxr125", "sxr160"],
  },
  {
    name: "Storm",
    slug: "storm",
    groups: [{ category: "Scooter", models: ["Storm 125"] }],
    legacySlugs: ["storm125"],
  },
];

export const APRILIA_MODEL_SECTIONS: { category: ApriliaVehicleCategory; families: ApriliaModelFamily[] }[] = [
  { category: "Bike", families: APRILIA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: APRILIA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findApriliaFamilyBySlug(slug: string): ApriliaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return APRILIA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findApriliaFamilyByAnySlug(slug: string): ApriliaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return APRILIA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
