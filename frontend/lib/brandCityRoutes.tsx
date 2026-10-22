import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandCityClient from "@/app/[brand]/[model]/BrandCityClient";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { CITIES_DB } from "@/lib/cityLocalityData";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";
import { findElectricBrandByReference } from "@/lib/electricServices";
import { getBrandCityFaqs } from "@/lib/brandCityFaqs";
import { completePageMetadata } from "@/lib/seoMetadata";

const brandSlugSet = new Set<string>();

getAllBikeModels().forEach(({ brandName }) => brandSlugSet.add(slugifyModel(brandName)));
Object.keys(BRAND_DETAILS).forEach((brand) => brandSlugSet.add(slugifyModel(brand)));

export const BRAND_CITY_SLUGS = Array.from(brandSlugSet).sort();

export function isBrandCitySlug(slug: string) {
  return brandSlugSet.has(slug.toLowerCase());
}

function getBrandName(brandSlug: string) {
  const brandData = BRAND_DETAILS[brandSlug.toLowerCase()];

  return brandData?.name || brandSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateBrandCityMetadata(citySlug: string, brandSlug: string): Metadata {
  const city = CITIES_DB[citySlug.toLowerCase()];
  const normalizedBrandSlug = brandSlug.toLowerCase();
  const brandData = BRAND_DETAILS[normalizedBrandSlug];
  const brandName = getBrandName(normalizedBrandSlug);

  if (!city || !isBrandCitySlug(normalizedBrandSlug)) {
    return {};
  }

  const title = `${brandName} Bike Service & Repair in ${city.name} | FixWheel Doorstep Service`;
  const description = `Looking for certified ${brandName} bike service near you in ${city.name}? Book doorstep ${brandName} scooter & motorcycle repair in ${city.name}. 100% genuine parts, services from ₹399, 45-min arrival, and 15-day warranty.`;
  const canonicalUrl = `https://www.fixwheel.app/${city.slug}/${normalizedBrandSlug}`;
  const keywords = brandData?.seoKeywords
    ? brandData.seoKeywords.map((keyword) => `${keyword} ${city.name.toLowerCase()}`).join(", ")
    : `${brandName.toLowerCase()} doorstep service ${city.name.toLowerCase()}, ${brandName.toLowerCase()} repair in ${city.name.toLowerCase()}, ${brandName.toLowerCase()} mechanic ${city.name.toLowerCase()}`;

  return completePageMetadata({
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "FixWheel",
      type: "website",
    },
  });
}

export function renderBrandCity(citySlug: string, brandSlug: string) {
  const city = CITIES_DB[citySlug.toLowerCase()];
  const normalizedBrandSlug = brandSlug.toLowerCase();

  if (!city || !isBrandCitySlug(normalizedBrandSlug)) {
    notFound();
  }

  const otherCities = Object.values(CITIES_DB)
    .filter((otherCity) => otherCity.slug !== city.slug)
    .map((otherCity) => ({ slug: otherCity.slug, name: otherCity.name }));
  const brandName = findElectricBrandByReference(normalizedBrandSlug)?.name || getBrandName(normalizedBrandSlug);
  const brandData = BRAND_DETAILS[normalizedBrandSlug];
  const isElectricBrand = Boolean(findElectricBrandByReference(normalizedBrandSlug));
  const cityFaqs = getBrandCityFaqs(
    brandName,
    city.name,
    city.brandPageLocalities,
    isElectricBrand,
    brandData?.additionalInfo.parts || "100% Genuine OEM Spare Parts & Cables",
    brandData?.additionalInfo.engineOil || "OEM Specification Multi-Grade Engine Oil",
  );
  const canonicalUrl = `https://www.fixwheel.app/${city.slug}/${normalizedBrandSlug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: `Doorstep ${brandName} service in ${city.name}`,
        serviceType: `${brandName} two-wheeler maintenance and repair`,
        url: canonicalUrl,
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: { "@type": "City", name: city.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: city.name, item: `https://www.fixwheel.app/${city.slug}` },
          { "@type": "ListItem", position: 3, name: "Brands", item: "https://www.fixwheel.app/brands" },
          { "@type": "ListItem", position: 4, name: brandName, item: `https://www.fixwheel.app/${normalizedBrandSlug}` },
          { "@type": "ListItem", position: 5, name: `${brandName} Service`, item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cityFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <BrandCityClient
        brandSlug={normalizedBrandSlug}
        citySlug={city.slug}
        cityName={city.name}
        localities={city.brandPageLocalities}
        otherCities={otherCities}
      />
    </>
  );
}
