import type { Metadata } from "next";
import {
  generateLocalityServiceMetadata,
  getLocalitySlugs,
  getServiceSlugs,
  renderLocalityService,
} from "@/lib/locationServiceRoutes";

const CITY_SLUG = "delhi";

export function generateStaticParams() {
  return getLocalitySlugs(CITY_SLUG).flatMap((locality) =>
    getServiceSlugs().map((service) => ({ locality, service })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { locality: string; service: string };
}): Metadata {
  return generateLocalityServiceMetadata(CITY_SLUG, params.locality, params.service);
}

export default function LocalityServicePage({
  params,
}: {
  params: { locality: string; service: string };
}) {
  return renderLocalityService(CITY_SLUG, params.locality, params.service);
}
