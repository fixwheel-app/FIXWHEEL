import type { Metadata } from "next";
import ContactClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us | Doorstep Bike Service & Repair Support – FixWheel",
  description: "Contact FixWheel for doorstep bike repair, scooter service, and emergency breakdown assistance in Delhi NCR. Call +91 87459 45682 or email support@fixwheel.app for immediate booking support.",
  keywords: [
    "doorstep bike repair contact number",
    "bike service customer care Delhi NCR",
    "FixWheel customer support phone number",
    "two wheeler repair contact Delhi",
    "book mobile bike mechanic contact details",
    "scooter repair at home helpline",
    "FixWheel phone number Delhi NCR",
    "contact doorstep motorcycle mechanic"
  ],
  alternates: {
    canonical: "https://www.fixwheel.app/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Us | Doorstep Bike Service & Repair Support – FixWheel",
    description: "Contact FixWheel for doorstep bike repair, scooter service, and emergency breakdown assistance in Delhi NCR. Call +91 87459 45682 or email support@fixwheel.app for immediate booking support.",
    url: "https://www.fixwheel.app/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact FixWheel",
    "description": "Customer support page for doorstep bike repairs, scooter servicing, and motorcycle breakdown help in Delhi NCR.",
    "url": "https://www.fixwheel.app/contact",
    "mainEntity": {
      "@type": "AutoRepair",
      "name": "FixWheel",
      "telephone": "+91-87459-45682",
      "email": "support@fixwheel.app",
      "priceRange": "₹499 - ₹4999",
      "areaServed": ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClientPage />
    </>
  );
}
