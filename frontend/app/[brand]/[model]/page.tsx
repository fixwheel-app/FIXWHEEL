import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findModelBySlugs, getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import ModelDetailClient from "./page.client";
import BrandCityClient from "./BrandCityClient";

const CITIES = ["gurgaon", "delhi", "noida", "faridabad", "ghaziabad"];

const CITY_NAME_MAP: Record<string, string> = {
  gurgaon: "Gurgaon",
  delhi: "Delhi",
  noida: "Noida",
  faridabad: "Faridabad",
  ghaziabad: "Ghaziabad",
};

interface PageProps {
  params: Promise<{
    brand: string;
    model: string;
  }>;
}

export async function generateStaticParams() {
  const allModels = getAllBikeModels();
  const modelParams = allModels.map((m) => ({
    brand: slugifyModel(m.brandName),
    model: slugifyModel(m.modelName),
  }));

  const brandSet = new Set<string>();
  allModels.forEach((m) => brandSet.add(slugifyModel(m.brandName)));
  Object.keys(BRAND_DETAILS).forEach((b) => brandSet.add(slugifyModel(b)));

  const cityParams: { brand: string; model: string }[] = [];
  brandSet.forEach((brandSlug) => {
    CITIES.forEach((citySlug) => {
      cityParams.push({
        brand: brandSlug,
        model: citySlug,
      });
    });
  });

  return [...modelParams, ...cityParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand, model } = await params;
  const isCity = CITIES.includes(model.toLowerCase());

  if (isCity) {
    const citySlug = model.toLowerCase();
    const cityName = CITY_NAME_MAP[citySlug] || citySlug;
    const brandKey = brand.toLowerCase();
    const brandData = BRAND_DETAILS[brandKey];
    const brandName =
      brandData?.name ||
      brand
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const title = `${brandName} Bike Service & Repair in ${cityName} | FixWheel Doorstep Service`;
    const description = `Looking for certified ${brandName} bike service near you in ${cityName}? Book doorstep ${brandName} scooter & motorcycle repair in ${cityName}. 100% genuine parts, ₹199 starting price, 45-min arrival, and 15-day warranty.`;
    const canonicalUrl = `https://www.fixwheel.app/${brand}/${citySlug}`;

    const keywords = brandData?.seoKeywords
      ? brandData.seoKeywords.map((k) => `${k} ${cityName.toLowerCase()}`).join(", ")
      : `${brandName.toLowerCase()} doorstep service ${cityName.toLowerCase()}, ${brandName.toLowerCase()} repair in ${cityName.toLowerCase()}, ${brandName.toLowerCase()} mechanic ${cityName.toLowerCase()}`;

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "FixWheel",
        type: "website",
      },
    };
  }

  const modelInfo = findModelBySlugs(brand, model);

  if (!modelInfo) {
    return {
      title: "Bike Service & Repair at Home | FixWheel",
      description: "Book doorstep bike service and repair across Delhi.",
    };
  }

  const { brandName, modelName } = modelInfo;
  const title = `${brandName} ${modelName} Service Near Me | Doorstep Repair Delhi | FixWheel`;
  const description = `Searching for ${brandName} ${modelName} service near me? Book doorstep ${modelName} repair & tune-up in Gurgaon, Delhi, Noida, Ghaziabad & Faridabad. 100% genuine OEM parts, ₹199 starting price, 45-min arrival, and 15-day warranty.`;
  const canonicalUrl = `https://www.fixwheel.app/${slugifyModel(brandName)}/${slugifyModel(modelName)}`;

  const gurgaonLocalities = [
    "dlf phase 1",
    "dlf phase 2",
    "dlf phase 3",
    "dlf phase 4",
    "dlf phase 5",
    "cyber city",
    "golf course road",
    "sohna road",
    "palam vihar",
    "udyog vihar",
    "sector 14",
    "sector 15",
    "sector 56",
    "sector 57",
    "badshahpur",
    "manesar",
  ];

  const keywords = [
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} service near me`,
    `doorstep ${modelName.toLowerCase()} repair gurgaon`,
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} mechanic home service gurgaon`,
    `${modelName.toLowerCase()} bike service delhi`,
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} periodic maintenance gurgaon`,
    `${modelName.toLowerCase()} doorstep oil change gurgaon`,
    `${modelName.toLowerCase()} brake repair at home gurgaon`,
    `${modelName.toLowerCase()} service dlf phase 1`,
    `${modelName.toLowerCase()} repair cyber city gurgaon`,
    `${modelName.toLowerCase()} oil change sohna road`,
    `${modelName.toLowerCase()} mechanic golf course road gurgaon`,
    `${modelName.toLowerCase()} service palam vihar`,
    `${modelName.toLowerCase()} repair sector 56 gurgaon`,
    `${modelName.toLowerCase()} doorstep service badshahpur`,
    `${modelName.toLowerCase()} mechanic manesar gurgaon`,
    ...gurgaonLocalities.map((loc) => `${modelName.toLowerCase()} service in ${loc} gurgaon`),
    ...gurgaonLocalities.map((loc) => `${brandName.toLowerCase()} ${modelName.toLowerCase()} repair ${loc}`),
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "FixWheel",
      type: "website",
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { brand, model } = await params;
  const isCity = CITIES.includes(model.toLowerCase());

  if (isCity) {
    return <BrandCityClient brandSlug={brand} citySlug={model} />;
  }

  const modelInfo = findModelBySlugs(brand, model);

  if (!modelInfo) {
    notFound();
  }

  return <ModelDetailClient modelInfo={modelInfo} />;
}
