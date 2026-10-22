"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone, Wrench, Clock, Award, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResolvedModel, slugifyModel } from "@/lib/modelSlug";
import Breadcrumb from "@/components/Breadcrumb";
import TwoWheelerQueryCard from "@/components/TwoWheelerQueryCard";
import HeroBookingAction from "@/components/HeroBookingAction";
import { ELECTRIC_SERVICE_OPTIONS } from "@/lib/electricServices";
import type { HondaModelFamily } from "@/lib/hondaModelFamilies";
import type { HeroModelFamily } from "@/lib/heroModelFamilies";
import type { BajajModelFamily } from "@/lib/bajajModelFamilies";
import type { RoyalEnfieldModelFamily } from "@/lib/royalEnfieldModelFamilies";
import type { YamahaModelFamily } from "@/lib/yamahaModelFamilies";
import type { KtmModelFamily } from "@/lib/ktmModelFamilies";
import type { SuzukiModelFamily } from "@/lib/suzukiModelFamilies";
import type { OlaModelFamily } from "@/lib/olaModelFamilies";
import type { AtherModelFamily } from "@/lib/atherModelFamilies";
import type { JawaModelFamily } from "@/lib/jawaModelFamilies";
import type { YezdiModelFamily } from "@/lib/yezdiModelFamilies";
import type { ApriliaModelFamily } from "@/lib/apriliaModelFamilies";
import type { VespaModelFamily } from "@/lib/vespaModelFamilies";
import type { KawasakiModelFamily } from "@/lib/kawasakiModelFamilies";
import type { TvsModelFamily } from "@/lib/tvsModelFamilies";

interface ModelClientProps {
  modelInfo: ResolvedModel;
  familyInfo?: HondaModelFamily | HeroModelFamily | BajajModelFamily | RoyalEnfieldModelFamily | YamahaModelFamily | KtmModelFamily | SuzukiModelFamily | OlaModelFamily | AtherModelFamily | JawaModelFamily | YezdiModelFamily | ApriliaModelFamily | VespaModelFamily | KawasakiModelFamily | TvsModelFamily;
  familyFaqs: Array<{ q: string; a: string }>;
}

function getMaintenanceCopy(category: string, brandName: string, familyModel: string) {
  if (category === "EV") {
    return `${brandName} ${familyModel} service checks can cover accessible charging and electrical connections, warning indicators, auxiliary power, motor response, brakes, tyres and the ride concern you report.`;
  }

  if (category === "Scooter") {
    return `${brandName} ${familyModel} maintenance can cover starting and pickup, CVT drive behaviour, brakes, tyres, battery, lights and other symptoms recorded during booking.`;
  }

  return `${brandName} ${familyModel} maintenance can cover starting and pickup, clutch and gear operation, chain and sprockets, brakes, tyres, battery, lights and the issue you report.`;
}

