import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Comprehensive Bike Service at Doorstep | FixWheel",
  description: "Full comprehensive bike service at home in Delhi. Deep inspection, engine oil swap, carburetor/FI tuning, and full safety checks.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/comprehensive-service",
  },
};

export default function ComprehensiveServicePage() {
  return (
    <ServicePageTemplate
      serviceId="comprehensive-service"
      category="Full Overhaul"
      title="Comprehensive Bike Service at Doorstep in Delhi"
      lead="Give your motorcycle or scooter a complete health reset. Our 24-point comprehensive doorstep service includes premium synthetic oil change, carburetor/FI nozzle cleaning, brake overhaul, and deep lubrication."
      startingPrice="₹899"
      avgTime="45 Mins"
      warranty="15 Days Full Labor Guarantee"
      descriptionParagraphs={[
        "Our Comprehensive Bike Service is recommended every 6 months or 5,000 km. Over time, engine oil breaks down, carbon builds up in the throttle body, brake pads wear out, and suspension pivots lose grease.",
        "FixWheel's master mechanics perform a complete top-to-bottom service right at your doorstep in Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad. We drain old engine oil, flush debris, replace oil filters, clean carburetor jets or FI nozzles, and adjust tappet valve clearances.",
        "You receive a digital health report, 100% genuine parts guarantee, and a 15-day labor warranty for complete peace of mind.",
      ]}
      includedItems={[
        "Premium synthetic engine oil replacement & new oil filter swap",
        "Carburetor deep cleaning or Fuel Injection (FI) nozzle spray clean",
        "Engine tappet valve clearance inspection & gap adjustment",
        "Front & rear brake shoe/pad cleaning, degreasing & replacement check",
        "Hydraulic brake fluid top-up or bleeding check",
        "Spark plug clean-up, gap setting & ignition spark test",
        "Drive chain deep degreasing, tensioning & high-tack spray lube",
        "Clutch & throttle cable inner wire lubrication & free-play setting",
        "Battery terminal cleaning, voltage check & charging circuit test",
        "24-point safety diagnostic inspection & test drive",
      ]}
      faqs={[
        {
          q: "What is the difference between Basic and Comprehensive bike service?",
          a: "Basic service covers regular 15-point checkups and cable adjustments. Comprehensive service includes full engine oil replacement, carburetor/FI nozzle deep cleaning, tappet valve adjustment, and 24-point safety diagnostics.",
        },
        {
          q: "How long does a comprehensive doorstep service take?",
          a: "A comprehensive service takes approximately 50 to 60 minutes at your doorstep.",
        },
        {
          q: "Do you use synthetic engine oil for comprehensive service?",
          a: "Yes! We use premium semi-synthetic or fully synthetic engine oil matching your bike manufacturer's specifications (Motul, Yamalube, Castrol, HMSI).",
        },
      ]}
      keywords={[
        "comprehensive bike service delhi",
        "full bike service at home gurgaon",
        "motorcycle overhaul noida",
        "scooter deep service ghaziabad",
        "royal enfield full service faridabad",
        "doorstep bike service package delhi",
      ]}
    />
  );
}
