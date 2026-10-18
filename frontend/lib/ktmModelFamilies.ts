export type KtmVehicleCategory = "Bike";

export interface KtmFamilyGroup {
  category: KtmVehicleCategory;
  models: string[];
}

export interface KtmModelFamily {
  name: string;
  slug: string;
  groups: KtmFamilyGroup[];
  legacySlugs?: string[];
}

export const KTM_MODEL_FAMILIES: KtmModelFamily[] = [
  {
    name: "Duke",
    slug: "duke",
    groups: [{ category: "Bike", models: ["125 Duke", "200 Duke", "250 Duke", "390 Duke", "890 Duke R"] }],
    legacySlugs: ["duke125", "duke200", "duke250", "duke390", "duke890"],
  },
  {
    name: "RC",
    slug: "rc",
    groups: [{ category: "Bike", models: ["RC 125", "RC 200", "RC 390"] }],
    legacySlugs: ["rc125", "rc200", "rc390"],
  },
  {
    name: "Adventure",
    slug: "adventure",
    groups: [{ category: "Bike", models: ["250 Adventure", "390 Adventure", "390 Adventure X"] }],
    legacySlugs: ["adv250", "adv390", "adv390x"],
  },
];

export const KTM_MODEL_SECTIONS: { category: KtmVehicleCategory; families: KtmModelFamily[] }[] = [
  { category: "Bike", families: KTM_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findKtmFamilyBySlug(slug: string): KtmModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return KTM_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findKtmFamilyByAnySlug(slug: string): KtmModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return KTM_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
