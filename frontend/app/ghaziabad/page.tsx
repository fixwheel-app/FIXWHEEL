import type { Metadata } from "next";
import GhaziabadClientPage from "./page.client";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Doorstep Two-Wheeler Repair & Service in Ghaziabad | FixWheel",
  description: "Book verified doorstep two-wheeler service in Ghaziabad from 8 AM to 10 PM. Get home, office, and roadside repair support across major Ghaziabad areas with FixWheel.",
  keywords: [
    "two-wheeler mechanic near me Ghaziabad",
    "two wheeler mechanic near me Ghaziabad",
    "two-wheeler repair near me Ghaziabad",
    "sports motorcycle repair near me Ghaziabad",
    "sports motorcycle mechanic near me Ghaziabad",
    "ev scooter repair near me Ghaziabad",
    "electric scooter repair near me Ghaziabad",
    "royal enfield mechanic near me Ghaziabad",
    "scooty repair near me Ghaziabad",
    "two-wheeler service near me Ghaziabad",
    "two-wheeler repair at home Ghaziabad",
    "doorstep two-wheeler service Ghaziabad",
    "scooty mechanic at home Ghaziabad",
    "scooty repair Ghaziabad",
    "scooter repair at home Ghaziabad",
    "scooter mechanic near me Ghaziabad",
    "24/7 emergency roadside two-wheeler assistance Ghaziabad",
    "two-wheeler mechanic on call Ghaziabad",
    "two wheeler mechanic in Ghaziabad with phone number",
    "two-wheeler repair at doorstep Ghaziabad",
    "two-wheeler mechanic near me open now Ghaziabad",
    "doorstep two-wheeler service near me Ghaziabad",
    "mobile two-wheeler mechanic Ghaziabad",
    "two-wheeler electrician near me Ghaziabad",
    "online two-wheeler mechanic Ghaziabad",
    "two-wheeler repair shops near me Ghaziabad",
    "two-wheeler mechanic Indirapuram",
    "two-wheeler mechanic Vaishali Ghaziabad",
    "two-wheeler repair Kaushambi",
    "two-wheeler mechanic Raj Nagar Extension",
    "doorstep two-wheeler repair Vasundhara Ghaziabad",
    "two-wheeler repair Crossings Republik Ghaziabad"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/ghaziabad",
  },
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Two-Wheeler Repair Service in Ghaziabad",
  "description": "Verified mechanics come to your home, office, or roadside in Ghaziabad to repair your two-wheeler. Covering Indirapuram, Vaishali, Kaushambi, Raj Nagar and all Ghaziabad areas.",
  "url": "https://www.fixwheel.app/ghaziabad",
  "serviceType": "Two Wheeler Repair and Maintenance",
  "areaServed": {
    "@type": "City",
    "name": "Ghaziabad",
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
      "addressLocality": "Ghaziabad",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Two-Wheeler Repair Services in Ghaziabad",
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
          "description": "Flat tyre repair on the spot, wherever you are in Ghaziabad."
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
          "description": "Battery testing, jump-start, and full battery replacement."
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
      "name": "How quickly can a mechanic reach me in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most Ghaziabad sectors and residential blocks, our mechanics arrive within 45 minutes of booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "What does doorstep two-wheeler repair cost in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic service starts from ₹550 depending on your two-wheeler model. We confirm the exact price before starting any work."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Ghaziabad does FixWheel cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all major locations including Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension, Sanjay Nagar, and Crossings Republik."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roadside help in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we dispatch mechanics for roadside breakdowns across our Ghaziabad service area, including NH-24 and GT Road. Available 24/7."
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

export default function GhaziabadPage() {
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
      <GhaziabadClientPage />
    </>
  );
}
