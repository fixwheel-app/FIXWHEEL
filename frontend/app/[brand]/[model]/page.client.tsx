"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Phone, Wrench, ShieldCheck, Clock, Award, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResolvedModel } from "@/lib/modelSlug";
import Breadcrumb from "@/components/Breadcrumb";

interface ModelClientProps {
  modelInfo: ResolvedModel;
}

export default function ModelDetailClient({ modelInfo }: ModelClientProps) {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global || DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity('global').then(setStats);
  }, []);

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const { brandName, modelName, category } = modelInfo;

  const bLow = brandName.toLowerCase();
  const mLow = modelName.toLowerCase();
  const bSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // High-converting local & "near me" keywords tailored for this model
  const keywords = [
    `${mLow} service near me`,
    `${mLow} repair near me`,
    `${mLow} mechanic near me`,
    `${bLow} ${mLow} service near me`,
    `doorstep ${mLow} service near me`,
    `${mLow} oil change near me`,
    `${mLow} battery replacement near me`,
    `${mLow} brake repair near me`,
    `${mLow} repair at home gurgaon`,
    `${mLow} mechanic delhi`,
    `${mLow} doorstep service noida`,
    `${mLow} service ghaziabad`,
    `${mLow} repair faridabad`,
    `bike mechanic near me at home`,
  ];

  const faqs = [
    {
      q: `Looking for ${brandName} ${modelName} service near me in Delhi?`,
      a: `FixWheel is the top-rated doorstep ${brandName} ${modelName} service provider near you in Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad. Our certified mobile mechanics reach your location within 45 minutes with genuine OEM parts and specialized tools.`,
    },
    {
      q: `How long does doorstep service for ${brandName} ${modelName} take?`,
      a: `A standard periodic service or tune-up for ${brandName} ${modelName} takes 35 to 50 minutes at your home or office parking in Delhi.`,
    },
    {
      q: `What engine oil is recommended for ${brandName} ${modelName}?`,
      a: `We strictly follow manufacturer specifications using sealed OEM-grade or premium synthetic oil (Motul / Yamalube / HMSI / Castrol) matching ${brandName}'s official viscosity guidelines.`,
    },
    {
      q: `Do you use genuine parts for ${brandName} ${modelName} repairs?`,
      a: `Yes, 100%! We use sealed, genuine OEM replacement parts for ${brandName} ${modelName} including air filters, spark plugs, brake shoes, and cables.`,
    },
    {
      q: `Can I get my ${brandName} ${modelName} serviced at my office parking lot?`,
      a: `Absoluty! Our mobile doorstep mechanics arrive with portable tools and protective floor mats so zero mess is left in your office or residential parking.`,
    },
    {
      q: `Is there a warranty on ${brandName} ${modelName} doorstep service?`,
      a: `Yes! FixWheel provides a 15-day labor & diagnostic warranty on all ${brandName} ${modelName} repairs, plus manufacturer warranties on replaced components.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative z-10">
      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Brands", href: "/brands" },
              { label: brandName, href: `/${brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` },
              { label: `${modelName} Service` },
            ]}
          />
        </div>
      </div>

      {/* ===== HERO HEADER ===== */}
      <div className="bg-[#17181A] text-white pt-10 md:pt-12 pb-12 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(230,43,43,0.15) 0 2px, transparent 2px 14px)",
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Main Info */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-mono font-bold uppercase tracking-widest text-xs mb-6">
                <Wrench className="w-4 h-4" />
                <span>{brandName} {category === "Electric Motorbike" ? "EV Specialist" : "Model Service"}</span>
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6 text-white font-oswald break-words">
                {brandName} {modelName} Service & Repair at Doorstep in Delhi
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Get an expert certified mechanic for your {brandName} {modelName} right at your home or office parking. 100% genuine OEM parts, 15-day labor warranty, and 45-minute doorstep dispatch.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/book#${bSlug}`}
                  className="inline-flex items-center justify-center gap-3 bg-[#e62b2b] hover:bg-red-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-mono font-bold tracking-wider uppercase text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)]"
                >
                  Book Service Now →
                </Link>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-md font-mono font-bold tracking-wider uppercase text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Mechanic
                </a>
              </div>
            </div>

            {/* Right Hero Interactive Model Ticket */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] text-slate-900 rounded-xl p-6 relative shadow-2xl border border-slate-200">
                <div className="flex justify-between items-start border-b border-dashed border-slate-300 pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      MODEL SERVICE TICKET
                    </span>
                    <span className="font-mono text-sm font-bold text-slate-900">
                      FIXWHEEL-{modelName.toUpperCase().replace(/[^A-Z0-9]/g, "")}
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    READY TO DISPATCH
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-xs font-mono">
                  <div>
                    <span className="block text-slate-400 uppercase">STARTING PRICE</span>
                    <span className="text-xl font-bold text-[#e62b2b]">₹199</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">ARRIVAL TIME</span>
                    <span className="text-base font-bold text-slate-900">45 Minutes</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">LOCATION</span>
                    <span className="text-sm font-bold text-slate-900">Doorstep (Home/Office)</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">WARRANTY</span>
                    <span className="text-sm font-bold text-slate-900">15 Days Labor</span>
                  </div>
                </div>

                <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Verified Mechanics & 15-Day Labor Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TRUST METRICS STRIP ===== */}
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">45 MIN</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Doorstep Arrival</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">4.7 ★</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Customer Rating</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">10,000+</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Serviced</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">15 DAYS</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Labor Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN MODEL CONTENT SECTION ===== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Content Paragraphs */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald border-b border-slate-200 pb-3">
                Why Choose Doorstep {brandName} {modelName} Service in Delhi?
              </h2>
              <p>
                Riding your {brandName} {modelName} through Delhi's demanding traffic and weather causes gradual wear on engine oil, spark plugs, brake shoes, and drive belts. Ignoring periodic maintenance leads to starting trouble, excessive vibrations, and dropping fuel efficiency.
              </p>
              <p>
                FixWheel dispatches certified mechanics trained specifically on {brandName} two-wheelers directly to your location. Equipped with high-grade diagnostic kits, genuine replacement parts, and portable washing equipment, we service your {modelName} right where it's parked.
              </p>
              <p>
                From routine 15-point checkups and oil swaps to brake shoe replacement, chain lube, and battery testing, you receive 100% transparent pricing with zero visiting fees and a 15-day labor warranty.
              </p>
            </div>

            {/* Right Specifications Box */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6 sticky top-28">
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3 font-oswald">
                  {modelName} Service Snapshot
                </h3>
                <div className="space-y-4 font-sans text-sm">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Vehicle Brand
                    </span>
                    <span className="font-bold text-slate-900">{brandName}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Model
                    </span>
                    <span className="font-bold text-slate-900">{modelName}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Recommended Interval
                    </span>
                    <span className="font-bold text-slate-900">Every 3,000 km / 3 Months</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Doorstep SLA
                    </span>
                    <span className="font-bold text-slate-900">45 Minutes Arrival</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Warranty
                    </span>
                    <span className="font-bold text-slate-900">15 Days Labor Guarantee</span>
                  </div>
                </div>

                <Link
                  href={`/book#${bSlug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#e62b2b] hover:bg-red-600 text-white py-3.5 rounded-md font-mono font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book {modelName} Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ===== BECOME A PARTNER SECTION ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e62b2b] block mb-2">
                — JOIN OUR NETWORK
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Are you a bike mechanic?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Join our team of mechanics servicing {brandName} {modelName} and all major two-wheeler brands in Delhi. Work on your own schedule, get more customers, and grow your income.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="text-[#e62b2b] font-bold">—</span> Flexible working hours</li>
                <li className="flex items-center gap-2"><span className="text-[#e62b2b] font-bold">—</span> Easy booking management</li>
                <li className="flex items-center gap-2"><span className="text-[#e62b2b] font-bold">—</span> Receive service requests in your area</li>
              </ul>
            </div>
            <div className="bg-[#0F172A] border border-white/10 p-7 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2 text-white">Become a partner</h4>
              <p className="text-slate-400 text-sm mb-5">Sign up in a few minutes and start getting service requests in your area.</p>
              <Link href="/partner" className="inline-flex items-center justify-center bg-[#e62b2b] hover:bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-colors">
                Become a Partner →
              </Link>
            </div>
          </div>

          {/* ===== CONTACT & ROADSIDE ASSISTANCE SECTION ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e62b2b] block mb-2">
                — CONTACT
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Contact us</h3>
              <p className="text-slate-600 text-sm mb-6">Have a question? We are available from 8 AM to 8 PM.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-[#e62b2b] text-sm">☎</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">+91 87459 45682</div>
                    <div className="text-xs text-slate-500">Call us between 8AM and 8PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-[#e62b2b] text-sm">✉</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">support@fixwheel.app</div>
                    <div className="text-xs text-slate-500">We reply within 2 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-[#e62b2b] text-sm">💬</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Chat on WhatsApp</div>
                    <div className="text-xs text-slate-500">Fastest way to book</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/5 border border-[#e62b2b] p-7 rounded-xl relative">
              <span className="absolute -top-3 right-5 bg-[#e62b2b] text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded tracking-wider">
                24/7 EMERGENCY
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                {brandName.toUpperCase()} {modelName.toUpperCase()} ROADSIDE ASSISTANCE
              </h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Stranded on the road or have a breakdown with your {brandName} {modelName}? A mechanic will come to your location with tools to fix your bike or scooter on the spot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/book#${bSlug}`} className="bg-[#e62b2b] hover:bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors">
                  Request Roadside Assistance →
                </Link>
                <a href="tel:+918745945682" className="border border-slate-900 text-slate-900 font-mono font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-colors hover:bg-slate-900 hover:text-white">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>

          {/* ===== CITY LINKS (PLACED DIRECTLY AFTER CONTACT US) ===== */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-16 text-white shadow-xl">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              BOOK DOORSTEP SERVICE BY CITY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <Link
                href="/gurgaon"
                className="bg-slate-800 border border-slate-700 hover:border-red-500 text-center py-3 rounded-lg font-mono text-xs font-bold text-white hover:text-red-400 transition-all shadow-sm"
              >
                Gurgaon / Gurugram
              </Link>
              <Link
                href="/delhi"
                className="bg-[#e62b2b] text-center py-3 rounded-lg font-mono text-xs font-bold text-white shadow-sm"
              >
                Delhi
              </Link>
              <Link
                href="/noida"
                className="bg-slate-800 border border-slate-700 hover:border-red-500 text-center py-3 rounded-lg font-mono text-xs font-bold text-white hover:text-red-400 transition-all shadow-sm"
              >
                Noida
              </Link>
              <Link
                href="/ghaziabad"
                className="bg-slate-800 border border-slate-700 hover:border-red-500 text-center py-3 rounded-lg font-mono text-xs font-bold text-white hover:text-red-400 transition-all shadow-sm"
              >
                Ghaziabad
              </Link>
              <Link
                href="/faridabad"
                className="bg-slate-800 border border-slate-700 hover:border-red-500 text-center py-3 rounded-lg font-mono text-xs font-bold text-white hover:text-red-400 transition-all shadow-sm"
              >
                Faridabad
              </Link>
            </div>

            {/* ===== GURGAON LOCALITIES MODEL SERVICE FOOTPRINT ===== */}
            <div className="mt-8 pt-8 border-t border-slate-800">
              <h4 className="text-lg font-bold text-white mb-2 font-oswald uppercase tracking-wide">
                {brandName} {modelName} Doorstep Service in Gurgaon Localities
              </h4>
              <p className="text-slate-400 text-xs mb-4">
                Fast 45-minute doorstep mechanic dispatch for {brandName} {modelName} across all major Gurgaon hubs and gated residential societies:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {[
                  { name: "DLF Phase 1", slug: "dlf-phase-1" },
                  { name: "DLF Phase 2", slug: "dlf-phase-2" },
                  { name: "DLF Phase 3", slug: "dlf-phase-3" },
                  { name: "DLF Phase 4", slug: "dlf-phase-4" },
                  { name: "DLF Phase 5", slug: "dlf-phase-5" },
                  { name: "Cyber City", slug: "cyber-city" },
                  { name: "Golf Course Rd", slug: "golf-course-road" },
                  { name: "Sohna Road", slug: "sohna-road" },
                  { name: "Palam Vihar", slug: "palam-vihar" },
                  { name: "Udyog Vihar", slug: "udyog-vihar" },
                  { name: "Sector 14", slug: "sector-14" },
                  { name: "Sector 15", slug: "sector-15" },
                  { name: "Sector 56", slug: "sector-56" },
                  { name: "Sector 57", slug: "sector-57" },
                  { name: "Badshahpur", slug: "badshahpur" },
                  { name: "Manesar", slug: "manesar" },
                  { name: "Sushant Lok", slug: "sushant-lok" },
                  { name: "Nirvana Country", slug: "nirvana-country" },
                ].map((loc) => (
                  <div
                    key={loc.slug}
                    className="bg-slate-900/80 border border-slate-800 text-slate-300 px-2.5 py-2 rounded text-[11px] font-mono text-center truncate select-none cursor-default"
                  >
                    {modelName} in {loc.name}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href={`/book#${bSlug}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#e62b2b] hover:bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-all shadow-[0_4px_15px_rgba(230,43,43,0.3)] hover:scale-[1.02]"
                >
                  Book Service
                </Link>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM CTA BANNER ===== */}
          <div className="bg-[#17181A] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-oswald">
              Ready to Service Your {brandName} {modelName}?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Get an expert mechanic at your doorstep in Delhi within 45 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/book#${bSlug}`}
                className="inline-flex items-center justify-center gap-3 bg-[#e62b2b] hover:bg-red-600 text-white px-8 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)] hover:scale-[1.02]"
              >
                BOOK NOW
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
