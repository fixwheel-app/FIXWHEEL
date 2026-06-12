"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/route-analysis')) return null;

  return (
    <footer className="bg-surface border-t border-white/5 pt-10 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">

          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3 md:mb-4 group">
              <img src="/logo.png" alt="FixWheel Logo" className="h-6 md:h-8 w-auto object-contain group-hover:rotate-12 transition-transform duration-300" />
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
              <li><Link href="/services" className="text-text-secondary hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary mb-4">
              <li>Phone: +91 87459 45682</li>
              <li>Email: support@fixwheel.app</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <a href="https://wa.me/918745945682" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors border border-green-400/20">
                WhatsApp
              </a>
              <a href="https://www.instagram.com/fixwheel11?igsh=MTRqeHB0dnRhYWZqaQ==" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors border border-pink-400/20">
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573309963156" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors border border-blue-400/20">
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/fixwheel-app/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#0077b5] hover:bg-[#006396] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors border border-blue-300/20">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-secondary text-xs text-center md:text-left">
            © {new Date().getFullYear()} FixWheel. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/terms" className="text-text-secondary hover:text-white text-xs transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link href="/privacy-policy" className="text-text-secondary hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
