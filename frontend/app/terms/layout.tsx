import type { Metadata } from "next";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Terms and Conditions | FixWheel",
  description: "Review the terms that apply when you browse FixWheel, book doorstep two-wheeler service, contact support, make payments, or use the FixWheel mobile app.",
  alternates: { canonical: "https://www.fixwheel.app/terms" },
});

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
