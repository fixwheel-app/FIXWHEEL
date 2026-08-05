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
    description: `Partner with FixWheel as a certified two-wheeler mechanic in ${cityData.cityName}. Direct customer doorstep service orders, zero joining fee, and full technical support. Apply online.`,
    keywords: cityData.seoKeywords ? cityData.seoKeywords.join(", ") : "",
    alternates: {
      canonical: `https://www.fixwheel.app/partner/${city.toLowerCase()}`,
    },
    openGraph: {
      title: `Become a Bike Mechanic Partner in ${cityData.cityName} — FixWheel Onboarding`,
      description: `Partner with FixWheel as a certified two-wheeler mechanic in ${cityData.cityName}. Direct customer doorstep service orders, zero joining fee, and full technical support. Apply online.`,
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
