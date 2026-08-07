import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DB).map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceData = SERVICES_DB[params.service];
  if (!serviceData) return {};

  const cleanTitle = serviceData.title.replace(/\s+at Doorstep.*$/i, "").replace(/\s+in Delhi NCR.*$/i, "");

  return {
    title: `${cleanTitle} in Gurgaon – Doorstep Repair & Service | FixWheel`,
    description: `Book doorstep ${cleanTitle.toLowerCase()} in Gurgaon, Gurugram. Certified mechanics for Yamaha, Honda, Royal Enfield, Hero, TVS, KTM & EVs. Arrives in 45 mins with genuine OEM parts. FixWheel.`,
    keywords: [
      `${cleanTitle.toLowerCase()} in Gurgaon`,
      `${cleanTitle.toLowerCase()} near me Gurgaon`,
      `bike repair near me Gurgaon`,
      `sports bike repair near me Gurgaon`,
      `ev scooter repair near me Gurgaon`,
      `doorstep bike repair Gurgaon`,
      ...serviceData.keywords.map((k) => `${k} Gurgaon`),
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/services/${params.service}/gurgaon`,
    },
    openGraph: {
      type: "website",
      title: `${cleanTitle} in Gurgaon – Doorstep Repair | FixWheel`,
      description: `Book doorstep ${cleanTitle.toLowerCase()} in Gurgaon. Certified mechanics, 45-min arrival, flat rates, 15-day warranty.`,
      url: `https://www.fixwheel.app/services/${params.service}/gurgaon`,
    },
  };
}

export default function GurgaonServiceCityPage({ params }: { params: { service: string } }) {
  const serviceData = SERVICES_DB[params.service];
  if (!serviceData) {
    notFound();
  }

  const cleanTitle = serviceData.title.replace(/\s+at Doorstep.*$/i, "").replace(/\s+in Delhi NCR.*$/i, "");

  return (
    <ServicePageTemplate
      {...serviceData}
      title={`${cleanTitle} at Doorstep in Gurgaon`}
      locationName="Gurgaon"
      locationSlug="gurgaon"
    />
  );
}
