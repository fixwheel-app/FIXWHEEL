import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Basic Bike Service at Doorstep in Delhi NCR | FixWheel",
  description:
    "Book professional basic bike service Delhi NCR. Regular tune-ups, brake adjustments, chain lubing, spark plug cleaning at home in Gurgaon, Delhi, Noida, Ghaziabad, Faridabad.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/basic-service",
  },
  openGraph: {
    title: "Basic Bike Service at Doorstep in Delhi NCR | FixWheel",
    description:
      "Book professional basic bike service Delhi NCR. Regular tune-ups, brake adjustments, chain lubing, spark plug cleaning at home in Gurgaon, Delhi, Noida, Ghaziabad, Faridabad.",
    url: "https://www.fixwheel.app/services/basic-service",
    siteName: "FixWheel",
    type: "website",
  },
};

export default function BasicServicePage() {
  return (
    <ServicePageTemplate
      serviceId="basic-service"
      category="Regular Maintenance"
      title="Basic Bike Service at Doorstep in Delhi NCR"
      lead="Keep your daily commuter motorcycle or scooter running flawlessly with FixWheel's periodic basic bike service package. Skipping regular checkups leads to unexpected breakdowns — our 45-minute doorstep tune-up keeps your ride smooth and mileage high."
      startingPrice="₹199"
      avgTime="45 Mins"
      warranty="15 Days Labor Warranty"
      descriptionParagraphs={[
        "Commuting through Delhi NCR traffic subjects your bike's clutch cables, brake shoes, spark plugs, and air filters to extreme dust and friction. Without regular maintenance, carbon deposits accumulate in the engine, resulting in poor fuel efficiency, engine knocking, and starting trouble.",
        "Our certified doorstep mechanics arrive directly at your home or office parking with specialized diagnostic kits, OEM spare parts, and eco-friendly cleaning supplies. We perform a comprehensive 15-point checkup, adjusting control cables, cleaning spark plugs, inspecting brake liners, and lubricating key chassis pivots.",
        "With FixWheel, you get 100% transparent pricing, zero hidden charges, and a 15-day quality warranty on every basic service.",
      ]}
      includedItems={[
        "Complete front & rear brake inspection and precision adjustment",
        "Spark plug cleaning, electrode gap setting & ignition check",
        "Air filter inspection, dust removal & airflow check",
        "Drive chain deep cleaning, tensioning & high-tack spray lube",
        "Full electrical system test (headlights, indicators, horn, battery voltage)",
        "Lubrication of control cables, center stand pivot & brake levers",
        "Carburetor / FI idling speed adjustment for maximum mileage",
        "Tire pressure calibration & tread depth safety check",
      ]}
      faqs={[
        {
          q: "How long does doorstep basic bike service take?",
          a: "A basic doorstep bike service typically takes 35 to 45 minutes to complete at your home or office parking.",
        },
        {
          q: "Is engine oil change included in basic service?",
          a: "Basic service includes engine oil health inspection and top-up if needed. Complete oil replacement with a new sealed bottle can be selected during booking.",
        },
        {
          q: "What bike models are covered under basic service?",
          a: "We service all 100cc to 160cc commuter bikes and gearless scooters including Honda Activa, Hero Splendor, TVS Jupiter, Suzuki Access, and Bajaj Pulsar.",
        },
        {
          q: "Are there any extra visiting charges for doorstep service in Gurgaon or Noida?",
          a: "No! FixWheel offers flat, transparent pricing with zero doorstep visit fees across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad.",
        },
      ]}
      keywords={[
        "basic bike service delhi",
        "doorstep bike service gurgaon",
        "bike repair at home noida",
        "hero splendor service ghaziabad",
        "honda activa basic service faridabad",
        "scooter mechanic near me",
        "doorstep bike tune up delhi ncr",
        "bike chain lube at home",
      ]}
    />
  );
}
