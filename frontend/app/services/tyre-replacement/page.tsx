import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike Tyre Replacement & Repair at Home | FixWheel",
  description:
    "Doorstep bike tyre replacement Delhi NCR. Tubeless tyre fitting, puncture repairs, wheel rim alignment at home in Gurgaon, Delhi, Noida, Ghaziabad.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/tyre-replacement",
  },
};

export default function TyreReplacementPage() {
  return (
    <ServicePageTemplate
      serviceId="tyre-replacement"
      category="Wheels & Tyres"
      title="Bike Tyre Replacement & Repair at Home in Delhi NCR"
      lead="Worn tyre treads or frequent punctures compromise wet road grip and emergency braking safety. Get doorstep tubeless tyre installation with fresh air valves and air pressure calibration."
      startingPrice="₹1,199"
      avgTime="45 Mins"
      warranty="Manufacturer Tyre Warranty Included"
      descriptionParagraphs={[
        "Riding on bald or cracked tyres in Delhi NCR increases braking distances, causes wheel wobbling at high speeds, and puts you at risk of sudden blowouts.",
        "FixWheel provides doorstep tubeless & tube-type tyre replacements from top brands (MRF, CEAT, TVS Eurogrip, Michelin, Apollo) with scratch-free rim installation tools right at your doorstep.",
        "Our mechanics replace the air valve pin, inspect brake shoes, calibrate tire pressure, and dispose of old tires safely.",
      ]}
      includedItems={[
        "Doorstep delivery & scratch-free rim tubeless tyre fitting",
        "Installation of fresh tubeless air valve stem & pin",
        "Precision air pressure calibration & water leakage bubble test",
        "Wheel axle greasing, nut torqueing & brake shoe free-play adjustment",
        "Trade-in recycling of old worn tyre unit",
      ]}
      faqs={[
        {
          q: "What tyre brands do you stock for doorstep installation?",
          a: "We stock fresh, original tyres from MRF (Zapper/Nylogrip), CEAT (Zoom/Secura), TVS Eurogrip, Michelin, and Apollo.",
        },
        {
          q: "How long does doorstep tyre replacement take?",
          a: "Doorstep delivery, wheel dismantling, tyre fitting, valve replacement, and testing takes 35 to 45 minutes.",
        },
        {
          q: "Is wheel rim scratch protection guaranteed during fitting?",
          a: "Yes! Our technicians use rubberized rim protectors and non-scratch tyre levers.",
        },
      ]}
      keywords={[
        "bike tyre replacement delhi",
        "mrf bike tyre home fitting gurgaon",
        "ceat scooter tyre doorstep noida",
        "tubeless tyre fitting ghaziabad",
        "royal enfield tyre replacement faridabad",
        "bike tyre shop near me at home",
      ]}
    />
  );
}
