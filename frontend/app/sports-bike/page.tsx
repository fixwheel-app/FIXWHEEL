import type { Metadata } from "next";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Sports Bike Service at Home | FixWheel",
  description:
    "Doorstep sports bike service Delhi. Liquid cooling flush, synthetic oil change, chain alignment for Yamaha R15, MT-15, KTM RC, Apache RTR in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/sports-bike",
  },
  openGraph: {
    type: "website",
    title: "Sports Bike Service at Home | FixWheel",
    description: "Doorstep sports bike service Delhi. Certified mechanics, 45-min arrival, 15-day warranty.",
    url: "https://www.fixwheel.app/sports-bike",
  },
});

export default function SportsBikeServicePage() {
  const serviceData = SERVICES_DB["sports-bike-service"];
  return <ServicePageTemplate {...serviceData} serviceId="sports-bike-service" />;
}
