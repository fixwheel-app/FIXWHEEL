import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import { findElectricBrandByReference } from "@/lib/electricServices";
import { completePageMetadata } from "@/lib/seoMetadata";
import BrandDetailClient from "./page.client";

interface PageProps {
  params: {
    brand: string;
  };
}

const KNOWN_BRAND_SLUGS = new Set([
  ...Object.keys(BRAND_DETAILS).map(slugifyModel),
  ...getAllBikeModels().map(({ brandName }) => slugifyModel(brandName)),
]);

export async function generateStaticParams() {
  return Array.from(KNOWN_BRAND_SLUGS).map((brand) => ({
    brand,
  }));
}

function getBrandData(brandSlug: string) {
  const key = brandSlug.toLowerCase().trim();
  const electricBrand = findElectricBrandByReference(key);
  if (BRAND_DETAILS[key]) {
    const storedBrand = BRAND_DETAILS[key];
    if (electricBrand && electricBrand.name !== storedBrand.name) {
      return {
        ...storedBrand,
        name: electricBrand.name,
        tagline: `Specialist Doorstep EV Service for ${electricBrand.name}`,
        description: `Book EV-specific ${electricBrand.name} diagnostics, maintenance, and minor repair at your doorstep.`,
        seoKeywords: [
          `${electricBrand.name.toLowerCase()} ev service at home`,
          `${electricBrand.name.toLowerCase()} repair near me`,
          `doorstep electric scooter mechanic`,
        ],
      };
    }
    return storedBrand;
  }
  if (!KNOWN_BRAND_SLUGS.has(key)) return undefined;

  // Preserve the existing generic presentation only for brands present in the
  // authoritative bike catalog. Unknown slugs must return a real 404.
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
      { title: "Transparent Pricing", desc: "No hidden charges or unexpected garage add-ons. Upfront labor and part billing." },
    ],
    reviews: [
      { name: "Rahul Verma", vehicle: `${formattedName} Two-Wheeler`, rating: 5, location: "Delhi", date: "August 2026", comment: `Excellent doorstep service for my ${formattedName}. Quick dispatch and very clean job.` }
    ],
    seoKeywords: [
      `${key} service at home`,
      `${key} repair near me`,
      `doorstep ${key} mechanic delhi`,
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

function getBrandSeoKeywords(brandSlug: string, brandName: string, existingKeywords: string[]) {
  const normalizedBrandName = brandName.toLowerCase();
  const normalizedSlug = brandSlug.toLowerCase();
  const vehicleType = findElectricBrandByReference(normalizedSlug) ? "electric scooter" : "bike";
  const serviceIntentKeywords = [
    `${normalizedBrandName} service near me`,
    `${normalizedBrandName} repair near me`,
    `${normalizedBrandName} ${vehicleType} service near me`,
    `${normalizedBrandName} ${vehicleType} repair at home`,
    `${normalizedBrandName} mechanic near me`,
    `${normalizedBrandName} service at home`,
    `${normalizedBrandName} doorstep service`,
    `${normalizedBrandName} doorstep repair`,
    `book ${normalizedBrandName} service online`,
    `${normalizedBrandName} two wheeler service delhi ncr`,
    `${normalizedBrandName} service delhi`,
    `${normalizedBrandName} service gurgaon`,
    `${normalizedBrandName} service noida`,
    `${normalizedBrandName} service faridabad`,
    `${normalizedBrandName} service ghaziabad`,
  ];

  return Array.from(new Set([...existingKeywords, ...serviceIntentKeywords]));
}

type BrandData = NonNullable<ReturnType<typeof getBrandData>>;

function getBrandFaqs(brandSlug: string, brandData: BrandData) {
  if (findElectricBrandByReference(brandSlug)) {
    return [
      {
        q: `How long does doorstep ${brandData.name} EV service take?`,
        a: "Most EV inspections and minor repairs take 30 to 50 minutes at your home or office parking. Model compatibility is confirmed before dispatch.",
      },
      {
        q: `What is checked during a ${brandData.name} EV service?`,
        a: "The mechanic checks the BMS status, auxiliary battery voltage, accessible wiring, charging-port condition, motor response, brakes, and tyres according to the reported issue.",
      },
      {
        q: "Can FixWheel repair the traction battery at my doorstep?",
        a: "Doorstep work covers safe diagnostics and accessible systems. Sealed traction-battery or major motor repairs are moved through the EV pick-and-drop service after you approve the quote.",
      },
      {
        q: `Is there a warranty on doorstep ${brandData.name} EV repairs?`,
        a: "Yes, FixWheel provides a 15-day labor and diagnostic warranty, plus the applicable manufacturer warranty on replacement components.",
      },
      {
        q: `Which locations do you cover for ${brandData.name} EV service?`,
        a: "We cover Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad at home or office parking locations.",
      },
    ];
  }

  if (brandData.faqs?.length) return brandData.faqs;

  return [
    {
      q: `How long does doorstep ${brandData.name} service take in Delhi?`,
      a: `Routine servicing for ${brandData.name} two-wheelers typically takes 35 to 50 minutes. Our certified mechanics arrive fully equipped at your doorstep with all required OEM spares and tools.`,
    },
    {
      q: `Do you use 100% genuine ${brandData.name} OEM spare parts?`,
      a: `Yes, we use 100% genuine OEM spare parts (${brandData.additionalInfo.parts}). All replaced parts are inspected and handed over to you after servicing.`,
    },
    {
      q: `What engine oil is used for ${brandData.name} bikes & scooters?`,
      a: `We use recommended ${brandData.name} specification oil (${brandData.additionalInfo.engineOil}) or high-grade Motul/Yamalube synthetic blends depending on your bike model.`,
    },
    {
      q: `Is there a warranty on doorstep ${brandData.name} repairs?`,
      a: `Yes, FixWheel provides a 15-day quality labor warranty on all ${brandData.name} services and diagnostics, plus manufacturer warranties on replacement components.`,
    },
    {
      q: `Which locations in Delhi do you cover for ${brandData.name} service?`,
      a: "We cover all major locations across Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad. You can book doorstep service at your home or office parking.",
    },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const brandData = getBrandData(params.brand);
  if (!brandData) {
    notFound();
  }

  const titleText = `Doorstep ${brandData.name} Service & Repair Near Me | FixWheel`;
  const descText = `Book professional doorstep ${brandData.name} bike service and repairs. ${brandData.tagline}. Transparent pricing, verified mechanics, 15-day warranty.`;
  const keywords = getBrandSeoKeywords(params.brand, brandData.name, brandData.seoKeywords);

  return completePageMetadata({
    title: titleText,
    description: descText,
    keywords,
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
  });
}

export default function BrandDetailPage({ params }: PageProps) {
  const brandSlug = params.brand.toLowerCase();
  const brandData = getBrandData(brandSlug);
  if (!brandData) {
    notFound();
  }

  const pageUrl = `https://www.fixwheel.app/${brandSlug}`;
  const brandFaqs = getBrandFaqs(brandSlug, brandData);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${brandData.name} Doorstep Service & Repair`,
        serviceType: `${brandData.name} two-wheeler service and repair`,
        url: pageUrl,
        description: brandData.description,
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map((name) => ({
          "@type": "City",
          name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: "Brands", item: "https://www.fixwheel.app/brands" },
          { "@type": "ListItem", position: 3, name: brandData.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: brandFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <BrandDetailClient brandSlug={brandSlug} />
    </>
  );
}
