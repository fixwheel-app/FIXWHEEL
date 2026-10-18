export type SuzukiVehicleCategory = "Bike" | "Scooter";

export interface SuzukiFamilyGroup {
  category: SuzukiVehicleCategory;
  models: string[];
}

export interface SuzukiModelFamily {
  name: string;
  slug: string;
  groups: SuzukiFamilyGroup[];
  legacySlugs?: string[];
}

export const SUZUKI_MODEL_FAMILIES: SuzukiModelFamily[] = [
  {
    name: "Gixxer",
    slug: "gixxer",
    groups: [{ category: "Bike", models: ["Gixxer 150", "Gixxer SF 150", "Gixxer 250", "Gixxer SF 250"] }],
    legacySlugs: ["gixxer_sf", "gixxer250", "gixxer_sf250"],
  },
  {
    name: "Hayabusa",
    slug: "hayabusa",
    groups: [{ category: "Bike", models: ["Hayabusa 1300"] }],
  },
  {
    name: "Access",
    slug: "access",
    groups: [{ category: "Scooter", models: ["Access 125"] }],
  },
  {
    name: "Burgman",
    slug: "burgman",
    groups: [{ category: "Scooter", models: ["Burgman Street", "Burgman Street EX"] }],
    legacySlugs: ["burgman_ex"],
  },
];

export const SUZUKI_MODEL_SECTIONS: { category: SuzukiVehicleCategory; families: SuzukiModelFamily[] }[] = [
  { category: "Bike", families: SUZUKI_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: SUZUKI_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findSuzukiFamilyBySlug(slug: string): SuzukiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return SUZUKI_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findSuzukiFamilyByAnySlug(slug: string): SuzukiModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return SUZUKI_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
