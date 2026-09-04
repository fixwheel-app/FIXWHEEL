import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const EXCLUDED_SERVICES = ["sports-bike-service", "electric-scooter-repair", "royal-enfield-service", "commuter-bike-service", "scooty-repair", "premium-bike-service", "basic-service", "oil-change", "comprehensive-service", "engine-repair", "battery-replacement", "brake-repair", "tyre-replacement", "general-washing"];

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES_DB).filter((s) => !EXCLUDED_SERVICES.includes(s));
  const citySlugs = Object.keys(CITIES_DB);

  const params: { service: string; city: string; locality: string }[] = [];
  for (const service of serviceSlugs) {
    for (const city of citySlugs) {
      const cityConfig = CITIES_DB[city];
      const localitySlugs = Object.keys(cityConfig.db);
      for (const locality of localitySlugs) {
        params.push({ service, city, locality });
      }
    }
  }
  return params;
}

function resolveLocalityData(cityConfig: any, citySlug: string, localitySlug: string) {
  if (!cityConfig || !cityConfig.db) return null;

  // 1. Direct match
  if (cityConfig.db[localitySlug]) return cityConfig.db[localitySlug];

  // 2. Strip city suffix (e.g. sector-15-faridabad -> sector-15)
  const cleanSlug = localitySlug.replace(new RegExp(`-${citySlug}$`, "i"), "");
  if (cityConfig.db[cleanSlug]) return cityConfig.db[cleanSlug];

  // 3. Known aliases
  const aliases: Record<string, string> = {
    "connaught-place": "cp",
    "palam-vihar": "palam-vihar",
    "saket": "saket",
    "lajpat-nagar": "lajpat-nagar",
  };
  const targetKey = aliases[localitySlug];
  if (targetKey && cityConfig.db[targetKey]) return cityConfig.db[targetKey];

  // 4. Dynamic fallback object so NO valid service x city x locality URL returns 404
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
  params: { service: string; city: string; locality: string };
}): Promise<Metadata> {
  const serviceData = SERVICES_DB[params.service];
  const cityConfig = CITIES_DB[params.city];
  if (!serviceData || !cityConfig) return {};

  const localityData = resolveLocalityData(cityConfig, params.city, params.locality);
  if (!localityData) return {};

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi.*$/i, "");

  return {
    title: `${cleanTitle} in ${localityData.name}, ${cityConfig.name} – Doorstep Repair | FixWheel`,
    description: `Book doorstep ${cleanTitle.toLowerCase()} in ${localityData.name}, ${cityConfig.name}. Fast 45-minute mechanic arrival for all two-wheelers in ${localityData.name} (${localityData.subRegionText}). Flat rates, 15-day warranty. FixWheel.`,
    keywords: [
      `${cleanTitle.toLowerCase()} in ${localityData.name}`,
      `${cleanTitle.toLowerCase()} near me ${localityData.name}`,
      `sports bike repair near me ${localityData.name}`,
      `ev scooter repair near me ${localityData.name}`,
      `bike repair near me ${localityData.name} ${cityConfig.name}`,
      `two wheeler mechanic in ${localityData.name}`,
      `doorstep bike repair ${localityData.name}`,
      ...serviceData.keywords.map((k) => `${k} ${localityData.name}`),
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/services/${params.service}/${params.city}/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `${cleanTitle} in ${localityData.name}, ${cityConfig.name} | FixWheel`,
      description: `Doorstep ${cleanTitle.toLowerCase()} in ${localityData.name}, ${cityConfig.name}. Certified mechanics, 45-min arrival, 15-day warranty.`,
      url: `https://www.fixwheel.app/services/${params.service}/${params.city}/${params.locality}`,
    },
  };
}

export default function CityLocalityServicePage({
  params,
}: {
  params: { service: string; city: string; locality: string };
}) {
  if (EXCLUDED_SERVICES.includes(params.service)) {
    notFound();
  }
  const serviceData = SERVICES_DB[params.service];
  const cityConfig = CITIES_DB[params.city];

  if (!serviceData || !cityConfig) {
    notFound();
  }

  const localityData = resolveLocalityData(cityConfig, params.city, params.locality);
  if (!localityData) {
    notFound();
  }

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi.*$/i, "");

  const localizedLead = `${serviceData.lead} Now available with 45-minute doorstep mechanic dispatch in ${localityData.name}, ${cityConfig.name} (${localityData.subRegionText}).`;

  const localizedFaqs = [
    {
      q: `How fast can a mechanic arrive for ${cleanTitle.toLowerCase()} in ${localityData.name}?`,
      a: `Our mobile mechanics arrive at your home, office, or parking location in ${localityData.name} within 45 minutes of booking confirmation.`,
    },
    {
      q: `Do you service gated societies and apartments in ${localityData.name}?`,
      a: `Yes! Our verified mechanics enter all gated residential societies, IT parks, and apartments across ${localityData.name} by completing visitor registration at the security gate.`,
    },
    ...serviceData.faqs,
  ];

  return (
    <ServicePageTemplate
      {...serviceData}
      title={`${cleanTitle} at Doorstep in ${localityData.name}, ${cityConfig.name}`}
      lead={localizedLead}
      faqs={localizedFaqs}
      locationName={`${localityData.name}, ${cityConfig.name}`}
      locationSlug={params.locality}
    />
  );
}
