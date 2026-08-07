"use client";

import { useState } from "react";
import { ArrowRight, Check, Wrench, ShieldCheck, Clock, Award, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ServicesClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const staticServices = [
    {
      name: "Basic Bike Service",
      desc: "Comprehensive 15-point tune-up, brake adjustment, chain lube, spark plug clean, and air filter check.",
      link: "/services/basic-service",
      price: "₹199",
    },
    {
      name: "Engine Oil Change",
      desc: "Complete sludge drain, new sealed OEM engine oil refill, oil filter replacement, and spark plug check.",
      link: "/services/oil-change",
      price: "₹349",
    },
    {
      name: "Electric Scooter Repair",
      desc: "Doorstep EV maintenance, lithium battery diagnostics, controller checks, and drive belt alignment.",
      link: "/services/electric-scooter-repair",
      price: "₹599",
    },
    {
      name: "Scooty Repair",
      desc: "Doorstep CVT variator roller cleaning, clutch shoe degreasing, and engine tuning for gearless scooters.",
      link: "/services/scooty-repair",
      price: "₹199",
    },
    {
      name: "Sports Bike Service",
      desc: "Full-synthetic oil changes, liquid cooling radiator flushes, and track-grade chain alignment.",
      link: "/services/sports-bike-service",
      price: "₹899",
    },
    {
      name: "Royal Enfield / Bullet Service",
      desc: "Classic bike maintenance, tappet valve clearance adjustment, 15W-50 oil swap, and clutch overhauls.",
      link: "/services/royal-enfield-service",
      price: "₹699",
    },
    {
      name: "Commuter Bike Service",
      desc: "Reliable general servicing, mileage tuning, and oil change packages for daily 100cc-160cc bikes.",
      link: "/services/commuter-bike-service",
      price: "₹199",
    },
    {
      name: "Comprehensive Service",
      desc: "Full 24-point bike overhaul including carburetor/FI nozzle cleaning, brake overhaul, and deep lubrication.",
      link: "/services/comprehensive-service",
      price: "₹899",
    },
    {
      name: "Brake Repair & Replacement",
      desc: "Drum brake shoe replacement, disc pad cleaning, hydraulic line bleeding, and CBS sensor checks.",
      link: "/services/brake-repair",
      price: "₹299",
    },
    {
      name: "Battery Replacement",
      desc: "Instant doorstep battery load testing and replacement with fresh Exide & Amaron batteries with warranty.",
      link: "/services/battery-replacement",
      price: "₹1,299",
    },
    {
      name: "General Foam Washing",
      desc: "High-pressure snow foam wash, alloy wheel degreasing, microfiber drying, and anti-rust gloss polish.",
      link: "/services/general-washing",
      price: "₹249",
    },
    {
      name: "Tyre Replacement & Repair",
      desc: "Doorstep tubeless tyre fitting, air valve pin replacement, and precision pressure calibration.",
      link: "/services/tyre-replacement",
      price: "₹1,199",
    },
  ];

  const faqs = [
    {
      q: "How long does doorstep bike service take in Delhi NCR?",
      a: "Most routine servicing and repairs take 25 to 45 minutes. If a major repair requires more time, your mechanic will explain the timeline upfront.",
    },
    {
      q: "How much does bike service at home cost in Delhi NCR?",
      a: "Our doorstep bike service starts at ₹199. The exact price depends on your bike model and service type. We confirm the price before any work begins, so you pay zero hidden fees.",
    },
    {
      q: "Do you use genuine OEM parts for bike repair?",
      a: "Yes. We use only 100% genuine or OEM-grade parts. We always unseal new parts right in front of you and confirm costs before installation.",
    },
    {
      q: "Which areas do you cover for doorstep bike repair in Delhi NCR?",
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
      q: "Can I book emergency roadside bike repair in Delhi NCR?",
      a: "Yes! We provide emergency roadside assistance and breakdown support across Delhi NCR. You can book directly online or call our technician helpline.",
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
        <div style={{ background: "#111214", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingTop: "80px" }}>
          <div className="wrap">
            <nav style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "12px", color: "#A7A9AC", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "#A7A9AC" }}>Home</Link>
              <span style={{ color: "#5C6066" }}>/</span>
              <span style={{ color: "var(--orange)", fontWeight: "700" }}>Services</span>
            </nav>
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
                  <b>45 MIN</b> Arrival
                </span>
                <span>
                  <b>473+</b> Serviced
                </span>
                <span>
                  <b>4.7 ★</b> Rating
                </span>
                <span>
                  <b>15 DAYS</b> Warranty
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
                  <span className="total-val">₹199</span>
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
                  <span className="v">Within 45 Mins</span>
                </li>
                <li>
                  <span>Mechanics Network</span>
                  <span className="v">40+ Certified</span>
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
                  <span className="v">15 Days</span>
                </li>
                <li>
                  <span>Starting Rate</span>
                  <span className="v">₹199</span>
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
              {staticServices.map((service, index) => (
                <Link key={index} href={service.link} className="related-card group">
                  <div>
                    <span className="icon-mono">[{service.name.toUpperCase().slice(0, 8)}]</span>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">Starting</span>
                    <span className="text-base font-mono font-extrabold text-[#e62b2b]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              {/* GURGAON */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded border border-red-200">
                    Gurgaon / Gurugram
                  </span>
                  <span className="text-xs text-slate-500 font-mono">100% Coverage</span>
                </div>
                <div className="area-grid">
                  <div className="area-item">DLF Phase 1–5</div>
                  <div className="area-item">Golf Course Road</div>
                  <div className="area-item">Sushant Lok</div>
                  <div className="area-item">Palam Vihar</div>
                  <div className="area-item">Sohna Road</div>
                  <div className="area-item">Cyber City</div>
                  <div className="area-item">Udyog Vihar</div>
                  <div className="area-item">Dwarka Expressway</div>
                  <div className="area-item">Sector 14, 15, 17, 56</div>
                  <div className="area-item">+ All Gurgaon Sectors</div>
                </div>
              </div>

              {/* DELHI */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded border border-red-200">
                    Delhi City
                  </span>
                  <span className="text-xs text-slate-500 font-mono">South & West Focus</span>
                </div>
                <div className="area-grid">
                  <div className="area-item">Kapashera</div>
                  <div className="area-item">Dwarka (All Sectors)</div>
                  <div className="area-item">Vasant Kunj</div>
                  <div className="area-item">Mahipalpur</div>
                  <div className="area-item">Bijwasan</div>
                  <div className="area-item">Janakpuri</div>
                  <div className="area-item">Samalka</div>
                  <div className="area-item">Uttam Nagar</div>
                  <div className="area-item">Hari Nagar</div>
                  <div className="area-item">+ Nearby Localities</div>
                </div>
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
              Certified mechanics at your home or office parking. Starting at ₹199. Zero visiting fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn btn-primary font-sans">
                Book Now →
              </Link>
              <a href="tel:+919999999999" className="btn btn-ghost font-sans">
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
