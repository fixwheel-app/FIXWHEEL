import type { Metadata } from "next";
import NoidaClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Doorstep Bike Repair Service in Noida | Two Wheeler Mechanic at Home | FixWheel",
  description: "Book a verified mechanic for doorstep bike repair in Noida. Two wheeler service at your home, office, or roadside across Sector 18, 62, 63, 137, 150 & all Noida sectors. Starting ₹499.",
  alternates: {
    canonical: "https://www.fixwheel.app/noida",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Bike Repair Service in Noida",
  "description": "Verified mechanics come to your home, office, or roadside in Noida to repair your bike or scooter. Covering Sector 18, 62, 137, 150, Greater Noida West, and all Noida sectors.",
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
    "priceRange": "₹99 - ₹18000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bike Repair Services in Noida",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Service",
          "description": "Brake check, chain lube, spark plug clean, air filter inspection, and electrical system check."
        },
        "price": "499",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "499",
          "priceCurrency": "INR",
          "description": "Starting price for 0-249cc bikes"
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
        "price": "199",
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
          "description": "Diagnostic scanner connected to your bike to read fault codes and detect issues."
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
          "description": "We collect your bike, service it, and deliver it back to you."
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
        "text": "In most Noida sectors, our mechanics arrive within 45 minutes of booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "What does doorstep bike repair cost in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic service starts from ₹499 depending on your bike model. We confirm the exact price before starting any work."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Noida does FixWheel cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all major Noida sectors (18, 62, 137, 150, etc.) as well as Greater Noida West, Knowledge Park, and Noida Extension."
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
      "name": "Can you service my EV scooter in Noida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we service Ola, Ather, TVS iQube, and other electric two-wheelers at your doorstep in Noida."
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
