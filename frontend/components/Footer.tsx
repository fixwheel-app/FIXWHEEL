"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/route-analysis')) return null;

  return (
    <footer className="bg-surface border-t border-white/5 pt-10 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">

          <div className="col-span-1">
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
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Locations</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/services/delhi" className="text-text-secondary hover:text-white transition-colors">Delhi</Link></li>
              <li><Link href="/gurgaon" className="text-text-secondary hover:text-white transition-colors">Gurgaon</Link></li>
              <li><Link href="/noida" className="text-text-secondary hover:text-white transition-colors">Noida</Link></li>
              <li><Link href="/faridabad" className="text-text-secondary hover:text-white transition-colors">Faridabad</Link></li>
              <li><Link href="/ghaziabad" className="text-text-secondary hover:text-white transition-colors">Ghaziabad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-white transition-colors">Repairs</Link></li>
              <li><Link href="/pricing" className="text-text-secondary hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/book" className="text-text-secondary hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary mb-4">
              <li>Phone: +91 87459 45682</li>
              <li>Email: support@fixwheel.app</li>
            </ul>
            <div className="flex gap-2">
              <a href="https://wa.me/918745945682" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200 border border-green-400/20 hover:scale-105 active:scale-95 shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.962 1.452 5.51 0 9.995-4.485 9.998-9.999.002-2.671-1.026-5.181-2.895-7.051C16.837 1.685 14.32 1.14 11.99 1.14c-5.522 0-10.01 4.49-10.014 10.005-.002 1.776.463 3.51 1.348 5.068l-.986 3.6 3.7-.971zm12.39-5.19c-.33-.165-1.956-.967-2.257-1.077-.3-.11-.518-.165-.736.165-.218.33-.844 1.077-1.034 1.296-.19.219-.38.243-.71.078-1.748-.875-2.898-1.564-4.047-2.544-.303-.258-.082-.243.238-.752.32-.547.165-.968-.083-1.134-.247-.165-.735-.742-.936-1.297-.196-.54-.39-.465-.518-.465h-.443c-.165 0-.435.063-.663.312-.228.25-1.008 1.016-1.008 2.477 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.05 4.467.707.306 1.258.489 1.688.625.71.226 1.356.194 1.868.118.57-.085 1.956-.8 2.23-1.57.276-.77.276-1.43.194-1.57-.083-.14-.3-.223-.63-.388z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/fixwheel11?igsh=MTRqeHB0dnRhYWZqaQ==" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-200 border border-pink-400/20 hover:scale-105 active:scale-95 shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573309963156" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 border border-blue-400/20 hover:scale-105 active:scale-95 shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/fixwheel-app/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg transition-all duration-200 border border-blue-300/20 hover:scale-105 active:scale-95 shadow-md">
                <Linkedin className="w-5 h-5" />
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
            <span className="text-white/20 text-xs">|</span>
            <Link href="/delete-account" className="text-text-secondary hover:text-white text-xs transition-colors">
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
