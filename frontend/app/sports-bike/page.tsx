import type { Metadata } from "next";
import ScootyRepairLayout, { type BikeLandingContent } from "@/app/scooty-repair/ScootyRepairLayout";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Sports Bike Service at Home in Delhi NCR | FixWheel";
const description = "Book sports bike service at your doorstep across Delhi NCR for cooling, braking, chain, oil and performance issue checks. Approve the quote before work begins.";

const faqs = [
  {
    q: "Can a sports bike be serviced at my home or office?",
    a: "Routine maintenance, inspection and approved minor repairs can be completed where the motorcycle is safely parked and there is suitable working access. Work that needs workshop equipment is identified after inspection.",
  },
  {
    q: "What information should I provide for a sports bike booking?",
    a: "Share the exact make, model, engine capacity, registration year and recent service history. Describe when the issue appears, such as during a cold start, in traffic, under acceleration or while braking.",
  },
  {
    q: "Can you check a sports bike that is overheating?",
    a: "The visit can include accessible cooling-system checks such as coolant level, visible leakage, hoses, radiator condition and fan behaviour. The mechanic explains whether further workshop diagnosis is needed.",
  },
  {
    q: "Do you use the same oil and parts for every sports bike?",
    a: "No. Oil grade, filters, brake parts and drivetrain components depend on the exact model and specification. Compatibility and price are confirmed before a fluid or replacement part is used.",
  },
  {
    q: "How is the final sports bike service price decided?",
    a: "The final amount depends on the motorcycle, engine-capacity tier, inspection findings, approved labour and any compatible parts or fluids. Additional work is quoted before it begins.",
  },
];

