import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALITY_DB } from "./localityData";
import DelhiLocalityClientPage from "./page.client";

export async function generateStaticParams() {
  return Object.keys(LOCALITY_DB).map((locality) => ({
    locality,
  }));
}

export async function generateMetadata({ params }: { params: { locality: string } }): Promise<Metadata> {
  const data = LOCALITY_DB[params.locality];
  if (!data) return {};

  return {
    title: `Bike Mechanic in ${data.name}, Delhi – Doorstep Two Wheeler Repair | FixWheel`,
    description: `Book a verified bike mechanic in ${data.name}, Delhi for engine oil change, brake repair, battery replacement, tyre puncture & more. Doorstep two-wheeler service at home — arrives in ${data.eta}. Flat rates, 15-day warranty. FixWheel.`,
    keywords: [
      `bike mechanic in ${data.name} Delhi`,
      `bike mechanic near me ${data.name}`,
      `two wheeler mechanic in ${data.name}`,
      `doorstep bike repair ${data.name} Delhi`,
      `motorcycle repair at home ${data.name}`,
      `scooter mechanic ${data.name}`,
      `bike service at home in ${data.name} Delhi`,
      `engine oil change ${data.name}`,
      `bike repair near me ${data.name} Delhi`,
      `Activa service ${data.name}`,
      `Royal Enfield mechanic ${data.name} Delhi`,
      `scooty repair ${data.name}`,
      `scooty mechanic at home ${data.name}`,
      `scooter repair at home ${data.name} Delhi`,
      `tyre puncture repair ${data.name}`,
      `battery replacement bike ${data.name}`,
      `brake repair bike ${data.name}`,
      `24/7 bike mechanic near me ${data.name}`,
      `bike mechanic on call ${data.name}`,
      `bike mechanic near me open now ${data.name}`,
      `two wheeler mechanic in ${data.name} Delhi with phone number`,
      "doorstep two wheeler service Delhi",
      "mobile bike mechanic Delhi",
      "two wheeler repair at home Delhi NCR",
      `home bike service ${data.name}`,
      "bike mechanic near me Delhi"
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/delhi/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Bike Mechanic in ${data.name}, Delhi – Doorstep Two Wheeler Repair | FixWheel`,
      description: `Book a verified bike mechanic in ${data.name}, Delhi for engine oil change, brake repair, battery replacement & more. Doorstep service, arrives in ${data.eta}. Flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/delhi/${params.locality}`,
    },
  };
}

export default function LocalityPage({ params }: { params: { locality: string } }) {
  const data = LOCALITY_DB[params.locality];
  if (!data) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fixwheel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Delhi", "item": "https://www.fixwheel.app/delhi" },
      { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.fixwheel.app/delhi/${params.locality}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FixWheel",
    "description": `Doorstep bike mechanic in ${data.name}, Delhi. Book engine oil change, brake repair, battery replacement, tyre puncture, and full two-wheeler servicing at home. Covers ${data.subRegionText} with flat pricing and 15-day warranty.`,
    "url": `https://www.fixwheel.app/delhi/${params.locality}`,
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
      { "@type": "Place", "name": `${data.name}, New Delhi, Delhi` },
      { "@type": "Place", "name": "New Delhi" },
      { "@type": "Place", "name": "Delhi" }
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
      "name": `Bike Repair Services in ${data.name}, Delhi`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Basic Bike Service", "description": "Brake adjustment, chain lube, spark plug clean, air filter check, 21-point safety inspection." },
          "price": "499", "priceCurrency": "INR"
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
        "name": `Is there a 24/7 bike mechanic on call near me in ${data.name}, Delhi?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. FixWheel provides 24/7 bike mechanic service in ${data.name}, Delhi. Call +91-87459-45682 or book on fixwheel.app to get a verified mechanic on call at your doorstep any time — day or night.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you offer scooty mechanic at home service in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Our mechanics come to your home or parking spot in ${data.name} for complete scooty repair and servicing. We handle Activa, Jupiter, Dio, Access 125, and all scooter models — oil change, brake repair, puncture fix, and battery replacement.`
        }
      },
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
        "name": `How fast can a mechanic reach me in ${data.name}, Delhi?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `On average, our mobile mechanics stationed across Delhi reach ${data.name} locations within ${data.eta}.`
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
      <DelhiLocalityClientPage slug={params.locality} />
    </>
  );
}
