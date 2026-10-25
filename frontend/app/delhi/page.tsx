import type { Metadata } from "next";
import DelhiClientPage from "./page.client";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Doorstep Two-Wheeler Repair & Service in Delhi | FixWheel",
  description: "Book verified doorstep two-wheeler service in Delhi from 8 AM to 10 PM. Get home, office, and roadside repair support across South and West Delhi with FixWheel.",
  keywords: [
    "two-wheeler mechanic near me Delhi",
    "two-wheeler repair near me Delhi",
    "two-wheeler service near me Delhi",
    "two-wheeler repair at home Delhi",
    "doorstep two-wheeler service Delhi",
    "scooty mechanic at home Delhi",
    "scooty repair Delhi",
    "scooter repair at home Delhi",
    "scooter mechanic near me Delhi",
    "24/7 emergency roadside two-wheeler assistance Delhi",
    "two-wheeler mechanic on call Delhi",
    "two wheeler mechanic near me Delhi",
    "two wheeler mechanic in Delhi with phone number",
    "two-wheeler repair at doorstep Delhi",
    "two-wheeler mechanic near me open now Delhi",
    "doorstep two-wheeler service near me Delhi",
    "mobile two-wheeler mechanic Delhi",
    "two-wheeler electrician near me Delhi",
    "online two-wheeler mechanic Delhi",
    "two-wheeler repair shops near me Delhi",
    "two-wheeler service Delhi"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/delhi",
  },
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Service",
  "name": "Doorstep Two-Wheeler Repair Service in Delhi",
  "description": "Verified mechanics come to your home, office, or roadside in Delhi to repair your two-wheeler. Covering Dwarka, Kapashera, Vasant Kunj, Janakpuri, Bijwasan, and all South & South-West Delhi localities.",
  "url": "https://www.fixwheel.app/delhi",
  "serviceType": "Two Wheeler Repair and Maintenance",
  "areaServed": {
    "@type": "City",
    "name": "Delhi",
    "alternateName": "New Delhi",
    "containedInPlace": {
      "@type": "State",
      "name": "Delhi",
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
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Two-Wheeler Repair Services in Delhi",
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
          "description": "Flat tyre repair on the spot, wherever you are in Delhi."
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
      "name": "Is 24/7 emergency roadside assistance available in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FixWheel provides 24/7 emergency roadside assistance for breakdowns in Delhi. Routine doorstep service bookings are available daily from 8 AM to 10 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer scooty mechanic at home service in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide scooty mechanic at home service across South and West Delhi. Whether it's an Activa, Jupiter, Dio, Access 125, or any scooty — our mechanics come to your doorstep for oil change, brake repair, or puncture repair."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get scooter repair at home in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FixWheel provides complete scooter repair at home in Delhi including engine servicing, brake repair, battery replacement, tyre puncture, and electrical work — all at your doorstep with transparent pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the phone number for two-wheeler mechanic in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach FixWheel's Delhi two-wheeler mechanic team at +91-87459-45682. We cover South Delhi, West Delhi, and South-West Delhi areas for doorstep two-wheeler repair and servicing."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a two-wheeler mechanic on call near me in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call +91-87459-45682 or book on fixwheel.app. Our on-call two-wheeler mechanics reach your location in Dwarka, Kapashera, Vasant Kunj, Janakpuri, and all Delhi areas within 45 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is FixWheel open now for two-wheeler repair in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FixWheel is available for two-wheeler repair in Delhi right now. We operate 7 days a week. For late-night emergencies, our 24/7 roadside assistance is always active."
      }
    },
    {
      "@type": "Question",
      "name": "Do you do two-wheeler repair on road in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your two-wheeler breaks down on the road in Delhi, call +91-87459-45682. We dispatch a mechanic to your exact location for roadside repair — puncture fix, battery jump-start, running repair, or emergency assistance."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can a mechanic reach me in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most South and South-West Delhi localities, our mechanics arrive within 30 to 45 minutes of booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Delhi does FixWheel cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover South and South-West Delhi including Dwarka (Sectors 1-23), Kapashera, Vasant Kunj, Janakpuri, Bijwasan, Mahipalpur, Hari Nagar, Najafgarh, Palam, Uttam Nagar, and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a warranty on the repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all repairs come with a 15-day labor warranty. If the same issue reappears within 15 days, we send a mechanic back at no extra charge."
      }
    }
  ]
};

export default function DelhiServicesPage() {
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
      <DelhiClientPage />
    </>
  );
}
