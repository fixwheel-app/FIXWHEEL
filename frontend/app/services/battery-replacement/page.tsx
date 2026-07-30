import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike Battery Replacement at Home in Delhi NCR | FixWheel",
  description:
    "Instant doorstep bike battery replacement Delhi NCR. Certified battery testing, Exide & Amaron batteries with manufacturer warranty card in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/battery-replacement",
  },
  openGraph: {
    title: "Bike Battery Replacement at Home in Delhi NCR | FixWheel",
    description:
      "Instant doorstep bike battery replacement Delhi NCR. Certified battery testing, Exide & Amaron batteries with manufacturer warranty card in Gurgaon, Delhi, Noida.",
    url: "https://www.fixwheel.app/services/battery-replacement",
    siteName: "FixWheel",
    type: "website",
  },
};

export default function BatteryReplacementPage() {
  return (
    <ServicePageTemplate
      serviceId="battery-replacement"
      category="Electrical Systems"
      title="Bike Battery Replacement at Doorstep in Delhi NCR"
      lead="Facing self-start failure, dim headlights, or weak horn sounds? Get rapid doorstep bike battery testing and instant replacement with fresh, zero-maintenance batteries from top brands in under 45 minutes."
      startingPrice="₹1,299"
      avgTime="45 Minutes"
      warranty="Official Brand Warranty Included"
      descriptionParagraphs={[
        "Extreme winter cold and hot summer weather in Delhi NCR often accelerate motorcycle battery cell degradation. When your battery fails, getting stuck in traffic or a office parking lot is frustrating.",
        "FixWheel's mobile battery service brings digital load testers and genuine zero-maintenance batteries directly to your location. Our mechanic checks the alternator charging voltage and RR unit to verify if the issue is a dead battery or a charging circuit fault.",
        "Every new battery comes with an official printed manufacturer warranty card, terminal corrosion treatment, and eco-friendly recycling of your old battery.",
      ]}
      includedItems={[
        "Digital load testing & battery CCA (Cold Cranking Amps) health diagnosis",
        "Charging coil voltage & regulator rectifier (RR unit) output test",
        "Installation of fresh 100% brand-new battery (Exide, Amaron, SF Sonic)",
        "Official printed manufacturer warranty card delivered on the spot",
        "Battery terminal cleaning, anti-corrosion grease & petroleum jelly coating",
        "Safe eco-friendly disposal and trade-in discount on old battery",
      ]}
      faqs={[
        {
          q: "How do I know if my bike battery needs replacement?",
          a: "Key symptoms include difficulty self-starting, clicking sounds when pressing the starter button, dim headlights when idling, and a weak horn.",
        },
        {
          q: "Do you provide official manufacturer warranty with the battery?",
          a: "Yes! Every battery installed by FixWheel includes the manufacturer's original warranty card (typically 36 to 48 months warranty).",
        },
        {
          q: "How long does doorstep battery replacement take?",
          a: "Our doorstep technician arrives in 45 minutes and completes testing and battery installation in under 20 minutes.",
        },
      ]}
      keywords={[
        "bike battery replacement delhi",
        "amaron bike battery home installation gurgaon",
        "exide scooter battery doorstep noida",
        "honda activa battery replacement ghaziabad",
        "royal enfield battery service faridabad",
        "dead bike battery repair near me",
      ]}
    />
  );
}
