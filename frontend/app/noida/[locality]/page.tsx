import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALITY_DB } from "./localityData";
import NoidaLocalityClientPage from "./page.client";

export async function generateStaticParams() {
  return Object.keys(LOCALITY_DB).map((locality) => ({
    locality,
  }));
}

export async function generateMetadata({ params }: { params: { locality: string } }): Promise<Metadata> {
  const data = LOCALITY_DB[params.locality];
  if (!data) return {};

  return {
    title: `Bike Mechanic Near Me in ${data.name}, Noida – Doorstep Bike Repair | FixWheel`,
    description: `Looking for a bike mechanic near me in ${data.name}, Noida? FixWheel dispatches certified mechanics to your doorstep in ${data.eta} for oil change, brake repair, battery replacement & full service. Call +91-87459-45682. Starting ₹399.`,
    keywords: [
      `bike mechanic near me in ${data.name}`,
      `bike mechanic near me in ${data.name} Noida`,
      `bike mechanic near me ${data.name}`,
      `bike repair near me in ${data.name}`,
      `bike repair near me ${data.name}`,
      `two wheeler mechanic near me ${data.name}`,
      `two wheeler mechanic near me in ${data.name} Noida`,
      `scooty repair near me ${data.name}`,
      `doorstep bike repair near me ${data.name}`,
      `doorstep bike service near me ${data.name}`,
      `bike service at home in ${data.name} Noida`,
      `bike mechanic in ${data.name}`,
      `two wheeler mechanic in ${data.name} Noida`,
      `doorstep bike repair ${data.name}`,
      `sports bike service ${data.name}`,
      `sports bike repair near me ${data.name}`,
      `ev scooter repair near me ${data.name}`,
      `electric scooter repair near me ${data.name}`,
      `royal enfield repair near me ${data.name}`,
      `motorcycle repair at home ${data.name}`,
      `scooter mechanic ${data.name} Noida`,
      `scooty mechanic at home ${data.name}`,
      `scooter repair at home ${data.name} Noida`,
      `bike service at home in ${data.name}`,
      `engine oil change ${data.name}`,
      `Activa 6G service ${data.name} Noida`,
      `Activa 125 repair near me ${data.name}`,
      `Splendor Plus service ${data.name} Noida`,
      `Pulsar 150 repair near me ${data.name}`,
      `Pulsar NS200 mechanic ${data.name}`,
      `Jupiter 125 service ${data.name}`,
      `Royal Enfield Classic 350 service near me ${data.name}`,
      `Royal Enfield Hunter 350 repair ${data.name}`,
      `Yamaha R15 V4 service ${data.name} Noida`,
      `Yamaha MT15 mechanic ${data.name}`,
      `KTM Duke 200 service near me ${data.name}`,
      `KTM Duke 390 repair ${data.name}`,
      `Ather 450X EV service ${data.name}`,
      `Ola S1 Pro repair near me ${data.name}`,
      `TVS iQube EV repair ${data.name}`,
      `Hero Xpulse 200 service ${data.name}`,
      `Honda Shine 125 repair ${data.name}`,
      `tyre puncture repair ${data.name}`,
      `puncture repair near me ${data.name}`,
      `battery replacement bike ${data.name}`,
      `battery replacement bike near me ${data.name}`,
      `brake repair bike ${data.name}`,
      `24/7 bike mechanic near me ${data.name}`,
      `bike mechanic on call ${data.name}`,
      `bike mechanic near me open now ${data.name}`,
      `two wheeler mechanic in ${data.name} Noida with phone number`,
      "doorstep two wheeler service Noida",
      "mobile bike mechanic Noida",
      "two wheeler repair at home Noida",
      `home bike service ${data.name}`,
      "bike mechanic near me Noida"
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/noida/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `Bike Mechanic Near Me in ${data.name}, Noida – Doorstep Bike Repair | FixWheel`,
      description: `Looking for a bike mechanic near me in ${data.name}, Noida? FixWheel dispatches certified mechanics to your doorstep in ${data.eta} for oil change, brake repair, battery replacement & full service. Call +91-87459-45682. Starting ₹399.`,
      url: `https://www.fixwheel.app/noida/${params.locality}`,
    },
  };
}

export default function NoidaLocalityPage({ params }: { params: { locality: string } }) {
  const data = LOCALITY_DB[params.locality];
  if (!data) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fixwheel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Noida", "item": "https://www.fixwheel.app/noida" },
      { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.fixwheel.app/noida/${params.locality}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/Service",
    "name": `Doorstep Bike Repair in ${data.name}, Noida | Two Wheeler Mechanic`,
    "serviceType": "Doorstep Bike Repair Service",
    "url": `https://www.fixwheel.app/noida/${params.locality}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixWheel",
      "url": "https://www.fixwheel.app/",
      "telephone": "+91-87459-45682"
    },
    "areaServed": { "@type": "Place", "name": `${data.name}, Noida, Uttar Pradesh` },
    "description": `Doorstep repair near me and bike repair in ${data.name} at home. Book a verified two wheeler mechanic near me for doorstep repair in ${data.name}, covering ${data.subRegionText} with transparent pricing.`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "473",
      "reviewCount": "473"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Bike Repair Services in ${data.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Service",
            "description": "Brake adjustment, chain lube, spark plug clean, air filter check, electrical check."
          },
          "price": "550",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Oil Change",
            "description": "Draining old oil, engine flushing, refilling with fresh OEM-grade oil, and chain lubrication."
          },
          "price": "999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Replacement",
            "description": "On-site battery health diagnostics, jump-starts, and replacement with warranty batteries."
          },
          "price": "99",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brake Repair",
            "description": "Replacing worn-out brake pads/shoes, cable adjustments, and clutch tuning."
          },
          "price": "199",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Does the mechanic come inside my society or apartment in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, our mechanics come directly to your residential parking, villa driveway, or apartment space in ${data.name} once society security permits visitor entry.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does doorstep bike repair take in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Minor checkups and engine oil changes take 30 to 45 minutes, while comprehensive services or engine repairs might take longer.`
        }
      },
      {
        "@type": "Question",
        "name": `How fast can a mechanic reach me in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `On average, our mobile mechanics stationed across Noida reach ${data.name} locations within ${data.eta}.`
        }
      },
      ...data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NoidaLocalityClientPage slug={params.locality} />
    </>
  );
}
