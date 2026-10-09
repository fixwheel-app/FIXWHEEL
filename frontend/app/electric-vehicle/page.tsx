import type { Metadata } from "next";
import ElectricVehicleLayout from "./ElectricVehicleLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";
import { SERVICES_DB } from "@/lib/servicesData";

const service = SERVICES_DB["electric-scooter-repair"];
export const metadata: Metadata = {
  title: `${service.title} | FixWheel`,
  description: service.lead,
  keywords: service.keywords,
  alternates: { canonical: "https://www.fixwheel.app/electric-vehicle" },
  openGraph: { type: "website", title: `${service.title} | FixWheel`, description: service.lead, url: "https://www.fixwheel.app/electric-vehicle" },
};

export default async function ElectricVehiclePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: service.title, url: "https://www.fixwheel.app/electric-vehicle", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map(name => ({ "@type": "City", name })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Electric Vehicle Repair", item: "https://www.fixwheel.app/electric-vehicle" }] },
    { "@type": "FAQPage", mainEntity: service.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><ElectricVehicleLayout service={service} bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} /></>;
}
