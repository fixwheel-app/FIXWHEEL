import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Premium & Superbike Service at Home | FixWheel",
  description:
    "Doorstep premium bike service Delhi NCR. Expert care for Ninja, Dominar, Duke 390, Harley X440, Triumph, BMW Motorrad in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/premium-bike-service",
  },
};

export default function PremiumBikeServicePage() {
  return (
    <ServicePageTemplate
      serviceId="premium-bike-service"
      category="High Performance"
      title="Premium & Superbike Service at Doorstep in Delhi NCR"
      lead="High-displacement motorcycles require precision torque settings, double-ester synthetic oils (Motul 300V/7100), coolant flushes, and delicate care. Get specialized superbike mechanics at your doorstep."
      startingPrice="₹1,499"
      avgTime="60 Minutes"
      warranty="15 Days Premium Labor Warranty"
      descriptionParagraphs={[
        "Performance motorcycles like Kawasaki Ninja 300/400, KTM Duke 390, Bajaj Dominar 400, Harley-Davidson X440, Triumph Speed 400, and BMW G310 require strict mechanical tolerances and zero shortcuts.",
        "FixWheel dispatches specialized superbike technicians equipped with padded work mats, torque wrenches, coolant flushers, and digital multimeters directly to your residential garage or office parking in Delhi NCR.",
        "We handle Motul 300V/7100 fully synthetic oil swaps, radiator fin cleaning, high-speed disc brake pad inspections, and laser chain alignments with supreme attention to detail.",
      ]}
      includedItems={[
        "Motul 300V Factory Line / 7100 100% Synthetic double-ester oil swap",
        "OEM high-flow oil filter replacement & magnetic drain bolt torqueing",
        "Radiator cooling fins cleanup, coolant flush & thermostat operation check",
        "High-performance disc brake pads check & DOT 4 hydraulic fluid bleeding",
        "Laser-guided drive chain tensioning, alignment & Motul Factory lube",
        "ECU error code OBD scan, battery CCA test & stator coil voltage check",
      ]}
      faqs={[
        {
          q: "What superbike brands do you service at doorstep?",
          a: "We service Kawasaki, KTM, Bajaj Dominar, Harley-Davidson, Triumph, BMW Motorrad, Benelli, and Royal Enfield 650 twins.",
        },
        {
          q: "Do you use torque wrenches for drain bolts and wheel axles?",
          a: "Yes! Our premium bike technicians use calibrated torque wrenches according to exact manufacturer torque specs (Nm).",
        },
        {
          q: "Is Motul 300V or 7100 oil available for doorstep service?",
          a: "Yes! We stock genuine 100% sealed Motul 300V double-ester and Motul 7100 ester synthetic oils.",
        },
      ]}
      keywords={[
        "superbike service delhi",
        "kawasaki ninja 300 service gurgaon",
        "ktm duke 390 home service noida",
        "harley davidson x440 repair ghaziabad",
        "triumph speed 400 service faridabad",
        "premium bike mechanic near me",
      ]}
    />
  );
}
