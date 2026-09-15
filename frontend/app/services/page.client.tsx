"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, Wrench, ShieldCheck, Clock, Award, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Breadcrumb from "@/components/Breadcrumb";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import { getPageVariables, PageVariables, DEFAULT_PAGE_VARIABLES } from "@/lib/pageVariables";
import { SERVICE_PRICING_LIST } from "@/lib/pricingData";

const SERVICE_TAGS: Record<string, string> = {
  "basic-service": "[GENERAL]",
  "service-engine-oil": "[ENGINE OIL]",
  "jump-start": "[JUMPSTART]",
  "puncture": "[PUNCTURE]",
  "running-repair": "[REPAIR]",
  "engine-half": "[ENG HALF]",
  "engine-full": "[ENG FULL]",
  "carburetor-cleaning": "[CARBURETOR]",
  "obd-inspection": "[OBD SCAN]",
  "battery-replacement": "[BATTERY]",
  "disc-replacement": "[BRAKE]",
  "chain-sprocket": "[CHAIN]",
  "pick-drop": "[PICK & DROP]",
  "ev-service": "[EV SCOOTER]",
};

interface ServiceCityInfo {
  slug: string;
  name: string;
  shortName: string;
  buttonLabel?: string;
  badge: string;
  areas: string[];
}

