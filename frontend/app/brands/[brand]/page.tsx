import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import BrandDetailClient from "./page.client";

interface PageProps {
  params: {
    brand: string;
  };
}

export async function generateStaticParams() {
  const brandSlugs = Object.keys(BRAND_DETAILS);
  return brandSlugs.map((brand) => ({
    brand,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const brandData = BRAND_DETAILS[params.brand.toLowerCase()];
  if (!brandData) {
    return {
      title: "Brand Not Found | FixWheel",
      description: "Serviced two-wheeler brand not found.",
    };
  }

  const titleText = `Doorstep ${brandData.name} Service & Repair Near Me | FixWheel`;
  const descText = `Book professional doorstep ${brandData.name} bike service and repairs. ${brandData.tagline}. Flat pricing, verified mechanics, 15-day warranty.`;

  return {
    title: titleText,
    description: descText,
    keywords: brandData.seoKeywords.join(", "),
    alternates: {
      canonical: `https://www.fixwheel.app/brands/${params.brand.toLowerCase()}`,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.fixwheel.app/brands/${params.brand.toLowerCase()}`,
      siteName: "FixWheel",
      type: "website",
    },
  };
}

export default function BrandDetailPage({ params }: PageProps) {
  const brandData = BRAND_DETAILS[params.brand.toLowerCase()];
  if (!brandData) {
    notFound();
  }

  return <BrandDetailClient brandSlug={params.brand.toLowerCase()} />;
}
