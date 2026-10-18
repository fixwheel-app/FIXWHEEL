export type RoyalEnfieldVehicleCategory = "Bike";

export interface RoyalEnfieldFamilyGroup {
  category: RoyalEnfieldVehicleCategory;
  models: string[];
}

export interface RoyalEnfieldModelFamily {
  name: string;
  slug: string;
  groups: RoyalEnfieldFamilyGroup[];
  legacySlugs?: string[];
}

export const ROYAL_ENFIELD_MODEL_FAMILIES: RoyalEnfieldModelFamily[] = [
  {
    name: "Classic",
    slug: "classic",
    groups: [{ category: "Bike", models: ["Classic 350", "Classic 500"] }],
    legacySlugs: ["classic350", "classic500"],
  },
  {
    name: "Hunter",
    slug: "hunter",
    groups: [{ category: "Bike", models: ["Hunter 350"] }],
    legacySlugs: ["hunter350"],
  },
  {
    name: "Bullet",
    slug: "bullet",
    groups: [{ category: "Bike", models: ["Bullet 350", "Bullet 500", "Bullet Electra 350"] }],
    legacySlugs: ["bullet350", "bullet500", "electra350"],
  },
  {
    name: "Meteor",
    slug: "meteor",
    groups: [{ category: "Bike", models: ["Meteor 350", "Super Meteor 650"] }],
    legacySlugs: ["meteor350", "super_meteor"],
  },
  {
    name: "Guerrilla",
    slug: "guerrilla",
    groups: [{ category: "Bike", models: ["Guerrilla 450"] }],
    legacySlugs: ["guerrilla450"],
  },
  {
    name: "Himalayan",
    slug: "himalayan",
    groups: [{ category: "Bike", models: ["Himalayan 450", "Himalayan 411"] }],
    legacySlugs: ["himalayan450", "himalayan411"],
  },
  {
    name: "Interceptor",
    slug: "interceptor",
    groups: [{ category: "Bike", models: ["Interceptor 650"] }],
    legacySlugs: ["interceptor650"],
  },
  {
    name: "Continental GT",
    slug: "continental-gt",
    groups: [{ category: "Bike", models: ["Continental GT 650"] }],
    legacySlugs: ["gt650"],
  },
  {
    name: "Shotgun",
    slug: "shotgun",
    groups: [{ category: "Bike", models: ["Shotgun 650"] }],
    legacySlugs: ["shotgun650"],
  },
];

export const ROYAL_ENFIELD_MODEL_SECTIONS: { category: RoyalEnfieldVehicleCategory; families: RoyalEnfieldModelFamily[] }[] = [
  { category: "Bike", families: ROYAL_ENFIELD_MODEL_FAMILIES },
];

function normalizeSlug(value: string): string {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findRoyalEnfieldFamilyBySlug(slug: string): RoyalEnfieldModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return ROYAL_ENFIELD_MODEL_FAMILIES.find((family) => family.slug === normalized);
}

export function findRoyalEnfieldFamilyByAnySlug(slug: string): RoyalEnfieldModelFamily | undefined {
  const normalized = normalizeSlug(slug);
  return ROYAL_ENFIELD_MODEL_FAMILIES.find((family) => {
    if (family.slug === normalized || family.legacySlugs?.some((legacySlug) => normalizeSlug(legacySlug) === normalized)) return true;
    return family.groups.some((group) => group.models.some((model) => normalizeSlug(model) === normalized));
  });
}
