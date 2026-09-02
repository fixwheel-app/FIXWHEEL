import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Premium & Superbike Service at Home | FixWheel",
  description:
    "Doorstep premium bike service Delhi NCR. Expert care for Ninja, Dominar, Duke 390, Harley X440, Triumph, BMW Motorrad in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/premium-bike-service",
  },
  openGraph: {
    type: "website",
    title: "Premium & Superbike Service at Home | FixWheel",
    description: "Doorstep premium bike service Delhi NCR. Certified mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/premium-bike-service",
  },
};

export default function PremiumBikeServicePage() {
  const serviceData = SERVICES_DB["premium-bike-service"];
  return <ServicePageTemplate {...serviceData} serviceId="premium-bike-service" />;
}
