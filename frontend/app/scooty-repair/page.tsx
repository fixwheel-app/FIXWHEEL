import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ScootyRepairLayout from "./ScootyRepairLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";

export const metadata: Metadata = {
  title: "Doorstep Scooty & Scooter Repair in Delhi NCR | FixWheel",
  description:
    "Book doorstep scooty repair in Delhi NCR. Certified mechanics for Activa, Jupiter, Access, Ntorq in Delhi, Gurgaon, Noida, Ghaziabad, Faridabad. 45-min arrival, 15-day warranty.",
  alternates: {
    canonical: "https://www.fixwheel.app/scooty-repair",
  },
  openGraph: {
    type: "website",
    title: "Doorstep Scooty & Scooter Repair in Delhi NCR | FixWheel",
    description:
      "Book doorstep scooty repair in Delhi NCR. Certified mechanics for Activa, Jupiter, Access, Ntorq in Delhi, Gurgaon, Noida, Ghaziabad, Faridabad. 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/scooty-repair",
  },
};

export default async function ScootyRepairPage() {
  const serviceData = SERVICES_DB["scooty-repair"];
  const publicStats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: serviceData.title,
        serviceType: 'Scooter repair and servicing',
        url: 'https://www.fixwheel.app/scooty-repair',
        provider: { '@id': 'https://www.fixwheel.app/#organization' },
        areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad'].map(name => ({ '@type': 'City', name })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fixwheel.app/' },
          { '@type': 'ListItem', position: 2, name: 'Vehicle Type', item: 'https://www.fixwheel.app/services' },
          { '@type': 'ListItem', position: 3, name: 'Scooty & Scooter Repair', item: 'https://www.fixwheel.app/scooty-repair' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: serviceData.faqs.map(faq => ({
          '@type': 'Question', name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <ScootyRepairLayout bikesServiced={String(publicStats.bikes_serviced)} rating={publicStats.average_rating} />
  </>;
}
