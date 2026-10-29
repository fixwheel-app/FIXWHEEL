import type { Metadata } from "next";
import FaridabadClientPage from "./page.client";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Doorstep Two-Wheeler Repair & Service in Faridabad | FixWheel",
  description: "Book doorstep two-wheeler repair in Faridabad from 8 AM to 10 PM. Get verified service across NIT, major sectors, Greater Faridabad, and Ballabhgarh. Book online.",
  keywords: [
    "two-wheeler mechanic near me Faridabad",
    "two wheeler mechanic near me Faridabad",
    "two-wheeler repair near me Faridabad",
    "sports motorcycle repair near me Faridabad",
    "sports motorcycle mechanic near me Faridabad",
    "ev scooter repair near me Faridabad",
    "electric scooter repair near me Faridabad",
    "royal enfield mechanic near me Faridabad",
    "scooty repair near me Faridabad",
    "two-wheeler service near me Faridabad",
    "two-wheeler repair at home Faridabad",
    "doorstep two-wheeler service Faridabad",
    "scooty mechanic at home Faridabad",
    "scooty repair Faridabad",
    "scooter repair at home Faridabad",
    "scooter mechanic near me Faridabad",
    "24/7 emergency roadside two-wheeler assistance Faridabad",
    "two-wheeler mechanic on call Faridabad",
    "two wheeler mechanic in Faridabad with phone number",
    "two-wheeler repair at doorstep Faridabad",
    "two-wheeler mechanic near me open now Faridabad",
    "doorstep two-wheeler service near me Faridabad",
    "mobile two-wheeler mechanic Faridabad",
    "two-wheeler electrician near me Faridabad",
    "online two-wheeler mechanic Faridabad",
    "two-wheeler repair shops near me Faridabad",
    "two-wheeler mechanic NIT Faridabad",
    "two-wheeler mechanic Sector 15 Faridabad",
    "two-wheeler mechanic Sector 16 Faridabad",
    "two-wheeler mechanic Ballabhgarh",
    "doorstep two-wheeler repair Surajkund Faridabad",
    "two-wheeler repair Greater Faridabad"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/faridabad",
  },
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Two-Wheeler Repair Service in Faridabad",
  "description": "Book doorstep two-wheeler repair for NIT blocks, numbered sectors, Greater Faridabad societies, Ballabhgarh addresses, workplaces, and supported roadside locations.",
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
    "priceRange": "₹399 - ₹18000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Two-Wheeler Repair Services in Faridabad",
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
      "name": "Do you cover both NIT Faridabad and Greater Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both areas are included in our listed coverage. Enter the NIT block or the Greater Faridabad sector, society, tower, and gate so the team can confirm availability for your exact address."
      }
    },
    {
      "@type": "Question",
      "name": "What address details should I provide for a Faridabad booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Include the sector or NIT block, building or society name, gate, nearby chowk or landmark, and the exact parking location. For Ballabhgarh and village-road addresses, add a live location when possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can a mechanic visit my workplace in an industrial area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can request a workplace visit after checking entry permission and identifying a safe space where two-wheeler work is allowed. Share the company gate and contact person while booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request roadside help near Mathura Road or Bata Chowk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roadside assistance is available 24/7 within the supported Faridabad service area. Share your live location, direction of travel, vehicle model, and symptoms so the team can confirm dispatch."
      }
    },
    {
      "@type": "Question",
      "name": "What if I do not know which repair my two-wheeler needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Describe what the vehicle is doing, such as not starting, losing power, making noise, braking poorly, or losing air. The mechanic can inspect it and explain the recommended work before you approve the quote."
      }
    },
    {
      "@type": "Question",
      "name": "What does doorstep two-wheeler service cost in Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic service starts from ₹550 depending on the model and work required. Any additional labour or parts are explained after inspection and require your approval before work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a warranty on FixWheel service in Faridabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible work includes a 15-day labour warranty. Keep the booking details and contact the team if the same serviced issue returns during the warranty period."
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
