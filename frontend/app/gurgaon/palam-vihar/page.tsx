import type { Metadata } from "next";
import PalamViharClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Doorstep Repair in Palam Vihar | Bike Repair in Palam Vihar at Home – FixWheel",
  description: "Get doorstep repair in Palam Vihar for scooters & motorcycles. Vetted mechanics offer bike repair in Palam Vihar at home — Block A–J & Extension in 45 mins.",
  keywords: [
    "doorstep repair near me",
    "doorstep repair in Palam Vihar",
    "bike repair in Palam Vihar at home",
    "two wheeler mechanic near me",
    "bike mechanic near me",
    "scooter service at home in Palam Vihar",
    "doorstep motorcycle repair Palam Vihar"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/gurgaon/palam-vihar",
  },
  openGraph: {
    type: "website",
    title: "Doorstep Repair in Palam Vihar | Bike Repair in Palam Vihar at Home – FixWheel",
    description: "Get doorstep repair in Palam Vihar for scooters & motorcycles. Vetted mechanics offer bike repair in Palam Vihar at home — Block A–J & Extension in 45 mins.",
    url: "https://www.fixwheel.app/gurgaon/palam-vihar",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fixwheel.app/" },
    { "@type": "ListItem", "position": 2, "name": "Gurgaon", "item": "https://www.fixwheel.app/gurgaon" },
    { "@type": "ListItem", "position": 3, "name": "Palam Vihar", "item": "https://www.fixwheel.app/gurgaon/palam-vihar" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Doorstep Repair in Palam Vihar | Bike Repair in Palam Vihar at Home",
  "serviceType": "Doorstep Bike Repair Service",
  "url": "https://www.fixwheel.app/gurgaon/palam-vihar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixWheel",
    "url": "https://www.fixwheel.app/",
    "telephone": "+91-87459-45682"
  },
  "areaServed": { "@type": "Place", "name": "Palam Vihar, Gurugram, Haryana" },
  "description": "Doorstep repair near me and bike repair in Palam Vihar at home. Book a verified two wheeler mechanic near me for doorstep repair in Palam Vihar, covering all Blocks A–J, Palam Vihar Market, Club Road and Extension.",
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
    "name": "Bike Repair Services in Palam Vihar",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Service",
          "description": "Brake adjustment, chain lube, spark plug clean, air filter check, electrical check."
        },
        "price": "550",
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
      "name": "How do I book a service on FixWheel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can call us on the contact number provided, or book directly using the Book Now option."
      }
    },
    {
      "@type": "Question",
      "name": "Does the mechanic come inside my society in Palam Vihar, or do I need to bring the bike to the gate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The mechanic comes to wherever your bike is parked — inside your society, at the gate, or on the road — as long as the RWA allows visitor entry. Most Palam Vihar societies do."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Palam Vihar Extension and the stretch near the Dwarka border?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Palam Vihar Extension and the Dwarka-border stretch are within the regular coverage area, with the same response time as the main blocks."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can a mechanic reach me in Palam Vihar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Average arrival time in Palam Vihar is around 45 minutes, the same standard we maintain across Gurgaon."
      }
    },
    {
      "@type": "Question",
      "name": "What if my street or block in Palam Vihar isn't listed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We still cover it. The listed streets are simply the most requested ones — message us your location and a mechanic will be dispatched."
      }
    }
  ]
};

export default function PalamViharPage() {
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
      <PalamViharClientPage />
    </>
  );
}
