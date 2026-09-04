import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Royal Enfield & Bullet Service at Home | FixWheel",
  description:
    "Doorstep Royal Enfield service Delhi. Tappet valve adjustment, 15W50 oil swap, chain lube, clutch overhaul for Classic 350, Bullet, Hunter, Himalayan in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/royal-enfield-service",
  },
  openGraph: {
    type: "website",
    title: "Royal Enfield & Bullet Service at Home | FixWheel",
    description: "Doorstep Royal Enfield service Delhi. Certified RE mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/royal-enfield-service",
  },
};

export default function RoyalEnfieldServicePage() {
  const serviceData = SERVICES_DB["royal-enfield-service"];
  return <ServicePageTemplate {...serviceData} serviceId="royal-enfield-service" />;
}
