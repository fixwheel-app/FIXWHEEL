import type { Metadata } from "next";
import PricingClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Bike Service & Repair Rates | Transparent Doorstep Pricing | FixWheel",
  description: "View upfront, flat-rate pricing for doorstep bike service, engine oil change, brake repairs, and roadside assistance across Delhi.",
  alternates: {
    canonical: "https://www.fixwheel.app/pricing",
  },
  openGraph: {
    title: "Doorstep Bike Service Rates & Official Rate Card | FixWheel",
    description: "Flat transparent doorstep bike service charges across Delhi, Gurgaon, Noida, Ghaziabad & Faridabad. Zero hidden costs.",
    url: "https://www.fixwheel.app/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClientPage />;
}
