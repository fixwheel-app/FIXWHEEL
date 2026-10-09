import type { Metadata } from 'next';
import HomeClient from './page.client';

export const metadata: Metadata = {
  title: "Two-Wheeler Repair & Service in Delhi NCR | FixWheel",
  description: "Book doorstep two-wheeler repair and service in Delhi NCR. Bike, scooty and EV care at home in Delhi, Gurgaon, Noida, Ghaziabad and Faridabad with FixWheel.",
  keywords: [
    "two wheeler repair in Delhi NCR",
    "two wheeler service in Delhi NCR",
    "doorstep two wheeler repair",
    "two wheeler service at home",
    "two wheeler mechanic near me",
    "bike repair and service in Delhi NCR",
    "scooty repair near me",
    "scooter mechanic near me",
    "sports bike repair near me",
    "ev scooter repair near me",
    "two wheeler service near me",
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/",
  },
  openGraph: {
    title: "Two-Wheeler Repair & Service in Delhi NCR | FixWheel",
    description: "Doorstep repair and servicing for bikes, scooties and electric scooters across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad. Book with FixWheel.",
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
    "@type": ["AutoRepair", "MotorcycleRepair", "LocalBusiness"],
    "name": "FixWheel",
    "image": "https://www.fixwheel.app/logo.png",
    "@id": "https://www.fixwheel.app/#organization",
    "url": "https://www.fixwheel.app",
    "telephone": "+91 87459 45682",
    "priceRange": "₹399 - ₹18000",
    "description": "Doorstep two-wheeler repair and service in Delhi NCR for bikes, scooties and electric scooters across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
    "knowsAbout": [
      "Two-Wheeler Repair in Delhi NCR",
      "Two-Wheeler Service in Delhi NCR",
      "Doorstep Two-Wheeler Maintenance",
      "Bike Repair and Servicing",
      "Sports Bike Repair",
      "EV Scooter Repair",
      "Scooty Repair"
    ],
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
      "https://www.instagram.com/fixwheel.app?igsh=ZDBqZTB1c2tsMWU1",
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
          "price": "550",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Service",
            "description": "Brake adjustment, chain lubrication, spark plug cleaning, air filter check, and general electrical inspection at home.",
            "url": "https://www.fixwheel.app/services/basic-service"
          }
        },
        {
          "@type": "Offer",
          "price": "999",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Service with Engine Oil",
            "description": "Draining old engine oil, engine flushing, oil filter replacement, and refilling with fresh premium OEM-grade oil.",
            "url": "https://www.fixwheel.app/services/oil-change"
          }
        },
        {
          "@type": "Offer",
          "price": "4500",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Repair",
            "description": "Detailed engine diagnostics, cylinder head repairs, piston replacement, and full mechanical engine rebuilding.",
            "url": "https://www.fixwheel.app/services/engine-repair"
          }
        },
        {
          "@type": "Offer",
          "price": "399",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Puncture Repair",
            "description": "Emergency on-site flat tyre puncture repair at your home, office, or roadside.",
            "url": "https://www.fixwheel.app/pricing"
          }
        },
        {
          "@type": "Offer",
          "price": "199",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Brake Disc Replacement",
            "description": "Brake shoe replacement, brake pad fitting, cable adjustment, and caliper check for safe braking.",
            "url": "https://www.fixwheel.app/services/brake-repair"
          }
        },
        {
          "@type": "Offer",
          "price": "99",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Replacement (Labor)",
            "description": "On-the-spot battery voltage testing, terminal cleaning, and professional battery installation.",
            "url": "https://www.fixwheel.app/services/battery-replacement"
          }
        },
        {
          "@type": "Offer",
          "price": "399",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Jump Start",
            "description": "Immediate doorstep emergency battery jump-start service for drained batteries.",
            "url": "https://www.fixwheel.app/pricing"
          }
        },
        {
          "@type": "Offer",
          "price": "399",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Running Repair",
            "description": "Minor mechanical fixes, cable changes, clutch adjustments, lever replacements, and bulb fittings.",
            "url": "https://www.fixwheel.app/pricing"
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
