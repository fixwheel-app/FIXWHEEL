import type { Metadata } from "next";
import { generateEvLocalityMetadata, getEvLocalitySlugs, renderEvLocality } from "@/lib/evLocalityRoutes";

const city = "ghaziabad";

export function generateStaticParams() {
  return getEvLocalitySlugs(city).map((locality) => ({ locality }));
}

export function generateMetadata({ params }: { params: { locality: string } }): Metadata {
  return generateEvLocalityMetadata(city, params.locality);
}

export default function ElectricVehicleLocalityPage({ params }: { params: { locality: string } }) {
  return renderEvLocality(city, params.locality);
}
