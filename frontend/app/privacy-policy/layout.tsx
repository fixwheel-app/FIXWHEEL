import type { Metadata } from "next";
import { completePageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = completePageMetadata({
  title: "Privacy Policy | FixWheel",
  description: "Read how FixWheel collects, uses, protects, and manages personal information when you browse the website, book doorstep service, or use customer support.",
  alternates: { canonical: "https://www.fixwheel.app/privacy-policy" },
});

export default function PrivacyPolicyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
