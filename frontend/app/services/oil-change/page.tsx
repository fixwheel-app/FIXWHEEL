import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike Engine Oil Change at Home in Delhi | FixWheel",
  description:
    "Doorstep bike engine oil change Delhi. Genuine Motul, Yamalube, Castrol, and Honda OEM engine oil replacement at home in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/oil-change",
  },
};

export default function OilChangePage() {
  return (
    <ServicePageTemplate
      serviceId="oil-change"
      category="Fluid & Lubrication"
      title="Bike Engine Oil Change at Doorstep in Delhi"
      lead="Engine oil is your bike's lifeblood. Prevent engine overheating and friction wear with 100% sealed genuine engine oil replacement (Motul, Yamalube, Castrol, HMSI, Liquid Gun) done at your home in 30 minutes."
      startingPrice="₹349"
      avgTime="45 Mins"
      warranty="100% Sealed Genuine Oil Guarantee"
      descriptionParagraphs={[
        "Riding in Delhi's stop-and-go traffic subjects engine oil to high thermal stress. Over time, oil breaks down, loses viscosity, and turns sludge-like — leading to engine overheating, clutch slipping, and piston ring wear.",
        "FixWheel's mobile oil change service brings 100% sealed, genuine OEM engine oil bottles matching your motorcycle manufacturer's viscosity specs (10W-30, 10W-40, 15W-50, 20W-50).",
        "We drain old sludge completely, clean the magnetic drain plug, replace the oil filter, inspect O-rings, and dispose of used oil in an environmentally safe manner.",
      ]}
      includedItems={[
        "Complete old engine oil drain & magnetic drain bolt clean-up",
        "Fresh 100% sealed genuine engine oil refill (Motul / Yamalube / Castrol / OEM)",
        "Oil filter element replacement & rubber O-ring seal check",
        "Spark plug inspection & carbon deposit clean-up",
        "Drive chain tension check & spray lubrication",
        "Environmentally responsible used oil collection & recycling",
      ]}
      faqs={[
        {
          q: "How do I know which engine oil grade is right for my bike?",
          a: "Our technicians strictly follow manufacturer specifications — e.g. 10W-30 for Honda Activa/Shine, 15W-50 for Royal Enfield Classic, and 10W-40 for Yamaha R15.",
        },
        {
          q: "Can I inspect the sealed oil bottle before it is opened?",
          a: "Absoluty! The mechanic unseals the brand-new oil bottle right in front of you before pouring it into your engine.",
        },
        {
          q: "How long does a doorstep oil change take?",
          a: "A doorstep engine oil drain, filter replacement, and refill takes approximately 25 to 35 minutes.",
        },
      ]}
      keywords={[
        "bike oil change delhi",
        "motul engine oil change home service gurgaon",
        "honda activa oil change noida",
        "royal enfield liquid gun oil change ghaziabad",
        "yamalube 10w40 oil service faridabad",
        "doorstep engine oil change near me",
      ]}
    />
  );
}
