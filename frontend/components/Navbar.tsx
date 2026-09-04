"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wrench, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ─── Mega-dropdown data ───────────────────────────────────── */
const serviceLinks = [
  { name: 'Basic Service',        href: '/services/basic-service' },
  { name: 'Engine Oil Change',    href: '/services/oil-change' },
  { name: 'Engine Repair',        href: '/services/engine-repair' },
  { name: 'Brake Repair',         href: '/services/brake-repair' },
  { name: 'Battery Replacement',  href: '/services/battery-replacement' },
];

const brandLinks = [
  { name: 'Honda',          href: '/honda' },
  { name: 'Hero',           href: '/hero' },
  { name: 'Bajaj',          href: '/bajaj' },
  { name: 'Royal Enfield',  href: '/royal-enfield' },
  { name: 'Yamaha',         href: '/yamaha' },
];

const locationLinks = [
  { name: 'Delhi',      href: '/delhi' },
  { name: 'Gurgaon',    href: '/gurgaon' },
  { name: 'Noida',      href: '/noida' },
  { name: 'Ghaziabad',  href: '/ghaziabad' },
  { name: 'Faridabad',  href: '/faridabad' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname || '/');

  const [tabWidth, setTabWidth] = useState(0);
  const [tabOffset, setTabOffset] = useState(0);
  const navRefs = useRef<(HTMLElement | null)[]>([]);

  /* ─── Services mega-dropdown state (desktop) ─────────────── */
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowServicesDropdown(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200);
  }, []);

  /* ─── Locations dropdown state (desktop) ─────────────────── */
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);
  const locationsTimeout = useRef<NodeJS.Timeout | null>(null);

  const openLocationsDropdown = useCallback(() => {
    if (locationsTimeout.current) clearTimeout(locationsTimeout.current);
    setShowLocationsDropdown(true);
  }, []);

  const closeLocationsDropdown = useCallback(() => {
    locationsTimeout.current = setTimeout(() => {
      setShowLocationsDropdown(false);
    }, 200);
  }, []);

  /* ─── Mobile expand state ───────────────────────── */
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  /* ─── Sync active path ───────────────────────────────────── */
  const isLinkActive = useCallback((linkHref: string) => {
    if (linkHref === '/') {
      return pathname === '/';
    }
    if (linkHref === '/delhi') {
      const locs = ['/delhi', '/gurgaon', '/noida', '/faridabad', '/ghaziabad'];
      return locs.some(loc => pathname?.startsWith(loc) && !pathname?.startsWith('/partner'));
    }
    if (linkHref === '/services') {
      return pathname?.startsWith('/services');
    }
    if (linkHref === '/partner') {
      return pathname?.startsWith('/partner');
    }
    return pathname?.startsWith(linkHref);
  }, [pathname]);

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

  /* ─── Scroll listener ────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── Nav links (PRICING added) ─────────────────────────── */
  const navLinks = [
    { name: 'HOME',           href: '/' },
    { name: 'SERVICES',       href: '/services' },
    { name: 'LOCATIONS',      href: '/delhi' },
    { name: 'BLOG',           href: '/blog' },
    { name: 'ABOUT',          href: '/about' },
    { name: 'BECOME PARTNER', href: '/partner' },
    { name: 'CONTACT',        href: '/contact' },
  ];

  /* ─── Active tab indicator ───────────────────────────────── */
  useEffect(() => {
    const updateTabPosition = () => {
      const activeIndex = navLinks.findIndex(link => isLinkActive(link.href));
      const activeElement = navRefs.current[activeIndex];
      
      if (activeElement) {
        setTabWidth(activeElement.offsetWidth);
        setTabOffset(activeElement.offsetLeft);
      } else {
        setTabWidth(0);
      }
    };

    updateTabPosition();
    const rafId = requestAnimationFrame(updateTabPosition);

    window.addEventListener('resize', updateTabPosition);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateTabPosition);
    };
  }, [pathname, isLinkActive]);

  /* ─── Hide on admin / route-analysis pages ───────────────── */
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/route-analysis')) {
    return null;
  }

  /* ─── Shared column link class ───────────────────────────── */
  const dropdownLinkClass =
    "block py-1.5 text-[13px] font-medium tracking-wide text-white/80 hover:text-accent transition-colors duration-200";

  return (
    <>
      {/* Main Navbar */}
      <nav className={cn(
        "w-full z-50 transition-all duration-300 pointer-events-auto border-b border-white/10 fixed top-0",
        scrolled ? "bg-[#0d1117] shadow-xl" : "bg-[#0d1117]/95 backdrop-blur-md"
      )}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <img src="/logo.png" alt="FixWheel Logo" className="h-8 md:h-10 w-auto object-contain group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-black text-lg md:text-2xl tracking-tighter text-white uppercase">
                <span className="text-accent">Fix</span>Wheel
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center h-full relative">
              {navLinks.map((link, idx) => {
                const isServices = link.name === 'SERVICES';
                const isLocations = link.name === 'LOCATIONS';
                const hasDropdown = isServices || isLocations;

                const mouseHandlers = isServices
                  ? { onMouseEnter: openDropdown, onMouseLeave: closeDropdown }
                  : isLocations
                  ? { onMouseEnter: openLocationsDropdown, onMouseLeave: closeLocationsDropdown }
                  : {};

                return (
                  <div
                    key={link.name}
                    ref={(el) => { navRefs.current[idx] = el; }}
                    className="relative h-full flex items-center"
                    {...mouseHandlers}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActivePath(link.href)}
                      className={cn(
                        "text-[11px] font-bold tracking-wide uppercase transition-colors hover:text-accent h-full flex items-center px-3 xl:px-4 whitespace-nowrap gap-1",
                        isLinkActive(link.href) ? "text-accent" : "text-white"
                      )}
                    >
                      {link.name}
                      {hasDropdown && (
                        <ChevronDown
                          className={cn(
                            "w-3 h-3 transition-transform duration-200",
                            ((isServices && showServicesDropdown) || (isLocations && showLocationsDropdown)) && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* ── Services Dropdown (desktop) ──────────────── */}
                    {isServices && (
                      <AnimatePresence>
                        {showServicesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] border-t-2 border-accent bg-[#151b24] border border-t-0 border-white/10 shadow-2xl z-[100]"
                            onMouseEnter={openDropdown}
                            onMouseLeave={closeDropdown}
                          >
                            <div className="grid grid-cols-2 gap-0 divide-x divide-white/10">
                              {/* Column 1 — By Service */}
                              <div className="p-5">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                                  By Service
                                </span>
                                {serviceLinks.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={() => {
                                      setActivePath(s.href);
                                      setShowServicesDropdown(false);
                                    }}
                                    className={dropdownLinkClass}
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                                <hr className="border-white/10 my-3" />
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    setActivePath('/services');
                                    setShowServicesDropdown(false);
                                  }}
                                  className="text-[12px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                                >
                                  View All Services →
                                </Link>
                              </div>

                              {/* Column 2 — By Brand */}
                              <div className="p-5">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                                  By Brand
                                </span>
                                {brandLinks.map((b) => (
                                  <Link
                                    key={b.href}
                                    href={b.href}
                                    onClick={() => {
                                      setActivePath(b.href);
                                      setShowServicesDropdown(false);
                                    }}
                                    className={dropdownLinkClass}
                                  >
                                    {b.name}
                                  </Link>
                                ))}
                                <hr className="border-white/10 my-3" />
                                <Link
                                  href="/brands"
                                  onClick={() => {
                                    setActivePath('/brands');
                                    setShowServicesDropdown(false);
                                  }}
                                  className="text-[12px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                                >
                                  View All Brands →
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* ── Locations Dropdown (desktop) ──────────────── */}
                    {isLocations && (
                      <AnimatePresence>
                        {showLocationsDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[220px] border-t-2 border-accent bg-[#151b24] border border-t-0 border-white/10 shadow-2xl z-[100]"
                            onMouseEnter={openLocationsDropdown}
                            onMouseLeave={closeLocationsDropdown}
                          >
                            <div className="p-5 flex flex-col gap-1">
                              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                                Cities We Serve
                              </span>
                              {locationLinks.map((loc) => (
                                <Link
                                  key={loc.href}
                                  href={loc.href}
                                  onClick={() => {
                                    setActivePath(loc.href);
                                    setShowLocationsDropdown(false);
                                  }}
                                  className={dropdownLinkClass}
                                >
                                  {loc.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
              
              {tabWidth > 0 && (
                <motion.div
                  className="absolute bottom-0 h-1 bg-accent origin-left"
                  initial={false}
                  animate={{ x: tabOffset, width: tabWidth }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </div>

            <div className="hidden lg:flex shrink-0">
              <Link
                href="/book"
                className="bg-accent hover:bg-accent-hover text-white px-5 py-3 font-bold uppercase tracking-wider text-xs transition-all whitespace-nowrap"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Mobile Right: Book Now + Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/book"
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
                {navLinks.map((link) => {
                  const isServices = link.name === 'SERVICES';
                  const isLocations = link.name === 'LOCATIONS';

                  if (isServices) {
                    return (
                      <div key={link.name}>
                        {/* Services toggle row */}
                        <div className="flex items-center justify-between border-b border-white/5">
                          <Link
                            href={link.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActivePath(link.href);
                            }}
                            className={cn(
                              "flex-1 block px-3 py-3 font-bold uppercase tracking-wider text-sm",
                              isLinkActive(link.href)
                                ? "text-accent bg-white/5"
                                : "text-white hover:text-accent"
                            )}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="px-3 py-3 text-white/60 hover:text-accent transition-colors"
                            aria-label="Expand services"
                          >
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                mobileServicesOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>

                        {/* Expandable services section */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-[#151b24] border-b border-white/5"
                            >
                              <div className="px-4 py-3">
                                {/* By Service */}
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                                  By Service
                                </span>
                                {serviceLinks.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActivePath(s.href);
                                    }}
                                    className="block py-1.5 pl-2 text-sm text-white/80 hover:text-accent transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActivePath('/services');
                                  }}
                                  className="block mt-2 text-[11px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                                >
                                  View All Services →
                                </Link>

                                <hr className="border-white/10 my-3" />

                                {/* By Brand */}
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                                  By Brand
                                </span>
                                {brandLinks.map((b) => (
                                  <Link
                                    key={b.href}
                                    href={b.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActivePath(b.href);
                                    }}
                                    className="block py-1.5 pl-2 text-sm text-white/80 hover:text-accent transition-colors"
                                  >
                                    {b.name}
                                  </Link>
                                ))}
                                <Link
                                  href="/brands"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActivePath('/brands');
                                  }}
                                  className="block mt-2 text-[11px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                                >
                                  View All Brands →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (isLocations) {
                    return (
                      <div key={link.name}>
                        {/* Locations toggle row */}
                        <div className="flex items-center justify-between border-b border-white/5">
                          <Link
                            href={link.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActivePath(link.href);
                            }}
                            className={cn(
                              "flex-1 block px-3 py-3 font-bold uppercase tracking-wider text-sm",
                              isLinkActive(link.href)
                                ? "text-accent bg-white/5"
                                : "text-white hover:text-accent"
                            )}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                            className="px-3 py-3 text-white/60 hover:text-accent transition-colors"
                            aria-label="Expand locations"
                          >
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                mobileLocationsOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>

                        {/* Expandable locations section */}
                        <AnimatePresence>
                          {mobileLocationsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-[#151b24] border-b border-white/5"
                            >
                              <div className="px-4 py-3">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                                  Cities We Serve
                                </span>
                                {locationLinks.map((loc) => (
                                  <Link
                                    key={loc.href}
                                    href={loc.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActivePath(loc.href);
                                    }}
                                    className="block py-1.5 pl-2 text-sm text-white/80 hover:text-accent transition-colors"
                                  >
                                    {loc.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setActivePath(link.href);
                      }}
                      className={cn(
                        "block px-3 py-3 font-bold uppercase tracking-wider text-sm border-b border-white/5",
                        isLinkActive(link.href) ? "text-accent bg-white/5" : "text-white hover:text-accent"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
