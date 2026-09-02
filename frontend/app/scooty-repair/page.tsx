import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Scooty & Gearless Scooter Repair at Home | FixWheel",
  description:
    "Doorstep scooty repair Delhi NCR. CVT clutch roller cleaning, belt drive replacement, oil change for Activa, Jupiter, Access, Dio, Ntorq in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/scooty-repair",
  },
  openGraph: {
    type: "website",
    title: "Scooty & Gearless Scooter Repair at Home | FixWheel",
    description: "Doorstep scooty repair Delhi NCR. Certified mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/scooty-repair",
  },
};

export default function ScootyRepairPage() {
  const serviceData = SERVICES_DB["scooty-repair"];
  return <ServicePageTemplate {...serviceData} serviceId="scooty-repair" />;
}
