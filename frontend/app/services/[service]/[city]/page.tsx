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

function resolveLocalityData(cityConfig: any, citySlug: string, localitySlug: string) {
  if (!cityConfig || !cityConfig.db) return null;

  if (cityConfig.db[localitySlug]) return cityConfig.db[localitySlug];

  const cleanSlug = localitySlug.replace(new RegExp(`-${citySlug}$`, "i"), "");
  if (cityConfig.db[cleanSlug]) return cityConfig.db[cleanSlug];

  const aliases: Record<string, string> = {
    "connaught-place": "cp",
    "palam-vihar": "palam-vihar",
    "saket": "saket",
    "lajpat-nagar": "lajpat-nagar",
  };
  const targetKey = aliases[localitySlug];
  if (targetKey && cityConfig.db[targetKey]) return cityConfig.db[targetKey];

  const formattedName = localitySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    name: formattedName,
    slug: localitySlug,
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.7",
    reviewCount: "350",
    subRegionText: `${formattedName} stretch and local residential sectors in ${cityConfig.name}.`,
    heroText: `Doorstep two-wheeler repair and maintenance service in ${formattedName}, ${cityConfig.name}. Fast 45-minute arrival.`,
    whyChooseText: `Certified mechanics dispatch directly to your home, office, or roadside location in ${formattedName}.`,
    coveragePoints: [`${formattedName} main road`, `${formattedName} residential gate`],
    reviews: [],
    faqs: [],
    topServices: [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; city: string };
}): Promise<Metadata> {
  // Case 1: Standard Service + City (/services/engine-repair/gurgaon)
  if (SERVICES_DB[params.service] && CITIES_DB[params.city]) {
    const serviceData = SERVICES_DB[params.service];
    const cityData = CITIES_DB[params.city];

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

  // Case 2: City + Locality (/services/ghaziabad/gt-road, /services/noida/noida-extension)
  if (CITIES_DB[params.service]) {
    const cityConfig = CITIES_DB[params.service];
    const localityData = resolveLocalityData(cityConfig, params.service, params.city);
    if (localityData) {
      return {
        title: `Doorstep Bike Repair in ${localityData.name}, ${cityConfig.name} | FixWheel`,
        description: `Book verified doorstep bike mechanic in ${localityData.name}, ${cityConfig.name}. Fast 45-minute arrival for all two-wheelers. Flat rates, 15-day warranty.`,
        alternates: {
          canonical: `https://www.fixwheel.app/services/${params.service}/${params.city}`,
        },
      };
    }
  }

  return {};
}

export default function CityServicePage({
  params,
}: {
  params: { service: string; city: string };
}) {
  // Case 1: Standard Service + City (/services/engine-repair/gurgaon)
  if (SERVICES_DB[params.service] && CITIES_DB[params.city]) {
    const serviceData = SERVICES_DB[params.service];
    const cityData = CITIES_DB[params.city];

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

  // Case 2: City + Locality (/services/ghaziabad/gt-road, /services/noida/noida-extension)
  if (CITIES_DB[params.service]) {
    const cityConfig = CITIES_DB[params.service];
    const localityData = resolveLocalityData(cityConfig, params.service, params.city);

    if (localityData) {
      const defaultService = SERVICES_DB["basic-service"] || Object.values(SERVICES_DB)[0];
      const localizedLead = `Doorstep bike repair & two-wheeler mechanic service now available in ${localityData.name}, ${cityConfig.name}. Mobile mechanics arrive in 45 minutes with genuine OEM parts.`;

      return (
        <ServicePageTemplate
          {...defaultService}
          title={`Doorstep Bike Repair in ${localityData.name}, ${cityConfig.name}`}
          lead={localizedLead}
          locationName={`${localityData.name}, ${cityConfig.name}`}
          locationSlug={params.city}
        />
      );
    }
  }

  notFound();
}
