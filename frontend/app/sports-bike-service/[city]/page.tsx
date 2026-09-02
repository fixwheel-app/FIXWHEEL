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
    title: `Sports Bike Service in ${cityData.name} – Doorstep Repair & Service | FixWheel`,
    description: `Book doorstep sports bike service in ${cityData.name}. Certified mechanics for Yamaha R15, MT-15, KTM RC, TVS Apache & Ninja. Arrives in 45 mins with genuine OEM parts. FixWheel.`,
    keywords: [
      `sports bike service in ${cityData.name}`,
      `sports bike repair near me ${cityData.name}`,
      `yamaha r15 service in ${cityData.name}`,
      `ktm rc repair in ${cityData.name}`,
      `doorstep sports bike mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/sports-bike-service/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Sports Bike Service in ${cityData.name} – Doorstep Repair | FixWheel`,
      description: `Book doorstep sports bike service in ${cityData.name}. Certified mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/sports-bike-service/${citySlug}`,
    },
  };
}

export default function SportsBikeCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["sports-bike-service"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="sports-bike-service"
      title={`Sports Bike Service at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
