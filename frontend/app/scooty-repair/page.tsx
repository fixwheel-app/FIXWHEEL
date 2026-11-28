import type { Metadata } from "next";
import ScootyRepairLayout, { type BikeLandingContent } from "./ScootyRepairLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";
import { completePageMetadata } from "@/lib/seoMetadata";

const title = "Scooty Repair & Scooter Service at Home | FixWheel";
const description = "Book doorstep scooty repair across Delhi NCR for self-start trouble, CVT vibration, weak pickup, brakes, tyres and periodic scooter service. Approve work first.";
const faqs = [
  {
    q: "Can a gearless scooter be repaired at my home or office?",
    a: "Routine service, accessible inspection and approved minor repairs can be completed where the scooter is safely parked. Share the exact model, symptom and full address while booking.",
  },
  {
    q: "What can cause a scooter to vibrate while moving from a stop?",
    a: "Take-off vibration can relate to the CVT, clutch, belt, mounting or another mechanical condition. The scooter should be inspected before cleaning, adjustment or replacement work is recommended.",
  },
  {
    q: "Can a mechanic check scooter self-start and battery trouble?",
    a: "Yes. The visit can include accessible battery, terminal, starting and ignition checks. Tell us whether the lights work, whether the engine cranks and how long the scooter has been parked.",
  },
  {
    q: "How is a scooter-repair quote decided?",
    a: "The selected service, scooter model, engine-capacity range, inspection findings and approved parts determine the total. Additional work is explained and quoted before it begins.",
  },
  {
    q: "Do petrol and electric scooters use the same service page?",
    a: "No. This page is for petrol scooters and scooties. Use the electric-vehicle page for charging faults, EV warnings and model-compatible electric scooter service.",
  },
];

const scooterContent: BikeLandingContent = {
  vehicleKind: "scooter",
  statsLabel: "Scooters serviced",
  breadcrumbLabel: "Scooty & Scooter Repair",
  tag: "Petrol scooter & CVT care",
  heroTitle: "Doorstep Scooty Repair & Scooter Service in Delhi NCR",
  lead: "Book help for a petrol scooter that will not start, vibrates on take-off, has weak pickup or needs periodic maintenance. FixWheel provides doorstep scooter service across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad, with the repair scope explained before work begins.",
  servicesTitle: "Scooty and scooter service options in Delhi NCR",
  servicesLead: "Choose the service that best matches the symptom. The scooter model, engine-capacity range, inspection and approved parts determine the final quote.",
  services: [
    { id: "basic-service", title: "Periodic scooter service", description: "Routine checks for starting, filters, controls, brakes, tyres and visible leaks." },
    { id: "service-engine-oil", title: "Scooter service with engine oil", description: "Scheduled maintenance with the suitable oil and filter requirement confirmed first." },
    { id: "diagnosis", title: "Book a mechanic", description: "Start with an inspection when the cause of vibration, noise or poor running is unclear." },
    { id: "battery-replacement", title: "Battery and self-start check", description: "Check accessible starting components before an approved battery or repair decision." },
    { id: "disc-replacement", title: "Scooter brake inspection", description: "Review lever response and accessible wear components before quoting the work." },
    { id: "puncture", title: "Scooter puncture assistance", description: "Tube or tubeless tyre support at a safe parking or roadside location." },
  ],
  whyTitle: "Scooter service focused on gearless daily use",
  paragraphs: [
    "A petrol scooter uses a gearless transmission and enclosed drive components, so take-off vibration and weak pickup need a different inspection path from chain-driven motorcycles.",
    "Self-start behaviour, brake response, tyres and routine fluids also change with traffic use, dust and periods of storage. Sharing the exact model and when the symptom appears helps narrow the first checks.",
    "A doorstep visit can cover maintenance, accessible diagnosis and approved minor work at a safe parking spot. Parts and additional repair are explained before installation or further work.",
  ],
  checks: [
    "Starting behaviour, battery terminals and accessible ignition checks",
    "CVT, clutch and belt symptoms assessed before opening or replacement",
    "Engine-oil condition and model-specific maintenance requirement",
    "Brake lever response and accessible pad, shoe or cable condition",
    "Air filter, controls, tyres and visible leakage inspection",
    "Road-safety condition and reported symptom verification",
  ],
  bookingTip: "Share the full scooter model, recent service history and whether it starts. If the issue is intermittent, note whether it appears cold, after warming up or during take-off.",
  specs: [
    { label: "Vehicle type", value: "Petrol scooters and scooties" },
    { label: "Booking details", value: "Brand, model, engine-capacity range, symptom and address" },
    { label: "Doorstep scope", value: "Maintenance, inspection and approved accessible repairs" },
    { label: "Parts and extras", value: "Quoted for approval before use" },
    { label: "Payment", value: "After the approved service is completed" },
  ],
  brandsTitle: "Popular petrol scooter brands and models",
  brandsLead: "Select the exact make and model while booking so the relevant maintenance and part requirements can be checked.",
  brands: [
    { name: "Honda", slug: "honda", models: "Activa, Dio" },
    { name: "TVS", slug: "tvs", models: "Jupiter, Ntorq, Zest" },
    { name: "Suzuki", slug: "suzuki", models: "Access, Avenis, Burgman Street" },
    { name: "Hero", slug: "hero", models: "Pleasure, Destini, Xoom" },
    { name: "Yamaha", slug: "yamaha", models: "Fascino, RayZR, Aerox" },
    { name: "Vespa", slug: "vespa", models: "VXL, SXL, ZX" },
  ],
  otherModelsText: "Cannot find your scooter? Choose Other Brand or Other Model and enter the complete vehicle name in the checkout form.",
  faqsTitle: "Scooty repair and scooter service: common questions",
  faqs,
  guidesTitle: "Prepare for a scooter mechanic visit",
  guidesLead: "Clear symptom and parking details help the mechanic plan a useful first inspection.",
  guides: [
    { title: "Explain the take-off behaviour", text: "For vibration or pickup issues, note whether the symptom occurs only from a stop, after warming up or at a particular speed." },
    { title: "Keep keys and storage access ready", text: "The mechanic may need safe access to the ignition, seat area and the scooter's parked position for checks." },
    { title: "Mention long storage", text: "Tell us if the scooter has not been ridden for weeks or if the battery has already been charged or jump-started." },
  ],
  finalTitle: "Book the right service for your scooter",
  finalLead: "Select your petrol scooter and the closest service need. If the cause is unclear, Book a Mechanic and describe the symptom in the booking form.",
  citiesTitle: "Find doorstep scooty repair in your city",
  cityPath: "/scooty-repair",
};

export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: ["scooty repair near me", "scooter service at home", "doorstep scooter mechanic Delhi NCR", "CVT scooter repair"],
  alternates: {
    canonical: "https://www.fixwheel.app/scooty-repair",
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: "https://www.fixwheel.app/scooty-repair",
  },
});

export default async function ScootyRepairPage() {
  const publicStats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: "Doorstep scooty repair and scooter service",
        serviceType: 'Scooter repair and servicing',
        url: 'https://www.fixwheel.app/scooty-repair',
        provider: { '@id': 'https://www.fixwheel.app/#organization' },
        areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad'].map(name => ({ '@type': 'City', name })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fixwheel.app/' },
          { '@type': 'ListItem', position: 2, name: 'Scooty & Scooter Repair', item: 'https://www.fixwheel.app/scooty-repair' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question', name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <ScootyRepairLayout bikesServiced={String(publicStats.bikes_serviced)} rating={publicStats.average_rating} bike={scooterContent} />
  </>;
}
