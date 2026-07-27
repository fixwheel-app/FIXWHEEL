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
    title: `Bike Mechanic in ${data.name}, Gurgaon – Doorstep Two Wheeler Repair | FixWheel`,
    description: `Book a verified bike mechanic in ${data.name}, Gurugram for engine oil change, brake repair, battery replacement, tyre puncture & more. Doorstep two-wheeler service at home — arrives in ${data.eta}. Flat rates, 15-day warranty. FixWheel.`,
    keywords: [
      `bike mechanic in ${data.name}`,
      `bike mechanic near me ${data.name}`,
      `two wheeler mechanic in ${data.name} Gurgaon`,
      `doorstep bike repair ${data.name}`,
      `motorcycle repair at home ${data.name}`,
      `scooter mechanic ${data.name} Gurugram`,
      `bike service at home in ${data.name}`,
      `engine oil change ${data.name}`,
      `bike repair near me ${data.name} Gurgaon`,
      `Activa service ${data.name}`,
      `Royal Enfield mechanic ${data.name}`,
      `scooty repair ${data.name}`,
      `tyre puncture repair ${data.name}`,
      `battery replacement bike ${data.name}`,
      `brake repair bike ${data.name}`,
      "doorstep two wheeler service Gurgaon",
      "mobile bike mechanic Gurugram",
      "two wheeler repair at home Gurgaon",
      `home bike service ${data.name}`,
      "bike mechanic near me Gurgaon"
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/gurgaon/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Bike Mechanic in ${data.name}, Gurgaon – Doorstep Two Wheeler Repair | FixWheel`,
      description: `Book a verified bike mechanic in ${data.name}, Gurugram for engine oil change, brake repair, battery replacement & more. Doorstep service, arrives in ${data.eta}. Flat rates, 15-day warranty.`,
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
    "@type": "LocalBusiness",
    "name": "FixWheel",
    "description": `Doorstep bike mechanic in ${data.name}, Gurgaon. Book engine oil change, brake repair, battery replacement, tyre puncture, and full two-wheeler servicing at home. Covers ${data.subRegionText} with flat pricing and 15-day warranty.`,
    "url": `https://www.fixwheel.app/gurgaon/${params.locality}`,
    "telephone": "+91-87459-45682",
    "image": "https://www.fixwheel.app/icon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carterpuri Rd, near Saat Phere Garden, Block H, Ashok Vihar Phase III Extension",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 77.0266
    },
    "areaServed": [
      { "@type": "Place", "name": `${data.name}, Gurugram, Haryana` },
      { "@type": "Place", "name": "Gurugram" },
      { "@type": "Place", "name": "Gurgaon" }
    ],
    "serviceType": "Doorstep Bike Repair and Two Wheeler Servicing",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.aggregateRating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": data.reviewCount,
      "reviewCount": data.reviewCount
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Bike Repair Services in ${data.name}, Gurgaon`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Basic Bike Service", "description": "Brake adjustment, chain lube, spark plug clean, air filter check, 21-point safety inspection." },
          "price": "550", "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Engine Oil Change", "description": "Draining old oil, engine flushing, refilling with OEM-grade oil, chain lubrication." },
          "price": "999", "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Battery Replacement", "description": "On-site battery diagnostics, jump-start, and warranty battery replacement." },
          "price": "99", "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Brake Repair", "description": "Brake pad and shoe replacement, cable adjustment, clutch tuning." },
          "price": "199", "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Tyre Puncture Repair", "description": "On-site tubeless and tube tyre puncture repair at your doorstep." },
          "price": "99", "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Comprehensive Bike Service", "description": "Full 21-point service including oil change, brake check, chain, spark plug, and electrical inspection." },
          "price": "1499", "priceCurrency": "INR"
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
