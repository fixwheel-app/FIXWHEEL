import type { Metadata } from "next";
import BlogHubClient from "./page.client";

export const metadata: Metadata = {
  title: "FixWheel Blog — Doorstep Two-Wheeler Maintenance Tips & News",
  description: "Read expert two-wheeler maintenance tips, bike engine oil guides, DIY repair hacks, electric scooter battery care, and Indian motorcycle industry news.",
  alternates: {
    canonical: "https://www.fixwheel.app/blog",
  },
  openGraph: {
    title: "FixWheel Blog — Doorstep Two-Wheeler Maintenance Tips & News",
    description: "Read expert two-wheeler maintenance tips, bike engine oil guides, DIY repair hacks, electric scooter battery care, and Indian motorcycle industry news.",
    url: "https://www.fixwheel.app/blog",
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

export default function BlogHubPage() {
  return <BlogHubClient />;
}
