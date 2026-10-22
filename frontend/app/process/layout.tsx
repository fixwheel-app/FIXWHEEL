import type { Metadata } from "next";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "How FixWheel Doorstep Bike Service Works",
  description: "See how to book FixWheel doorstep bike or scooter service, get matched with a verified mechanic, approve transparent pricing, and pay after the work.",
  alternates: { canonical: "https://www.fixwheel.app/process" },
});

export default function ProcessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
