export type BmwVehicleCategory = "Bike" | "EV";

export interface BmwModelFamily {
  name: string;
  slug: string;
  groups: { category: BmwVehicleCategory; models: string[] }[];
  bookingOnly: true;
}

export const BMW_MODEL_FAMILIES: BmwModelFamily[] = [
  { name: "G 310", slug: "g-310", groups: [{ category: "Bike", models: ["G 310 R", "G 310 GS", "G 310 RR"] }], bookingOnly: true },
  { name: "F", slug: "f", groups: [{ category: "Bike", models: ["F 900 R"] }], bookingOnly: true },
  { name: "S", slug: "s", groups: [{ category: "Bike", models: ["S 1000 RR"] }], bookingOnly: true },
  { name: "R GS", slug: "r-gs", groups: [{ category: "Bike", models: ["R 1250 GS", "R 1300 GS"] }], bookingOnly: true },
  { name: "CE", slug: "ce", groups: [{ category: "EV", models: ["CE 04 (Electric)"] }], bookingOnly: true },
];

export const BMW_MODEL_SECTIONS = [
  { category: "Bike" as const, families: BMW_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "Bike")) },
  { category: "EV" as const, families: BMW_MODEL_FAMILIES.filter((family) => family.groups.some((group) => group.category === "EV")) },
];
