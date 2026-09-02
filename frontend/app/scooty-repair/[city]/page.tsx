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
    title: `Scooty & Scooter Repair in ${cityData.name} – Doorstep Service | FixWheel`,
    description: `Book doorstep scooty & scooter repair in ${cityData.name}. Certified mechanics for Honda Activa, TVS Jupiter, Suzuki Access & Ntorq. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `scooty repair in ${cityData.name}`,
      `honda activa repair near me ${cityData.name}`,
      `tvs jupiter doorstep service in ${cityData.name}`,
      `access 125 mechanic ${cityData.name}`,
      `doorstep scooter mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/scooty-repair/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Scooty Repair in ${cityData.name} – Doorstep Service | FixWheel`,
      description: `Book doorstep scooty & scooter repair in ${cityData.name}. Certified mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/scooty-repair/${citySlug}`,
    },
  };
}

export default function ScootyCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["scooty-repair"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="scooty-repair"
      title={`Scooty & Scooter Repair at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
