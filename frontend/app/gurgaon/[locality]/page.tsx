import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALITY_DB } from "./localityData";
import GurgaonLocalityClientPage from "./page.client";

export async function generateStaticParams() {
  return Object.keys(LOCALITY_DB).map((locality) => ({
    locality,
  }));
}

export async function generateMetadata({ params }: { params: { locality: string } }): Promise<Metadata> {
  const data = LOCALITY_DB[params.locality];
  if (!data) return {};

  return {
    title: `Doorstep Repair in ${data.name} | Bike Repair in ${data.name} at Home – FixWheel`,
    description: `Get doorstep repair in ${data.name} for scooters & motorcycles. Verified mechanics offer bike repair in ${data.name} at home — average arrival ${data.eta}.`,
    alternates: {
      canonical: `https://www.fixwheel.app/gurgaon/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Doorstep Repair in ${data.name} | Bike Repair in ${data.name} at Home – FixWheel`,
      description: `Get doorstep repair in ${data.name} for scooters & motorcycles. Verified mechanics offer bike repair in ${data.name} at home — average arrival ${data.eta}.`,
      url: `https://www.fixwheel.app/gurgaon/${params.locality}`,
    },
  };
}

export default function GurgaonLocalityPage({ params }: { params: { locality: string } }) {
  const data = LOCALITY_DB[params.locality];
  if (!data) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fixwheel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Gurgaon", "item": "https://www.fixwheel.app/gurgaon" },
      { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.fixwheel.app/gurgaon/${params.locality}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Doorstep Repair and Bike Repair in ${data.name} at Home`,
    "serviceType": "Doorstep Bike Repair Service",
    "url": `https://www.fixwheel.app/gurgaon/${params.locality}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixWheel",
      "url": "https://www.fixwheel.app/",
      "telephone": "+91-87459-45682"
    },
    "areaServed": { "@type": "Place", "name": `${data.name}, Gurugram, Haryana` },
    "description": `Doorstep bike repair service in ${data.name}, Gurgaon — covering ${data.subRegionText} with verified, background-checked mechanics.`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.aggregateRating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": data.reviewCount,
      "reviewCount": data.reviewCount
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Does the mechanic come inside my society or apartment in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, our mechanics come directly to your residential parking, villa driveway, or apartment space in ${data.name} once society security permits visitor entry.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does doorstep bike repair take in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Minor checkups and engine oil changes take 30 to 45 minutes, while comprehensive services or engine repairs might take longer.`
        }
      },
      {
        "@type": "Question",
        "name": `How fast can a mechanic reach me in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `On average, our mobile mechanics stationed across Gurgaon reach ${data.name} locations within ${data.eta}.`
        }
      },
      ...data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GurgaonLocalityClientPage slug={params.locality} />
    </>
  );
}
