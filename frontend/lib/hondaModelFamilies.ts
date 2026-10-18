export type HondaVehicleCategory = "Bike" | "Scooter" | "EV";

export interface HondaFamilyGroup {
  category: HondaVehicleCategory;
  models: string[];
}

export interface HondaModelFamily {
  name: string;
  slug: string;
  groups: HondaFamilyGroup[];
  legacySlugs?: string[];
}

export const HONDA_MODEL_FAMILIES: HondaModelFamily[] = [
  {
    name: "Dream",
    slug: "dream",
    groups: [{ category: "Bike", models: ["CD 110 Dream", "Dream Neo", "Dream Yuga"] }],
    legacySlugs: ["cd-110-dream", "dream-yuga"],
  },
  {
    name: "Shine",
    slug: "shine",
    groups: [{ category: "Bike", models: ["Shine 100", "Shine 100 DX", "CB Shine 125", "Shine SP"] }],
    legacySlugs: ["shine-125", "shine-100", "cb-shine-sp"],
  },
  {
    name: "SP",
    slug: "sp",
    groups: [{ category: "Bike", models: ["SP125", "SP160"] }],
    legacySlugs: ["sp-125", "sp-160"],
  },
  {
    name: "CB",
    slug: "cb",
    groups: [{
      category: "Bike",
      models: ["CB Twister", "CB Trigger", "CB200X", "CB300F", "CB300R", "CB350", "CB350C", "H'ness CB350", "CB350RS", "CB500X", "CB650R", "CB1000R"],
    }],
    legacySlugs: ["hness-cb350", "cb350rs", "cb350", "cb200x", "cb300f", "cb300r"],
  },
  {
    name: "Unicorn",
    slug: "unicorn",
    groups: [{ category: "Bike", models: ["Unicorn 150", "Unicorn 160", "Unicorn Dazzler"] }],
    legacySlugs: ["unicorn-160", "cb-unicorn-150"],
  },
  {
    name: "Hornet",
    slug: "hornet",
    groups: [{ category: "Bike", models: ["CB125 Hornet", "Hornet 160R", "Hornet 2.0", "CB750 Hornet", "CB1000 Hornet SP"] }],
    legacySlugs: ["hornet-2-0"],
  },
  {
    name: "X-Blade",
    slug: "x-blade",
    groups: [{ category: "Bike", models: ["X-Blade 160"] }],
    legacySlugs: ["xblade"],
  },
  {
    name: "NX",
    slug: "nx",
    groups: [{ category: "Bike", models: ["NX200", "NX500"] }],
    legacySlugs: ["nx500"],
  },
  {
    name: "Stunner",
    slug: "stunner",
    groups: [{ category: "Bike", models: ["CBF Stunner 125", "Stunner PGM-FI"] }],
  },
  {
    name: "CBR",
    slug: "cbr",
    groups: [{ category: "Bike", models: ["CBR150R", "CBR250R", "CBR650F", "CBR650R", "CBR1000RR", "CBR1000RR-R"] }],
    legacySlugs: ["cbr-150r", "cbr-250r", "cbr-650r", "cbr1000rr-r-fireblade"],
  },
  {
    name: "Activa",
    slug: "activa",
    groups: [
      { category: "Scooter", models: ["Activa 110", "Activa 3G", "Activa 4G", "Activa 5G", "Activa 6G", "Activa i", "Activa 125"] },
      { category: "EV", models: ["Activa e:", "Activa e: RoadSync Duo"] },
    ],
    legacySlugs: ["activa-6g", "activa-125", "activa-5g", "activa-4g-3g", "activa-premium", "activa-i-hetz"],
  },
  {
    name: "Dio",
    slug: "dio",
    groups: [{ category: "Scooter", models: ["Dio 110", "Dio 125"] }],
    legacySlugs: ["dio-125"],
  },
  {
    name: "Grazia",
    slug: "grazia",
    groups: [{ category: "Scooter", models: ["Grazia 125"] }],
    legacySlugs: ["grazia-125"],
  },
  {
    name: "Aviator",
    slug: "aviator",
    groups: [{ category: "Scooter", models: ["Aviator 110"] }],
  },
  {
    name: "Eterno",
    slug: "eterno",
    groups: [{ category: "Scooter", models: ["Eterno 150"] }],
  },
  {
    name: "QC",
    slug: "qc",
    groups: [{ category: "EV", models: ["QC1"] }],
  },
];

export const HONDA_MODEL_SECTIONS: { category: HondaVehicleCategory; families: HondaModelFamily[] }[] = [
  { category: "Bike", families: HONDA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "Scooter", families: HONDA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Scooter")) },
  { category: "EV", families: HONDA_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "EV")) },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findHondaFamilyBySlug(slug: string): HondaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return HONDA_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findHondaFamilyByAnySlug(slug: string): HondaModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return HONDA_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.includes(normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}

export function getHondaFamilyModelsForCategory(family: HondaModelFamily, category: HondaVehicleCategory): string[] {
  return family.groups.find((group) => group.category === category)?.models || [];
}
