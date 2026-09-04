import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DB } from "@/lib/servicesData";
import { LOCALITY_DB } from "@/app/gurgaon/[locality]/localityData";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES_DB);
  const localitySlugs = Object.keys(LOCALITY_DB);

  const params: { service: string; locality: string }[] = [];
  for (const service of serviceSlugs) {
    for (const locality of localitySlugs) {
      params.push({ service, locality });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; locality: string };
}): Promise<Metadata> {
  const serviceData = SERVICES_DB[params.service];
  const localityData = LOCALITY_DB[params.locality];
  if (!serviceData || !localityData) return {};

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi.*$/i, "");

  return {
    title: `${cleanTitle} in ${localityData.name}, Gurgaon – Doorstep Repair | FixWheel`,
    description: `Book doorstep ${cleanTitle.toLowerCase()} in ${localityData.name}, Gurugram. Fast 45-minute mechanic arrival for all two-wheelers in ${localityData.name} (${localityData.subRegionText}). Flat rates, 15-day warranty. FixWheel.`,
    keywords: [
      `${cleanTitle.toLowerCase()} in ${localityData.name}`,
      `${cleanTitle.toLowerCase()} near me ${localityData.name}`,
      `sports bike repair near me ${localityData.name}`,
      `ev scooter repair near me ${localityData.name}`,
      `bike repair near me ${localityData.name} Gurgaon`,
      `two wheeler mechanic in ${localityData.name}`,
      `doorstep bike repair ${localityData.name}`,
      ...serviceData.keywords.map((k) => `${k} ${localityData.name}`),
    ],
    alternates: {
      canonical: `https://www.fixwheel.app/services/${params.service}/gurgaon/${params.locality}`,
    },
    openGraph: {
      type: "website",
      title: `${cleanTitle} in ${localityData.name}, Gurgaon | FixWheel`,
      description: `Doorstep ${cleanTitle.toLowerCase()} in ${localityData.name}, Gurugram. Certified mechanics, 45-min arrival, 15-day warranty.`,
      url: `https://www.fixwheel.app/services/${params.service}/gurgaon/${params.locality}`,
    },
  };
}

export default function GurgaonLocalityServicePage({
  params,
}: {
  params: { service: string; locality: string };
}) {
  const serviceData = SERVICES_DB[params.service];
  const localityData = LOCALITY_DB[params.locality];

  if (!serviceData || !localityData) {
    notFound();
  }

  const cleanTitle = serviceData.title
    .replace(/\s+at Doorstep.*$/i, "")
    .replace(/\s+in Delhi.*$/i, "");

  const localizedLead = `${serviceData.lead} Now available with 45-minute doorstep mechanic dispatch in ${localityData.name}, Gurgaon (${localityData.subRegionText}).`;

  const localizedFaqs = [
    {
      q: `How fast can a mechanic arrive for ${cleanTitle.toLowerCase()} in ${localityData.name}?`,
      a: `Our mobile mechanics arrive at your home, office, or parking location in ${localityData.name} within 45 minutes of booking confirmation.`,
    },
    {
      q: `Do you service gated societies and apartments in ${localityData.name}?`,
      a: `Yes! Our verified mechanics enter all gated residential societies, IT parks, and apartments across ${localityData.name} by completing visitor registration at the security gate.`,
    },
    ...serviceData.faqs,
  ];

  return (
    <ServicePageTemplate
      {...serviceData}
      title={`${cleanTitle} at Doorstep in ${localityData.name}, Gurgaon`}
      lead={localizedLead}
      faqs={localizedFaqs}
      locationName={`${localityData.name}, Gurgaon`}
      locationSlug={params.locality}
    />
  );
}
