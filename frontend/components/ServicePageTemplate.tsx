"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Phone, Wrench, ShieldCheck, Clock, Award, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageProps {
  serviceId: string;
  category: string;
  title: string;
  lead: string;
  startingPrice: string;
  avgTime: string;
  warranty: string;
  descriptionParagraphs: string[];
  includedItems: string[];
  faqs: ServiceFaq[];
  keywords: string[];
}

const SUPPORTED_BRANDS = [
  { name: "Honda", slug: "honda", logo: "https://www.google.com/s2/favicons?domain=honda2wheelersindia.com&sz=64" },
  { name: "Hero", slug: "hero", logo: "https://www.google.com/s2/favicons?domain=heromotocorp.com&sz=64" },
  { name: "Royal Enfield", slug: "royal-enfield", logo: "https://www.google.com/s2/favicons?domain=royalenfield.com&sz=64" },
  { name: "TVS", slug: "tvs", logo: "https://www.google.com/s2/favicons?domain=tvsmotor.com&sz=64" },
  { name: "Bajaj", slug: "bajaj", logo: "https://www.google.com/s2/favicons?domain=bajajauto.com&sz=64" },
  { name: "Yamaha", slug: "yamaha", logo: "https://www.google.com/s2/favicons?domain=yamaha-motor-india.com&sz=64" },
  { name: "Suzuki", slug: "suzuki", logo: "https://www.google.com/s2/favicons?domain=suzukimotorcycle.co.in&sz=64" },
  { name: "KTM", slug: "ktm", logo: "https://www.google.com/s2/favicons?domain=ktm.com&sz=64" },
  { name: "Ola Electric", slug: "ola-electric", logo: "https://www.google.com/s2/favicons?domain=olaelectric.com&sz=64" },
  { name: "Ather", slug: "ather", logo: "https://www.google.com/s2/favicons?domain=atherenergy.com&sz=64" },
];

