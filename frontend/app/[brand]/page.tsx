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

function getBrandData(brandSlug: string) {
  const key = brandSlug.toLowerCase().trim();
  if (BRAND_DETAILS[key]) return BRAND_DETAILS[key];
  
  // Format dynamic brand fallback for unlisted brands
  const formattedName = key
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    name: formattedName,
    tagline: `Professional Doorstep Maintenance & Repair for ${formattedName}`,
    description: `Get doorstep bike service and repair for all ${formattedName} two-wheeler models right at your home or office parking. 100% genuine parts and 15-day labor warranty.`,
    additionalInfo: {
      engineOil: "OEM Specification Multi-Grade Engine Oil / EV Inspection",
      warranty: "15-Day Quality Assurance Warranty",
      parts: "100% Genuine OEM Spare Parts & Cables",
      avgTime: "Within 45 Mins Doorstep Arrival",
    },
    keyBenefits: [
      { title: "Doorstep Mechanic Arrival", desc: "Mobile mechanic equipped with specialized tools dispatches to your parking location in 45 minutes." },
      { title: "Genuine Spares Guarantee", desc: "We use 100% genuine manufacturer parts, checked and fitted right in front of you." },
      { title: "Flat Transparent Pricing", desc: "No hidden charges or unexpected garage add-ons. Upfront labor and part billing." },
    ],
    reviews: [
      { name: "Rahul Verma", vehicle: `${formattedName} Two-Wheeler`, rating: 5, location: "Delhi NCR", date: "August 2026", comment: `Excellent doorstep service for my ${formattedName}. Quick dispatch and very clean job.` }
    ],
    seoKeywords: [
      `${key} service at home`,
      `${key} repair near me`,
      `doorstep ${key} mechanic delhi ncr`,
      `bike repair near me`,
    ],
    faqs: [
      {
        q: `How long does doorstep service take for ${formattedName} two-wheelers?`,
        a: `Most general services and minor repairs are completed in 30 to 45 minutes right in your driveway or parking space.`,
      },
      {
        q: `What is the warranty on ${formattedName} doorstep repairs?`,
        a: `FixWheel provides a 15-day labor & diagnostic warranty on all doorstep two-wheeler repairs.`,
      },
    ],
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const brandData = getBrandData(params.brand);

  const titleText = `Doorstep ${brandData.name} Service & Repair Near Me | FixWheel`;
  const descText = `Book professional doorstep ${brandData.name} bike service and repairs. ${brandData.tagline}. Flat pricing, verified mechanics, 15-day warranty.`;

  return {
    title: titleText,
    description: descText,
    keywords: brandData.seoKeywords.join(", "),
    alternates: {
      canonical: `https://www.fixwheel.app/${params.brand.toLowerCase()}`,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.fixwheel.app/${params.brand.toLowerCase()}`,
      siteName: "FixWheel",
      type: "website",
    },
  };
}

export default function BrandDetailPage({ params }: PageProps) {
  return <BrandDetailClient brandSlug={params.brand.toLowerCase()} />;
}
