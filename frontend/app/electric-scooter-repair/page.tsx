import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Electric Scooter Repair at Home | FixWheel",
  description:
    "Doorstep electric scooter repair Delhi. Battery diagnostics, motor controller checks, belt drive tensioning for Ola, Ather, TVS iQube, Hero Vida in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/electric-scooter-repair",
  },
  openGraph: {
    type: "website",
    title: "Electric Scooter Repair at Home | FixWheel",
    description: "Doorstep electric scooter repair Delhi. Certified EV mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/electric-scooter-repair",
  },
};

export default function ElectricScooterRepairPage() {
  const serviceData = SERVICES_DB["electric-scooter-repair"];
  return <ServicePageTemplate {...serviceData} serviceId="electric-scooter-repair" />;
}
