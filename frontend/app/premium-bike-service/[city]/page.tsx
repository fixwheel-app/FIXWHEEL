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
    title: `Premium & Superbike Service in ${cityData.name} – Doorstep Service | FixWheel`,
    description: `Book doorstep premium bike service in ${cityData.name}. Certified superbike mechanics for Kawasaki Ninja, KTM Duke, Dominar, Triumph & BMW. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `premium bike service in ${cityData.name}`,
      `superbike repair near me ${cityData.name}`,
      `kawasaki ninja service in ${cityData.name}`,
      `ktm duke 390 mechanic ${cityData.name}`,
      `doorstep superbike mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/premium-bike-service/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Premium Bike Service in ${cityData.name} – Doorstep Service | FixWheel`,
      description: `Book doorstep premium bike service in ${cityData.name}. Certified superbike mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/premium-bike-service/${citySlug}`,
    },
  };
}

export default function PremiumBikeCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["premium-bike-service"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="premium-bike-service"
      title={`Premium & Superbike Service at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
