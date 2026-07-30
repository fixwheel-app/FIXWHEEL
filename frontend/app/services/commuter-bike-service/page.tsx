import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commuter Bike Service at Doorstep | FixWheel",
  description:
    "Doorstep commuter bike service Delhi NCR. Regular tune-ups, oil change, spark plug cleaning, and mileage tuning for Hero, Honda, Bajaj, and TVS commuter bikes.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/commuter-bike-service",
  },
};

export default function CommuterBikeServicePage() {
  return (
    <ServicePageTemplate
      serviceId="commuter-bike-service"
      category="Commuter Maintenance"
      title="Commuter Bike Service at Doorstep in Delhi NCR"
      lead="Daily commuter bikes like Hero Splendor, Honda Shine, Bajaj Pulsar, and TVS Raider demand consistent care to deliver peak mileage and vibration-free rides across Delhi NCR."
      startingPrice="₹199"
      avgTime="45 Minutes"
      warranty="15 Days Labor Warranty"
      descriptionParagraphs={[
        "Commuter bikes are the lifeline of daily travel across Gurgaon, Delhi, Noida, and Ghaziabad. High daily mileage quickly degrades engine oil, clogs air filters, and slackens drive chains.",
        "FixWheel's doorstep commuter bike service package is tailored specifically for 100cc to 160cc motorcycles. Our mechanics arrive at your home or office parking with genuine OEM oil, spark plugs, filters, and specialized tools.",
        "We optimize the air-fuel ratio, adjust clutch free-play, and service brakes to ensure your commuter bike stays smooth and extremely fuel-efficient.",
      ]}
      includedItems={[
        "OEM specification engine oil replacement (10W-30 / 20W-50)",
        "Spark plug electrode cleaning, testing & gap adjustment",
        "Air filter dust clean-up & intake airflow test",
        "Drive chain deep cleaning, tensioning & high-tack spray lube",
        "Front & rear drum/disc brake inspection and adjustment",
        "Control cable (clutch & accelerator) lubrication & play setting",
        "Battery terminal cleaning & full electrical circuit check",
        "Carburetor / FI idling speed adjustment for maximum mileage",
      ]}
      faqs={[
        {
          q: "How often should I service my commuter bike?",
          a: "Commuter bikes should be serviced every 3,000 to 4,000 km or every 3 months for optimal mileage and engine life.",
        },
        {
          q: "Do you service Hero Splendor and Honda Shine at home?",
          a: "Yes! Hero Splendor, Passion, HF Deluxe, and Honda Shine are our most frequently serviced commuter bikes across Delhi NCR.",
        },
        {
          q: "Can I get my bike serviced at my office parking space?",
          a: "Absoluty! Our mechanics bring portable tools and protective mats so there is zero mess in your office or residential parking.",
        },
      ]}
      keywords={[
        "commuter bike service delhi",
        "hero splendor home service gurgaon",
        "honda shine repair at doorstep noida",
        "bajaj pulsar commuter service ghaziabad",
        "tvs raider 125 service faridabad",
        "daily bike mechanic near me",
      ]}
    />
  );
}