export default function ModelDetailClient({ modelInfo, familyInfo, familyFaqs }: ModelClientProps) {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global || DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity('global').then(setStats);
  }, []);

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const { brandName, modelName, category } = modelInfo;
  const isElectricModel = familyInfo
    ? familyInfo.groups.every((group) => group.category === "EV")
    : category === "Electric Motorbike";
  const hasElectricModels = familyInfo
    ? familyInfo.groups.some((group) => group.category === "EV")
    : isElectricModel;
  const hasCombustionModels = familyInfo
    ? familyInfo.groups.some((group) => group.category !== "EV")
    : !isElectricModel;
  const isMixedDrivetrainFamily = hasElectricModels && hasCombustionModels;
  const electricFamilyModels = familyInfo?.groups.find((group) => group.category === "EV")?.models || [];
  const familyModelCount = familyInfo?.groups.reduce((total, group) => total + group.models.length, 0) || 0;

  const bSlug = slugifyModel(brandName);
  const getBookingHref = (familyModel: string, category: string) =>
    `/book?brand=${encodeURIComponent(bSlug)}&model=${encodeURIComponent(familyModel)}&type=${encodeURIComponent(category === "EV" ? "Electric Motorbike" : "Non-Electric Motorbike")}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative z-10">
      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Brands", href: "/brands" },
              { label: brandName, href: `/${bSlug}` },
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
                {brandName} {modelName} Service & Repair at Doorstep
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {isMixedDrivetrainFamily
                  ? `Book doorstep care for Honda ${modelName} petrol scooters and electric models. Select the exact version so we dispatch the right mechanic, tools, and service plan.`
                  : `Get an expert certified mechanic for your ${brandName} ${modelName} right at your home or office parking. 100% genuine OEM parts, 15-day labor warranty, and 45-minute doorstep dispatch.`}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full sm:w-auto">
                <HeroBookingAction>
                  <Link
                    href={`/book#${bSlug}`}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#e62b2b] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(230,43,43,0.35)] transition-all hover:bg-red-600 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
                  >
                    Book Service Now →
                  </Link>
                </HeroBookingAction>
                <a
                  href="tel:+918745945682"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-md font-mono font-bold tracking-wider uppercase text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Mechanic
                </a>
              </div>
            </div>

            {/* Right Hero Interactive Query Card */}
            <div className="lg:col-span-5">
              <TwoWheelerQueryCard electric={isElectricModel} />
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
              <b className="block text-2xl font-bold text-slate-900">{stats.bikes_serviced}+</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Total Vehicles Serviced</span>
            </div>
            <div className="p-2">
              <b className="block text-2xl font-bold text-slate-900">15 DAYS</b>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Labor Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {familyInfo && (
        <section className="border-b border-slate-200 bg-white py-12" aria-labelledby="family-models-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 id="family-models-heading" className="mt-2 font-oswald text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl">
                  Serviced Models <span className="text-[#e62b2b]">({familyModelCount})</span>
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                  Choose your exact {familyInfo.name} model. Every model listed below uses this shared service page.
                </p>
              </div>
              <Link
                href={`/${bSlug}`}
                className="font-mono text-xs font-bold uppercase tracking-wider text-[#e62b2b] hover:text-red-700"
              >
                View all {brandName} models →
              </Link>
            </div>

            <div className="space-y-9">
              {familyInfo.groups.map((group) => (
                <div key={group.category}>
                  <div className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-3">
                    <h3 className="font-oswald text-xl font-bold uppercase text-slate-900">{group.category}</h3>
                    <span className="inline-flex h-6 min-w-8 items-center justify-center rounded-full bg-[#e62b2b] px-2 font-mono text-[11px] font-bold text-white">
                      {group.models.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.models.map((familyModel) => (
                      <Link
                        key={familyModel}
                        href={getBookingHref(familyModel, group.category)}
                        className="flex min-h-20 items-center justify-between gap-4 rounded border border-slate-200 bg-white px-6 py-5 transition hover:-translate-y-0.5 hover:border-[#e62b2b] hover:shadow-lg"
                      >
                        <span className="font-mono text-sm font-bold text-slate-900">{familyModel}</span>
                        <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#e62b2b]">Book →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {familyInfo && (
        <section className="border-b border-slate-200 bg-slate-50 py-14" aria-labelledby="family-maintenance-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e62b2b]">Model-specific care</span>
              <h2 id="family-maintenance-heading" className="mt-3 font-oswald text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl">
                Service issues and maintenance for every {modelName} model
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                Select the exact vehicle below so the booking carries the right model name. The checks shown are matched to its vehicle category and the issue you report.
              </p>
            </div>

            <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
              {familyInfo.groups.flatMap((group) =>
                group.models.map((familyModel) => (
                  <article key={`${group.category}-${familyModel}`} className="grid gap-4 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:items-center">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#e62b2b]">{group.category}</span>
                      <h3 className="mt-1 font-oswald text-lg font-bold text-slate-900">{brandName} {familyModel}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">
                      {getMaintenanceCopy(group.category, brandName, familyModel)}
                    </p>
                    <Link
                      href={getBookingHref(familyModel, group.category)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#e62b2b] hover:text-red-700"
                    >
                      Book {familyModel} service
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===== MAIN MODEL CONTENT SECTION ===== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Content Paragraphs */}
            <div className="lg:col-span-8 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald border-b border-slate-200 pb-3">
                Why Choose Doorstep {brandName} {modelName} Service?
              </h2>
              <p>
                {isMixedDrivetrainFamily
                  ? `The ${brandName} ${modelName} family includes petrol scooters and electric variants. Petrol models need engine, CVT, belt, brake, and oil checks, while ${electricFamilyModels.join(" and ")} need battery-management, charging-port, motor-response, brake, tyre, and wiring checks.`
                  : isElectricModel
                  ? `Daily riding exposes your ${brandName} ${modelName} to heat, vibration, charging cycles, brake wear, and tyre-pressure changes. Regular checks help catch BMS warnings, loose accessible connections, reduced range, and braking issues early.`
                  : `Riding your ${brandName} ${modelName} through Delhi's demanding traffic and weather causes gradual wear on engine oil, spark plugs, brake shoes, and drive belts. Ignoring periodic maintenance leads to starting trouble, excessive vibrations, and dropping fuel efficiency.`}
              </p>
              <p>
                FixWheel dispatches certified mechanics trained specifically on {brandName} two-wheelers directly to your location. Equipped with high-grade diagnostic kits, genuine replacement parts, and portable washing equipment, we service your {modelName} right where it's parked.
              </p>
              <p>
                {isMixedDrivetrainFamily
                  ? "Tell us the exact Activa version during booking. We assign petrol-scooter service for Activa 110–125 generations and EV diagnostics for Activa e: models, with transparent pricing and a 15-day labor warranty."
                  : isElectricModel
                  ? "From BMS scans and auxiliary-battery checks to brake service, puncture repair, and minor electrical diagnosis, you receive transparent EV pricing with zero visiting fees and a 15-day labor warranty."
                  : "From routine 15-point checkups and oil swaps to brake shoe replacement, chain lube, and battery testing, you receive 100% transparent pricing with zero visiting fees and a 15-day labor warranty."}
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
                    <span className="font-bold text-slate-900">
                      {isMixedDrivetrainFamily
                        ? "Based on exact model and manufacturer schedule"
                        : isElectricModel ? "As per manufacturer schedule / 6 Months" : "Every 3,000 km / 3 Months"}
                    </span>
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

          {hasElectricModels && (
            <section className="mb-16" aria-labelledby="model-ev-services-heading">
              <div className="mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e62b2b] block mb-2">EV Service Catalog</span>
                <h2 id="model-ev-services-heading" className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 font-oswald">
                  Electric Services for {isMixedDrivetrainFamily ? electricFamilyModels.join(" & ") : `${brandName} ${modelName}`}
                </h2>
                <p className="text-slate-600 mt-2">EV-specific rates with no petrol engine, carburetor, or CC-based services.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ELECTRIC_SERVICE_OPTIONS.map((service) => (
                  <article key={service.id} className="border border-slate-200 rounded-xl p-5 flex flex-col justify-between gap-5 bg-white">
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-widest text-[#e62b2b]">{service.tag}</span>
                      <div className="flex items-start justify-between gap-3 mt-3">
                        <h3 className="font-oswald text-lg font-bold text-slate-900">{service.name}</h3>
                        <span className="font-mono text-[10px] whitespace-nowrap text-slate-500">⏱ {service.time}</span>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 mt-3">{service.description}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
                      <div><span className="block font-mono text-[10px] uppercase text-slate-500">Starting From</span><strong className="text-2xl text-[#e62b2b]">₹{service.price.toLocaleString("en-IN")}</strong></div>
                      <Link href={`/book#${bSlug}`} className="bg-[#e62b2b] text-white px-4 py-2.5 rounded-md font-mono font-bold text-[11px] uppercase">Book EV Service →</Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="mb-16 border-y border-slate-200 py-14" aria-labelledby="family-faq-heading">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e62b2b]">Questions before booking</span>
                <h2 id="family-faq-heading" className="mt-3 font-oswald text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl">
                  {brandName} {modelName} service FAQ
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Model coverage, maintenance checks and booking details for this shared family page.
                </p>
              </div>
              <div className="divide-y divide-slate-200 border-t border-slate-200">
                {familyFaqs.map((faq, idx) => {
                  const isOpen = !!openFaqs[idx];
                  return (
                    <div key={faq.q} className="border-b border-slate-200">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left"
                      >
                        <span className="font-semibold text-slate-900">{faq.q}</span>
                        <ChevronDown className={cn("h-5 w-5 shrink-0 text-[#e62b2b] transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                      </button>
                      {isOpen && <p className="max-w-3xl pb-5 text-sm leading-6 text-slate-600">{faq.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

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
              <p className="text-slate-600 text-sm mb-6">Have a question? We are available from 8 AM to 10 PM.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-[#e62b2b] text-sm">☎</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">+91 87459 45682</div>
                    <div className="text-xs text-slate-500">Call us between 8 AM and 10 PM</div>
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
                href="tel:+918745945682"
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
