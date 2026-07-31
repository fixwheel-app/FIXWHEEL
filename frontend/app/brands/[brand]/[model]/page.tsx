import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findModelBySlugs, getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import ModelDetailClient from "./page.client";

interface PageProps {
  params: Promise<{
    brand: string;
    model: string;
  }>;
}

export async function generateStaticParams() {
  const allModels = getAllBikeModels();
  return allModels.map((m) => ({
    brand: slugifyModel(m.brandName),
    model: slugifyModel(m.modelName),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand, model } = await params;
  const modelInfo = findModelBySlugs(brand, model);

  if (!modelInfo) {
    return {
      title: "Bike Service & Repair at Home | FixWheel",
      description: "Book doorstep bike service and repair across Delhi NCR.",
    };
  }

  const { brandName, modelName } = modelInfo;
  const title = `${brandName} ${modelName} Service Near Me | Doorstep Repair Delhi NCR | FixWheel`;
  const description = `Searching for ${brandName} ${modelName} service near me? Book doorstep ${modelName} repair & tune-up in Gurgaon, Delhi, Noida, Ghaziabad & Faridabad. 100% genuine OEM parts, ₹199 starting price, 45-min arrival, and 15-day warranty.`;
  const canonicalUrl = `https://www.fixwheel.app/brands/${slugifyModel(brandName)}/${slugifyModel(modelName)}`;

  return {
    title,
    description,
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
  const modelInfo = findModelBySlugs(brand, model);

  if (!modelInfo) {
    notFound();
  }

  return <ModelDetailClient modelInfo={modelInfo} />;
}
