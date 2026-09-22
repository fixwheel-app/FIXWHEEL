import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Doorstep Scooty & Scooter Repair in Delhi NCR | FixWheel",
  description:
    "Book doorstep scooty repair in Delhi NCR. Certified mechanics for Activa, Jupiter, Access, Ntorq in Delhi, Gurgaon, Noida, Ghaziabad, Faridabad. 45-min arrival, 15-day warranty.",
  alternates: {
    canonical: "https://www.fixwheel.app/scooty-repair",
  },
  openGraph: {
    type: "website",
    title: "Doorstep Scooty & Scooter Repair in Delhi NCR | FixWheel",
    description:
      "Book doorstep scooty repair in Delhi NCR. Certified mechanics for Activa, Jupiter, Access, Ntorq in Delhi, Gurgaon, Noida, Ghaziabad, Faridabad. 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/scooty-repair",
  },
};

export default function ScootyRepairPage() {
  const serviceData = SERVICES_DB["scooty-repair"];
  return <ServicePageTemplate {...serviceData} serviceId="scooty-repair" />;
}
