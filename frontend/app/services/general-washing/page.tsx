import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike General Washing & Detailing at Home | FixWheel",
  description:
    "Doorstep bike foam wash & detailing Delhi. High-pressure washing, chain degreasing, body polish at home in Gurgaon, Delhi, Noida, Ghaziabad.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/general-washing",
  },
};

export default function GeneralWashingPage() {
  return (
    <ServicePageTemplate
      serviceId="general-washing"
      category="Cleaning & Polish"
      title="Bike General Washing & Detailing at Home in Delhi"
      lead="Restore your two-wheeler's showroom shine without waiting in long garage queues. Get portable high-pressure foam washing, alloy degreasing, microfiber drying, and anti-rust gloss polishing right at your doorstep."
      startingPrice="₹249"
      avgTime="45 Mins"
      warranty="100% Satisfaction Guarantee"
      descriptionParagraphs={[
        "Commuting through monsoon sludge and dusty roads in Delhi builds up grime, grease, and salt deposits on your bike's engine fins, wheel hubs, and underbody.",
        "FixWheel's mobile washing unit arrives at your home or office parking equipped with cordless high-pressure foam washers, pH-neutral car shampoos, chain degreaser sprays, and hydrophobic wax polishes.",
        "We safely clean sensitive electrical components, degrease the drive chain, hand-dry with plush microfiber towels, and apply gloss protection to paintwork and plastic trims.",
      ]}
      includedItems={[
        "Portable high-pressure snow foam wash with pH-balanced shampoo",
        "Engine block, crankcase fins & alloy wheel rim deep degreasing",
        "Plush microfiber towel hand drying to eliminate water spots",
        "Hydrophobic paintwork wax polish & vinyl/plastic trim restoration",
        "Drive chain degreasing spray clean & high-tack chain lube spray",
        "Tire sidewall dresser polish for long-lasting dark finish",
      ]}
      faqs={[
        {
          q: "Is high-pressure washing safe for bike electronic sensors and digital screens?",
          a: "Yes! Our technicians use specialized low-pressure wide-fan nozzles around digital speedometers, ECU wiring, and battery compartments to prevent water ingress.",
        },
        {
          q: "Do I need to provide water and electricity for doorstep bike wash?",
          a: "Our mobile wash unit carries its own battery-powered pressure washers and water containers, so zero setup is required from your side!",
        },
        {
          q: "How long does doorstep bike foam wash take?",
          a: "A full doorstep foam wash, microfiber dry, chain lube, and body polish takes 30 to 40 minutes.",
        },
      ]}
      keywords={[
        "bike doorstep wash delhi",
        "foam bike washing at home gurgaon",
        "scooter pressure wash noida",
        "motorcycle detailing ghaziabad",
        "bike polish service faridabad",
        "bike washing near me at home",
      ]}
    />
  );
}
