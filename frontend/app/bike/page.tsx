import type { Metadata } from "next";
import ScootyRepairLayout, { type BikeLandingContent } from "../scooty-repair/ScootyRepairLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Bike Repair & Service at Home in Delhi NCR | FixWheel";
const description = "Book doorstep bike repair across Delhi NCR for commuter motorcycles, starting trouble, chain noise, brakes and scheduled service. Review the quote before work.";
const faqs = [
  { q: "Can a commuter bike be serviced at my home or office?", a: "Routine service, accessible inspections and approved minor repairs can be completed where the motorcycle is safely parked. Share the full address, model and required work when booking." },
  { q: "What problems can a doorstep bike mechanic inspect?", a: "You can request help with starting trouble, weak brakes, chain noise, poor pickup, battery concerns, punctures and scheduled maintenance. The cause is checked before additional repair work is proposed." },
  { q: "What details help with a bike-service booking?", a: "Provide the make, model, engine-capacity range, recent service history and a clear description of the symptom. Mention whether the motorcycle starts and when the problem appears." },
  { q: "How is the bike-repair price confirmed?", a: "The selected service, engine-capacity range, inspection findings and approved parts determine the total. Any additional labour or part is explained and quoted before work begins." },
  { q: "Should I book the general bike page for a sports or premium motorcycle?", a: "Use the dedicated sports, premium or cruiser page when it better matches your motorcycle. Those pages explain the model details and service scope needed for that vehicle type." },
];

const bikeContent: BikeLandingContent = {
  vehicleKind: "bike",
  statsLabel: "Motorcycles serviced",
  breadcrumbLabel: "Bike Repair & Service",
  tag: "Commuter motorcycle care",
  heroTitle: "Doorstep Bike Repair & Service in Delhi NCR",
  lead: "Keep a daily commuter or geared motorcycle dependable without taking it to a garage. Book doorstep help for scheduled servicing, starting trouble, chain noise, weak brakes, battery concerns and running issues across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
  servicesTitle: "Bike service and repair options for daily motorcycles",
  servicesLead: "Choose the closest service need. Your motorcycle, engine-capacity range, required parts and approved work determine the final quote.",
  services: [
    { id: "basic-service", title: "Periodic bike service", description: "Routine checks for the chain, brakes, controls, battery, filters and visible leaks." },
    { id: "service-engine-oil", title: "Bike service with engine oil", description: "Scheduled service with the suitable oil and filter requirement confirmed for the model." },
    { id: "diagnosis", title: "Book a mechanic", description: "An inspection when the symptom is unclear or more than one system may be involved." },
    { id: "chain-sprocket", title: "Chain and sprocket inspection", description: "Check slack, alignment and wear before approved adjustment or replacement work." },
    { id: "disc-replacement", title: "Bike brake inspection", description: "Inspect braking response and accessible wear components before quoting the repair." },
    { id: "puncture", title: "Bike puncture assistance", description: "Tube or tubeless tyre support at a safe parking or roadside location." },
  ],
  whyTitle: "Commuter bike care built around daily use",
  paragraphs: [
    "A daily motorcycle deals with repeated cold starts, traffic, dust and frequent braking. Chain condition, control adjustment, battery health and scheduled fluids all affect how reliably it starts and rides.",
    "The correct service begins with the exact model and a useful description of the symptom. A mechanic checks the related components instead of treating every starting, pickup or noise complaint as the same repair.",
    "Doorstep service is suited to routine maintenance, accessible diagnosis and approved minor work at a safe parking spot. If specialist workshop equipment is required, the next step is explained before the motorcycle is moved.",
  ],
  checks: [
    "Engine-oil condition and model-specific service requirement",
    "Spark plug, air filter and accessible fuel-system checks",
    "Drive-chain slack, lubrication, alignment and sprocket wear",
    "Front and rear brake response and accessible wear components",
    "Clutch, throttle and control-cable operation",
    "Battery voltage, starting behaviour, tyres and visible safety condition",
  ],
  bookingTip: "Keep the complete model name and recent service details ready. Describe when the symptom occurs and mention any recent repair, modification, fall or long period of storage.",
  specs: [
    { label: "Best suited for", value: "Daily commuter and standard geared motorcycles" },
    { label: "Booking details", value: "Make, model, engine-capacity range, symptom and address" },
    { label: "Doorstep scope", value: "Maintenance, inspection and approved accessible repairs" },
    { label: "Additional work", value: "Explained and quoted before it begins" },
    { label: "Payment", value: "After the approved service is completed" },
  ],
  brandsTitle: "Popular commuter bike brands and models",
  brandsLead: "Choose the correct make and model while booking so the service scope and compatible requirements can be checked.",
  brands: [
    { name: "Hero", slug: "hero", models: "Splendor, Passion, Glamour, Xtreme" },
    { name: "Honda", slug: "honda", models: "Shine, SP, Unicorn, Hornet" },
    { name: "Bajaj", slug: "bajaj", models: "Pulsar, Platina, CT" },
    { name: "TVS", slug: "tvs", models: "Raider, Apache, Sport, Radeon" },
    { name: "Yamaha", slug: "yamaha", models: "FZ, MT, R15" },
    { name: "Suzuki", slug: "suzuki", models: "Gixxer, V-Strom SX" },
  ],
  otherModelsText: "Cannot find your motorcycle in the list? Choose Other Brand or Other Model and enter the complete vehicle name in the booking form.",
  faqsTitle: "Doorstep bike repair: common questions",
  faqs,
  guidesTitle: "Prepare for a useful bike inspection",
  guidesLead: "A few precise details help the mechanic focus on the right system and avoid unnecessary work.",
  guides: [
    { title: "Describe when it happens", text: "Note whether the symptom appears on a cold start, after warming up, during acceleration, over bumps or while braking." },
    { title: "Share recent work", text: "Mention the last service, battery replacement, puncture, chain adjustment or repair that may be connected." },
    { title: "Park with safe access", text: "Choose a level parking spot where the motorcycle can be inspected without blocking traffic or building access." },
  ],
  finalTitle: "Book the right service for your motorcycle",
  finalLead: "Choose your bike and the closest service need, or Book a Mechanic if the cause is unclear. Add the complete address so the doorstep visit can be confirmed.",
  citiesTitle: "Find doorstep bike service in your city",
  cityPath: "/bike",
};

export const metadata: Metadata = completePageMetadata({
  title, description,
  keywords: ["bike repair in Delhi NCR", "bike service at home", "doorstep bike servicing", "bike mechanic near me"],
  alternates: { canonical: "https://www.fixwheel.app/bike" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/bike" },
});

export default async function BikePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "Doorstep bike repair and service", url: "https://www.fixwheel.app/bike", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map(name => ({ "@type": "City", name })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Bike repair and service", item: "https://www.fixwheel.app/bike" }] },
    { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ScootyRepairLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} bike={bikeContent} />
  </>;
}
