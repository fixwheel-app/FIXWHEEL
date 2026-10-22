import type { Metadata } from "next";
import CruiserBikeLayout, { getCruiserFaqs } from "./CruiserBikeLayout";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Cruiser Bike Service at Doorstep | FixWheel";
const description = "Doorstep cruiser bike service across Delhi NCR for Royal Enfield, Bajaj Avenger, Honda CB350, Jawa, Yezdi, Harley-Davidson, Triumph, Kawasaki, Benelli, Hero Mavrick and TVS Ronin.";
const cruiserKeywords = [
  "cruiser bike service",
  "cruiser bike service near me",
  "cruiser bike mechanic near me",
  "doorstep cruiser bike service Delhi NCR",
  "royal enfield service at home",
  "bajaj avenger doorstep service",
  "honda cb350 home service",
  "jawa bike repair near me",
  "yezdi roadster doorstep service",
  "harley davidson x440 home service",
  "triumph bonneville doorstep service",
  "kawasaki eliminator service near me",
  "benelli imperiale home service",
  "hero mavrick doorstep service",
  "tvs ronin service at home",
];

export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: cruiserKeywords,
  alternates: { canonical: "https://www.fixwheel.app/cruiser-bike" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/cruiser-bike" },
});

export default async function CruiserBikeServicePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const faqs = getCruiserFaqs();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Doorstep cruiser bike service",
        url: "https://www.fixwheel.app/cruiser-bike",
        serviceType: "Cruiser and modern-classic motorcycle service",
        provider: { "@id": "https://www.fixwheel.app/#organization" },
        areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
          { "@type": "ListItem", position: 2, name: "Vehicle Type", item: "https://www.fixwheel.app/services" },
          { "@type": "ListItem", position: 3, name: "Cruiser Bike Service", item: "https://www.fixwheel.app/cruiser-bike" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <CruiserBikeLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} />
    </>
  );
}
