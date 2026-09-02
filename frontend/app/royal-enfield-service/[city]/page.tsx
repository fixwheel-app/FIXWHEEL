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
    title: `Royal Enfield & Bullet Service in ${cityData.name} – Doorstep Repair | FixWheel`,
    description: `Book doorstep Royal Enfield service in ${cityData.name}. Certified mechanics for Classic 350, Bullet, Hunter, Meteor, Himalayan & Interceptor. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `royal enfield service in ${cityData.name}`,
      `bullet 350 repair near me ${cityData.name}`,
      `classic 350 service in ${cityData.name}`,
      `himalayan bike mechanic ${cityData.name}`,
      `doorstep royal enfield mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/royal-enfield-service/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Royal Enfield Service in ${cityData.name} – Doorstep Repair | FixWheel`,
      description: `Book doorstep Royal Enfield service in ${cityData.name}. Certified RE mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/royal-enfield-service/${citySlug}`,
    },
  };
}

export default function RoyalEnfieldCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["royal-enfield-service"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="royal-enfield-service"
      title={`Royal Enfield Service at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
