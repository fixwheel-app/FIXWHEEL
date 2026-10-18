export type HarleyDavidsonVehicleCategory = "Bike";

export interface HarleyDavidsonModelFamily {
  name: string;
  slug: string;
  groups: { category: HarleyDavidsonVehicleCategory; models: string[] }[];
  bookingOnly: true;
}

export const HARLEY_DAVIDSON_MODEL_FAMILIES: HarleyDavidsonModelFamily[] = [
  { name: "X440", slug: "x440", groups: [{ category: "Bike", models: ["X440"] }], bookingOnly: true },
  { name: "Iron", slug: "iron", groups: [{ category: "Bike", models: ["Iron 883"] }], bookingOnly: true },
  { name: "Street", slug: "street", groups: [{ category: "Bike", models: ["Street 750", "Street Rod 750"] }], bookingOnly: true },
  { name: "Sportster", slug: "sportster", groups: [{ category: "Bike", models: ["Sportster S", "Forty-Eight"] }], bookingOnly: true },
  { name: "Nightster", slug: "nightster", groups: [{ category: "Bike", models: ["Nightster"] }], bookingOnly: true },
  { name: "Fat Boy", slug: "fat-boy", groups: [{ category: "Bike", models: ["Fat Boy 114"] }], bookingOnly: true },
  { name: "Pan America", slug: "pan-america", groups: [{ category: "Bike", models: ["Pan America 1250"] }], bookingOnly: true },
];

export const HARLEY_DAVIDSON_MODEL_SECTIONS = [
  { category: "Bike" as const, families: HARLEY_DAVIDSON_MODEL_FAMILIES },
];
