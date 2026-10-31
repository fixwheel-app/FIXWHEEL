import type { Metadata } from "next";
import ScootyRepairLayout, { type BikeLandingContent } from "@/app/scooty-repair/ScootyRepairLayout";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Premium Bike Service at Home in Delhi NCR | FixWheel";
const description = "Book premium bike service at your doorstep across Delhi NCR for diagnostics, fluids, brakes, cooling and drivetrain care. Approve the quote before work begins.";

const faqs = [
  {
    q: "Can premium motorcycles be serviced at home or at work?",
    a: "Routine maintenance, diagnostics and approved minor repairs can be completed where the motorcycle is safely parked and there is enough working access. Jobs that need workshop equipment are identified after inspection.",
  },
  {
    q: "What details should I share when booking premium bike service?",
    a: "Share the exact make, model, engine capacity, registration year, recent service history and the symptom you have noticed. Mention warning lights, leaks, overheating or modifications that may affect the inspection.",
  },
  {
    q: "How are fluids and replacement parts selected for my motorcycle?",
    a: "The required grade and specification depend on the exact model. The mechanic confirms the suitable fluid or part and its price before anything is opened or fitted.",
  },
  {
    q: "Which premium-bike jobs may require workshop support?",
    a: "Internal engine work, machining, complex electrical diagnosis and repairs requiring specialist workshop equipment may need pickup after the initial assessment. The next step is explained before the vehicle is moved.",
  },
  {
    q: "Is the service price the same for every premium bike?",
    a: "No. Labour and parts depend on the motorcycle, engine-capacity tier and approved scope. Select the relevant service when booking; additional work is quoted before it begins.",
  },
];

