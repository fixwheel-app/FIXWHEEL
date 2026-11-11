export type BmwVehicleCategory = "Bike" | "Scooter";

export interface BmwModelFamily {
  name: string;
  slug: string;
  groups: { category: BmwVehicleCategory; models: string[] }[];
  legacySlugs?: string[];
  electric?: true;
  bookingOnly: true;
}

export const BMW_MODEL_FAMILIES: BmwModelFamily[] = [
  {
    name: "G 310",
    slug: "g-310",
    groups: [{ category: "Bike", models: ["G 310 R", "G 310 GS", "G 310 RR"] }],
    legacySlugs: ["g-310-r", "g-310-gs", "g-310-rr"],
    bookingOnly: true,
  },
  {
    name: "F",
    slug: "f",
    groups: [{ category: "Bike", models: ["F 900 R"] }],
    legacySlugs: ["f-900-r"],
    bookingOnly: true,
  },
  {
    name: "S",
    slug: "s",
    groups: [{ category: "Bike", models: ["S 1000 RR"] }],
    legacySlugs: ["s-1000-rr"],
    bookingOnly: true,
  },
  {
    name: "R GS",
    slug: "r-gs",
    groups: [{ category: "Bike", models: ["R 1250 GS", "R 1300 GS"] }],
    legacySlugs: ["r-1250-gs", "r-1300-gs"],
    bookingOnly: true,
  },
  {
    name: "CE",
    slug: "ce",
    groups: [{ category: "Scooter", models: ["CE 04 (Electric)"] }],
    legacySlugs: ["ce-04", "ce-04-electric"],
    electric: true,
    bookingOnly: true,
  },
];

export const BMW_MODEL_SECTIONS = [
  { category: "Bike" as const, families: BMW_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter" as const, families: BMW_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findBmwFamilyBySlug(slug: string): BmwModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return BMW_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findBmwFamilyByAnySlug(slug: string): BmwModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return BMW_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
