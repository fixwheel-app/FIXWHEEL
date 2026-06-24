import type { Metadata } from 'next';
import PartnerClient from './page.client';

export const metadata: Metadata = {
  title: "Become a Partner Mechanic — FixWheel Delhi NCR",
  description: "Are you a mechanic or garage owner in Delhi NCR? Partner with FixWheel and get doorstep service bookings directly. Apply now.",
  alternates: {
    canonical: "https://www.fixwheel.app/partner",
  },
  openGraph: {
    title: "Become a Partner Mechanic — FixWheel Delhi NCR",
    description: "Are you a mechanic or garage owner in Delhi NCR? Partner with FixWheel and get doorstep service bookings directly. Apply now.",
    url: "https://www.fixwheel.app/partner",
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

export default function PartnerPage() {
  return <PartnerClient />;
}
