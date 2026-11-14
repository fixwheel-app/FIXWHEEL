import type { Metadata } from "next";
import CruiserBikeLayout, { getCruiserFaqs } from "./CruiserBikeLayout";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Cruiser Bike Service at Home in Delhi NCR | FixWheel";
const description = "Book doorstep cruiser bike service across Delhi NCR for chain, clutch, brakes, battery and periodic maintenance on modern-classic and relaxed-riding motorcycles.";
const cruiserKeywords = [
  "cruiser bike service near me",
  "cruiser bike mechanic near me",
  "doorstep cruiser bike service Delhi NCR",
  "modern classic motorcycle service at home",
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
          { "@type": "ListItem", position: 2, name: "Cruiser Bike Service", item: "https://www.fixwheel.app/cruiser-bike" },
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
