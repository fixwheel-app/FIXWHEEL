import { Metadata } from 'next';
import HomeClient from './page.client';

export const metadata: Metadata = {
  title: "FixWheel — Doorstep Bike Service in Delhi NCR",
  description: "Book a mechanic online and get your motorcycle serviced at your doorstep. No garage visits, no waiting. Serving Delhi NCR. Quick, trusted, affordable.",
};

export default function Home() {
  return <HomeClient />;
}
