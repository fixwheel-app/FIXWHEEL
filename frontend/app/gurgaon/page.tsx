import type { Metadata } from "next";
import GurgaonClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Doorstep Bike Repair Service in Gurgaon | Two Wheeler Repair | FixWheel",
  description: "Book a verified mechanic for doorstep bike repair service in Gurgaon. Fast two wheeler repair in Gurgaon at your home, office, or roadside starting ₹550.",
  alternates: {
    canonical: "https://www.fixwheel.app/gurgaon",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Bike Repair Service in Gurgaon",
  "description": "Professional doorstep bike and two-wheeler repair service in Gurgaon. Verified mechanics come to your home, office, or roadside location to service and repair your bike or scooter.",
  "url": "https://www.fixwheel.app/gurgaon",
  "serviceType": "Two Wheeler Repair and Maintenance",
  "areaServed": {
    "@type": "City",
    "name": "Gurgaon",
    "alternateName": "Gurugram",
    "containedInPlace": {
      "@type": "State",
      "name": "Haryana",
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
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bike Repair Services in Gurgaon",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Service",
          "description": "Brake adjustment, chain lube, spark plug clean, air filter check, electrical check."
        },
        "price": "550",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "550",
          "priceCurrency": "INR",
          "description": "Starting price for 0-249cc bikes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service with Engine Oil",
          "description": "Old oil drained and disposed, fresh OEM-grade oil refilled, oil filter inspection, spark plug check and chain lube."
        },
        "price": "999",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engine Repair (Half)",
          "description": "Full engine diagnosis, fault repair and component inspection at your doorstep."
        },
        "price": "4500",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Puncture Repair",
          "description": "Flat tyre puncture repair on the spot."
        },
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Disc Replacement",
          "description": "Brake disc replacement, pad or shoe replacement, cable adjustment."
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
          "description": "On-location jump-start for two-wheelers."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Running Repair",
          "description": "Quick on-the-spot fixes for common breakdown issues."
        },
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carbureter Cleaning",
          "description": "Complete carbureter cleaning and tuning."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Inspection with OBD Scanner",
          "description": "Digital diagnostics using an OBD scanner to find hidden engine and electrical faults."
        },
        "price": "199",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chain Sprocket Replacement",
          "description": "Worn chain and sprocket replaced with quality parts."
        },
        "price": "299",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pick and Drop",
          "description": "We pick up your bike, get it serviced, and drop it back at your location."
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
      "name": "How long does doorstep bike service take in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most repairs take 30 to 50 minutes. We tell you the time needed before we start."
      }
    },
    {
      "@type": "Question",
      "name": "How much does doorstep bike service cost in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service starts from ₹550 depending on your bike model. We give you a clear price before starting."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you cover in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all areas and sectors in Gurgaon including DLF Phase 1-5, Sushant Lok, Golf Course Road, Sohna Road, Palam Vihar, Udyog Vihar, Dwarka Expressway, MG Road, Cyber City, South City, Nirvana Country, Huda City Centre, Manesar, Badshahpur, and all other sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book emergency roadside assistance in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our roadside assistance is available 24/7 in Gurgaon."
      }
    },
    {
      "@type": "Question",
      "name": "Do you service Royal Enfield bikes at home in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we repair and service all Royal Enfield models at your home."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a warranty on the repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide a 15-day warranty on our service."
      }
    }
  ]
};

export default function GurgaonServicesPage() {
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
      <GurgaonClientPage />
    </>
  );
}
