import type { Metadata } from 'next';
import PartnerCityClient from './page.client';
import { PARTNER_CITY_DATA } from '@/lib/partnerData';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = PARTNER_CITY_DATA[city.toLowerCase()] || PARTNER_CITY_DATA['gurgaon'];

  return {
    title: `Become a Bike Mechanic Partner in ${cityData.cityName} — FixWheel Onboarding`,
    description: `Earn ${cityData.monthlyEarnings}/month as a FixWheel certified two-wheeler mechanic partner in ${cityData.cityName}. Zero joining fee, 100% daily payouts. Apply online.`,
    alternates: {
      canonical: `https://www.fixwheel.app/partner/${city.toLowerCase()}`,
    },
    openGraph: {
      title: `Become a Bike Mechanic Partner in ${cityData.cityName} — FixWheel Onboarding`,
      description: `Earn ${cityData.monthlyEarnings}/month as a FixWheel certified two-wheeler mechanic partner in ${cityData.cityName}. Zero joining fee, 100% daily payouts. Apply online.`,
      url: `https://www.fixwheel.app/partner/${city.toLowerCase()}`,
      siteName: 'FixWheel',
      type: 'website',
    },
  };
}

export default async function PartnerCityPage({ params }: PageProps) {
  const { city } = await params;
  return <PartnerCityClient citySlug={city.toLowerCase()} />;
}
