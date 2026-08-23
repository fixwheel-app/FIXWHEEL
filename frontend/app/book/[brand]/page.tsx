import type { Metadata } from "next";
import BookPageClient from "../page.client";

interface PageProps {
  params: {
    brand: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const formattedBrand = params.brand
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Book Doorstep ${formattedBrand} Service & Repair | FixWheel`,
    description: `Book professional doorstep bike service for your ${formattedBrand} two-wheeler. Fast 45-minute arrival, 100% genuine parts, 15-day warranty.`,
    alternates: {
      canonical: `https://www.fixwheel.app/book/${params.brand.toLowerCase()}`,
    },
  };
}

export default function BookBrandPage({ params }: PageProps) {
  return <BookPageClient initialBrand={params.brand} />;
}
