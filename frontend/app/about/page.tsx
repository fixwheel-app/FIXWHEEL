import type { Metadata } from 'next';
import AboutClient from './page.client';

export const metadata: Metadata = {
  title: "About FixWheel — Doorstep Bike Repair in Delhi",
  description: "FixWheel brings the garage to you. Verified doorstep mechanics, transparent pricing, and fast response times across Delhi.",
  alternates: {
    canonical: "https://www.fixwheel.app/about",
  },
  openGraph: {
    title: "About FixWheel — Doorstep Bike Repair in Delhi",
    description: "FixWheel brings the garage to you. Verified doorstep mechanics, transparent pricing, and fast response times across Delhi.",
    url: "https://www.fixwheel.app/about",
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

export default function AboutPage() {
  return <AboutClient />;
}
