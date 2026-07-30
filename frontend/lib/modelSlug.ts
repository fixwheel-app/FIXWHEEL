import { BIKE_DATA } from "@/lib/bikes";

export function slugifyModel(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface ResolvedModel {
  brandId: string;
  brandName: string;
  modelId: string;
  modelName: string;
  category: "Electric Motorbike" | "Non-Electric Motorbike";
}

export function getAllBikeModels(): ResolvedModel[] {
  const list: ResolvedModel[] = [];

  const categories = ["Non-Electric Motorbike", "Electric Motorbike"] as const;

  for (const cat of categories) {
    const brands = BIKE_DATA[cat] || [];
    for (const b of brands) {
      for (const m of b.models) {
        list.push({
          brandId: b.id,
          brandName: b.name,
          modelId: m.id,
          modelName: m.name,
          category: cat,
        });
      }
    }
  }

  return list;
}

export function findModelBySlugs(brandSlug: string, modelSlug: string): ResolvedModel | null {
  const all = getAllBikeModels();
  const normalizedBrand = brandSlug.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const normalizedModel = modelSlug.toLowerCase().replace(/[^a-z0-9]+/g, "");

  for (const item of all) {
    const bSlug = slugifyModel(item.brandName).replace(/[^a-z0-9]+/g, "");
    const mSlug = slugifyModel(item.modelName).replace(/[^a-z0-9]+/g, "");

    if (
      (bSlug === normalizedBrand || item.brandId.replace(/[^a-z0-9]+/g, "") === normalizedBrand) &&
      (mSlug === normalizedModel || item.modelId.replace(/[^a-z0-9]+/g, "") === normalizedModel)
    ) {
      return item;
    }
  }

  return null;
}
