import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScootyRepairLayout from "@/app/scooty-repair/ScootyRepairLayout";
import { SCOOTER_CITIES } from "@/app/scooty-repair/cityContent";
import CruiserBikeLayout, { getCruiserFaqs } from "@/app/cruiser-bike/CruiserBikeLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { CITIES_DB } from "@/lib/cityLocalityData";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { SERVICES_DB } from "@/lib/servicesData";

export const BIKE_TYPE_SLUGS = [
  "scooty-repair",
  "electric-vehicle",
  "sports-bike",
  "premium-bike",
  "cruiser-bike",
] as const;

const BIKE_TYPE_SET = new Set<string>(BIKE_TYPE_SLUGS);
const BIKE_TYPE_SERVICE_BY_ROUTE: Record<(typeof BIKE_TYPE_SLUGS)[number], string> = {
  "scooty-repair": "scooty-repair",
  "electric-vehicle": "electric-scooter-repair",
  "sports-bike": "sports-bike-service",
  "premium-bike": "premium-bike-service",
  "cruiser-bike": "cruiser-bike-service",
};
const BIKE_TYPE_SERVICE_SET = new Set<string>([
  "commuter-bike-service",
  ...Object.values(BIKE_TYPE_SERVICE_BY_ROUTE),
]);

export function isBikeTypeSlug(slug: string) {
  return BIKE_TYPE_SET.has(slug);
}

export function getServiceSlugs() {
  return Object.keys(SERVICES_DB).filter((slug) => !BIKE_TYPE_SERVICE_SET.has(slug));
}

function getCity(citySlug: string) {
  return CITIES_DB[citySlug.toLowerCase()];
}

function cleanServiceTitle(title: string) {
  return title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi.*$/i, "")
    .trim();
}

function buildMetadata(serviceSlug: string, citySlug: string, bikeTypeSlug?: string): Metadata {
  const service = SERVICES_DB[serviceSlug];
  const city = getCity(citySlug);

  if (!service || !city) return {};

  const serviceName = cleanServiceTitle(service.title);
  const placeName = city.name;
  const path = `/${citySlug}/${bikeTypeSlug || `services/${serviceSlug}`}`;
  const title = `${serviceName} in ${placeName} – Doorstep Service | FixWheel`;
  const description = `Book doorstep ${serviceName.toLowerCase()} in ${placeName}. Verified mechanics, transparent pricing, and a 15-day labor warranty.`;

  return {
    title,
    description,
    keywords: [
      `${serviceName.toLowerCase()} in ${placeName}`,
      `${serviceName.toLowerCase()} near me ${placeName}`,
      `doorstep two-wheeler service ${placeName}`,
      ...service.keywords.map((keyword) => `${keyword} ${placeName}`),
    ],
    alternates: { canonical: `https://www.fixwheel.app${path}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `https://www.fixwheel.app${path}`,
    },
  };
}

export function generateCityServiceMetadata(citySlug: string, serviceSlug: string) {
  if (BIKE_TYPE_SERVICE_SET.has(serviceSlug)) return {};
  return buildMetadata(serviceSlug, citySlug);
}

export function generateCityBikeTypeMetadata(citySlug: string, bikeTypeSlug: string) {
  if (!isBikeTypeSlug(bikeTypeSlug)) return {};
  if (bikeTypeSlug === "cruiser-bike") {
    const city = getCity(citySlug);
    if (!city) return {};
    const canonical = `https://www.fixwheel.app/${citySlug}/cruiser-bike`;
    const title = `Cruiser Bike Service in ${city.name} – Doorstep Service | FixWheel`;
    const description = `Book doorstep cruiser and modern-classic motorcycle service in ${city.name}. Chain care, brakes, battery checks and routine maintenance with transparent pricing.`;
    return {
      title,
      description,
      keywords: [
        `cruiser bike service in ${city.name}`,
        `cruiser bike mechanic near me ${city.name}`,
        `Royal Enfield service at home ${city.name}`,
        `Bajaj Avenger doorstep service ${city.name}`,
        `Honda CB350 service ${city.name}`,
      ],
      alternates: { canonical },
      openGraph: { type: "website", title, description, url: canonical },
    };
  }
  if (bikeTypeSlug === "scooty-repair") {
    const city = getCity(citySlug);
    const content = SCOOTER_CITIES[citySlug];
    if (!city || !content) return {};

    const canonical = `https://www.fixwheel.app/${citySlug}/scooty-repair`;
    return {
      title: `Scooty & Scooter Repair in ${city.name} – Doorstep Service | FixWheel`,
      description: content.description,
      keywords: [
        `scooty repair in ${city.name}`,
        `honda activa repair near me ${city.name}`,
        `tvs jupiter doorstep service in ${city.name}`,
        `access 125 mechanic ${city.name}`,
        `doorstep scooter mechanic ${city.name}`,
      ],
      alternates: { canonical },
      openGraph: {
        type: "website",
        title: `Scooty Repair in ${city.name} – Doorstep Service | FixWheel`,
        description: content.description,
        url: canonical,
      },
    };
  }
  const serviceSlug = BIKE_TYPE_SERVICE_BY_ROUTE[bikeTypeSlug as (typeof BIKE_TYPE_SLUGS)[number]];
  return buildMetadata(serviceSlug, citySlug, bikeTypeSlug);
}

