import type { Metadata } from "next";
import BrandsClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Doorstep Two Wheeler Service for All Brands | FixWheel",
  description:
    "FixWheel services all major two-wheeler brands at your doorstep — Honda, Hero, Bajaj, TVS, Royal Enfield, Yamaha, Suzuki, KTM, Ola Electric, Ather, Vespa, Jawa, Aprilia, Harley-Davidson, Kawasaki & Benelli. Book a verified mechanic now.",
  keywords: [
    "two wheeler service all brands",
    "bike service Honda",
    "bike service Hero",
    "bike service Bajaj",
    "bike service TVS",
    "Royal Enfield service at home",
    "Yamaha bike repair doorstep",
    "Suzuki scooter service",
    "KTM service at home",
    "Ola Electric scooter repair",
    "Ather scooter service",
    "Vespa service doorstep",
    "Jawa bike repair",
    "Aprilia scooter service",
    "Harley-Davidson service India",
    "Kawasaki bike service",
    "Benelli service at home",
    "doorstep two wheeler mechanic",
    "FixWheel brands",
    "bike repair all brands",
    "motorcycle mechanic at home",
    "scooty mechanic near me",
    "doorstep bike repair service",
    "doorstep scooter repair",
    "electric bike mechanic at home",
    "electric scooter repair near me",
    "activa service at home",
    "bullet service near me",
    "apache service home repair",
    "pulsar mechanic at home",
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/brands",
  },
};

const brandsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Doorstep Two Wheeler Service for All Brands",
  description:
    "FixWheel provides doorstep bike and scooter repair services for all major two-wheeler brands in India including Honda, Hero, Bajaj, TVS, Royal Enfield, Yamaha, Suzuki, KTM, Ola Electric, Ather, Vespa, Jawa, Aprilia, Harley-Davidson, Kawasaki, and Benelli.",
  url: "https://www.fixwheel.app/brands",
  serviceType: "Two Wheeler Repair and Maintenance",
  provider: {
    "@type": "LocalBusiness",
    name: "FixWheel",
    url: "https://www.fixwheel.app",
    telephone: "+918745945682",
    email: "support@fixwheel.app",
    image: "https://www.fixwheel.app/icon.png",
    priceRange: "₹99 - ₹18000",
  },
  brand: [
    { "@type": "Brand", name: "Honda" },
    { "@type": "Brand", name: "Hero" },
    { "@type": "Brand", name: "Bajaj" },
    { "@type": "Brand", name: "TVS" },
    { "@type": "Brand", name: "Royal Enfield" },
    { "@type": "Brand", name: "Yamaha" },
    { "@type": "Brand", name: "Suzuki" },
    { "@type": "Brand", name: "KTM" },
    { "@type": "Brand", name: "Ola Electric" },
    { "@type": "Brand", name: "Ather" },
    { "@type": "Brand", name: "Vespa" },
    { "@type": "Brand", name: "Jawa" },
    { "@type": "Brand", name: "Aprilia" },
    { "@type": "Brand", name: "Harley-Davidson" },
    { "@type": "Brand", name: "Kawasaki" },
    { "@type": "Brand", name: "Benelli" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1850",
    reviewCount: "1850",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.fixwheel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Brands",
      item: "https://www.fixwheel.app/brands",
    },
  ],
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BrandsClientPage />
    </>
  );
}