const SERVICE_CITIES: ServiceCityInfo[] = [
  {
    slug: "gurgaon",
    name: "Gurgaon / Gurugram",
    shortName: "Gurgaon",
    buttonLabel: "Gurgaon / Gurugram",
    badge: "100% Coverage",
    areas: [
      "DLF Phase 1–5",
      "Golf Course Road",
      "Sushant Lok",
      "Palam Vihar",
      "Sohna Road",
      "Cyber City",
      "Udyog Vihar",
      "Dwarka Expressway",
      "Sector 14, 15, 17, 56",
      "+ All Gurgaon Sectors",
    ],
  },
  {
    slug: "delhi",
    name: "Delhi City",
    shortName: "Delhi",
    buttonLabel: "Delhi",
    badge: "South & West Focus",
    areas: [
      "Kapashera",
      "Dwarka (All Sectors)",
      "Vasant Kunj",
      "Mahipalpur",
      "Bijwasan",
      "Janakpuri",
      "Samalka",
      "Uttam Nagar",
      "Hari Nagar",
      "+ Nearby Localities",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    shortName: "Noida",
    badge: "Major Localities",
    areas: [
      "Sector 18",
      "Sector 62",
      "Sector 50",
      "Sector 75–78",
      "Sector 137",
      "Sector 150",
      "Greater Noida West",
      "Knowledge Park",
      "Noida Extension",
      "+ All Noida Sectors",
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    shortName: "Ghaziabad",
    badge: "Major Localities",
    areas: [
      "Indirapuram",
      "Vaishali",
      "Kaushambi",
      "Vasundhara",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Govindpuram",
      "Vijay Nagar",
      "NH-24",
      "+ All Ghaziabad Areas",
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    shortName: "Faridabad",
    badge: "Major Localities",
    areas: [
      "NIT Faridabad",
      "Sector 15",
      "Sector 16",
      "Sector 21",
      "Sector 37",
      "Sector 86",
      "Old Faridabad",
      "Ballabhgarh",
      "Suraj Kund",
      "+ All Faridabad Areas",
    ],
  },
];

export default function ServicesClientPage() {
  const [selectedCitySlug, setSelectedCitySlug] = useState<string>("gurgaon");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global);
  const [pageVars, setPageVars] = useState<PageVariables>(DEFAULT_PAGE_VARIABLES);

  const activeCity = SERVICE_CITIES.find((c) => c.slug === selectedCitySlug) || SERVICE_CITIES[0];

  useEffect(() => {
    getPublicStatsForCity('global').then(setStats);
    getPageVariables('services', 'global').then(setPageVars);
  }, []);

  const servicesList = SERVICE_PRICING_LIST.map((item) => {
    const rawPrice = item.prices.cc0_249 !== undefined ? item.prices.cc0_249 : item.prices.electric;
    const formattedPrice = typeof rawPrice === "number" ? `₹${rawPrice}` : `${rawPrice}`;
    return {
      id: item.id,
      tag: SERVICE_TAGS[item.id] || `[${item.name.toUpperCase().slice(0, 8)}]`,
      name: item.name,
      desc: item.description,
      link: "/book",
      price: formattedPrice,
    };
  });

  const faqs = [
    {
      q: "How long does doorstep bike service take in Delhi NCR?",
      a: "Most routine servicing and repairs take 25 to 45 minutes. If a major repair requires more time, your mechanic will explain the timeline upfront.",
    },
    {
      q: "How much does bike service at home cost in Delhi?",
      a: "Our doorstep periodic bike service starts at ₹550 for commuter bikes and scooters (0-249cc), with minor repairs and labor starting at ₹99. We confirm the price before any work begins, so you pay zero hidden fees.",
    },
    {
      q: "Do you use genuine OEM parts for bike repair?",
      a: "Yes. We use only 100% genuine or OEM-grade parts. We always unseal new parts right in front of you and confirm costs before installation.",
    },
    {
      q: "Which areas do you cover for doorstep bike repair in Delhi?",
      a: "We cover all major locations across Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad including residential societies, office parks, and roadside breakdown spots.",
    },
    {
      q: "Can I book a Honda Activa or Royal Enfield service at home?",
      a: "Yes! Honda Activa and Royal Enfield motorcycles are among our most-booked two-wheelers. We handle routine servicing, oil changes, brake repairs, and battery replacements right at your location.",
    },
    {
      q: "Is there a warranty on the bike repair work?",
      a: "Yes! We guarantee our work with a 15-day labor warranty. Any replacement parts carry the manufacturer's official warranty.",
    },
    {
      q: "Can I book emergency roadside bike repair in Delhi?",
      a: "Yes! We provide emergency roadside assistance and breakdown support across Delhi. You can book directly online or call our technician helpline.",
    },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .services-new-page {
          --ink:#0F172A;
          --asphalt:#17181A;
          --steel:#475569;
          --paper:#FFFFFF;
          --paper-dim:#F8FAFC;
          --orange:#e62b2b;
          --orange-deep:#d32f2f;
          --grey:#64748B;
          --line: rgba(0,0,0,0.08);
          --line-dark: #E2E8F0;
          --radius: 8px;
          
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .services-new-page h1,
        .services-new-page h2,
        .services-new-page h3 {
          font-family: 'Oswald', sans-serif;
          line-height: 1.1;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .services-new-page .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .services-new-page .wrap {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ---------- HERO ---------- */
        .services-new-page .hero {
          background: var(--asphalt);
          color: #FFFFFF;
          padding: 40px 0 60px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .services-new-page .hero::before {
          content: "";
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(135deg, rgba(230,43,43,0.08) 0 2px, transparent 2px 14px);
          pointer-events: none;
        }

        .services-new-page .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 880px) {
          .services-new-page .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        .services-new-page .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--orange);
          background: rgba(230,43,43,0.12);
          border: 1px solid rgba(230,43,43,0.3);
          padding: 6px 12px;
          border-radius: 9999px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .services-new-page .hero h1 {
          font-size: clamp(34px, 5.2vw, 56px);
          margin-bottom: 18px;
          color: #FFFFFF;
          font-weight: 900;
        }

        .services-new-page .hero h1 em {
          font-style: normal;
          color: var(--orange);
        }

        .services-new-page .hero p.lead {
          font-size: 18px;
          color: #A7A9AC;
          max-width: 520px;
          margin-bottom: 30px;
        }

        .services-new-page .btn-row {
          display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
        }

        .services-new-page .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 26px;
          font-weight: 700;
          font-size: 14px;
          border-radius: 6px;
          transition: transform .15s, box-shadow .15s;
          text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.04em;
        }

        .services-new-page .btn-primary {
          background: var(--orange);
          color: #FFFFFF;
          box-shadow: 0 4px 20px rgba(230,43,43,0.35);
        }

        .services-new-page .btn-primary:hover {
          transform: translateY(-2px);
          background: var(--orange-deep);
        }

        .services-new-page .btn-ghost {
          border: 1px solid rgba(255,255,255,0.2);
          color: #FFFFFF;
          background: rgba(255,255,255,0.05);
        }

        .services-new-page .btn-ghost:hover {
          border-color: #FFFFFF;
          background: rgba(255,255,255,0.15);
        }

        .services-new-page .trust-row {
          display: flex; gap: 24px; margin-top: 36px; flex-wrap: wrap;
          font-size: 13px; color: #A7A9AC; font-family: 'JetBrains Mono', monospace;
        }

        .services-new-page .trust-row b {
          color: #FFFFFF; font-weight: 700; font-size: 15px;
        }

        /* ---------- TICKET CARD ---------- */
        .services-new-page .ticket {
          background: #F8FAFC;
          color: var(--ink);
          border-radius: 12px;
          border: 1px solid var(--line-dark);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          position: relative;
          padding: 24px;
        }

        .services-new-page .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          padding-bottom: 16px;
          border-bottom: 2px dashed var(--line-dark);
          margin-bottom: 16px;
        }

        .services-new-page .ticket-top .tnum {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--grey); font-weight: 700;
        }

        .services-new-page .ticket-top .stamp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #1F7A3D;
          background: #DCFCE7;
          border: 1px solid #86EFAC;
          padding: 4px 10px;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        .services-new-page .ticket-row {
          display: flex; justify-content: space-between;
          font-size: 14px; padding: 10px 0;
          border-bottom: 1px solid var(--line-dark);
        }

        .services-new-page .ticket-row:last-of-type {
          border-bottom: none;
        }

        .services-new-page .ticket-row .label {
          color: var(--grey); font-size: 13px; text-transform: uppercase; font-family: 'JetBrains Mono', monospace;
        }

        .services-new-page .ticket-row .val {
          font-weight: 700; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--ink);
        }

        .services-new-page .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 16px; padding-top: 16px; border-top: 2px dashed var(--line-dark);
        }

        .services-new-page .ticket-foot .total-label {
          font-size: 12px; color: var(--grey); text-transform: uppercase; letter-spacing: 0.05em; font-family: 'JetBrains Mono', monospace;
        }

        .services-new-page .ticket-foot .total-val {
          font-family: 'JetBrains Mono', monospace; font-weight: 900; font-size: 24px; color: var(--orange);
        }

        /* ---------- SECTION SCAFFOLDING ---------- */
        .services-new-page section {
          padding: 72px 0;
          border-bottom: 1px solid var(--line-dark);
          background: #FFFFFF;
        }

        .services-new-page section.alt-section {
          background: #F8FAFC;
        }

        .services-new-page .section-head {
          margin-bottom: 40px; max-width: 640px;
        }

        .services-new-page .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--orange); margin-bottom: 10px; display: block; font-weight: 700;
        }

        .services-new-page .section-head h2 {
          font-size: clamp(28px, 3.6vw, 40px);
          color: var(--ink);
          font-weight: 900;
        }

        .services-new-page .section-head p {
          color: var(--grey); margin-top: 12px; font-size: 16px;
        }

        /* OVERVIEW */
        .services-new-page .overview-grid {
          display: grid; gap: 32px; grid-template-columns: 1fr;
        }

        @media (min-width: 760px) {
          .services-new-page .overview-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .services-new-page .overview-grid p {
          font-size: 16px; color: #334155; line-height: 1.7;
        }

        .services-new-page .spec-box {
          background: #F8FAFC;
          color: var(--ink);
          border-radius: 12px;
          padding: 28px;
          border: 1px solid var(--line-dark);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .services-new-page .spec-list {
          list-style: none; margin-top: 14px;
        }

        .services-new-page .spec-list li {
          display: flex; justify-content: space-between;
          font-size: 14px; padding: 11px 0;
          border-bottom: 1px solid var(--line-dark);
        }

        .services-new-page .spec-list li:last-child {
          border-bottom: none;
        }

        .services-new-page .spec-list .v {
          font-family: 'JetBrains Mono', monospace; color: var(--ink); font-weight: 700;
        }

        /* WHY CHOOSE */
        .services-new-page .why-grid {
          display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .services-new-page .why-card {
          background: #FFFFFF;
          border: 1px solid var(--line-dark);
          border-left: 4px solid var(--orange);
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .services-new-page .why-card .num {
          font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--orange); display: block; margin-bottom: 8px; font-weight: 700;
        }

        .services-new-page .why-card h3 {
          font-size: 18px; font-weight: 900; margin-bottom: 8px; color: var(--ink);
        }

        .services-new-page .why-card p {
          font-size: 14px; color: var(--grey); line-height: 1.6;
        }

        /* HOW IT WORKS */
        .services-new-page .steps {
          display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .services-new-page .step {
          background: #FFFFFF;
          border: 1px solid var(--line-dark);
          border-radius: 12px;
          padding: 24px;
        }

        .services-new-page .step .stepnum {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: var(--orange); display: block; margin-bottom: 8px;
        }

        .services-new-page .step h3 {
          font-size: 18px; font-weight: 900; color: var(--ink); margin-bottom: 8px;
        }

        .services-new-page .step p {
          font-size: 14px; color: var(--grey); line-height: 1.6;
        }

        /* SERVICES GRID */
        .services-new-page .related-grid {
          display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .services-new-page .related-card {
          border: 1px solid var(--line-dark);
          border-radius: 12px;
          padding: 28px;
          transition: border-color .2s, transform .2s, box-shadow .2s;
          background: #FFFFFF;
          display: flex; flex-col; justify-between;
        }

        .services-new-page .related-card:hover {
          border-color: var(--orange); transform: translateY(-3px);
          box-shadow: 0 12px 24px -10px rgba(0,0,0,0.08);
        }

        .services-new-page .related-card .icon-mono {
          font-family: 'JetBrains Mono', monospace; color: var(--orange); font-size: 12px; font-weight: 700; display: block; margin-bottom: 12px;
        }

        .services-new-page .related-card h3 {
          font-size: 20px; font-weight: 900; margin-bottom: 8px; color: var(--ink);
        }

        .services-new-page .related-card p {
          font-size: 14px; color: var(--grey); line-height: 1.6; margin-bottom: 16px;
        }

        /* AREAS */
        .services-new-page .area-grid {
          display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); font-size: 14px;
        }

        .services-new-page .area-item {
          padding: 10px 14px;
          background: #FFFFFF;
          border: 1px solid var(--line-dark);
          border-radius: 6px;
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: var(--ink);
        }

        .services-new-page .area-item::before {
          content: "●"; color: var(--orange); font-size: 8px;
        }

        /* REVIEWS */
        .services-new-page .review-grid {
          display: grid; gap: 20px; grid-template-columns: 1fr;
        }

        @media (min-width: 760px) {
          .services-new-page .review-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .services-new-page .review-card {
          background: #FFFFFF; color: var(--ink);
          padding: 24px; border-radius: 12px;
          border: 1px solid var(--line-dark);
        }

        .services-new-page .stars {
          color: #F59E0B; font-size: 16px; margin-bottom: 10px; letter-spacing: 2px;
        }

        .services-new-page .review-card p {
          font-size: 14.5px; color: #334155; margin-bottom: 16px; line-height: 1.6;
        }

        .services-new-page .review-meta {
          display: flex; justify-content: space-between; font-size: 12px; color: var(--grey); font-family: 'JetBrains Mono', monospace; font-weight: 700;
        }

        /* FAQ */
        .services-new-page .faq-item {
          border: 1px solid var(--line-dark);
          border-radius: 8px;
          margin-bottom: 12px;
          background: #FFFFFF;
          overflow: hidden;
        }

        .services-new-page .faq-q {
          width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          background: none; border: none; cursor: pointer;
          padding: 18px 24px; text-align: left;
          font-size: 17px; font-weight: 900; color: var(--ink);
          font-family: 'Oswald', sans-serif;
          text-transform: uppercase;
        }

        .services-new-page .faq-q .icon {
          font-family: 'JetBrains Mono', monospace; color: var(--orange); font-size: 20px; transition: transform .2s; font-weight: 700;
        }

        .services-new-page .faq-item.open {
          border-color: var(--orange);
        }

        .services-new-page .faq-item.open .faq-q .icon {
          transform: rotate(45deg);
        }

        .services-new-page .faq-a {
          padding: 14px 24px 20px 24px;
          font-size: 15px;
          color: var(--grey);
          line-height: 1.65;
          border-top: 1px solid var(--line-dark);
        }

        /* FINAL CTA */
        .services-new-page .final-cta {
          background: var(--asphalt); color: #FFFFFF;
          text-align: center; padding: 80px 0; border-bottom: none;
        }

        .services-new-page .final-cta h2 {
          font-size: clamp(28px, 4vw, 44px); margin-bottom: 16px; color: #FFFFFF; font-weight: 900;
        }

        .services-new-page .final-cta p {
          color: #A7A9AC; margin-bottom: 32px; font-size: 17px; max-width: 600px; margin-left: auto; margin-right: auto;
        }
      ` }}
      />

      <div className="services-new-page">
        {/* BREADCRUMB */}
        <div style={{ background: "#111214", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="wrap">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          </div>
        </div>

        {/* HERO */}
        <header className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Bike Mechanic at Home — Delhi NCR</span>
              </div>
              <h1>
                Doorstep Bike Repair Service in <em>Delhi NCR</em>
              </h1>
              <p className="lead">
                Verified bike mechanics arrive at your home or office with genuine parts and diagnostic tools. No towing, no waiting in garage queues.
              </p>
              <div className="btn-row">
                <Link href="/book" className="btn btn-primary font-sans">
                  Book Doorstep Service →
                </Link>
                <a href="#pricing" className="btn btn-ghost font-sans">
                  View All Services
                </a>
              </div>
              <div className="trust-row">
                <span>
                  <b>{pageVars.avgTime}</b> Arrival
                </span>
                <span>
                  <b>{pageVars.bikesServiced}+</b> Serviced
                </span>
                <span>
                  <b>{pageVars.averageRating} ★</b> Rating
                </span>
                <span>
                  <b>{pageVars.warranty}</b>
                </span>
              </div>
            </div>

            <div className="ticket font-sans">
              <div className="ticket-top">
                <div>
                  <div className="tnum">TICKET #FW-2026-SRV</div>
                  <div className="text-[11px] font-mono text-slate-500 font-bold mt-0.5">
                    FIXWHEEL DOORSTEP PASS
                  </div>
                </div>
                <div className="stamp">VERIFIED MECHANIC</div>
              </div>
              <div className="ticket-body">
                <div className="ticket-row">
                  <span className="label">SERVICE TYPE</span>
                  <span className="val">Periodic & Repair</span>
                </div>
                <div className="ticket-row">
                  <span className="label">COVERAGE</span>
                  <span className="val">Delhi NCR</span>
                </div>
                <div className="ticket-row">
                  <span className="label">LOCATION</span>
                  <span className="val">Home / Office</span>
                </div>
                <div className="ticket-row">
                  <span className="label">WARRANTY</span>
                  <span className="val">15 Days Labor</span>
                </div>
                <div className="ticket-row">
                  <span className="label">STATUS</span>
                  <span className="val" style={{ color: "#16A34A" }}>
                    READY TO DISPATCH ✓
                  </span>
                </div>
                <div className="ticket-foot">
                  <span className="total-label">STARTING AT</span>
                  <span className="total-val">₹99</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* OVERVIEW SECTION */}
        <section className="bg-white">
          <div className="wrap overview-grid">
            <div>
              <span className="tag">WHAT'S INCLUDED</span>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Doorstep Two-Wheeler Repair — All Services at Your Location
              </h2>
              <p className="mb-4">
                FixWheel brings certified motorcycle and scooter mechanics directly to your doorstep across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Our mobile units carry high-grade diagnostic tools, OEM replacement parts, and eco-friendly cleaning supplies.
              </p>
              <p className="mb-4">
                Whether you need a quick engine oil swap for your Honda Activa, tappet valve tuning for your Royal Enfield, or emergency roadside puncture repair, we execute everything on the spot inside your home or office parking.
              </p>
              <p>
                Every service comes with upfront transparent quotes, zero doorstep visit fees, and a 15-day labor guarantee.
              </p>
            </div>

            <div className="spec-box font-sans">
              <span className="tag">SERVICE SNAPSHOT</span>
              <ul className="spec-list">
                <li>
                  <span>Doorstep Arrival Time</span>
                  <span className="v">Within {pageVars.avgTime}</span>
                </li>
                <li>
                  <span>Mechanics Network</span>
                  <span className="v">{pageVars.totalPartners}+ Certified</span>
                </li>
                <li>
                  <span>Service Area</span>
                  <span className="v">Entire Delhi NCR</span>
                </li>
                <li>
                  <span>Parts Policy</span>
                  <span className="v">100% Genuine</span>
                </li>
                <li>
                  <span>Labor Warranty</span>
                  <span className="v">{pageVars.warranty}</span>
                </li>
                <li>
                  <span>Starting Rate</span>
                  <span className="v">{pageVars.startingPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE FIXWHEEL */}
        <section className="alt-section">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">WHY FIXWHEEL</span>
              <h2>Why Riders Choose FixWheel Doorstep Service</h2>
            </div>
            <div className="why-grid font-sans">
              <div className="why-card">
                <span className="num">01</span>
                <h3>True Doorstep Service</h3>
                <p>
                  Mechanics come directly to your home parking or office basement. No towing or waiting in garage queues.
                </p>
              </div>
              <div className="why-card">
                <span className="num">02</span>
                <h3>Verified Mechanics</h3>
                <p>
                  Background-checked and certified technicians trained on Honda, Hero, Royal Enfield, TVS, and EVs.
                </p>
              </div>
              <div className="why-card">
                <span className="num">03</span>
                <h3>Transparent Upfront Rates</h3>
                <p>
                  Exact prices confirmed before any work begins. Zero hidden visiting fees or surprise bills.
                </p>
              </div>
              <div className="why-card">
                <span className="num">04</span>
                <h3>45-Min Fast Dispatch</h3>
                <p>
                  Nearest mobile technician assigned and dispatched to your exact GPS location within 45 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-white">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">HOW IT WORKS</span>
              <h2>4 Simple Steps to Get Your Bike Serviced</h2>
            </div>
            <div className="steps font-sans">
              <div className="step">
                <span className="stepnum">STEP 1</span>
                <h3>Book Service</h3>
                <p>Select your bike model and preferred time slot in 60 seconds online or by phone.</p>
              </div>
              <div className="step">
                <span className="stepnum">STEP 2</span>
                <h3>Mechanic Dispatched</h3>
                <p>A nearby certified technician is assigned and arrives at your location with OEM tools.</p>
              </div>
              <div className="step">
                <span className="stepnum">STEP 3</span>
                <h3>Doorstep Repair</h3>
                <p>Watch full servicing done in your parking space with zero mess or hassle.</p>
              </div>
              <div className="step">
                <span className="stepnum">STEP 4</span>
                <h3>Test Drive & Pay</h3>
                <p>Take a test ride, inspect replaced parts, and pay digitally with a 15-day warranty.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES CATALOG & PRICING */}
        <section id="pricing" className="alt-section">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">ALL SERVICES & CATALOG</span>
              <h2>Two-Wheeler Service Packages in Delhi NCR</h2>
              <p>
                Select a service below to view detailed checklist items, FAQs, and transparent doorstep pricing.
              </p>
            </div>

            <div className="related-grid font-sans">
              {servicesList.map((service) => (
                <Link key={service.id} href={service.link} className="related-card group">
                  <div>
                    <span className="icon-mono">{service.tag}</span>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">Starting</span>
                    <span className="text-base font-mono font-extrabold text-[#e62b2b] whitespace-nowrap">
                      {service.price} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section id="areas" className="bg-white">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">COVERAGE</span>
              <h2>Service Areas Across Delhi NCR</h2>
              <p>Doorstep bike mechanics ready for instant dispatch across major cities.</p>
            </div>

            {/* CITY SELECTOR BUTTONS */}
            <div className="mb-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                BOOK DOORSTEP SERVICE BY CITY
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-sans">
                {SERVICE_CITIES.map((city) => {
                  const isSelected = city.slug === selectedCitySlug;
                  return (
                    <button
                      key={city.slug}
                      type="button"
                      onClick={() => setSelectedCitySlug(city.slug)}
                      className={cn(
                        "text-center py-3 px-3 rounded-lg font-mono text-xs font-bold transition-all shadow-sm cursor-pointer",
                        isSelected
                          ? "bg-[#e62b2b] text-white shadow-md border border-[#e62b2b]"
                          : "bg-slate-900 border border-slate-800 text-white hover:border-slate-700 hover:text-red-400"
                      )}
                    >
                      {city.buttonLabel || city.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SELECTED CITY COVERAGE & LOCALITIES */}
            <div className="font-sans">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded border border-red-200">
                  {activeCity.name}
                </span>
                <span className="text-xs text-slate-500 font-mono">{activeCity.badge}</span>
              </div>

              <div className="area-grid">
                {activeCity.areas.map((area, idx) => (
                  <div key={idx} className="area-item">
                    {area}
                  </div>
                ))}
                <Link
                  href={`/${activeCity.slug}`}
                  className="area-item !text-[#e62b2b] font-bold border-red-200 bg-red-50/50 hover:bg-red-50 hover:border-red-400 transition-colors"
                >
                  View {activeCity.shortName} Page →
                </Link>
              </div>

              {/* VIEW PAGE OPTION AFTER ALL LOCALITIES */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Looking for full doorstep coverage in {activeCity.name}?
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    View dedicated service pricing, certified mechanics, and instant doorstep booking for {activeCity.shortName}.
                  </p>
                </div>
                <Link
                  href={`/${activeCity.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#e62b2b] hover:bg-[#c92222] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
                >
                  View {activeCity.shortName} Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section className="alt-section">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">REVIEWS</span>
              <h2>What Delhi NCR Riders Say About FixWheel</h2>
            </div>
            <div className="review-grid font-sans">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  "Mechanic reached my office parking in Gurgaon in 25 minutes and replaced my Activa battery on the spot. Fantastic service!"
                </p>
                <div className="review-meta">
                  <span>RAHUL M.</span>
                  <span>GURGAON</span>
                </div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  "Quoted the price upfront before starting, no extra charges added. Got my Classic 350 oil changed right at home."
                </p>
                <div className="review-meta"><span>PRIYA S.</span><span>DELHI</span></div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  "Puncture at night near Dwarka Expressway, booked assistance online and mechanic arrived in 40 minutes with air compressor."
                </p>
                <div className="review-meta">
                  <span>AMIT K.</span>
                  <span>DWARKA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="bg-white">
          <div className="wrap max-w-3xl">
            <div className="section-head">
              <span className="tag">FAQS</span>
              <h2>Common Questions About Doorstep Service</h2>
            </div>
            <div id="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={cn("faq-item font-sans", isOpen && "open")}>
                    <button
                      className="faq-q font-sans font-black text-slate-900"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <span className="icon">{isOpen ? "×" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-a">
                        <p className="font-sans font-medium text-slate-600 pt-1">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="final-cta" id="book">
          <div className="wrap">
            <h2>Book Doorstep Two-Wheeler Service in Delhi NCR</h2>
            <p>
              Certified mechanics at your home or office parking. Starting at ₹99. Zero visiting fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn btn-primary font-sans">
                Book Now →
              </Link>
              <a href="tel:+918745945682" className="btn btn-ghost font-sans">
                <Phone className="w-4 h-4" />
                Call Mechanic
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
