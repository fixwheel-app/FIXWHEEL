import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ScootyRepairLayout from "../ScootyRepairLayout";
import { SCOOTER_CITIES } from "../cityContent";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";

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
    description: SCOOTER_CITIES[citySlug].description,
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
      description: SCOOTER_CITIES[citySlug].description,
      url: `https://www.fixwheel.app/scooty-repair/${citySlug}`,
    },
  };
}

export default async function ScootyCityPage({
  params,
}: {
  params: { city: string };
}) {
  const citySlug = params.city.toLowerCase();
  if (!ALLOWED_CITIES.includes(citySlug) || !CITIES_DB[citySlug]) {
    notFound();
  }

  const cityData = CITIES_DB[citySlug];
  const content = SCOOTER_CITIES[citySlug];
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const url = "https://www.fixwheel.app/scooty-repair/" + citySlug;
  const structuredData = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "Doorstep scooter repair in " + cityData.name, url, serviceType: "Scooter repair and servicing", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: { "@type": "City", name: cityData.name } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
      { "@type": "ListItem", position: 2, name: "Scooty & Scooter Repair", item: "https://www.fixwheel.app/scooty-repair" },
      { "@type": "ListItem", position: 3, name: cityData.name, item: url }
    ] },
    { "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <ScootyRepairLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} city={content} areas={[...cityData.brandPageLocalities, ...(content.additionalAreas || [])]} />
  </>;
}
