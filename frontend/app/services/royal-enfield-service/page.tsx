import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Royal Enfield & Bullet Service at Home | FixWheel",
  description:
    "Doorstep Royal Enfield service Delhi NCR. Tappet valve adjustment, 15W50 oil swap, chain lube, clutch overhaul for Classic 350, Bullet, Hunter, Himalayan.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/royal-enfield-service",
  },
};

export default function RoyalEnfieldServicePage() {
  return (
    <ServicePageTemplate
      serviceId="royal-enfield-service"
      category="Royal Enfield Specialist"
      title="Royal Enfield & Bullet Service at Doorstep in Delhi NCR"
      lead="Royal Enfield cruisers demand dedicated valve clearance tuning, heavy-duty 15W-50 oil replacement, and chain tensioning to maintain their iconic thump and touring reliability."
      startingPrice="₹699"
      avgTime="50 Minutes"
      warranty="15 Days RE Labor Warranty"
      descriptionParagraphs={[
        "Royal Enfield single-cylinder and twin engines need specialized care. Incorrect tappet gap settings lead to compression loss and hard starting, while improper chain tensioning causes severe driveline drag.",
        "FixWheel dispatches specialized RE mechanics trained on Classic 350, Bullet 350, Hunter 350, Meteor 350, Himalayan, and Interceptor 650 directly to your home or office parking across Delhi NCR.",
        "We handle Liquid Gun 15W-50 oil changes, valve clearance (tappet) settings, heavy-duty chain degreasing & lube, disc brake pad cleaning, and telescopic fork seal checks.",
      ]}
      includedItems={[
        "15W-50 Liquid Gun / Motul semi-synthetic engine oil & filter replacement",
        "Engine tappet valve clearance gap setting & compression check",
        "Heavy-duty drive chain deep cleaning, alignment & high-tack spray lube",
        "Front & rear disc brake pad cleaning & dual-channel ABS sensor check",
        "Spark plug cleaning, electrode gap setting & ignition spark test",
        "Clutch free-play adjustment, cable lubrication & gear shift link check",
      ]}
      faqs={[
        {
          q: "How often should Royal Enfield tappet valve clearance be adjusted?",
          a: "Tappet valve clearance should be checked every 4,000 to 5,000 km to maintain optimal compression and crisp engine thump.",
        },
        {
          q: "Do you service RE Classic 350, Bullet 350, and Himalayan at home?",
          a: "Yes! Our technicians carry dedicated RE pullers, gaskets, and filters for Classic 350, Bullet 350, Hunter 350, Meteor, and Himalayan.",
        },
        {
          q: "What engine oil is recommended for Royal Enfield bikes?",
          a: "We use official Royal Enfield Liquid Gun 15W-50 semi-synthetic oil or Motul 7100 15W-50 100% synthetic oil.",
        },
      ]}
      keywords={[
        "royal enfield service delhi",
        "bullet 350 mechanic at home gurgaon",
        "classic 350 doorstep service noida",
        "himalayan bike repair ghaziabad",
        "hunter 350 oil change faridabad",
        "bullet tappet adjustment near me",
      ]}
    />
  );
}
