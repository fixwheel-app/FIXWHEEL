export type TvsVehicleCategory = "Bike" | "Scooter" | "EV";

export interface TvsFamilyGroup {
  category: TvsVehicleCategory;
  models: string[];
}

export interface TvsModelFamily {
  name: string;
  slug: string;
  groups: TvsFamilyGroup[];
  legacySlugs?: string[];
}

export const TVS_MODEL_FAMILIES: TvsModelFamily[] = [
  {
    name: "Apache",
    slug: "apache",
    groups: [{ category: "Bike", models: ["Apache RTR 160 4V", "Apache RTR 160 2V", "Apache RTR 180", "Apache RTR 200 4V", "Apache RTR 310", "Apache RR 310"] }],
    legacySlugs: ["apache160_4v", "apache160_2v", "apache180", "apache200", "apache_rtr310", "apache310"],
  },
  {
    name: "Raider",
    slug: "raider",
    groups: [{ category: "Bike", models: ["Raider 125"] }],
  },
  {
    name: "Ronin",
    slug: "ronin",
    groups: [{ category: "Bike", models: ["Ronin 225"] }],
  },
  {
    name: "XL100",
    slug: "xl100",
    groups: [{ category: "Bike", models: ["XL100 Comfort / Heavy Duty"] }],
  },
  {
    name: "Victor",
    slug: "victor",
    groups: [{ category: "Bike", models: ["Victor 110 / 125"] }],
  },
  {
    name: "Jupiter",
    slug: "jupiter",
    groups: [{ category: "Scooter", models: ["Jupiter 110", "Jupiter 125"] }],
    legacySlugs: ["jupiter125"],
  },
  {
    name: "NTORQ",
    slug: "ntorq",
    groups: [{ category: "Scooter", models: ["NTORQ 125"] }],
  },
  {
    name: "Scooty",
    slug: "scooty",
    groups: [{ category: "Scooter", models: ["Scooty Zest 110", "Scooty Pep Plus", "Scooty Streak"] }],
    legacySlugs: ["zest110", "pepplus", "scooty_streak"],
  },
  {
    name: "Wego",
    slug: "wego",
    groups: [{ category: "Scooter", models: ["Wego"] }],
  },
  {
    name: "iQube",
    slug: "iqube",
    groups: [{ category: "EV", models: ["iQube (2.2 kWh)", "iQube S", "iQube (3.4 kWh)", "iQube ST (3.4 kWh)", "iQube ST (5.1 kWh)"] }],
    legacySlugs: ["iqube_2_2", "iqube_s", "iqube_3_4", "iqube_st_3_4", "iqube_st_5_1"],
  },
  {
    name: "X",
    slug: "x",
    groups: [{ category: "EV", models: ["TVS X"] }],
    legacySlugs: ["tvs_x"],
  },
];

export const TVS_MODEL_SECTIONS: { category: TvsVehicleCategory; families: TvsModelFamily[] }[] = [
  { category: "Bike", families: TVS_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: TVS_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
  { category: "EV", families: TVS_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "EV")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findTvsFamilyBySlug(slug: string): TvsModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return TVS_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findTvsFamilyByAnySlug(slug: string): TvsModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return TVS_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
