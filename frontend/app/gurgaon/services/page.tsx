import type { Metadata } from "next";
import CityServicesPage from "@/components/CityServicesPage";
import { CITY_SERVICES_CONFIG } from "@/lib/cityServicesData";
import { completePageMetadata } from "@/lib/seoMetadata";

const city = CITY_SERVICES_CONFIG.gurgaon;

export const metadata: Metadata = completePageMetadata({
  title: city.title,
  description: city.description,
  keywords: city.keywords,
  alternates: { canonical: "https://www.fixwheel.app/gurgaon/services" },
  openGraph: { title: city.title, description: city.description, url: "https://www.fixwheel.app/gurgaon/services", siteName: "FixWheel", type: "website" },
});

export default function GurgaonServicesPage() {
  return <CityServicesPage city={city} />;
}
