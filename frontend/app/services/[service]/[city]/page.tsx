import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES_DB);
  const citySlugs = Object.keys(CITIES_DB);

  const params: { service: string; city: string }[] = [];
  for (const service of serviceSlugs) {
    for (const city of citySlugs) {
      params.push({ service, city });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; city: string };
}): Promise<Metadata> {
  const serviceData = SERVICES_DB[params.service];
  const cityData = CITIES_DB[params.city];
  if (!serviceData || !cityData) return {};

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi NCR.*$/i, "");

  return {
    title: `${cleanTitle} in ${cityData.name} – Doorstep Repair & Service | FixWheel`,
    description: `Book doorstep ${cleanTitle.toLowerCase()} in ${cityData.name}. Certified mechanics for Yamaha, Honda, Royal Enfield, Hero, TVS, KTM & EVs. Arrives in 45 mins with genuine OEM parts. FixWheel.`,
    keywords: [
      `${cleanTitle.toLowerCase()} in ${cityData.name}`,
      `${cleanTitle.toLowerCase()} near me ${cityData.name}`,
      `bike repair near me ${cityData.name}`,
      `sports bike repair near me ${cityData.name}`,
      `ev scooter repair near me ${cityData.name}`,
      `doorstep bike repair ${cityData.name}`,
      ...serviceData.keywords.map((k) => `${k} ${cityData.name}`),
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/services/${params.service}/${params.city}`,
    },
    openGraph: {
      type: "website",
      title: `${cleanTitle} in ${cityData.name} – Doorstep Repair | FixWheel`,
      description: `Book doorstep ${cleanTitle.toLowerCase()} in ${cityData.name}. Certified mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/services/${params.service}/${params.city}`,
    },
  };
}

export default function CityServicePage({
  params,
}: {
  params: { service: string; city: string };
}) {
  const serviceData = SERVICES_DB[params.service];
  const cityData = CITIES_DB[params.city];

  if (!serviceData || !cityData) {
    notFound();
  }

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi NCR.*$/i, "");

  return (
    <ServicePageTemplate
      {...serviceData}
      title={`${cleanTitle} at Doorstep in ${cityData.name}`}
      locationName={cityData.name}
      locationSlug={cityData.slug}
    />
  );
}
