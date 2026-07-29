import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALITY_DB } from "./localityData";
import FaridabadLocalityClientPage from "./page.client";

export async function generateStaticParams() {
  return Object.keys(LOCALITY_DB).map((locality) => ({
    locality,
  }));
}

export async function generateMetadata({ params }: { params: { locality: string } }): Promise<Metadata> {
  const data = LOCALITY_DB[params.locality];
  if (!data) return {};

  return {
    title: `Doorstep Bike Repair in ${data.name}, Faridabad | Two Wheeler Mechanic – FixWheel`,
    description: `Get doorstep bike repair in ${data.name}, Faridabad for all two wheelers. Verified bike mechanics offer doorstep bike service and repair at home — arrival ${data.eta}.`,
    keywords: [
      "doorstep repair near me",
      `doorstep repair in ${data.name}`,
      `bike repair in ${data.name} at home`,
      "two wheeler mechanic near me",
      "bike mechanic near me",
      `scooter service at home in ${data.name}`,
      `doorstep motorcycle repair ${data.name}`
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/faridabad/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Doorstep Bike Repair in ${data.name}, Faridabad | Two Wheeler Mechanic – FixWheel`,
      description: `Get doorstep bike repair in ${data.name}, Faridabad for all two wheelers. Verified bike mechanics offer doorstep bike service and repair at home — arrival ${data.eta}.`,
      url: `https://www.fixwheel.app/faridabad/${params.locality}`,
    },
  };
}

export default function FaridabadLocalityPage({ params }: { params: { locality: string } }) {
  const data = LOCALITY_DB[params.locality];
  if (!data) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fixwheel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Faridabad", "item": "https://www.fixwheel.app/faridabad" },
      { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.fixwheel.app/faridabad/${params.locality}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/Service",
    "name": `Doorstep Bike Repair in ${data.name}, Faridabad | Two Wheeler Mechanic`,
    "serviceType": "Doorstep Bike Repair Service",
    "url": `https://www.fixwheel.app/faridabad/${params.locality}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixWheel",
      "url": "https://www.fixwheel.app/",
      "telephone": "+91-87459-45682"
    },
    "areaServed": { "@type": "Place", "name": `${data.name}, Faridabad, Haryana` },
    "description": `Doorstep repair near me and bike repair in ${data.name} at home. Book a verified two wheeler mechanic near me for doorstep repair in ${data.name}, covering ${data.subRegionText} with flat pricing.`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "473",
      "reviewCount": "473"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Bike Repair Services in ${data.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Service",
            "description": "Brake adjustment, chain lube, spark plug clean, air filter check, electrical check."
          },
          "price": "499",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Oil Change",
            "description": "Draining old oil, engine flushing, refilling with fresh OEM-grade oil, and chain lubrication."
          },
          "price": "999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Replacement",
            "description": "On-site battery health diagnostics, jump-starts, and replacement with warranty batteries."
          },
          "price": "99",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brake Repair",
            "description": "Replacing worn-out brake pads/shoes, cable adjustments, and clutch tuning."
          },
          "price": "199",
          "priceCurrency": "INR"
        }
      ]
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
          "text": `On average, our mobile mechanics stationed across Faridabad reach ${data.name} locations within ${data.eta}.`
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
      <FaridabadLocalityClientPage slug={params.locality} />
    </>
  );
}
