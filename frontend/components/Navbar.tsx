"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname || '/');

  useEffect(() => {
    setActivePath(window.location.pathname + window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.pathname + window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navLinks = [
    { name: 'HOME',           href: '/' },
    { name: 'SERVICES',       href: '/services' },
    { name: 'OUR PROCESS',    href: '/#process' },
    { name: 'BOOK NOW',       href: '/booking' },
    { name: 'BECOME PARTNER', href: '/partner' },
    { name: 'FAQ',            href: '/#faq' },
    { name: 'CONTACT',        href: '/#contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={cn(
        "w-full z-50 transition-all duration-300 pointer-events-auto border-b-4 border-accent fixed top-0",
        scrolled ? "bg-[#0d1117] shadow-xl" : "bg-[#0d1117]/95 backdrop-blur-md"
      )}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <Wrench className="w-6 h-6 md:w-8 md:h-8 text-accent transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-lg md:text-2xl tracking-tighter text-white uppercase">
                <span className="text-accent">Fix</span>Wheel
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActivePath(link.href)}
                  className={cn(
                    "text-[11px] font-bold tracking-wide uppercase transition-colors hover:text-accent h-full flex items-center relative px-3 xl:px-4 whitespace-nowrap",
                    activePath === link.href ? "text-accent" : "text-white"
                  )}
                >
                  {link.name}
                  {activePath === link.href && (
                    <motion.div layoutId="navline" className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex shrink-0">
              <Link
                href="/booking"
                className="bg-accent hover:bg-accent-hover text-white px-5 py-3 font-bold uppercase tracking-wider text-xs transition-all whitespace-nowrap"
              >
                Booking Setup
              </Link>
            </div>

            {/* Mobile Right: Book Now + Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/booking"
                className="bg-accent text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-accent focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-screen Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0d1117] border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActivePath(link.href);
                    }}
                    className={cn(
                      "block px-3 py-3 font-bold uppercase tracking-wider text-sm border-b border-white/5",
                      activePath === link.href ? "text-accent bg-white/5" : "text-white hover:text-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
