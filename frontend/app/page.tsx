import type { Metadata } from 'next';
import HomeClient from './page.client';

export const metadata: Metadata = {
  title: "FixWheel — Doorstep Bike Service in Delhi NCR",
  description: "Book a mechanic online and get your motorcycle serviced at your doorstep. No garage visits, no waiting. Serving Delhi NCR.",
  alternates: {
    canonical: "https://www.fixwheel.app/",
  },
  openGraph: {
    title: "FixWheel — Doorstep Bike Service in Delhi NCR",
    description: "Book a mechanic online and get your motorcycle serviced at your doorstep. No garage visits, no waiting. Serving Delhi NCR.",
    url: "https://www.fixwheel.app/",
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

export default function Home() {
  return <HomeClient />;
}
