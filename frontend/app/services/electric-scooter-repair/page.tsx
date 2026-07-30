import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Electric Scooter Repair at Home | FixWheel",
  description:
    "Doorstep electric scooter repair Delhi NCR. Battery diagnostics, motor controller checks, belt drive tensioning for Ola, Ather, TVS iQube, Hero Vida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/electric-scooter-repair",
  },
};

export default function ElectricScooterRepairPage() {
  return (
    <ServicePageTemplate
      serviceId="electric-scooter-repair"
      category="EV Maintenance"
      title="Electric Scooter Repair at Doorstep in Delhi NCR"
      lead="Electric scooters like OLA S1 Pro, Ather 450X, TVS iQube, and Bajaj Chetak feature advanced electronics and belt drivetrains. Get doorstep EV diagnostics, battery health scans, and brake servicing in under 45 minutes."
      startingPrice="₹599"
      avgTime="45 Minutes"
      warranty="15 Days EV Technical Warranty"
      descriptionParagraphs={[
        "EV scooters require specialized high-voltage diagnostic tools, belt alignment gauges, and electronic sensor scanners. Local roadside mechanics are often untrained in handling EV lithium battery packs or motor controllers.",
        "FixWheel's EV-certified mechanics visit your home or office parking with multi-meters, EV safety gear, and diagnostic software. We inspect battery cell voltage balances, adjust Gates carbon drive belt tension, service disc brakes, and check regenerative braking sensors.",
        "Get instant EV doorstep repair across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad with 100% genuine replacement parts.",
      ]}
      includedItems={[
        "Lithium battery pack voltage, state of health (SOH) & BMS diagnostic check",
        "Belt drive tensioning, alignment & hub reducer gear fluid inspection",
        "Front & rear disc brake pad cleaning, caliper pin lube & regen sensor test",
        "High-voltage wiring harness, terminal insulation & controller connector scan",
        "Telescopic front fork check, head cone-set adjustment & shock absorber play check",
        "Digital instrument cluster, throttle sensor & side-stand cut-off switch test",
      ]}
      faqs={[
        {
          q: "Do you service OLA S1 Pro and Ather 450X at home?",
          a: "Yes! Our EV mechanics are trained specifically for OLA S1 Pro/Air/X, Ather 450X/Rizta, TVS iQube, Hero Vida, and Chetak EV models.",
        },
        {
          q: "Why is my electric scooter belt squeaking?",
          a: "Squeaking is caused by belt misalignment or accumulated road dust on the carbon belt drive. We clean and align the drive belt at your doorstep.",
        },
        {
          q: "Can you diagnose battery range drop issues at home?",
          a: "Yes! We run digital diagnostics on your EV battery cells and BMS software to identify voltage drops or unbalanced cells.",
        },
      ]}
      keywords={[
        "electric scooter repair delhi",
        "ola s1 pro doorstep service gurgaon",
        "ather 450x home service noida",
        "tvs iqube repair ghaziabad",
        "ev scooter mechanic near me faridabad",
        "electric scooter belt tensioning delhi ncr",
      ]}
    />
  );
}
