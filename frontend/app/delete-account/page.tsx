import type { Metadata } from 'next';
import DeleteAccountClient from './page.client';

export const metadata: Metadata = {
  title: "Request Account Deletion — FixWheel",
  description: "Request to delete your FixWheel account. Enter your email and reason for account deletion.",
  alternates: {
    canonical: "https://www.fixwheel.app/delete-account",
  },
  openGraph: {
    title: "Request Account Deletion — FixWheel",
    description: "Request to delete your FixWheel account. Enter your email and reason for account deletion.",
    url: "https://www.fixwheel.app/delete-account",
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

export default function DeleteAccountPage() {
  return <DeleteAccountClient />;
}
