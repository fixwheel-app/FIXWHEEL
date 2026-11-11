"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { shouldShowMobileBookingBar } from '@/lib/mobileBookingBar';

export default function MobileBookingBar() {
  const pathname = usePathname();

  if (!shouldShowMobileBookingBar(pathname)) return null;

  return (
    <>
      <div aria-hidden="true" className="h-[calc(72px+env(safe-area-inset-bottom))] md:hidden" />
      <div
        data-testid="mobile-booking-bar"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[9998] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden"
      >
        <Link
          href="/book"
          className="pointer-events-auto flex min-h-12 w-full items-center justify-center rounded-2xl bg-accent px-6 py-3 text-center text-base font-bold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(255,59,48,0.3)] transition-[background-color,transform] hover:bg-accent-hover active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Book Service
        </Link>
      </div>
    </>
  );
}
