import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ALLOWED_CITIES = ["gurgaon", "delhi", "noida", "ghaziabad", "faridabad"];

export async function generateStaticParams() {
  const params: { city: string; locality: string }[] = [];
  for (const city of ALLOWED_CITIES) {
    const cityConfig = CITIES_DB[city];
    if (cityConfig && cityConfig.db) {
      const localitySlugs = Object.keys(cityConfig.db);
      for (const locality of localitySlugs) {
        params.push({ city, locality });
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

  // 4. Fallback formatted object
  const formattedName = localitySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    name: formattedName,
    slug: localitySlug,
    eta: "45 min",
    servicePrice: "499",
    aggregateRating: "4.8",
    reviewCount: "290",
    subRegionText: `${formattedName} stretch and local residential sectors in ${cityConfig.name}.`,
    heroText: `Doorstep electric scooter repair and battery service in ${formattedName}, ${cityConfig.name}. Fast 45-minute arrival.`,
    whyChooseText: `Certified EV mechanics dispatch directly to your home, office, or roadside location in ${formattedName}.`,
    coveragePoints: [`${formattedName} main road`, `${formattedName} residential gate`],
    reviews: [],
    faqs: [],
    topServices: [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: { city: string; locality: string };
}): Promise<Metadata> {
  const citySlug = params.city.toLowerCase();
  const cityConfig = CITIES_DB[citySlug];
  if (!ALLOWED_CITIES.includes(citySlug) || !cityConfig) return {};

  const localityData = resolveLocalityData(cityConfig, citySlug, params.locality);
  if (!localityData) return {};

  return {
    title: `Electric Scooter Repair in ${localityData.name}, ${cityConfig.name} – Doorstep EV Service | FixWheel`,
    description: `Book doorstep electric scooter repair & battery check in ${localityData.name}, ${cityConfig.name}. Certified mechanics for Ola S1, Ather 450X, TVS iQube & Chetak. Arrives in 45 mins. FixWheel.`,
    keywords: [
      `electric scooter repair in ${localityData.name}`,
      `ev scooter service near me ${localityData.name}`,
      `ola s1 repair in ${localityData.name}`,
      `ather 450x repair in ${localityData.name}`,
      `tvs iqube service ${localityData.name}`,
      `doorstep ev mechanic ${localityData.name} ${cityConfig.name}`,
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/electric-scooter-repair/${citySlug}/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Electric Scooter Repair in ${localityData.name}, ${cityConfig.name} | FixWheel`,
      description: `Doorstep electric scooter repair in ${localityData.name}, ${cityConfig.name}. Certified EV mechanics, 45-min arrival, 15-day warranty.`,
      url: `https://www.fixwheel.app/electric-scooter-repair/${citySlug}/${params.locality}`,
    },
  };
}

export default function ElectricScooterLocalityPage({
  params,
}: {
  params: { city: string; locality: string };
}) {
  const citySlug = params.city.toLowerCase();
  const cityConfig = CITIES_DB[citySlug];
  if (!ALLOWED_CITIES.includes(citySlug) || !cityConfig) {
    notFound();
  }

  const localityData = resolveLocalityData(cityConfig, citySlug, params.locality);
  if (!localityData) {
    notFound();
  }

  const serviceData = SERVICES_DB["electric-scooter-repair"];

  const localizedLead = `Doorstep electric scooter repair & battery diagnostic service in ${localityData.name}, ${cityConfig.name}. Verified EV mechanics available with 45-minute arrival across ${localityData.subRegionText}.`;

  const localizedFaqs = [
    {
      q: `How fast can an EV mechanic arrive for electric scooter repair in ${localityData.name}?`,
      a: `Our certified EV mechanics arrive at your doorstep in ${localityData.name} within 45 minutes of booking confirmation with battery diagnostic tools and OEM spares.`,
    },
    {
      q: `Which electric scooter brands do you repair in ${localityData.name}?`,
      a: `We service all major EV scooter models in ${localityData.name} including Ola S1 / S1 Pro / S1 Air, Ather 450X / 450S / Rizta, TVS iQube, Bajaj Chetak, Hero Vida, Revolt RV400, Okinawa, and Pure EV.`,
    },
    ...serviceData.faqs,
  ];

  return (
    <ServicePageTemplate
      {...serviceData}
      serviceId="electric-scooter-repair"
      title={`Electric Scooter Repair at Doorstep in ${localityData.name}, ${cityConfig.name}`}
      lead={localizedLead}
      faqs={localizedFaqs}
      locationName={`${localityData.name}, ${cityConfig.name}`}
      locationSlug={params.locality}
    />
  );
}
