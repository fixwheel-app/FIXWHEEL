export type BajajVehicleCategory = "Bike" | "Scooter";

export interface BajajFamilyGroup {
  category: BajajVehicleCategory;
  models: string[];
}

export interface BajajModelFamily {
  name: string;
  slug: string;
  groups: BajajFamilyGroup[];
  legacySlugs?: string[];
}

export const BAJAJ_MODEL_FAMILIES: BajajModelFamily[] = [
  {
    name: "Pulsar",
    slug: "pulsar",
    groups: [{
      category: "Bike",
      models: [
        "Pulsar 150",
        "Pulsar N150",
        "Pulsar NS160",
        "Pulsar 125",
        "Pulsar N160",
        "Pulsar 220F",
        "Pulsar NS200",
        "Pulsar N250",
        "Pulsar NS125",
        "Pulsar NS400Z",
        "Pulsar RS200",
        "Pulsar F250",
        "Pulsar P150",
        "Pulsar 180",
        "Pulsar 200",
        "Pulsar N125",
      ],
    }],
  },
  {
    name: "Platina",
    slug: "platina",
    groups: [{ category: "Bike", models: ["Platina 110", "Platina 100"] }],
  },
  {
    name: "CT",
    slug: "ct",
    groups: [{ category: "Bike", models: ["CT 100", "CT 110X", "CT 125X"] }],
    legacySlugs: ["ct100", "ct110", "ct125"],
  },
  {
    name: "Discover",
    slug: "discover",
    groups: [{ category: "Bike", models: ["Discover 125", "Discover 100", "Discover 135", "Discover 150"] }],
  },
  {
    name: "Freedom",
    slug: "freedom",
    groups: [{ category: "Bike", models: ["Freedom 125 (CNG)"] }],
  },
  {
    name: "Avenger",
    slug: "avenger",
    groups: [{ category: "Bike", models: ["Avenger Street 160", "Avenger Cruise 220", "Avenger Street 220"] }],
  },
  {
    name: "Dominar",
    slug: "dominar",
    groups: [{ category: "Bike", models: ["Dominar 250", "Dominar 400"] }],
  },
  {
    name: "Caliber",
    slug: "caliber",
    groups: [{ category: "Bike", models: ["Caliber 115"] }],
  },
  {
    name: "Chetak",
    slug: "chetak",
    groups: [{ category: "Scooter", models: ["Chetak (Classic Petrol)"] }],
    legacySlugs: ["chetak_petrol"],
  },
];

export const BAJAJ_MODEL_SECTIONS: { category: BajajVehicleCategory; families: BajajModelFamily[] }[] = [
  { category: "Bike", families: BAJAJ_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: BAJAJ_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findBajajFamilyBySlug(slug: string): BajajModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return BAJAJ_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findBajajFamilyByAnySlug(slug: string): BajajModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return BAJAJ_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
