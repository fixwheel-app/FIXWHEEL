import type { Metadata } from 'next';
import ConfirmationClient from './page.client';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfirmationPage() {
  return <ConfirmationClient />;
}
