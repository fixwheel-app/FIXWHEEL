import type { Metadata } from "next";
import FaridabadClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Bike Mechanic Near Me in Faridabad – Doorstep Bike Repair Service | FixWheel",
  description: "Looking for a bike mechanic near me in Faridabad? FixWheel sends verified mechanics to your home, office, or roadside 24/7. Doorstep bike repair & scooty service across NIT, Sector 15, 16, 17, 21, Ballabhgarh & all Faridabad areas. Starting ₹499.",
  keywords: [
    "bike mechanic near me Faridabad",
    "two wheeler mechanic near me Faridabad",
    "bike repair near me Faridabad",
    "sports bike repair near me Faridabad",
    "sports bike mechanic near me Faridabad",
    "ev scooter repair near me Faridabad",
    "electric scooter repair near me Faridabad",
    "royal enfield mechanic near me Faridabad",
    "scooty repair near me Faridabad",
    "bike service near me Faridabad",
    "bike repair at home Faridabad",
    "doorstep bike service Faridabad",
    "scooty mechanic at home Faridabad",
    "scooty repair Faridabad",
    "scooter repair at home Faridabad",
    "scooter mechanic near me Faridabad",
    "24/7 bike mechanic near me Faridabad",
    "bike mechanic on call Faridabad",
    "two wheeler mechanic in Faridabad with phone number",
    "bike repair at doorstep Faridabad",
    "bike mechanic near me open now Faridabad",
    "doorstep bike service near me Faridabad",
    "mobile bike mechanic Faridabad",
    "bike electrician near me Faridabad",
    "online bike mechanic Faridabad",
    "bike repair shops near me Faridabad",
    "bike mechanic NIT Faridabad",
    "bike mechanic Sector 15 Faridabad",
    "bike mechanic Sector 16 Faridabad",
    "bike mechanic Ballabhgarh",
    "doorstep bike repair Surajkund Faridabad",
    "bike repair Greater Faridabad"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/faridabad",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Bike Repair Service in Faridabad",
  "description": "Verified mechanics come to your home, office, or roadside in Faridabad to repair your bike or scooter. Covering NIT, Sector 15, 16, 21, Ballabhgarh, Suraj Kund and all Faridabad areas.",
  "url": "https://www.fixwheel.app/faridabad",
  "serviceType": "Two Wheeler Repair and Maintenance",
  "areaServed": {
    "@type": "City",
    "name": "Faridabad",
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
    "priceRange": "₹199 - ₹18000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bike Repair Services in Faridabad",
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
          "description": "Flat tyre repair on the spot, wherever you are in Faridabad."
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
        "price": "199",
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
      "name": "How quickly can a mechanic reach me in Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most Faridabad sectors and NIT areas, our mechanics arrive within 45 minutes of booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "What does doorstep bike repair cost in Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic service starts from ₹499 depending on your bike model. We confirm the exact price before starting any work."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Faridabad does FixWheel cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all major Faridabad sectors (Sector 15, 16, 21, 37, 86, etc.) as well as NIT, Old Faridabad, Ballabhgarh, and Suraj Kund."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roadside help in Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we dispatch mechanics for roadside breakdowns across our Faridabad service area, including Mathura Road and Suraj Kund Road. Available 24/7."
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

export default function FaridabadPage() {
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
      <FaridabadClientPage />
    </>
  );
}
