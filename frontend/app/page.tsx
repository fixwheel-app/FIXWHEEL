import type { Metadata } from 'next';
import HomeClient from './page.client';

export const metadata: Metadata = {
  title: "FixWheel — Doorstep Bike Service in Delhi NCR",
  description: "Book a mechanic online and get your motorcycle serviced at your doorstep. No garage visits, no waiting. Serving Delhi NCR.",
  alternates: {
    canonical: "https://www.fixwheel.app/",
  },
  openGraph: {
    title: "FixWheel — Doorstep Bike Service in Delhi NCR",
    description: "Book a mechanic online and get your motorcycle serviced at your doorstep. No garage visits, no waiting. Serving Delhi NCR.",
    url: "https://www.fixwheel.app/",
    siteName: "FixWheel",
    type: "website",
    images: [
      {
        url: "https://www.fixwheel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "FixWheel",
    "image": "https://www.fixwheel.app/logo.png",
    "@id": "https://www.fixwheel.app/#organization",
    "url": "https://www.fixwheel.app",
    "telephone": "+91 87459 45682",
    "priceRange": "₹499 - ₹4999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dwarka",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5823,
      "longitude": 77.0500
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61573309963156",
      "https://www.instagram.com/fixwheel11?igsh=MTRqeHB0dnRhYWZqaQ==",
      "https://www.linkedin.com/company/fixwheel-app/"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Delhi" },
      { "@type": "AdministrativeArea", "name": "Gurgaon" },
      { "@type": "AdministrativeArea", "name": "Noida" },
      { "@type": "AdministrativeArea", "name": "Faridabad" },
      { "@type": "AdministrativeArea", "name": "Ghaziabad" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Doorstep Two-Wheeler Repair and Maintenance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Service",
            "description": "Brake adjustment, chain lubrication, spark plug cleaning, air filter check, and general electrical inspection at home.",
            "url": "https://www.fixwheel.app/services/basic-service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Oil Change",
            "description": "Draining old engine oil, engine flushing, oil filter replacement, and refilling with fresh premium OEM-grade oil.",
            "url": "https://www.fixwheel.app/services/oil-change"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Repair",
            "description": "Detailed engine diagnostics, cylinder head repairs, piston replacement, and full mechanical engine rebuilding.",
            "url": "https://www.fixwheel.app/services/engine-repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tyre Replacement",
            "description": "Emergency on-site flat tyre repair, puncture fixing, and brand-new tyre fitting with warranty.",
            "url": "https://www.fixwheel.app/services/tyre-replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brake Repair",
            "description": "Brake shoe replacement, brake pad fitting, cable adjustment, and master cylinder check for safe braking.",
            "url": "https://www.fixwheel.app/services/brake-repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Replacement",
            "description": "On-the-spot battery voltage testing, jump-starts, and replacement with warranty-backed brand-new batteries.",
            "url": "https://www.fixwheel.app/services/battery-replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Washing",
            "description": "Eco-friendly high-pressure water washing, foam cleaning, detailing, and chain polishing at your doorstep.",
            "url": "https://www.fixwheel.app/services/general-washing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Service",
            "description": "Complete top-to-bottom bumper-to-bumper bike servicing, inspection, lubrication, and tuning.",
            "url": "https://www.fixwheel.app/services/comprehensive-service"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
