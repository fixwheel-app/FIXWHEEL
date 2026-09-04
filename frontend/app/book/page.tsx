import type { Metadata } from 'next';
import BookClient from './page.client';

export const metadata: Metadata = {
  title: "Book a Bike Service at Your Doorstep | FixWheel",
  description: "Book a doorstep two-wheeler service in Delhi. Choose your vehicle and pick a package that suits you.",
  alternates: {
    canonical: "https://www.fixwheel.app/book",
  },
  openGraph: {
    title: "Book a Bike Service at Your Doorstep | FixWheel",
    description: "Book a doorstep two-wheeler service in Delhi. Choose your vehicle and pick a package that suits you.",
    url: "https://www.fixwheel.app/book",
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

export default function BookPage() {
  return <BookClient />;
}
