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
    title: `Electric Scooter Repair in ${cityData.name} – Doorstep Service & Battery Check | FixWheel`,
    description: `Book doorstep electric scooter repair in ${cityData.name}. Certified EV mechanics for Ola S1, Ather 450X, TVS iQube & Chetak. Arrives in 45 mins with genuine OEM parts. FixWheel.`,
    keywords: [
      `electric scooter repair in ${cityData.name}`,
      `ev scooter service near me ${cityData.name}`,
      `ola s1 pro repair in ${cityData.name}`,
      `ather 450x doorstep service in ${cityData.name}`,
      `doorstep ev mechanic ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/electric-scooter-repair/${citySlug}`,
    },
    openGraph: {
      type: "website",
      title: `Electric Scooter Repair in ${cityData.name} – Doorstep Service | FixWheel`,
      description: `Book doorstep electric scooter repair in ${cityData.name}. Certified EV mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/electric-scooter-repair/${citySlug}`,
    },
  };
}

export default function ElectricScooterCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const serviceData = SERVICES_DB["electric-scooter-repair"];
  const cityData = CITIES_DB[citySlug];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="electric-scooter-repair"
      title={`Electric Scooter Repair at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
