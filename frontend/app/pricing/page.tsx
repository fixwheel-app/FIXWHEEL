import { Metadata } from "next";
import PricingClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Transparent Two Wheeler Service Pricing & Rate Card | FixWheel",
  description: "Check official doorstep bike repair & scooter service charges in Delhi-NCR. Flat rates for 0-249cc, 250-399cc, 400-599cc, 600cc+ & Electric EVs. No hidden fees.",
  keywords: [
    "bike service charges delhi ncr",
    "two wheeler repair rate card",
    "doorstep bike engine oil change price",
    "bike battery replacement cost rs 99",
    "honda activa service charges",
    "royal enfield classic 350 service cost",
    "electric scooter service rate card",
    "doorstep puncture repair price",
    "bike engine overhaul cost"
  ],
  openGraph: {
    title: "Official Doorstep Bike Repair Pricing List | FixWheel",
    description: "100% transparent pricing for periodic service, engine oil change, battery replacement, puncture repair, and engine overhauls across Delhi, Gurgaon, Noida, Ghaziabad & Faridabad.",
    type: "website"
  }
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "FixWheel Two Wheeler Doorstep Service Rates",
    "priceCurrency": "INR",
    "minPrice": "99",
    "maxPrice": "18000",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "unitCode": "C62",
      "value": "1"
    },
    "description": "Flat rate card for motorcycle and scooter doorstep repair in Delhi NCR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClientPage />
    </>
  );
}
