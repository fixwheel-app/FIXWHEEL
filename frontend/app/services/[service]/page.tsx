import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { CITIES_DB } from "@/lib/cityLocalityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

interface PageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES_DB);
  const citySlugs = Object.keys(CITIES_DB);

  return [...serviceSlugs, ...citySlugs].map((s) => ({
    service: s,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Case 1: Standard Service (/services/engine-repair)
  if (SERVICES_DB[params.service]) {
    const serviceData = SERVICES_DB[params.service];
    return {
      title: `${serviceData.title} | FixWheel`,
      description: serviceData.lead,
      alternates: {
        canonical: `https://www.fixwheel.app/services/${params.service}`,
      },
    };
  }

  // Case 2: City Landing (/services/delhi, /services/ghaziabad, /services/noida, etc.)
  if (CITIES_DB[params.service]) {
    const cityData = CITIES_DB[params.service];
    return {
      title: `Doorstep Bike Repair & Service in ${cityData.name} | FixWheel`,
      description: `Book verified doorstep bike mechanic in ${cityData.name}. Arrives in 45 minutes for engine oil change, brake repair, battery replacement & full service.`,
      alternates: {
        canonical: `https://www.fixwheel.app/services/${params.service}`,
      },
    };
  }

  return {};
}

export default function ServiceOrCityPage({ params }: PageProps) {
  // Case 1: Standard Service (/services/engine-repair)
  if (SERVICES_DB[params.service]) {
    const serviceData = SERVICES_DB[params.service];
    return <ServicePageTemplate {...serviceData} />;
  }

  // Case 2: City Landing (/services/delhi, /services/ghaziabad, /services/noida, etc.)
  if (CITIES_DB[params.service]) {
    const cityData = CITIES_DB[params.service];
    const defaultService = SERVICES_DB["basic-service"] || Object.values(SERVICES_DB)[0];
    const localizedLead = `Doorstep bike repair & two-wheeler mechanic service in ${cityData.name}. Verified mobile mechanics reach your location within 45 minutes with 100% genuine OEM parts.`;

    return (
      <ServicePageTemplate
        {...defaultService}
        title={`Doorstep Bike Repair in ${cityData.name}`}
        lead={localizedLead}
        locationName={cityData.name}
        locationSlug={cityData.slug}
      />
    );
  }

  notFound();
}
