import type { Metadata } from "next";
import {
  generateCityServiceMetadata,
  getServiceSlugs,
  renderCityService,
} from "@/lib/locationServiceRoutes";

const CITY_SLUG = "faridabad";

export function generateStaticParams() {
  return getServiceSlugs().map((service) => ({ service }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  return generateCityServiceMetadata(CITY_SLUG, params.service);
}

export default function CityServicePage({ params }: { params: { service: string } }) {
  return renderCityService(CITY_SLUG, params.service);
}
