import type { Metadata } from 'next';
import BookClient from '../page.client';

const BRANDS = [
  "honda", "hero", "bajaj", "tvs", "royal-enfield", "yamaha", "suzuki", "ktm",
  "ola-electric", "ather", "vespa", "jawa", "aprilia", "harley-davidson",
  "kawasaki", "benelli"
];

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    brand,
  }));
}

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const formattedBrand = params.brand.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `Book Doorstep ${formattedBrand} Service & Repair | FixWheel`,
    description: `Book doorstep maintenance and repairs for your ${formattedBrand} motorcycle or scooter. Professional mechanics, flat pricing, 15-day warranty.`,
    alternates: {
      canonical: `https://www.fixwheel.app/book/${params.brand}`,
    },
    openGraph: {
      title: `Book Doorstep ${formattedBrand} Service & Repair | FixWheel`,
      description: `Book doorstep maintenance and repairs for your ${formattedBrand} motorcycle or scooter. Professional mechanics, flat pricing, 15-day warranty.`,
      url: `https://www.fixwheel.app/book/${params.brand}`,
      siteName: "FixWheel",
      type: "website",
    }
  };
}

export default function BrandBookPage({ params }: { params: { brand: string } }) {
  return <BookClient initialBrand={params.brand} />;
}
