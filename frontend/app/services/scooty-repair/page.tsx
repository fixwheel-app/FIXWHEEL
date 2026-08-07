import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Scooty & Gearless Scooter Repair at Home | FixWheel",
  description:
    "Doorstep scooty repair Delhi NCR. CVT clutch roller cleaning, belt drive replacement, oil change for Activa, Jupiter, Access, Dio, Ntorq in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/scooty-repair",
  },
};

export default function ScootyRepairPage() {
  return (
    <ServicePageTemplate
      serviceId="scooty-repair"
      category="Scooter & CVT Specialist"
      title="Scooty & Gearless Scooter Repair in Delhi NCR"
      lead="Scooters like Honda Activa, TVS Jupiter, Suzuki Access, and TVS Ntorq are Delhi NCR's daily workhorses. Eliminate starting trouble and takeoff vibration with expert doorstep CVT clutch cleaning and tune-ups."
      startingPrice="₹199"
      avgTime="45 Mins"
      warranty="15 Days Labor Warranty"
      descriptionParagraphs={[
        "Gearless scooters rely on a Continuously Variable Transmission (CVT) system. Road dust and belt wear cause variator roller buildup, leading to severe shudder on acceleration, poor pickup, and reduced mileage.",
        "FixWheel's mobile scooter technicians dismantle variator assemblies, degrease clutch shoes, inspect Bando/OEM drive belts, clean spark plugs, and tune carburetors/FI units right at your home or office parking.",
        "Get instant doorstep scooty repair across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad with transparent pricing and 100% genuine parts.",
      ]}
      includedItems={[
        "CVT variator roller cleaning, degreasing & belt wear check",
        "Clutch shoe face sanding to eliminate takeoff acceleration shudder",
        "Engine oil replacement with OEM recommended scooter grade oil",
        "Spark plug cleaning, electrode gap setting & air filter dust clean",
        "Front & rear drum brake shoe adjustment & cable inner wire lube",
        "Carburetor / FI idling speed adjustment for maximum mileage",
      ]}
      faqs={[
        {
          q: "Why does my Honda Activa or Jupiter vibrate when taking off?",
          a: "Takeoff vibration is caused by carbon dust accumulation on the CVT clutch shoes and worn variator rollers. Cleaning the CVT assembly fixes this issue completely.",
        },
        {
          q: "How long does doorstep scooty repair take?",
          a: "A full CVT cleaning, brake service, and oil change takes 35 to 45 minutes at your location.",
        },
        {
          q: "Do you service all scooter models including Access 125 and Ntorq?",
          a: "Yes! We service Honda Activa (3G to 6G/125), TVS Jupiter, Suzuki Access 125, TVS Ntorq, Honda Dio, and Yamaha Fascino.",
        },
      ]}
      keywords={[
        "scooty repair delhi",
        "honda activa cvt cleaning gurgaon",
        "tvs jupiter doorstep service noida",
        "suzuki access 125 repair ghaziabad",
        "tvs ntorq mechanic faridabad",
        "scooter mechanic near me at home",
      ]}
    />
  );
}
