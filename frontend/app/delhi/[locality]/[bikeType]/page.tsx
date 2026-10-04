import type { Metadata } from "next";
import {
  BIKE_TYPE_SLUGS,
  generateLocalityBikeTypeMetadata,
  getLocalitySlugs,
  renderLocalityBikeType,
} from "@/lib/locationServiceRoutes";

const CITY_SLUG = "delhi";

export function generateStaticParams() {
  return getLocalitySlugs(CITY_SLUG).flatMap((locality) =>
    BIKE_TYPE_SLUGS.map((bikeType) => ({ locality, bikeType })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { locality: string; bikeType: string };
}): Metadata {
  return generateLocalityBikeTypeMetadata(CITY_SLUG, params.locality, params.bikeType);
}

export default function LocalityBikeTypePage({
  params,
}: {
  params: { locality: string; bikeType: string };
}) {
  return renderLocalityBikeType(CITY_SLUG, params.locality, params.bikeType);
}
