import type { Metadata } from "next";
import NoidaClientPage from "./page.client";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Doorstep Two-Wheeler Repair & Service in Noida | FixWheel",
  description: "Book verified doorstep two-wheeler service in Noida from 8 AM to 10 PM. Get home, office, and roadside repair support across Noida and Greater Noida West with FixWheel.",
  keywords: [
    "two-wheeler mechanic near me Noida",
    "two-wheeler mechanic near me Greater Noida",
    "two-wheeler repair near me Noida",
    "sports motorcycle repair near me Noida",
    "sports motorcycle mechanic near me Noida",
    "ev scooter repair near me Noida",
    "electric scooter repair near me Noida",
    "royal enfield mechanic near me Noida",
    "scooty repair near me Noida",
    "two-wheeler service near me Noida",
    "two-wheeler repair at home Noida",
    "doorstep two-wheeler service Noida",
    "scooty mechanic at home Noida",
    "scooty repair Noida",
    "scooter repair at home Noida",
    "scooter mechanic near me Noida",
    "24/7 emergency roadside two-wheeler assistance Noida",
    "two-wheeler mechanic on call Noida",
    "two wheeler mechanic near me Noida",
    "two wheeler mechanic in Noida with phone number",
    "two-wheeler repair at doorstep Noida",
    "two-wheeler mechanic near me open now Noida",
    "doorstep two-wheeler service near me Noida",
    "mobile two-wheeler mechanic Noida",
    "two-wheeler electrician near me Noida",
    "online two-wheeler mechanic Noida",
    "two-wheeler repair shops near me Noida",
    "two-wheeler mechanic Sector 62 Noida",
    "two-wheeler mechanic Sector 18 Noida",
    "two-wheeler repair Sector 137 Noida",
    "doorstep two-wheeler repair Noida Extension",
    "two wheeler mechanic Greater Noida West"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/noida",
  },
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Two-Wheeler Repair Service in Noida",
  "description": "Verified mechanics come to your home, office, or roadside in Noida to repair your two-wheeler. Covering Sector 18, 62, 137, 150, Greater Noida West, and all Noida sectors.",
  "url": "https://www.fixwheel.app/noida",
  "serviceType": "Two Wheeler Repair and Maintenance",
  "areaServed": {
    "@type": "City",
    "name": "Noida",
    "alternateName": "New Okhla Industrial Development Authority",
    "containedInPlace": {
      "@type": "State",
      "name": "Uttar Pradesh",
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    }
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixWheel",
    "url": "https://www.fixwheel.app",
    "telephone": "+918745945682",
    "email": "support@fixwheel.app",
    "image": "https://www.fixwheel.app/icon.png",
    "priceRange": "₹399 - ₹18000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Two-Wheeler Repair Services in Noida",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Service",
          "description": "Brake check, chain lube, spark plug clean, air filter inspection, and electrical system check."
        },
        "price": "550",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "550",
          "priceCurrency": "INR",
          "description": "Starting price for 0-249cc two-wheelers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service with Engine Oil",
          "description": "Complete oil drain, OEM-grade refill, oil filter check, spark plug inspection and chain lubrication."
        },
        "price": "999",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engine Repair (Half)",
          "description": "Engine diagnosis, fault identification and component-level repair at your doorstep."
        },
        "price": "4500",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Puncture Repair",
          "description": "Flat tyre repair on the spot, wherever you are in Noida."
        },
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brake Disc Replacement",
          "description": "Brake disc, pad, or shoe replacement and cable adjustment at your location."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery Replacement",
          "description": "Battery testing, jump-start assistance, and full replacement."
        },
        "price": "99",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Jump Start",
          "description": "On-location jump-start for two-wheelers that won't start."
        },
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Running Repair",
          "description": "On-the-spot fixes for common two-wheeler breakdowns."
        },
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carburetor Cleaning",
          "description": "Full carburetor disassembly, cleaning, and re-tuning."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OBD Scanner Inspection",
          "description": "Diagnostic scanner connected to your two-wheeler to read fault codes and detect issues."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chain Sprocket Replacement",
          "description": "Worn chain and sprocket replaced with standard-spec parts."
        },
        "price": "299",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pick and Drop",
          "description": "We collect your two-wheeler, service it, and deliver it back to you."
        },
        "price": "199",
        "priceCurrency": "INR"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "473",
    "reviewCount": "473"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can a mechanic reach me in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arrival depends on traffic and mechanic availability in your zone. In many Noida sectors, a mechanic can reach within about 45 minutes after booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Can the mechanic enter my Noida society or office parking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Share the gate, tower, basement, or visitor-entry details while booking. The assigned mechanic will coordinate with you before arrival."
      }
    },
    {
      "@type": "Question",
      "name": "What does doorstep two-wheeler repair cost in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic service starts from ₹550 depending on the vehicle and work required. You receive the quote and approve any extra parts before the mechanic proceeds."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Noida does FixWheel cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coverage includes central Noida, Sector 62, the Expressway sectors, Sector 137 and 150, Noida Extension, Greater Noida West, Knowledge Park, and nearby serviced locations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roadside help in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we dispatch mechanics for roadside breakdowns across our Noida service area. Available 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "Can you inspect an electric scooter in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We support compatible Ola, Ather, TVS iQube, Bajaj Chetak, and other electric two-wheelers for diagnostics and serviceable mechanical or electrical issues."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a warranty on the repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all repairs come with a 15-day labor warranty. If anything goes wrong with the same issue, we send a mechanic back at no extra charge."
      }
    }
  ]
};

export default function NoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NoidaClientPage />
    </>
  );
}
