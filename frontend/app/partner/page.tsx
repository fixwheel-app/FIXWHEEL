import { Metadata } from 'next';
import PartnerClient from './page.client';

export const metadata: Metadata = {
  title: "Become a Partner Mechanic — FixWheel Delhi NCR",
  description: "Are you a mechanic or garage owner in Delhi NCR? Partner with FixWheel and get doorstep service bookings directly. Apply now.",
};

export default function PartnerPage() {
  return <PartnerClient />;
}
