import type { Metadata } from "next";
import GurgaonClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Bike Mechanic Near Me in Gurgaon – Doorstep Bike Repair Service | FixWheel",
  description: "Looking for a bike mechanic near me in Gurgaon? FixWheel sends a verified mechanic on call to your home, office, or roadside 24/7. Doorstep bike repair, scooty repair & scooter service in Gurugram. Call +91-87459-45682. Starting ₹550.",
  keywords: [
    "bike mechanic near me Gurgaon",
    "bike mechanic near me Gurugram",
    "bike repair near me Gurgaon",
    "sports bike repair near me Gurgaon",
    "sports bike mechanic near me Gurgaon",
    "ev scooter repair near me Gurgaon",
    "electric scooter repair near me Gurgaon",
    "royal enfield mechanic near me Gurgaon",
    "scooty repair near me Gurgaon",
    "bike service near me Gurgaon",
    "bike repair at home Gurgaon",
    "doorstep bike service Gurgaon",
    "scooty mechanic at home Gurgaon",
    "scooty repair Gurgaon",
    "scooter repair at home Gurgaon",
    "scooter mechanic near me Gurgaon",
    "24/7 bike mechanic near me Gurgaon",
    "bike mechanic on call Gurgaon",
    "two wheeler mechanic near me Gurgaon",
    "two wheeler mechanic in Gurgaon with phone number",
    "bike repair at doorstep Gurgaon",
    "bike mechanic near me open now Gurgaon",
    "doorstep bike service near me Gurgaon",
    "mobile bike mechanic Gurugram",
    "bike electrician near me Gurgaon",
    "online bike mechanic Gurgaon",
    "bike repair shops near me Gurgaon"
  ],
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
    "latitude": 28.4870,
    "longitude": 77.0190
  },
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
    "priceRange": "₹199 - ₹18000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carterpuri Rd, near Saat Phere Garden, Block H, Ashok Vihar Phase III Extension",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122006",
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
        "price": "199",
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
      "name": "Is there a 24/7 bike mechanic near me in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FixWheel provides 24/7 bike mechanic service in Gurgaon. You can book a mechanic on call any time of day or night for emergency roadside assistance or doorstep repair. Call +91-87459-45682 or book online."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer scooty mechanic at home service in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide scooty mechanic at home service across all Gurgaon sectors. Whether it's an Activa, Jupiter, Dio, Access 125, or any other scooty — our mechanics come to your doorstep for servicing, oil change, brake repair, or puncture repair."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get scooter repair at home in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. FixWheel offers complete scooter repair at home in Gurgaon including engine servicing, brake repair, battery replacement, tyre puncture, and electrical work — all done at your doorstep with flat pricing."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find a bike mechanic on call near me in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book on fixwheel.app or call +91-87459-45682. Our on-call bike mechanics are stationed across Gurgaon and will reach you in under 45 minutes. No garage visit needed — the mechanic comes to you."
      }
    },
    {
      "@type": "Question",
      "name": "What is the phone number for bike mechanic in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach FixWheel's Gurgaon bike mechanic team at +91-87459-45682. We cover all sectors in Gurgaon and Gurugram for doorstep two-wheeler repair and servicing."
      }
    },
    {
      "@type": "Question",
      "name": "Is FixWheel open now for bike repair in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FixWheel is available for bike repair in Gurgaon right now. We operate 7 days a week with extended hours. For late-night emergencies, our 24/7 roadside assistance line is always active."
      }
    },
    {
      "@type": "Question",
      "name": "How long does doorstep bike service take in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most repairs take 30 to 50 minutes. Engine oil changes take about 30 minutes, and full services take 45 to 60 minutes. We confirm the time needed before we start."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you cover in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all sectors and areas in Gurgaon including DLF Phase 1-5, Sushant Lok, Golf Course Road, Sector 14, Sector 20, Sector 45, Sector 49, Sohna Road, Palam Vihar, Udyog Vihar, Dwarka Expressway, MG Road, Cyber City, South City, Nirvana Country, Huda City Centre, Manesar, Badshahpur, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Do you service Royal Enfield and superbikes at home in Gurgaon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we repair and service all Royal Enfield models, superbikes, and premium motorcycles at your home or office in Gurgaon. Our mechanics are trained for all two-wheeler brands."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a warranty on the repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide a 15-day labor warranty on all repairs. If the same issue reappears, we send a mechanic back at no extra charge."
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
