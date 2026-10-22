import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ElectricVehicleLayout from "@/app/electric-vehicle/ElectricVehicleLayout";
import { CITIES_DB } from "@/lib/cityLocalityData";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { SERVICES_DB } from "@/lib/servicesData";
import { completePageMetadata } from "@/lib/seoMetadata";

const service = SERVICES_DB["electric-scooter-repair"];
const siteUrl = "https://www.fixwheel.app";

function getLocality(citySlug: string, localitySlug: string) {
  const city = CITIES_DB[citySlug];
  const locality = city?.db[localitySlug];
  if (!city || !locality) notFound();
  return { city, locality };
}

export function getEvLocalitySlugs(citySlug: string) {
  return Object.keys(CITIES_DB[citySlug]?.db || {});
}

export function generateEvLocalityMetadata(citySlug: string, localitySlug: string): Metadata {
  const { city, locality } = getLocality(citySlug, localitySlug);
  const url = `${siteUrl}/${citySlug}/${localitySlug}/electric-vehicle`;
  const title = `Electric Scooter & EV Repair in ${locality.name}, ${city.name} | FixWheel`;
  const description = `Book doorstep electric scooter and EV repair in ${locality.name}, ${city.name}. Get help with charging issues, dashboard warnings, brakes and routine maintenance. Model compatibility is confirmed before service.`;

  return completePageMetadata({
    title,
    description,
    keywords: [
      `electric scooter repair in ${locality.name}`,
      `electric scooter service in ${locality.name}`,
      `EV service in ${locality.name} ${city.name}`,
      `doorstep EV mechanic ${locality.name}`,
      `electric scooter charging repair ${locality.name}`,
      `EV battery check ${locality.name}`,
      `Ola S1 service ${locality.name}`,
      `Ather 450 service ${locality.name}`,
      `TVS iQube service ${locality.name}`,
      `Bajaj Chetak service ${locality.name}`,
    ],
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
  });
}

export async function renderEvLocality(citySlug: string, localitySlug: string) {
  const { city, locality } = getLocality(citySlug, localitySlug);
  const url = `${siteUrl}/${citySlug}/${localitySlug}/electric-vehicle`;
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Electric scooter and EV repair in ${locality.name}, ${city.name}`,
        url,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Place", name: `${locality.name}, ${city.name}` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: city.name, item: `${siteUrl}/${citySlug}` },
          { "@type": "ListItem", position: 3, name: locality.name, item: `${siteUrl}/${citySlug}/${localitySlug}` },
          { "@type": "ListItem", position: 4, name: "Electric Vehicle Repair", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ElectricVehicleLayout
      service={service}
      bikesServiced={String(stats.bikes_serviced)}
      rating={stats.average_rating}
      locality={{ name: locality.name, slug: localitySlug, cityName: city.name, citySlug }}
    />
  </>;
}
