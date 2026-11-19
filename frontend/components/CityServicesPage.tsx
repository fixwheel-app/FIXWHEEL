import ServicesClientPage from "@/app/services/page.client";
import type { CityServicesConfig } from "@/lib/cityServicesData";

export default function CityServicesPage({ city }: { city: CityServicesConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Doorstep two-wheeler service packages in ${city.name}`,
        serviceType: "Two-wheeler maintenance and repair packages",
        areaServed: city.region,
        provider: { "@type": "LocalBusiness", name: "FixWheel", url: "https://www.fixwheel.app" },
        url: `https://www.fixwheel.app/${city.slug}/services`,
        description: city.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app" },
          { "@type": "ListItem", position: 2, name: city.name, item: `https://www.fixwheel.app/${city.slug}` },
          { "@type": "ListItem", position: 3, name: "Service Packages", item: `https://www.fixwheel.app/${city.slug}/services` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicesClientPage city={city} />
    </>
  );
}
