import type { Metadata } from "next";
import ScootyRepairLayout from "../scooty-repair/ScootyRepairLayout";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS } from "@/lib/publicStats";

const title = "Doorstep Bike Repair & Service in Delhi NCR | FixWheel";
const description = "Book bike repair and servicing at home in Delhi, Gurgaon, Noida, Ghaziabad and Faridabad. Get help with starting trouble, brakes, chains and routine maintenance.";
const faqs = [
  { q: "Can you service my bike at home or at work?", a: "Yes. Book a doorstep visit at your home or office parking across Delhi NCR. Share your bike model, location and the service or problem you need help with." },
  { q: "What bike repairs can I book?", a: "You can book routine servicing, oil changes, brake checks, chain maintenance, battery assistance and help with starting or running problems. The mechanic inspects your bike and explains the recommended work before you approve it." },
  { q: "How much does bike servicing cost?", a: "Pricing depends on your bike, engine capacity and the work required. Check the service price list when booking. Any additional parts or repairs are quoted for your approval before work begins." },
  { q: "When should I get my bike serviced?", a: "Follow the service intervals in your bike owner's manual. Book an inspection sooner if you notice starting trouble, unusual noise, poor pickup, oil leaks or a change in braking." },
  { q: "Do you repair sports, premium and classic bikes?", a: "FixWheel has dedicated service pages for sports bikes, premium motorcycles and Royal Enfield bikes. Share the exact model and issue when booking so the required service can be confirmed." },
];

export const metadata: Metadata = {
  title, description,
  keywords: ["bike repair in Delhi NCR", "bike service at home", "doorstep bike servicing", "bike mechanic near me"],
  alternates: { canonical: "https://www.fixwheel.app/bike" },
  openGraph: { type: "website", title, description, url: "https://www.fixwheel.app/bike" },
};

export default async function BikePage() {
  const stats = await getPublicStatsForCity("global").catch(() => DEFAULT_PUBLIC_STATS.global);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: "Doorstep bike repair and service", url: "https://www.fixwheel.app/bike", provider: { "@id": "https://www.fixwheel.app/#organization" }, areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map(name => ({ "@type": "City", name })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" }, { "@type": "ListItem", position: 2, name: "Bike repair and service", item: "https://www.fixwheel.app/bike" }] },
    { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ScootyRepairLayout bikesServiced={String(stats.bikes_serviced)} rating={stats.average_rating} bike={{
      lead: "Keep your bike ready for the daily commute or your next ride. Get routine servicing and help with starting trouble, weak brakes, chain noise or poor pickup at your home or office across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
      paragraphs: [
        "A bike that struggles to start, loses pickup or makes an unfamiliar noise needs an inspection. Tell us what you are noticing and where your motorcycle is parked so we can arrange the right doorstep visit.",
        "From Hero Splendor and Honda Shine to Bajaj Pulsar and TVS Apache, bike maintenance depends on the model, usage and manufacturer recommendations. The mechanic checks the relevant components and explains what needs attention.",
        "Book routine servicing, oil changes, chain care, brake repairs or battery assistance. Approve the recommended work and any required parts before the repair begins, then pay after the service is completed.",
      ],
      checks: ["Engine oil condition and service requirement check", "Spark plug and air filter inspection", "Drive chain condition, tension and lubrication check", "Brake pad or shoe wear and lever adjustment check", "Clutch and throttle cable inspection", "Battery, starting system and tyre checks"],
      faqs,
    }} />
  </>;
}