const premiumBikeContent: BikeLandingContent = {
  breadcrumbLabel: "Premium Bike Service",
  tag: "Premium motorcycle care",
  heroTitle: "Doorstep Premium Bike Service in Delhi NCR",
  lead: "Premium motorcycles need model-specific maintenance rather than a one-size-fits-all tune-up. Book doorstep inspection and approved service for cooling, braking, electronics, fluids and drivetrain concerns across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
  pickerTitle: "What does your premium bike need?",
  pickerLegend: "Choose the symptom or service for your premium motorcycle",
  bookLabel: "Book premium bike service",
  symptoms: [
    ["warning", "Warning light or electrical fault"],
    ["cooling", "Running hot or losing coolant"],
    ["pickup", "Uneven idle or weak response"],
    ["brakes", "Brake feel or stopping has changed"],
    ["drivetrain", "Chain, clutch or shifting concern"],
    ["other", "Scheduled service or another issue"],
  ],
  tips: {
    warning: ["A warning light points to a system that needs diagnosis, not an automatic parts replacement.", "Share the exact light, model and when it appeared so the relevant electrical or OBD checks can be planned."],
    cooling: ["Heat or coolant loss can involve fluid level, hoses, airflow or another cooling-system fault.", "Let the motorcycle cool safely and mention any leak, fan behaviour or temperature warning before the visit."],
    pickup: ["Uneven idle or weak response may involve air, fuel, ignition or sensor inputs.", "Describe whether it happens cold, hot or under acceleration; the mechanic inspects before recommending work."],
    brakes: ["A change in lever feel, noise or stopping response needs a safety inspection.", "The mechanic checks pads, discs, fluid and caliper operation before confirming the repair scope."],
    drivetrain: ["Chain noise, clutch feel and shifting concerns can have different mechanical causes.", "Tell us when the symptom occurs and whether the bike has recent drivetrain work or modifications."],
    other: ["Scheduled maintenance starts with the exact model and manufacturer requirements.", "Share the service history and work requested so the correct visit and quote can be confirmed."],
  },
  howTitle: "How premium bike service works",
  howLead: "The model and service scope are confirmed before a mechanic works on the motorcycle.",
  howSteps: [
    { title: "Share the exact bike", text: "Enter the make, model, engine capacity, service need and complete location." },
    { title: "Confirm the visit scope", text: "FixWheel checks whether the requested work is suitable for a doorstep visit or needs workshop support." },
    { title: "Inspect before repair", text: "The mechanic verifies the symptom, service requirement and compatible parts or fluids." },
    { title: "Approve, review and pay", text: "Approve the quote, review the completed work and pay after the agreed service is finished." },
  ],
  servicesTitle: "Premium motorcycle service options in Delhi NCR",
  servicesLead: "Select the service that matches your need. Engine capacity, model requirements, approved parts and additional work determine the final quote.",
  services: [
    { id: "basic-service", title: "Premium bike inspection and service", description: "Routine checks for fluids, controls, braking, drivetrain, battery and visible leaks." },
    { id: "service-engine-oil", title: "Model-specific oil service", description: "General service with the suitable engine-oil grade and filter requirement confirmed first." },
    { id: "obd-inspection", title: "Warning-light and OBD inspection", description: "Diagnostic code reading for compatible fuel-injected motorcycles before repair decisions." },
    { id: "disc-replacement", title: "Brake system inspection", description: "Pad, disc, caliper, fluid and lever checks with approved replacement work." },
    { id: "chain-sprocket", title: "Drive-chain and sprocket work", description: "Wear, slack and alignment checks followed by approved fitting or adjustment." },
    { id: "pick-drop", title: "Workshop pick and drop", description: "Coordinated transport when the approved repair requires workshop equipment." },
  ],
  whyTitle: "Premium bike care starts with the exact model",
  paragraphs: [
    "Premium motorcycles vary widely in cooling systems, electronics, fluid specifications, brake hardware and service access. The correct approach begins with the exact model and the symptom or maintenance interval, not a generic package.",
    "A doorstep visit is suited to inspection, diagnostics, routine maintenance and approved minor work when the motorcycle is safely parked. The mechanic confirms compatibility before using any fluid or replacement part.",
    "When a repair needs dismantling, machining or specialist workshop equipment, the next step is explained before pickup. You approve the scope and quote before additional work begins.",
  ],
  checks: [
    "Correct engine-oil grade and filter requirement for the model",
    "Coolant level, visible leakage, hoses and radiator condition",
    "Brake pad, disc, fluid, caliper and lever-response inspection",
    "Battery voltage, charging behaviour and accessible electrical connections",
    "Drive-chain wear, slack, alignment and sprocket condition",
    "Warning-light, idle, control and visible safety-condition review",
  ],
  bookingTip: "Keep the registration year and recent service record ready. Mention aftermarket electricals, exhaust, tuning or other modifications because they can change the inspection path.",
  specs: [
    { label: "Motorcycle details", value: "Exact make, model, year and engine capacity required" },
    { label: "Doorstep scope", value: "Inspection, diagnostics, maintenance and approved minor work" },
    { label: "Parts and fluids", value: "Confirmed for the exact model before use" },
    { label: "Major repairs", value: "Workshop coordination after inspection and approval" },
    { label: "Payment", value: "After the approved work is completed" },
  ],
  brandsTitle: "Premium bike brands and models",
  brandsLead: "Share the exact variant and model year so service compatibility can be checked before the visit.",
  brands: [
    { name: "Kawasaki", slug: "kawasaki", models: "Ninja, Z, Versys" },
    { name: "KTM", slug: "ktm", models: "Duke, RC, Adventure" },
    { name: "BMW", slug: "bmw", models: "G 310 R, G 310 GS, G 310 RR" },
    { name: "Triumph", slug: "triumph", models: "Speed, Scrambler, Trident" },
    { name: "Harley-Davidson", slug: "harley-davidson", models: "X440, Street, Iron" },
    { name: "Bajaj", slug: "bajaj", models: "Dominar 400" },
  ],
  otherModelsText: "Have another premium or high-displacement motorcycle? Share its full model name, year and engine capacity so availability and service scope can be confirmed.",
  faqsTitle: "Premium bike service: common questions",
  faqs,
  guidesTitle: "Prepare for a premium-bike service visit",
  guidesLead: "Accurate model and symptom details help prevent the wrong parts, fluids or tools being planned.",
  guides: [
    { title: "Keep model details ready", text: "Share the full model, variant, registration year and engine capacity rather than only the brand name." },
    { title: "Describe the symptom precisely", text: "Note the warning light, sound, leak or riding condition and whether it appears when the engine is cold, warm or under load." },
    { title: "Mention modifications", text: "Tell us about aftermarket exhausts, tuning, electrical accessories or recent repairs that may affect diagnosis." },
  ],
  finalTitle: "Book premium bike service with the right details",
  finalLead: "Arrange a doorstep visit across Delhi NCR. If you are unsure which service applies, call or WhatsApp with the motorcycle model, symptoms and location before booking.",
  citiesTitle: "Explore doorstep bike service by city",
  cityPath: "/bike",
};

export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: ["premium bike service near me", "premium bike mechanic Delhi NCR", "superbike service at home", "doorstep premium motorcycle service"],
  alternates: { canonical: "https://www.fixwheel.app/premium-bike" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/premium-bike" },
});

export default async function PremiumBikeServicePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: "Doorstep premium bike service", serviceType: "Premium motorcycle inspection and service", url: "https://www.fixwheel.app/premium-bike", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map((name) => ({ "@type": "City", name })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Premium Bike Service", item: "https://www.fixwheel.app/premium-bike" }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><ScootyRepairLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} bike={premiumBikeContent} /></>;
}
