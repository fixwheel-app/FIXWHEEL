import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePrice } from "@/lib/pricingData";

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

export const metadata: Metadata = {
  title: "Cruiser Bike Service at Doorstep | FixWheel",
  description:
    "Doorstep cruiser bike service across Delhi NCR for Royal Enfield, Bajaj Avenger, Honda CB350, Jawa, Yezdi, Harley-Davidson, Triumph, Kawasaki, Benelli, Hero Mavrick, and TVS Ronin.",
  keywords: cruiserKeywords,
  alternates: {
    canonical: "https://www.fixwheel.app/cruiser-bike-service",
  },
  openGraph: {
    type: "website",
    title: "Cruiser Bike Service at Doorstep | FixWheel",
    description:
      "Book doorstep maintenance for cruiser and modern-classic motorcycles with verified mechanics and transparent pricing.",
    url: "https://www.fixwheel.app/cruiser-bike-service",
  },
};

const baseCruiserPrice = getServicePrice("basic-service", "cc0_249");
const startingPrice =
  typeof baseCruiserPrice === "number"
    ? `₹${baseCruiserPrice.toLocaleString("en-IN")}`
    : String(baseCruiserPrice);

const cruiserServiceData = {
  serviceId: "cruiser-bike-service",
  category: "Cruiser & Modern Classic",
  title: "Cruiser Bike Service at Doorstep",
  lead:
    "Cruiser and modern-classic motorcycles need careful torque checks, smooth clutch adjustment, accurate chain alignment, and engine-specific lubrication. FixWheel services Royal Enfield, Bajaj Avenger, Honda CB350, Jawa, Yezdi, Harley-Davidson, Triumph, Kawasaki, Benelli, Hero Mavrick, and TVS Ronin at your doorstep.",
  startingPrice,
  avgTime: "45 Mins",
  warranty: "15 Days Labor Warranty",
  descriptionParagraphs: [
    "Cruiser motorcycles combine relaxed ergonomics with heavier frames, long-stroke engines, and model-specific service requirements. Loose drive chains, stiff control cables, worn brake pads, or incorrect fluid levels can quickly affect low-speed balance and highway comfort.",
    "FixWheel sends a verified mechanic to your home or office parking with torque tools, electrical testers, chain-maintenance equipment, and the correct consumables for your motorcycle.",
    "Every additional repair or spare part is inspected first and carried out only after you approve the price.",
  ],
  includedItems: [
    "Engine oil level, leakage & service-interval inspection",
    "Drive chain cleaning, slack adjustment & alignment check",
    "Clutch, throttle and control-cable free-play adjustment",
    "Front and rear brake wear, fluid and lever-response check",
    "Battery voltage, charging output and terminal inspection",
    "Fastener, suspension and tyre-condition safety check",
  ],
  faqs: [
    {
      q: "Which cruiser bikes can FixWheel service at home?",
      a: "The supported range includes listed models from Royal Enfield, Bajaj Avenger, Honda CB350, Jawa, Yezdi, Harley-Davidson, Triumph, Kawasaki, Benelli, Hero Mavrick, and TVS Ronin.",
    },
    {
      q: "How is the exact cruiser bike service price calculated?",
      a: "The rate depends on the selected service and engine-CC tier. Any additional repair or spare part is quoted for your approval before work begins.",
    },
    {
      q: "Can the mechanic inspect chain, brakes, battery and control cables at my location?",
      a: "Yes. These checks are part of the doorstep inspection, and the mechanic will explain any repair that needs your approval.",
    },
  ],
  keywords: cruiserKeywords,
};

export default function CruiserBikeServicePage() {
  return <ServicePageTemplate {...cruiserServiceData} />;
}