export default function ServicePageTemplate({
  serviceId,
  category,
  title,
  lead,
  startingPrice,
  avgTime,
  warranty,
  descriptionParagraphs,
  includedItems,
  faqs,
  keywords,
}: ServicePageProps) {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative z-10">
      {/* ===== HERO HEADER (FIXED NAVBAR CLEARANCE) ===== */}
      <div className="bg-[#17181A] text-white pt-28 md:pt-36 pb-16 border-b border-white/10 relative overflow-hidden">
        {/* Decorative background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(230,43,43,0.15) 0 2px, transparent 2px 14px)",
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-mono font-bold uppercase tracking-wider text-xs transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 align-middle items-center">
            {/* Left Hero Main Info */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-mono font-bold uppercase tracking-widest text-xs mb-6">
                <Wrench className="w-4 h-4" />
                <span>{category}</span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6 text-white font-oswald">
                {title}
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {lead}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-3 bg-[#e62b2b] hover:bg-red-600 text-white px-8 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)] hover:scale-[1.02]"
                >
                  Book Doorstep Service →
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

            {/* Right Hero Interactive Service Ticket */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] text-slate-900 rounded-xl p-6 relative shadow-2xl border border-slate-200">
                <div className="flex justify-between items-start border-b border-dashed border-slate-300 pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      SERVICE TICKET
                    </span>
                    <span className="font-mono text-sm font-bold text-slate-900">
                      FIXWHEEL-SRV-{serviceId.toUpperCase().slice(0, 6)}
                    </span>
                  </div>
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    INSTANT DISPATCH
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-xs font-mono">
                  <div>
                    <span className="block text-slate-400 uppercase">STARTING FROM</span>
                    <span className="text-xl font-bold text-[#e62b2b]">{startingPrice}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">ARRIVAL TIME</span>
                    <span className="text-base font-bold text-slate-900">{avgTime}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">LOCATION</span>
                    <span className="text-sm font-bold text-slate-900">Doorstep (Home/Office)</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 uppercase">WARRANTY</span>
                    <span className="text-sm font-bold text-slate-900">{warranty}</span>
                  </div>
                </div>

                <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Genuine OEM Spares & Verified Mechanics</span>
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
              <span className="text-xs text-slate-500 uppercase tracking-wider">Bikes Serviced</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">100% OEM</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Genuine Spares</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Content Paragraphs */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald border-b border-slate-200 pb-3">
                Why Choose Doorstep {title} in Delhi NCR?
              </h2>
              {descriptionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Right Quick Info Panel */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6 sticky top-28">
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3 font-oswald">
                  Service Specifications
                </h3>
                <div className="space-y-4 font-sans text-sm">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Service Coverage
                    </span>
                    <span className="font-bold text-slate-900">
                      Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad)
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Service Duration
                    </span>
                    <span className="font-bold text-slate-900">35 – 50 Minutes at your doorstep</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Parts Policy
                    </span>
                    <span className="font-bold text-slate-900">100% Sealed OEM Parts & Cables</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Warranty
                    </span>
                    <span className="font-bold text-slate-900">{warranty}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Payment Mode
                    </span>
                    <span className="font-bold text-slate-900">UPI, Card, Cash after Job Completion</span>
                  </div>
                </div>

                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#e62b2b] hover:bg-red-600 text-white py-3.5 rounded-md font-mono font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ===== WHAT'S INCLUDED CHECKLIST ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-slate-900 mb-16 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
              <div>
                <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                  FULL CHECKLIST
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-slate-900 font-oswald">
                  What's Included in This Service
                </h2>
              </div>
              <span className="bg-white border border-slate-300 font-mono text-xs font-bold px-4 py-2 rounded-full text-slate-700">
                Starting from <strong className="text-red-600">{startingPrice}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              {includedItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span className="text-base font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== STEP-BY-STEP PROCESS ===== */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-2">
                HASSLE-FREE WORKFLOW
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald">
                How Doorstep Bike Service Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 relative">
                <span className="font-mono text-3xl font-bold text-red-100 block mb-2">01</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Book Online</h3>
                <p className="text-sm text-slate-600">
                  Select your bike model and preferred doorstep time slot in under 60 seconds.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative">
                <span className="font-mono text-3xl font-bold text-red-100 block mb-2">02</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">2. Mechanic Dispatched</h3>
                <p className="text-sm text-slate-600">
                  Our certified technician arrives at your doorstep within 45 minutes with OEM tools.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative">
                <span className="font-mono text-3xl font-bold text-red-100 block mb-2">03</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">3. Doorstep Service</h3>
                <p className="text-sm text-slate-600">
                  Watch full servicing done right in your home or office parking with zero mess.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative">
                <span className="font-mono text-3xl font-bold text-red-100 block mb-2">04</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">4. Test Drive & Pay</h3>
                <p className="text-sm text-slate-600">
                  Take a test ride, inspect replaced parts, and pay digitally with a 15-day warranty.
                </p>
              </div>
            </div>
          </div>

          {/* ===== SUPPORTED BRANDS GRID ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-xl font-black uppercase tracking-wider text-slate-900 font-oswald mb-6">
              Supported Two-Wheeler Brands
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {SUPPORTED_BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-full text-xs font-mono font-bold text-slate-800 hover:border-red-500 hover:text-red-600 transition-colors shadow-sm"
                >
                  <img src={b.logo} alt={b.name} className="w-4 h-4 rounded-full" />
                  <span>{b.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ===== EXPANDABLE FAQS ===== */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="mb-8">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-1">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald">
                Got Questions About {title}?
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = !!openFaqs[idx];
                return (
                  <div
                    key={idx}
                    className={cn(
                      "bg-white border rounded-lg overflow-hidden transition-colors",
                      isOpen ? "border-red-500" : "border-slate-200"
                    )}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center font-oswald text-lg uppercase text-slate-900"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-slate-400 transition-transform duration-200",
                          isOpen && "rotate-180 text-red-500"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== KEYWORDS TAG CLOUD & CITY LINKS ===== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              POPULAR LOCAL SEARCHES
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="bg-white border border-slate-200 font-mono text-xs text-slate-600 px-3 py-1.5 rounded-full"
                >
                  #{kw}
                </span>
              ))}
            </div>

            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              BOOK DOORSTEP SERVICE BY CITY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <Link
                href="/gurgaon"
                className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-center py-2.5 rounded-md font-mono text-xs font-bold text-slate-800 transition-colors"
              >
                Gurgaon
              </Link>
              <Link
                href="/delhi"
                className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-center py-2.5 rounded-md font-mono text-xs font-bold text-slate-800 transition-colors"
              >
                Delhi
              </Link>
              <Link
                href="/noida"
                className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-center py-2.5 rounded-md font-mono text-xs font-bold text-slate-800 transition-colors"
              >
                Noida
              </Link>
              <Link
                href="/ghaziabad"
                className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-center py-2.5 rounded-md font-mono text-xs font-bold text-slate-800 transition-colors"
              >
                Ghaziabad
              </Link>
              <Link
                href="/faridabad"
                className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-600 text-center py-2.5 rounded-md font-mono text-xs font-bold text-slate-800 transition-colors"
              >
                Faridabad
              </Link>
            </div>
          </div>

          {/* ===== BOTTOM CTA BANNER ===== */}
          <div className="bg-[#17181A] text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 font-oswald">
              Ready to Service Your Two-Wheeler?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Get an expert doorstep mechanic at your home or office parking in Delhi NCR within 45 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
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
                Call Mechanic
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
