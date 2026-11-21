import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Basic Bike Service at Doorstep in Delhi | FixWheel",
  description:
    "Book professional basic bike service Delhi. Regular tune-ups, brake adjustments, chain lubing, spark plug cleaning at home in Gurgaon, Delhi, Noida, Ghaziabad, Faridabad.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/basic-service",
  },
  openGraph: {
    title: "Basic Bike Service at Doorstep in Delhi | FixWheel",
    description:
      "Book professional basic bike service Delhi. Regular tune-ups, brake adjustments, chain lubing, spark plug cleaning at home in Gurgaon, Delhi, Noida, Ghaziabad, Faridabad.",
    url: "https://www.fixwheel.app/services/basic-service",
    siteName: "FixWheel",
    type: "website",
  },
});

export default function BasicServicePage() {
  return (
    <ServicePageTemplate
      basicServiceDetails
      serviceId="basic-service"
      category="Regular Maintenance"
      title="Basic Bike Service at Doorstep in Delhi"
      lead="Book a doorstep check and routine upkeep for your bike or scooter. We inspect key safety and maintenance points, explain what needs attention, and confirm any additional work before it begins."
      startingPrice="₹550"
      avgTime="45 Mins"
      warranty="15 Days Labor Warranty"
      descriptionParagraphs={[
        "Routine maintenance helps you spot wear before it develops into a larger repair. Basic service focuses on inspection, cleaning, adjustment and lubrication of accessible parts on your two-wheeler.",
        "The mechanic reviews the vehicle first, performs the agreed basic upkeep and explains any parts or repair work that would need a separate quote. The work depends on the vehicle's design and condition.",
      ]}
      includedItems={[
        "Brake inspection and adjustment where applicable",
        "Spark plug and air filter inspection and cleaning where accessible",
        "Chain inspection, cleaning and lubrication on chain-drive vehicles",
        "Lights, indicators and horn check",
        "Control cable and lever inspection and lubrication where applicable",
        "Tyre pressure and tread inspection",
      ]}
      faqs={[
        {
          q: "How long does doorstep basic bike service take?",
          a: "The time depends on your vehicle and its condition. Confirm the appointment time and expected work duration when booking.",
        },
        {
          q: "Is engine oil change included in basic service?",
          a: "No. Engine oil and oil filter replacement are separate from the basic service price. Ask for the oil grade and an itemized quote before approving an oil change.",
        },
        {
          q: "Can you service my bike or scooter in my parking area?",
          a: "Share your vehicle model and location when booking. The team can confirm whether the requested work can be done at your location or needs a workshop.",
        },
        {
          q: "What if the mechanic finds another fault?",
          a: "The mechanic should explain the finding and give you a separate quote. Additional repairs or replacement parts should begin only after you approve them.",
        },
        {
          q: "Does basic service include a wash or new parts?",
          a: "No. Washing and replacement parts are outside the basic service price. Ask for an itemized quote if you want them added.",
        },
        {
          q: "How much is basic service for my vehicle?",
          a: "The price depends on engine capacity. Check the vehicle-category price table above and confirm your model and any additional work when booking.",
        },
      ]}
      keywords={[
        "basic bike service delhi",
        "doorstep bike service gurgaon",
        "bike repair at home noida",
        "hero splendor service ghaziabad",
        "honda activa basic service faridabad",
        "scooter mechanic near me",
        "doorstep bike tune up delhi",
        "bike chain lube at home",
      ]}
    />
  );
}
