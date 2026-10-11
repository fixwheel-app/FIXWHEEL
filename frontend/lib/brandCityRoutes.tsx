import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandCityClient from "@/app/[brand]/[model]/BrandCityClient";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { CITIES_DB } from "@/lib/cityLocalityData";
import { getAllBikeModels, slugifyModel } from "@/lib/modelSlug";

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
  const description = `Looking for certified ${brandName} bike service near you in ${city.name}? Book doorstep ${brandName} scooter & motorcycle repair in ${city.name}. 100% genuine parts, ₹199 starting price, 45-min arrival, and 15-day warranty.`;
  const canonicalUrl = `https://www.fixwheel.app/${city.slug}/${normalizedBrandSlug}`;
  const keywords = brandData?.seoKeywords
    ? brandData.seoKeywords.map((keyword) => `${keyword} ${city.name.toLowerCase()}`).join(", ")
    : `${brandName.toLowerCase()} doorstep service ${city.name.toLowerCase()}, ${brandName.toLowerCase()} repair in ${city.name.toLowerCase()}, ${brandName.toLowerCase()} mechanic ${city.name.toLowerCase()}`;

  return {
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
  };
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

  return (
    <BrandCityClient
      brandSlug={normalizedBrandSlug}
      citySlug={city.slug}
      cityName={city.name}
      localities={city.brandPageLocalities}
      otherCities={otherCities}
    />
  );
}
