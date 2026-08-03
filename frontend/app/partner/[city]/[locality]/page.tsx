import type { Metadata } from 'next';
import PartnerLocalityClient from './page.client';
import { PARTNER_CITY_DATA } from '@/lib/partnerData';

interface PageProps {
  params: Promise<{ city: string; locality: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, locality } = await params;
  const cityData = PARTNER_CITY_DATA[city.toLowerCase()] || PARTNER_CITY_DATA['gurgaon'];
  const locName = locality.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    title: `Become a Partner Mechanic in ${locName}, ${cityData.cityName} — FixWheel`,
    description: `Are you a bike mechanic in ${locName}, ${cityData.cityName}? Partner with FixWheel to get doorstep bike service orders directly in your locality. Zero joining fee, flexible hours.`,
    alternates: {
      canonical: `https://www.fixwheel.app/partner/${city.toLowerCase()}/${locality.toLowerCase()}`,
    },
    openGraph: {
      title: `Become a Partner Mechanic in ${locName}, ${cityData.cityName} — FixWheel`,
      description: `Are you a bike mechanic in ${locName}, ${cityData.cityName}? Partner with FixWheel to get doorstep bike service orders directly in your locality. Zero joining fee, flexible hours.`,
      url: `https://www.fixwheel.app/partner/${city.toLowerCase()}/${locality.toLowerCase()}`,
      siteName: 'FixWheel',
      type: 'website',
    },
  };
}

export default async function PartnerLocalityPage({ params }: PageProps) {
  const { city, locality } = await params;
  return <PartnerLocalityClient citySlug={city.toLowerCase()} localitySlug={locality.toLowerCase()} />;
}
