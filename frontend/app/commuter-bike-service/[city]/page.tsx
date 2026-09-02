import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ALLOWED_CITIES = ["gurgaon", "delhi", "noida", "ghaziabad", "faridabad"];

export async function generateStaticParams() {
  return ALLOWED_CITIES.map((city) => ({ city }));
}

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
    title: `Commuter Bike Service in ${cityData.name} – Doorstep Tune-up | FixWheel`,
    description: `Book doorstep commuter bike service in ${cityData.name}. Certified mechanics for Hero Splendor, Honda Shine, Bajaj Pulsar & TVS Raider. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `commuter bike service in ${cityData.name}`,
      `hero splendor repair near me ${cityData.name}`,
      `honda shine doorstep service in ${cityData.name}`,
      `pulsar mechanic ${cityData.name}`,
      `doorstep commuter bike mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/commuter-bike-service/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Commuter Bike Service in ${cityData.name} – Doorstep Repair | FixWheel`,
      description: `Book doorstep commuter bike service in ${cityData.name}. Certified mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/commuter-bike-service/${citySlug}`,
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
      title={`Commuter Bike Service at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
