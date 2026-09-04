import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commuter Bike Service at Doorstep | FixWheel",
  description:
    "Doorstep commuter bike service Delhi. Regular tune-ups, oil change, spark plug cleaning, and mileage tuning for Hero, Honda, Bajaj, and TVS commuter bikes in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/commuter-bike-service",
  },
  openGraph: {
    type: "website",
    title: "Commuter Bike Service at Doorstep | FixWheel",
    description: "Doorstep commuter bike service Delhi. Certified mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/commuter-bike-service",
  },
};

export default function CommuterBikeServicePage() {
  const serviceData = SERVICES_DB["commuter-bike-service"];
  return <ServicePageTemplate {...serviceData} serviceId="commuter-bike-service" />;
}
