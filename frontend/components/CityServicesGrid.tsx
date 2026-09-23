"use client";

import Link from "next/link";
import { SERVICE_PRICING_LIST } from "@/lib/pricingData";

export interface CityServiceConfig {
  tag: string;
  id: string;
  name: string;
  desc: string;
  price?: number;
  priceNote?: string;
  link: string;
  linkText: string;
}

export const CITY_SERVICE_CARDS_CONFIG: CityServiceConfig[] = [
  {
    tag: "[BASIC]",
    id: "basic-service",
    name: "Basic Service",
    desc: "Brake check, chain lube, spark plug clean, air filter inspection, and electrical system check.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[OIL]",
    id: "service-engine-oil",
    name: "Service with Engine Oil",
    desc: "Complete oil drain, OEM-grade refill, oil filter check, spark plug inspection and chain lubrication.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[ENGINE]",
    id: "engine-half",
    name: "Engine Repair",
    desc: "Engine diagnosis, fault identification and component-level repair — all done at your doorstep by a verified mechanic.",
    priceNote: "starting from (half engine)",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[PUNCTURE]",
    id: "puncture",
    name: "Puncture Repair",
    desc: "Flat tyre fixed on the spot — whether you are parked at home or stranded roadside.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[BRAKE]",
    id: "disc-replacement",
    name: "Brake Disc Replacement",
    desc: "Disc, pad, or shoe replacement and brake cable adjustment — handled at your location.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[BATTERY]",
    id: "battery-replacement",
    name: "Battery Replacement",
    desc: "Battery testing, jump-start, and professional installation starting at ₹99 labor at your doorstep.",
    priceNote: "starting from (labor)",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[JUMPSTART]",
    id: "jump-start",
    name: "Jump Start",
    desc: "Bike won't start? A mechanic reaches your location and gets your two-wheeler running again.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[RUNNING]",
    id: "running-repair",
    name: "Running Repair",
    desc: "Quick on-location fixes for common two-wheeler breakdowns so you can get moving again.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[CARB]",
    id: "carburetor-cleaning",
    name: "Carburetor Cleaning",
    desc: "Full carburetor disassembly, cleaning, and re-tuning for better fuel efficiency and throttle response.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[OBD]",
    id: "obd-inspection",
    name: "OBD Scanner Inspection",
    desc: "A diagnostic scanner is connected to your bike to read fault codes and pinpoint engine or electrical issues.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[CHAIN]",
    id: "chain-sprocket",
    name: "Chain Sprocket Replacement",
    desc: "Worn chain and sprocket replaced with standard-spec parts to restore smooth power transfer.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[PICKUP]",
    id: "pick-drop",
    name: "Pick and Drop",
    desc: "We collect your bike from your location, get it serviced, and deliver it back — you stay put.",
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
];

const ELECTRIC_SERVICE_CARDS_CONFIG: CityServiceConfig[] = [
  {
    tag: "[EV SERVICE]",
    id: "ev-service",
    name: "EV General Service",
    desc: "BMS scan, motor & wiring check",
    price: 799,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[JUMPSTART]",
    id: "ev-jump-start",
    name: "EV Auxiliary Jump Start",
    desc: "12V battery boost & voltage check",
    price: 249,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[PUNCTURE]",
    id: "ev-puncture",
    name: "EV Puncture Repair",
    desc: "Tubeless puncture & pressure check",
    price: 149,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[RUNNING]",
    id: "ev-running-repair",
    name: "EV Running Repair",
    desc: "Throttle sensor calibration & minor electrical",
    price: 149,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[BRAKE]",
    id: "ev-brake-pad",
    name: "EV Brake Pad Replacement",
    desc: "Regenerative brake & disc service",
    price: 199,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
  {
    tag: "[PICKUP]",
    id: "ev-pick-drop",
    name: "EV Pick & Drop Service",
    desc: "Safe transport for major motor/battery repair",
    price: 199,
    priceNote: "starting from",
    link: "/book",
    linkText: "Book now →",
  },
];

export interface CityServicesGridProps {
  cityName?: string;
  filterCategory?: "all" | "electric" | "scooty";
}

export default function CityServicesGrid({ filterCategory = "all" }: CityServicesGridProps = {}) {
  const serviceCards = filterCategory === "electric"
    ? ELECTRIC_SERVICE_CARDS_CONFIG
    : CITY_SERVICE_CARDS_CONFIG;

  return (
    <div className="svc-grid">
      {serviceCards.map((item) => {
        const pricingEntry = SERVICE_PRICING_LIST.find((p) => p.id === item.id);
        const priceValue = item.price ?? pricingEntry?.prices.cc0_249 ?? 550;
        const formattedPrice =
          typeof priceValue === "number"
            ? `₹${priceValue.toLocaleString("en-IN")}`
            : `₹${priceValue}`;

        return (
          <div key={item.id} className="svc-card">
            <span className="svc-tag mono">{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="svc-price">
              {formattedPrice} {item.priceNote && <span>{item.priceNote}</span>}
            </div>
            <Link href={item.link} className="go">
              {item.linkText}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
