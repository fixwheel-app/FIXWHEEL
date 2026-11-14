import type { Metadata } from "next";
import ElectricVehicleLayout from "./ElectricVehicleLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";
import { SERVICES_DB } from "@/lib/servicesData";
import { completePageMetadata } from "@/lib/seoMetadata";

const sourceService = SERVICES_DB["electric-scooter-repair"];
const title = "Electric Scooter & EV Repair at Home | FixWheel";
const description = "Book doorstep electric scooter repair across Delhi NCR for charging trouble, warning lights, brakes, tyres and EV diagnostics, with model support confirmed first.";
const evFaqs = [
  {
    q: "Which electric scooters can FixWheel inspect at the doorstep?",
    a: "Support depends on the exact model and available diagnostic access. Share the make, model, warning message and symptom so compatibility can be checked before the visit.",
  },
  {
    q: "Can a mechanic check an EV that will not enter ready mode?",
    a: "The visit can include accessible checks of the auxiliary battery, controls, safety interlocks, visible connections and dashboard information. The findings determine whether specialist workshop support is needed.",
  },
  {
    q: "Can charging and reduced-range problems be repaired at home?",
    a: "A mechanic can inspect accessible charging symptoms, visible connections and related vehicle systems where supported. Sealed battery-pack work is not treated as a routine doorstep repair.",
  },
  {
    q: "Do you open sealed EV battery packs at the doorstep?",
    a: "No. Doorstep work focuses on safe inspection and accessible systems. Any sealed-pack or high-voltage internal work requires an appropriate specialist process.",
  },
  {
    q: "What should I share before an electric-scooter booking?",
    a: "Provide the exact model, dashboard message, charging behaviour, recent repair history and whether the vehicle powers on. A clear photo of the warning can help confirm the next step.",
  },
];
const vehiclePageService = {
  ...sourceService,
  title: "Doorstep Electric Scooter & EV Repair",
  lead: description,
  includedItems: [
    "Dashboard warning and reported-symptom review",
    "Accessible auxiliary-battery and starting-system checks",
    "Charging behaviour and visible connector inspection",
    "Brake response, tyre condition and road-safety checks",
    "Accessible wiring, control and safety-interlock inspection",
    "Motor or drive noise assessed for the appropriate next step",
  ],
  faqs: evFaqs,
  keywords: ["electric scooter repair near me", "EV scooter service at home", "doorstep electric scooter mechanic", "EV diagnostics Delhi NCR"],
};
export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: vehiclePageService.keywords,
  alternates: { canonical: "https://www.fixwheel.app/electric-vehicle" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/electric-vehicle" },
});

export default async function ElectricVehiclePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: vehiclePageService.title, serviceType: "Electric scooter inspection and repair", url: "https://www.fixwheel.app/electric-vehicle", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map(name => ({ "@type": "City", name })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Electric Vehicle Repair", item: "https://www.fixwheel.app/electric-vehicle" }] },
    { "@type": "FAQPage", mainEntity: evFaqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><ElectricVehicleLayout service={vehiclePageService} bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} /></>;
}
