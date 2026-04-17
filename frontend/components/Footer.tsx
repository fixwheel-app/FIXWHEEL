"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-surface border-t border-white/5 pt-10 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">

          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3 md:mb-4 group">
              <Wrench className="w-5 h-5 md:w-6 md:h-6 text-accent transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-base md:text-xl text-white uppercase tracking-tighter">
                <span className="text-accent">Fix</span>Wheel
              </span>
            </Link>
            <p className="text-text-secondary text-xs md:text-sm max-w-sm">
              Doorstep bike repairs across Delhi. Fast, reliable, and transparent pricing.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-white transition-colors">Repairs</Link></li>
              <li><Link href="/booking" className="text-text-secondary hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary">
              <li>Phone: +91 87459 45682</li>
              <li>Email: support@fixwheel.app</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-secondary text-xs text-center md:text-left">
            © {new Date().getFullYear()} FixWheel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
