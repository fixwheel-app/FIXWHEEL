import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ALLOWED_CITIES = ["gurgaon", "delhi", "noida", "ghaziabad", "faridabad"];

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    return {};
  }

  const cityData = CITIES_DB[citySlug];
  return {
    title: `Bike Repair & Service in ${cityData.name} – At Your Doorstep | FixWheel`,
    description: `Book doorstep commuter bike service in ${cityData.name}. Certified mechanics for Hero Splendor, Honda Shine, Bajaj Pulsar & TVS Raider. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `commuter bike service in ${cityData.name}`,
      `hero splendor repair near me ${cityData.name}`,
      `honda shine doorstep service in ${cityData.name}`,
      `pulsar mechanic ${cityData.name}`,
      `doorstep commuter bike mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/${citySlug}/bike`,
    },
    openGraph: {
      type: "website",
      title: `Bike Repair & Service in ${cityData.name} – Doorstep Repair | FixWheel`,
      description: `Book doorstep commuter bike service in ${cityData.name}. Certified mechanics, 45-min arrival, transparent pricing, 15-day warranty.`,
      url: `https://www.fixwheel.app/${citySlug}/bike`,
    },
  };
}

export default function CommuterBikeCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["commuter-bike-service"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="commuter-bike-service"
      title={`Bike Repair & Service at Your Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
