import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bike Engine Repair & Overhaul at Home | FixWheel",
  description:
    "Doorstep bike engine diagnostics & repair Delhi NCR. Valve clearance adjustment, clutch plate replacements, starter motor repair.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/engine-repair",
  },
};

export default function EngineRepairPage() {
  return (
    <ServicePageTemplate
      serviceId="engine-repair"
      category="Powertrain & Engine"
      title="Bike Engine Repair & Overhaul in Delhi NCR"
      lead="Experiencing engine knocking, metallic noise, white exhaust smoke, or loss of pickup? Get expert doorstep engine diagnostics, valve clearance tuning, and clutch plate overhauls."
      startingPrice="₹699"
      avgTime="60 Minutes"
      warranty="15 Days Mechanical Warranty"
      descriptionParagraphs={[
        "Engine issues like valve noise, worn piston rings, slipping clutch plates, or clogged FI nozzles degrade performance and threaten internal engine components.",
        "FixWheel's senior engine mechanics bring compression gauges, feeler gauges, clutch pullers, and genuine replacement parts to your home or office parking in Delhi NCR. We diagnose engine noises, adjust tappet clearance, replace worn clutch plates, and clean throttle bodies.",
        "Restore factory-smooth acceleration, silent idling, and peak power without leaving your bike at local garages for days.",
      ]}
      includedItems={[
        "Tappet valve clearance setting (feeler gauge tuning) & timing chain check",
        "Clutch assembly overhaul, friction plate & steel disc replacement",
        "Carburetor jet cleaning or FI injector pressure scan",
        "Spark plug inspection, ignition coil voltage check & carbon clean-up",
        "Engine oil pump pressure test & oil strainer screen clean",
        "Starter motor bench test, carbon brush check & relay wiring inspection",
      ]}
      faqs={[
        {
          q: "What causes engine knocking or ticking sounds in bikes?",
          a: "Ticking or knocking is usually caused by excessive tappet valve clearance, loose timing chain tension, or insufficient oil pressure in the cylinder head.",
        },
        {
          q: "Can engine clutch plates be replaced at home?",
          a: "Yes! Our technicians carry specialized clutch basket pullers and genuine OEM clutch friction plates to perform complete clutch overhauls at your doorstep.",
        },
        {
          q: "How long does doorstep engine diagnostics take?",
          a: "Diagnostics and minor engine repairs take 45 to 60 minutes. If major machining is needed, we guide you on transparent next steps.",
        },
      ]}
      keywords={[
        "bike engine repair delhi",
        "motorcycle tappet adjustment gurgaon",
        "clutch plate replacement at home noida",
        "scooter engine repair ghaziabad",
        "royal enfield engine service faridabad",
        "bike engine mechanic near me",
      ]}
    />
  );
}
