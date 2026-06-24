import type { Metadata } from 'next';
import ServicesClient from './page.client';

export const metadata: Metadata = {
  title: "Bike Service Packages — FixWheel Delhi NCR",
  description: "Choose from 5 doorstep bike service packages based on your bike's CC. Engine check, brakes, chain, wash and more included.",
  alternates: {
    canonical: "https://www.fixwheel.app/services",
  },
  openGraph: {
    title: "Bike Service Packages — FixWheel Delhi NCR",
    description: "Choose from 5 doorstep bike service packages based on your bike's CC. Engine check, brakes, chain, wash and more included.",
    url: "https://www.fixwheel.app/services",
    siteName: "FixWheel",
    type: "website",
    images: [
      {
        url: "https://www.fixwheel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