function renderLocationService(serviceSlug: string, citySlug: string) {
  const service = SERVICES_DB[serviceSlug];
  const city = getCity(citySlug);

  if (!service || !city) notFound();

  const serviceName = cleanServiceTitle(service.title);

  return (
    <ServicePageTemplate
      {...service}
      serviceId={serviceSlug}
      title={`${serviceName} at Doorstep in ${city.name}`}
      locationName={city.name}
      locationSlug={citySlug}
    />
  );
}

export function renderCityService(citySlug: string, serviceSlug: string) {
  if (BIKE_TYPE_SERVICE_SET.has(serviceSlug)) notFound();
  return renderLocationService(serviceSlug, citySlug);
}

export function renderCityBikeType(citySlug: string, bikeTypeSlug: string) {
  if (!isBikeTypeSlug(bikeTypeSlug)) notFound();
  if (bikeTypeSlug === "cruiser-bike") {
    return <CruiserCityRoute citySlug={citySlug} />;
  }
  if (bikeTypeSlug === "scooty-repair") {
    return <ScootyCityRoute citySlug={citySlug} />;
  }
  const serviceSlug = BIKE_TYPE_SERVICE_BY_ROUTE[bikeTypeSlug as (typeof BIKE_TYPE_SLUGS)[number]];
  return renderLocationService(serviceSlug, citySlug);
}

async function CruiserCityRoute({ citySlug }: { citySlug: string }) {
  const city = getCity(citySlug);
  const content = SCOOTER_CITIES[citySlug];
  if (!city || !content) notFound();

  const stats = await getPublicStatsForCity("global").catch(
    () => DEFAULT_PUBLIC_STATS.global,
  );
  const url = `https://www.fixwheel.app/${citySlug}/cruiser-bike`;
  const faqs = getCruiserFaqs(city.name);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Doorstep cruiser bike service in ${city.name}`,
        url,
        serviceType: "Cruiser and modern-classic motorcycle service",
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: { "@type": "City", name: city.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: city.name, item: `https://www.fixwheel.app/${citySlug}` },
          { "@type": "ListItem", position: 3, name: "Vehicle Type", item: "https://www.fixwheel.app/services" },
          { "@type": "ListItem", position: 4, name: "Cruiser Bike Service", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <CruiserBikeLayout
        bikesServiced={String(stats.bikes_serviced)}
        rating={stats.average_rating}
        city={content}
        areas={[...city.brandPageLocalities, ...(content.additionalAreas || [])]}
      />
    </>
  );
}

async function ScootyCityRoute({ citySlug }: { citySlug: string }) {
  const city = getCity(citySlug);
  const content = SCOOTER_CITIES[citySlug];
  if (!city || !content) notFound();

  const stats = await getPublicStatsForCity("global").catch(
    () => DEFAULT_PUBLIC_STATS.global,
  );
  const url = `https://www.fixwheel.app/${citySlug}/scooty-repair`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Doorstep scooter repair in ${city.name}`,
        url,
        serviceType: "Scooter repair and servicing",
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: { "@type": "City", name: city.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: city.name, item: `https://www.fixwheel.app/${citySlug}` },
          { "@type": "ListItem", position: 3, name: "Vehicle Type", item: "https://www.fixwheel.app/services" },
          { "@type": "ListItem", position: 4, name: "Scooty & Scooter Repair", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ScootyRepairLayout
        bikesServiced={String(stats.bikes_serviced)}
        rating={stats.average_rating}
        city={content}
        areas={[...city.brandPageLocalities, ...(content.additionalAreas || [])]}
      />
    </>
  );
}
