import type { Metadata } from 'next';
import ConfirmationClient from './page.client';
import { completePageMetadata } from '@/lib/seoMetadata';

export const metadata: Metadata = completePageMetadata({
  title: "Booking Confirmation | FixWheel",
  description: "Review your confirmed FixWheel doorstep two-wheeler service, booking reference, customer details, selected package, next steps, and app tracking information.",
  alternates: { canonical: "https://www.fixwheel.app/confirmation" },
  robots: {
    index: false,
    follow: false,
  },
});

export default function ConfirmationPage() {
  return <ConfirmationClient />;
}
