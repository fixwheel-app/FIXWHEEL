import { Metadata } from 'next';
import ServicesClient from './page.client';

export const metadata: Metadata = {
  title: "Bike Service Packages — FixWheel Delhi NCR",
  description: "Choose from 5 doorstep bike service packages based on your bike's CC — from 100cc to 350cc+. Engine check, brakes, chain, wash and more included.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
