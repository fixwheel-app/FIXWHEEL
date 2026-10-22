import type { Metadata } from "next";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Frequently Asked Questions | FixWheel Doorstep Bike Service",
  description: "Find answers about FixWheel doorstep bike and scooter service, pricing, booking, service coverage, warranties, payments, and emergency roadside assistance.",
  alternates: { canonical: "https://www.fixwheel.app/faq" },
});

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