const sportsBikeContent: BikeLandingContent = {
  breadcrumbLabel: "Sports Bike Service",
  tag: "Sports motorcycle care",
  heroTitle: "Doorstep Sports Bike Service in Delhi NCR",
  lead: "Sports motorcycles need close attention to cooling, braking, drivetrain condition, fluids and control response. Book a doorstep inspection and approved service across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad without treating every symptom as the same repair.",
  pickerTitle: "What does your sports bike need?",
  pickerLegend: "Choose the symptom or service for your sports motorcycle",
  bookLabel: "Book sports bike service",
  symptoms: [
    ["starting", "Hard start or unstable idle"],
    ["cooling", "Running hot or losing coolant"],
    ["response", "Hesitation or weak throttle response"],
    ["brakes", "Brake feel or stopping has changed"],
    ["drivetrain", "Chain noise, vibration or shifting issue"],
    ["other", "Scheduled service or another concern"],
  ],
  tips: {
    starting: ["Hard starting or an unstable idle can involve the battery, ignition, fuel delivery or sensor inputs.", "Share whether the problem occurs cold or warm and whether a warning light is present."],
    cooling: ["High temperature or coolant loss can involve fluid level, hoses, airflow, fan operation or another system fault.", "Allow the motorcycle to cool safely and describe any leak, smell or temperature warning before the visit."],
    response: ["Hesitation can have air, fuel, ignition, sensor or drivetrain causes.", "Tell us the engine speed and riding condition where it appears so the inspection starts with the right system."],
    brakes: ["A soft lever, pulsing, noise or reduced stopping control should be inspected before the next demanding ride.", "The visit checks the braking components that are accessible before any repair is proposed."],
    drivetrain: ["Chain noise, vibration and shifting concerns may come from wear, adjustment, alignment or another mechanical issue.", "Describe when the symptom occurs and mention recent drivetrain work or modifications."],
    other: ["Scheduled maintenance depends on the exact model, service interval and recent work.", "Share the model and service history so the correct visit scope and quote can be confirmed."],
  },
  howTitle: "How sports bike service works",
  howLead: "The model, symptom and service scope are checked before work starts.",
  howSteps: [
    { title: "Identify your motorcycle", text: "Add the full model, variant, registration year, engine capacity and service location." },
    { title: "Describe the riding symptom", text: "Explain when the issue occurs so the relevant cooling, braking, electrical or drivetrain checks can be planned." },
    { title: "Inspect before repair", text: "The mechanic verifies the symptom and confirms compatible fluids, parts and required work." },
    { title: "Confirm the completed job", text: "Accept the quoted scope, check the finished service and pay once the approved work is complete." },
  ],
  servicesTitle: "Sports motorcycle service options in Delhi NCR",
  servicesLead: "Choose the closest service need. Engine capacity, model specification, approved parts and inspection findings determine the final quote.",
  services: [
    { id: "basic-service", title: "Sports bike inspection and service", description: "Routine checks for controls, braking, drivetrain, battery, fluids and visible leaks." },
    { id: "service-engine-oil", title: "Model-specific oil service", description: "General service with the suitable oil grade and filter requirement confirmed first." },
    { id: "obd-inspection", title: "Warning-light and OBD inspection", description: "Read available fault codes on compatible sports motorcycles, then use the finding to plan the next check." },
    { id: "disc-replacement", title: "Performance brake inspection", description: "Review lever response, friction material, rotor condition and accessible hydraulic components before quoting work." },
    { id: "chain-sprocket", title: "Chain and sprocket work", description: "Assess drive-chain tension, alignment and wear before recommending adjustment or a matched replacement set." },
    { id: "running-repair", title: "Running repair and adjustment", description: "Accessible mechanical checks and approved minor repairs based on the reported symptom." },
  ],
  whyTitle: "Sports bike care should follow the symptom",
  paragraphs: [
    "A sports bike combines responsive controls with model-specific cooling, braking, fuel-injection and drivetrain systems. Similar symptoms can have different causes, so inspection should come before parts replacement.",
    "A doorstep visit is suited to routine maintenance, accessible diagnosis and approved minor work when the motorcycle is safely parked. The mechanic confirms fluid and part compatibility for the exact model before use.",
    "Internal engine work, machining and repairs that need specialist workshop equipment are not forced into a roadside job. The next step and quote are explained before any workshop movement or additional work.",
  ],
  checks: [
    "Correct engine-oil grade and filter requirement for the model",
    "Coolant level, visible leakage, hoses, radiator and accessible fan checks",
    "Brake pad, disc, fluid, caliper and lever-response inspection",
    "Drive-chain wear, slack, alignment and sprocket condition",
    "Starting voltage, charging response and reachable electrical connections",
    "Idle, warning-light, control and visible safety-condition review",
  ],
  bookingTip: "Keep the full model name, registration year and recent service record ready. Mention aftermarket exhausts, tuning, electrical accessories or track use because they can change the inspection path.",
  specs: [
    { label: "Motorcycle details", value: "Exact make, model, year and engine capacity required" },
    { label: "Doorstep scope", value: "Inspection, maintenance and approved accessible repairs" },
    { label: "Parts and fluids", value: "Confirmed for the exact sports bike before use" },
    { label: "Workshop work", value: "Recommended only when the repair requires equipment" },
    { label: "Payment", value: "After the approved work is completed" },
  ],
  brandsTitle: "Sports bike brands and models",
  brandsLead: "Share the exact model and registration year so service compatibility can be checked before the visit.",
  brands: [
    { name: "Yamaha", slug: "yamaha", models: "R15, MT-15" },
    { name: "KTM", slug: "ktm", models: "RC, Duke" },
    { name: "TVS", slug: "tvs", models: "Apache RTR, RR 310" },
    { name: "Kawasaki", slug: "kawasaki", models: "Ninja, Z" },
    { name: "BMW", slug: "bmw", models: "G 310 RR, G 310 R" },
    { name: "Suzuki", slug: "suzuki", models: "Gixxer, Hayabusa" },
  ],
  otherModelsText: "Ride another sports motorcycle? Share its complete model name, year and engine capacity so availability and service scope can be confirmed.",
  faqsTitle: "Sports bike service: common questions",
  faqs,
  guidesTitle: "Prepare for a sports bike service visit",
  guidesLead: "Precise vehicle and symptom details help the mechanic plan the relevant checks.",
  guides: [
    { title: "Share the complete model", text: "Provide the make, model, variant, registration year and engine capacity instead of only the brand." },
    { title: "Note when the issue appears", text: "Mention whether the symptom occurs cold, in traffic, under acceleration, at a certain speed or while braking." },
    { title: "List recent changes", text: "Share recent service work, track use and aftermarket exhaust, tuning or electrical changes that may affect diagnosis." },
  ],
  finalTitle: "Book sports bike service with the right details",
  finalLead: "Arrange a doorstep visit across Delhi NCR. If you are unsure which service applies, call or WhatsApp with the motorcycle model, symptom and location before booking.",
  citiesTitle: "Explore doorstep bike service by city",
  cityPath: "/bike",
};

export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: ["sports bike service near me", "sports bike mechanic Delhi NCR", "doorstep sports motorcycle service", "sports bike repair at home"],
  alternates: { canonical: "https://www.fixwheel.app/sports-bike" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/sports-bike" },
});

export default async function SportsBikeServicePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: "Doorstep sports bike service", serviceType: "Sports motorcycle inspection and service", url: "https://www.fixwheel.app/sports-bike", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map((name) => ({ "@type": "City", name })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Sports Bike Service", item: "https://www.fixwheel.app/sports-bike" }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><ScootyRepairLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} bike={sportsBikeContent} /></>;
}
