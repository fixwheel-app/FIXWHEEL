export type HeroVehicleCategory = "Bike" | "Scooter";

export interface HeroFamilyGroup {
  category: HeroVehicleCategory;
  models: string[];
}

export interface HeroModelFamily {
  name: string;
  slug: string;
  groups: HeroFamilyGroup[];
  legacySlugs?: string[];
}

export const HERO_MODEL_FAMILIES: HeroModelFamily[] = [
  {
    name: "Splendor",
    slug: "splendor",
    groups: [{ category: "Bike", models: ["Splendor Plus", "Splendor+ XTEC", "Splendor Pro / iSmart", "Super Splendor", "Super Splendor XTEC"] }],
  },
  {
    name: "HF",
    slug: "hf",
    groups: [{ category: "Bike", models: ["HF Deluxe", "HF 100"] }],
    legacySlugs: ["hfdlx", "hf100"],
  },
  {
    name: "Passion",
    slug: "passion",
    groups: [{ category: "Bike", models: ["Passion Pro", "Passion XTEC", "Passion Plus"] }],
  },
  {
    name: "Glamour",
    slug: "glamour",
    groups: [{ category: "Bike", models: ["Glamour", "Glamour XTEC"] }],
  },
  {
    name: "Xtreme",
    slug: "xtreme",
    groups: [{ category: "Bike", models: ["Xtreme 160R / 4V", "Xtreme 125R", "Xtreme 200S 4V", "Xtreme 200R"] }],
    legacySlugs: ["xtreme160r", "xtreme125r", "xtreme200s", "xtreme200r"],
  },
  {
    name: "XPulse",
    slug: "xpulse",
    groups: [{ category: "Bike", models: ["XPulse 200 4V / 200T"] }],
    legacySlugs: ["xpulse200"],
  },
  {
    name: "CD",
    slug: "cd",
    groups: [{ category: "Bike", models: ["CD Deluxe / CD Dawn"] }],
    legacySlugs: ["cd_deluxe"],
  },
  {
    name: "Destini",
    slug: "destini",
    groups: [{ category: "Scooter", models: ["Destini 125"] }],
  },
  {
    name: "Maestro",
    slug: "maestro",
    groups: [{ category: "Scooter", models: ["Maestro Edge 110 / 125"] }],
  },
  {
    name: "Pleasure",
    slug: "pleasure",
    groups: [{ category: "Scooter", models: ["Pleasure Plus"] }],
  },
  {
    name: "Xoom",
    slug: "xoom",
    groups: [{ category: "Scooter", models: ["Xoom 110"] }],
    legacySlugs: ["xtoom"],
  },
];

export const HERO_MODEL_SECTIONS: { category: HeroVehicleCategory; families: HeroModelFamily[] }[] = [
  { category: "Bike", families: HERO_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: HERO_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findHeroFamilyBySlug(slug: string): HeroModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return HERO_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findHeroFamilyByAnySlug(slug: string): HeroModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return HERO_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
