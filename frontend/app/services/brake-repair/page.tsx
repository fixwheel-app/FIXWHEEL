import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike Brake Repair & Replacement at Home | FixWheel",
  description:
    "Doorstep bike brake repair Delhi NCR. Drum brake shoe replacements, disc pad cleaning, hydraulic fluid bleeding at home in Gurgaon, Delhi, Noida, Ghaziabad.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/brake-repair",
  },
  openGraph: {
    title: "Bike Brake Repair & Replacement at Home | FixWheel",
    description:
      "Doorstep bike brake repair Delhi NCR. Drum brake shoe replacements, disc pad cleaning, hydraulic fluid bleeding at home in Gurgaon, Delhi, Noida, Ghaziabad.",
    url: "https://www.fixwheel.app/services/brake-repair",
    siteName: "FixWheel",
    type: "website",
  },
};

export default function BrakeRepairPage() {
  return (
    <ServicePageTemplate
      serviceId="brake-repair"
      category="Safety Systems"
      title="Bike Brake Repair & Pad Replacement in Delhi NCR"
      lead="Brakes are your two-wheeler's most critical safety component. Squeaking noise, loose brake levers, or reduced stopping distance require immediate expert repair right at your doorstep."
      startingPrice="₹299"
      avgTime="45 Mins"
      warranty="15 Days Labor Warranty"
      descriptionParagraphs={[
        "Stop-and-go commuting in Delhi NCR wears down drum brake shoes and disc brake pads quickly. Riding with worn brake linings damages the brake rotor, decreases emergency braking control, and risks your safety.",
        "FixWheel dispatches certified mechanics with 100% genuine OEM brake shoes, high-friction disc pads, and DOT 3/4 brake fluids to your home or office parking lot. We clean brake drums, replace worn linings, lubricate brake levers, and bleed hydraulic lines.",
        "Get instant brake servicing with transparent pricing, zero visiting charges, and full safety testing.",
      ]}
      includedItems={[
        "Front & rear drum brake shoe inspection, degreasing & replacement",
        "Disc brake pad thickness check & high-friction replacement",
        "Hydraulic brake line bleeding & fresh DOT 3/4 fluid flush",
        "Brake rotor disk cleaning & surface glaze removal",
        "Brake cable inner wire lubrication & free-play lever adjustment",
        "Combibrating (CBS/ABS) sensor head clean & pressure check",
      ]}
      faqs={[
        {
          q: "Why are my bike brakes squeaking when stopping?",
          a: "Squeaking is caused by glazed brake pads, dust accumulation inside the drum, or completely worn-down metal brake shoes scraping against the rotor.",
        },
        {
          q: "How often should bike brake pads be replaced?",
          a: "Disc brake pads typically need replacement every 8,000 to 12,000 km, while drum brake shoes last 10,000 to 15,000 km depending on city riding habits.",
        },
        {
          q: "Do you supply genuine brake shoes for Honda Activa and Pulsar?",
          a: "Yes! We stock genuine HMSI, Hero MotoCorp, Bajaj Auto, and TVS original brake shoes and pads.",
        },
      ]}
      keywords={[
        "bike brake repair delhi",
        "honda activa brake shoe replacement gurgaon",
        "pulsar disc pad repair noida",
        "scooter brake repair at home ghaziabad",
        "royal enfield disc brake bleeding faridabad",
        "bike mechanic near me for brake repair",
      ]}
    />
  );
}
