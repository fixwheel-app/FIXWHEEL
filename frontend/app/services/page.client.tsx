"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ServicesClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const staticServices = [
    {
      name: "Electric Scooter Repair",
      desc: "Doorstep maintenance, battery checkups, and electrical repairs for electric scooters.",
      link: "/services/electric-scooter-repair"
    },
    {
      name: "Scooty Repair",
      desc: "Doorstep servicing, belt replacements, and engine tuning for gearless scooties.",
      link: "/services/scooty-repair"
    },
    {
      name: "Sports Bike Service",
      desc: "Performance tuning, premium oil changes, and diagnostics for sports motorcycles.",
      link: "/services/sports-bike-service"
    },
    {
      name: "Royal Enfield / Bullet Service",
      desc: "Classic bike maintenance, clutch adjustments, and genuine spares for Royal Enfield.",
      link: "/services/royal-enfield-service"
    },
    {
      name: "Commuter Bike Service",
      desc: "Reliable general servicing and oil change packages for daily commuter bikes.",
      link: "/services/commuter-bike-service"
    },
    {
      name: "Premium Bike Service",
      desc: "Advanced diagnostics, brake service, and detailing for high-end superbikes.",
      link: "/services/premium-bike-service"
    }
  ];

  const faqs = [
    {
      q: "How long does doorstep bike service take in Delhi NCR?",
      a: "Most bike repairs and routine servicing are completed in 30–50 minutes at your location in Delhi or Gurugram. Complex engine repairs may take longer — your mechanic will inform you upfront."
    },
    {
      q: "How much does bike service at home cost in Delhi?",
      a: "Doorstep bike service starts from ₹499 depending on your bike model and the type of service. Pricing is always confirmed before any work begins — no hidden charges."
    },
    {
      q: "Do you use genuine parts for bike repair?",
      a: "Yes. We use genuine or OEM-grade parts only. If any part needs replacing, we confirm with you before ordering or fitting it."
    },
    {
      q: "Which areas do you cover for doorstep bike repair in Delhi NCR?",
      a: "We currently serve Delhi (Kapasera, Dwarka, Vasant Kunj, Mahipalpur, Bijwasan, MG Road and nearby areas) and all of Gurugram including DLF, Sushant Lok, Golf Course Road, Palam Vihar, Udyog Vihar and Sohna Road."
    },
    {
      q: "Can I book a Honda Activa service at home in Delhi?",
      a: "Yes — Honda Activa is one of our most-booked scooters. We handle basic service, oil change, tyre repair, battery replacement and more for Activa at your doorstep across Delhi and Gurugram."
    },
    {
      q: "Is there a warranty on the bike repair?",
      a: "Yes. We offer a 15-day labour warranty on all completed services. Parts warranty depends on the part supplier."
    },
    {
      q: "Can I book emergency roadside bike repair in Delhi NCR?",
      a: "Yes — emergency roadside assistance is available 24/7 for bikes stranded anywhere across Delhi and Gurugram. Book via the FixWheel app or call us directly."
    },
    {
      q: "Do you service Royal Enfield bikes at home?",
      a: "Yes. Our mechanics are trained to service Royal Enfield motorcycles including Classic, Bullet, Meteor and Himalayan — at your doorstep in Delhi and Gurugram."
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .services-new-page {
          --ink:#16181B;
          --asphalt:#23262B;
          --steel:#3A3F47;
          --paper:#F4F1EA;
          --paper-dim:#E7E2D6;
          --orange:#FF5A1F;
          --orange-deep:#D8430F;
          --grey:#8A8D91;
          --line: rgba(244,241,234,0.16);
          --line-dark: rgba(22,24,27,0.12);
          --radius: 2px;
          
          background: var(--paper);
          color: var(--ink);
          font-family: 'Work Sans', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .services-new-page h1,
        .services-new-page h2,
        .services-new-page h3 {
          font-family: 'Archivo Black', sans-serif;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .services-new-page .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .services-new-page img,
        .services-new-page svg {
          display: block;
        }

        .services-new-page .wrap {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
        }

        @media (max-width: 640px) {
          .services-new-page .wrap {
            padding: 0 20px;
          }
        }

        .services-new-page :focus-visible {
          outline: 3px solid var(--orange);
          outline-offset: 2px;
        }

        /* ---------- TICKET PERFORATION DIVIDER ---------- */
        .services-new-page .perf {
          position: relative;
          height: 28px;
          background: var(--paper);
        }

        .services-new-page .perf::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          border-top: 2px dashed var(--line-dark);
        }

        .services-new-page .perf-dark::before {
          border-top-color: var(--line);
        }

        .services-new-page .perf-dark {
          background: var(--asphalt);
        }

        .services-new-page .perf::after {
          content: "";
          position: absolute;
          left: -14px; right: -14px; top: -14px;
          height: 28px;
          background-image: radial-gradient(circle 7px, var(--paper) 99%, transparent 100%);
          background-size: 28px 28px;
          background-position: 0 0;
          background-repeat: repeat-x;
        }

        .services-new-page .perf-dark::after {
          background-image: radial-gradient(circle 7px, var(--asphalt) 99%, transparent 100%);
        }

        /* ---------- HERO ---------- */
        .services-new-page .hero {
          background: var(--asphalt);
          color: var(--paper);
          padding: 56px 0 64px;
          position: relative;
          overflow: hidden;
        }

        .services-new-page .hero::before {
          content: "";
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(135deg, rgba(255,90,31,0.05) 0 2px, transparent 2px 14px);
          pointer-events: none;
        }

        .services-new-page .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
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
          background: rgba(255,90,31,0.12);
          border: 1px solid rgba(255,90,31,0.4);
          padding: 6px 10px;
          border-radius: var(--radius);
          margin-bottom: 20px;
        }

        .services-new-page .eyebrow .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--orange);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .services-new-page .hero h1 {
          font-size: clamp(34px, 5.2vw, 56px);
          margin-bottom: 18px;
        }

        .services-new-page .hero h1 em {
          font-style: normal;
          color: var(--orange);
        }

        .services-new-page .hero p.lead {
          font-size: 18px;
          color: #C9CCD1;
          max-width: 480px;
          margin-bottom: 30px;
        }

        .services-new-page .btn-row {
          display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
        }

        .services-new-page .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 22px;
          font-weight: 700;
          font-size: 15px;
          border-radius: var(--radius);
          transition: transform .15s, box-shadow .15s;
        }

        .services-new-page .btn-primary {
          background: var(--orange);
          color: var(--ink);
        }

        .services-new-page .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 var(--orange-deep);
        }

        .services-new-page .btn-ghost {
          border: 1px solid var(--line);
          color: var(--paper);
        }

        .services-new-page .btn-ghost:hover {
          border-color: var(--paper);
        }

        .services-new-page .trust-row {
          display: flex; gap: 22px; margin-top: 34px; flex-wrap: wrap;
          font-size: 13px; color: #9DA1A7;
        }

        .services-new-page .trust-row b {
          color: var(--paper); font-weight: 700;
        }

        /* ---------- SERVICE TICKET CARD ---------- */
        .services-new-page .ticket {
          background: var(--paper);
          color: var(--ink);
          border-radius: var(--radius);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          position: relative;
          transform: rotate(-1.4deg);
        }

        .services-new-page .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          padding: 20px 22px 16px;
          border-bottom: 2px dashed var(--line-dark);
        }

        .services-new-page .ticket-top .tnum {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--grey);
        }

        .services-new-page .ticket-top .stamp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #1F7A3D;
          border: 2px solid #1F7A3D;
          padding: 4px 8px;
          border-radius: var(--radius);
          transform: rotate(8deg);
        }

        .services-new-page .ticket-body {
          padding: 18px 22px 22px;
        }

        .services-new-page .ticket-row {
          display: flex; justify-content: space-between;
          font-size: 14px; padding: 9px 0;
          border-bottom: 1px solid var(--line-dark);
        }

        .services-new-page .ticket-row:last-of-type {
          border-bottom: none;
        }

        .services-new-page .ticket-row .label {
          color: var(--grey);
        }

        .services-new-page .ticket-row .val {
          font-weight: 600; font-family: 'JetBrains Mono', monospace; font-size: 13px;
        }

        .services-new-page .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 14px; padding-top: 14px; border-top: 2px dashed var(--line-dark);
        }

        .services-new-page .ticket-foot .total-label {
          font-size: 12px; color: var(--grey); text-transform: uppercase; letter-spacing: 0.05em;
        }

        .services-new-page .ticket-foot .total-val {
          font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 20px; color: var(--orange-deep);
        }

        /* ---------- SECTION SCAFFOLDING ---------- */
        .services-new-page section {
          padding: 64px 0;
        }

        .services-new-page .section-head {
          margin-bottom: 36px; max-width: 640px;
        }

        .services-new-page .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--orange-deep); margin-bottom: 10px; display: block;
        }

        .services-new-page .section-head h2 {
          font-size: clamp(26px, 3.4vw, 38px);
        }

        .services-new-page .section-head p {
          color: var(--grey); margin-top: 12px; font-size: 16px;
        }

        /* OVERVIEW */
        .services-new-page .overview-grid {
          display: grid; gap: 28px; grid-template-columns: 1fr;
        }

        @media (min-width: 760px) {
          .services-new-page .overview-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }

        .services-new-page .overview-grid p {
          font-size: 16px; color: #3A3F47;
        }

        .services-new-page .spec-box {
          background: var(--ink);
          color: var(--paper);
          border-radius: var(--radius);
          padding: 24px;
        }

        .services-new-page .spec-box .tag {
          color: var(--orange);
        }

        .services-new-page .spec-list {
          list-style: none; margin-top: 14px;
        }

        .services-new-page .spec-list li {
          display: flex; justify-content: space-between;
          font-size: 14px; padding: 9px 0;
          border-bottom: 1px solid var(--line);
        }

        .services-new-page .spec-list li:last-child {
          border-bottom: none;
        }

        .services-new-page .spec-list .v {
          font-family: 'JetBrains Mono', monospace; color: var(--orange);
        }

        /* WHY CHOOSE */
        .services-new-page .why-grid {
          display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .services-new-page .why-card {
          background: var(--paper-dim);
          border-left: 4px solid var(--orange);
          padding: 20px 18px;
          border-radius: var(--radius);
        }

        .services-new-page .why-card .num {
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--orange-deep); display: block; margin-bottom: 8px;
        }

        .services-new-page .why-card h3 {
          font-family: 'Work Sans', sans-serif; font-weight: 700; font-size: 16px; margin-bottom: 6px;
        }

        .services-new-page .why-card p {
          font-size: 14px; color: var(--grey);
        }

        /* HOW IT WORKS */
        .services-new-page .steps {
          display: grid; gap: 0; grid-template-columns: 1fr;
          border: 1px solid var(--line-dark);
          border-radius: var(--radius);
          overflow: hidden;
        }

        @media (min-width: 760px) {
          .services-new-page .steps {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .services-new-page .step {
          padding: 26px 22px;
          border-bottom: 1px solid var(--line-dark);
          position: relative;
        }

        @media (min-width: 760px) {
          .services-new-page .step {
            border-bottom: none; border-right: 1px solid var(--line-dark);
          }
          .services-new-page .step:last-child {
            border-right: none;
          }
        }

        .services-new-page .step:last-child {
          border-bottom: none;
        }

        .services-new-page .step .stepnum {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: var(--orange-deep); font-weight: 700;
          display: block; margin-bottom: 10px;
        }

        .services-new-page .step h3 {
          font-family: 'Work Sans'; font-size: 16px; font-weight: 700; margin-bottom: 6px;
        }

        .services-new-page .step p {
          font-size: 13.5px; color: var(--grey);
        }

        /* BRANDS */
        .services-new-page .brand-tags {
          display: flex; flex-wrap: wrap; gap: 10px;
        }

        .services-new-page .brand-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          border: 1px solid var(--ink);
          padding: 8px 14px;
          border-radius: var(--radius);
          background: var(--paper);
        }

        /* AREAS */
        .services-new-page .area-grid {
          display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); font-size: 14px;
        }

        .services-new-page .area-cities {
          display: grid; gap: 32px; grid-template-columns: 1fr;
        }

        @media (min-width: 760px) {
          .services-new-page .area-cities {
            grid-template-columns: 1fr 1fr;
          }
        }

        .services-new-page .area-item {
          padding: 10px 14px;
          background: var(--paper-dim);
          border-radius: var(--radius);
          display: flex; align-items: center; gap: 8px;
        }

        .services-new-page .area-item::before {
          content: "●"; color: var(--orange); font-size: 10px;
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
          background: var(--ink); color: var(--paper);
          padding: 22px; border-radius: var(--radius);
        }

        .services-new-page .stars {
          color: var(--orange); font-size: 14px; margin-bottom: 10px; letter-spacing: 2px;
        }

        .services-new-page .review-card p {
          font-size: 14.5px; color: #C9CCD1; margin-bottom: 14px;
        }

        .services-new-page .review-meta {
          display: flex; justify-content: space-between; font-size: 12px; color: var(--grey); font-family: 'JetBrains Mono', monospace;
        }

        /* FAQ */
        .services-new-page .faq-item {
          border-bottom: 1px solid var(--line-dark);
        }

        .services-new-page .faq-q {
          width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          background: none; border: none; cursor: pointer;
          padding: 18px 0; text-align: left;
          font-size: 16px; font-weight: 600; color: var(--ink);
          font-family: 'Work Sans', sans-serif;
        }

        .services-new-page .faq-q .icon {
          font-family: 'JetBrains Mono', monospace; color: var(--orange-deep); font-size: 18px; transition: transform .2s;
        }

        .services-new-page .faq-item.open .faq-q .icon {
          transform: rotate(45deg);
        }

        .services-new-page .faq-a {
          max-height: 0; overflow: hidden; transition: max-height .25s ease;
          font-size: 14.5px; color: var(--grey);
        }

        .services-new-page .faq-item.open .faq-a {
          padding-bottom: 18px;
        }

        /* RELATED SERVICES */
        .services-new-page .related-grid {
          display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .services-new-page .related-card {
          border: 1px solid var(--line-dark);
          border-radius: var(--radius);
          padding: 20px;
          transition: border-color .15s, transform .15s;
          background: var(--paper);
        }

        .services-new-page .related-card:hover {
          border-color: var(--orange); transform: translateY(-2px);
        }

        .services-new-page .related-card .icon-mono {
          font-family: 'JetBrains Mono', monospace; color: var(--orange-deep); font-size: 12px; display: block; margin-bottom: 10px;
        }

        .services-new-page .related-card h3 {
          font-family: 'Work Sans'; font-size: 15px; font-weight: 700; margin-bottom: 6px;
        }

        .services-new-page .related-card p {
          font-size: 13px; color: var(--grey);
        }

        /* FINAL CTA */
        .services-new-page .final-cta {
          background: var(--asphalt); color: var(--paper);
          text-align: center; padding: 70px 0;
        }

        .services-new-page .final-cta h2 {
          font-size: clamp(26px, 4vw, 42px); margin-bottom: 14px;
        }

        .services-new-page .final-cta p {
          color: #C9CCD1; margin-bottom: 28px; font-size: 16px;
        }
      ` }} />

      <div className="services-new-page">
        {/* HERO */}
        <header className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow"><span className="dot"></span> Bike mechanic at home — Delhi & Gurugram</div>
              <h1>Doorstep Bike Repair Service in <em>Delhi NCR</em></h1>
              <p className="lead">Verified bike mechanics arrive at your home or office and fix your bike on the spot. No pushing it to a garage, no waiting in queues. Bike service at home, done right.</p>
              <div className="btn-row">
                <Link href="/book" className="btn btn-primary font-sans">Book a Mechanic →</Link>
                <a href="#how" className="btn btn-ghost font-sans">See how it works</a>
              </div>
              <div className="trust-row">
                <span><b>45 min</b> avg. response</span>
                <span><b>500+</b> bikes serviced</span>
                <span><b>4.7★</b> customer rating</span>
              </div>
            </div>

            <div className="ticket font-sans">
              <div className="ticket-top">
                <div>
                  <div className="tnum">JOB #FW-10472</div>
                </div>
                <div className="stamp font-mono">VERIFIED</div>
              </div>
              <div className="ticket-body">
                <div className="ticket-row"><span className="label">Service</span><span className="val">Basic Service</span></div>
                <div className="ticket-row"><span className="label">Model</span><span className="val">Honda Activa</span></div>
                <div className="ticket-row"><span className="label">Mechanic</span><span className="val">Verified ✓</span></div>
                <div className="ticket-row"><span className="label">Location</span><span className="val">At your doorstep</span></div>
                <div className="ticket-row"><span className="label">Warranty</span><span className="val">15 days</span></div>
                <div className="ticket-row"><span className="label">Status</span><span className="val" style={{ color: '#1F7A3D' }}>Completed ✓</span></div>
                <div className="ticket-foot">
                  <span className="total-label">Total paid</span>
                  <span className="total-val font-mono">₹499</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="perf perf-dark"></div>

        {/* OVERVIEW */}
        <section className="bg-[#F4F1EA]">
          <div className="wrap overview-grid">
            <div>
              <span className="tag">What's included</span>
              <h2 style={{ fontSize: '30px', marginBottom: '14px' }}>Home bike service in Delhi NCR — all repairs, one visit</h2>
              <p>Our mechanics carry the tools and genuine-grade parts needed to handle most two-wheeler repairs in a single visit — engine servicing, oil changes, battery checks, tyre work, and brake adjustments — right outside your home, office, or wherever your bike is parked in Delhi or Gurugram.</p>
              <p style={{ marginTop: '14px' }}>Doorstep bike repair means exactly that: you don't drive anywhere, you don't wait in a queue, and you don't hand your bike to someone you've never met. Book a slot, share your location, and a verified bike mechanic comes to you — whether that's your home parking, office basement, or the roadside if you've broken down mid-commute.</p>
              <p style={{ marginTop: '14px' }}>If a part needs replacing, we quote it upfront before any work begins. No hidden charges, no surprise bills.</p>
            </div>
            <div className="spec-box font-sans">
              <span className="tag">Service snapshot</span>
              <ul className="spec-list">
                <li><span>Avg. visit time</span><span className="v">35–50 min</span></li>
                <li><span>Mechanics on call</span><span className="v">40+</span></li>
                <li><span>Coverage</span><span className="v">Delhi & Gurugram</span></li>
                <li><span>Booking</span><span className="v">App / Call</span></li>
                <li><span>Warranty on labour</span><span className="v">15 days</span></li>
                <li><span>Starting price</span><span className="v">₹499</span></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="perf"></div>

        {/* WHY CHOOSE */}
        <section style={{ backgroundColor: 'var(--paper-dim)' }}>
          <div className="wrap">
            <div className="section-head">
              <span className="tag">Why FixWheel</span>
              <h2>Why choose FixWheel for bike repair at home in Delhi NCR</h2>
            </div>
            <div className="why-grid font-sans">
              <div className="why-card"><span className="num">01</span><h3>True doorstep service</h3><p>Mechanic comes to your home, office, or wherever your bike's parked — no pushing it anywhere.</p></div>
              <div className="why-card"><span className="num">02</span><h3>Verified mechanics</h3><p>Background-checked and trained, not random gig workers.</p></div>
              <div className="why-card"><span className="num">03</span><h3>Transparent pricing</h3><p>Quoted before work starts — no inflated "found more issues" bills.</p></div>
              <div className="why-card"><span className="num">04</span><h3>Fast response</h3><p>Our agent reaches your location within 45 minutes.</p></div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-[#F4F1EA]">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">How it works</span>
              <h2>How doorstep bike repair works — 4 steps, no garage visit</h2>
            </div>
            <div className="steps font-sans">
              <div className="step"><span className="stepnum font-mono">STEP 1</span><h3>Book</h3><p>Pick your service and time slot on the app or by phone.</p></div>
              <div className="step"><span className="stepnum font-mono">STEP 2</span><h3>Get matched</h3><p>A verified mechanic near you is assigned and dispatched.</p></div>
              <div className="step"><span className="stepnum font-mono">STEP 3</span><h3>Service done</h3><p>Repair happens at your location while you carry on with your day.</p></div>
              <div className="step"><span className="stepnum font-mono">STEP 4</span><h3>Pay & rate</h3><p>Pay only the quoted price, then rate the mechanic.</p></div>
            </div>
          </div>
        </section>

        <div className="perf"></div>

        {/* SERVICES & PRICING */}
        <section id="pricing" className="bg-[#F4F1EA]">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">Services & pricing</span>
              <h2>Bike repair & service packages — doorstep, Delhi NCR</h2>
              <p>All services are performed at your home or office across Delhi & Gurugram. Pricing varies by bike type and model — click any service to see your exact rate.</p>
            </div>
            <div className="related-grid font-sans">
              <Link href="/services/basic-service" className="related-card">
                <span className="icon-mono">[BASIC]</span>
                <h3>Basic Service</h3>
                <p>Brake adjustment, chain lube, spark plug clean, air filter check, electrical check. Keeps your daily commuter running reliably.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/oil-change" className="related-card">
                <span className="icon-mono">[OIL]</span>
                <h3>Engine Oil Change</h3>
                <p>Old oil drained and disposed, fresh OEM-grade oil refilled, oil filter inspection, spark plug check and chain lubrication.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/engine-repair" className="related-card">
                <span className="icon-mono">[ENGINE]</span>
                <h3>Engine Repair</h3>
                <p>Full engine diagnosis, fault repair and component inspection done at your doorstep by a verified mechanic.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/tyre-replacement" className="related-card">
                <span className="icon-mono">[TYRE]</span>
                <h3>Tyre Replacement</h3>
                <p>Flat tyre repair or full tyre replacement on the spot — wherever you're parked or stranded.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/brake-repair" className="related-card">
                <span className="icon-mono">[BRAKE]</span>
                <h3>Brake Repair</h3>
                <p>Brake pad or shoe replacement, brake cable adjustment, and clutch repair at your doorstep.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/battery-replacement" className="related-card">
                <span className="icon-mono">[BATTERY]</span>
                <h3>Battery Replacement</h3>
                <p>Battery testing, jump-start assistance, and full replacement using quality-grade batteries.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/general-washing" className="related-card">
                <span className="icon-mono">[WASH]</span>
                <h3>General Washing</h3>
                <p>Full bike wash and cleaning at your location — no need to visit a wash station.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/services/comprehensive-service" className="related-card">
                <span className="icon-mono">[FULL]</span>
                <h3>Comprehensive Service</h3>
                <p>Complete top-to-bottom service package — engine, brakes, tyres, electricals, wash and more in one visit.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>View pricing →</span>
              </Link>
              <Link href="/booking" className="related-card" style={{ borderColor: 'var(--orange)', background: 'rgba(255,90,31,0.04)' }}>
                <span className="icon-mono">[SOS]</span>
                <h3>Emergency Roadside Assistance</h3>
                <p>Stuck on the road? We dispatch a mechanic to your exact location across Delhi & Gurugram — available 24/7.</p>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange-deep)', marginTop: '10px', display: 'block' }}>Book emergency help →</span>
              </Link>
            </div>
            <p className="price-note" style={{ marginTop: '22px' }}>Exact pricing depends on your bike type and model — select a service above to see your rate, or <Link href="/book" style={{ color: 'var(--orange-deep)', textDecoration: 'underline' }}>book directly here</Link>.</p>
          </div>
        </section>

        {/* ORIGINAL SERVICE CATEGORIES (Kept as requested) */}
        <section className="bg-black/95 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative flex py-5 items-center mb-12">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-gray-400 font-bold text-xs uppercase tracking-widest font-mono">
                Service Categories
              </span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              {staticServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[2rem] p-6 md:p-8 text-black shadow-2xl relative overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                  
                  <div>
                    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-inner p-2 text-center mb-6">
                      <img src="/logo.png" alt="FixWheel Logo" className="w-6 h-6 object-contain mb-0.5 transform -rotate-12" />
                      <span className="font-black text-[8px] tracking-tighter text-black uppercase leading-tight">
                        <span className="text-accent">Fix</span>Wheel
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-3 leading-tight font-sans">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium font-sans">
                      {service.desc}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-5 mt-auto">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-accent hover:text-red-600 font-bold uppercase tracking-wider text-xs transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VEHICLE TYPES */}
        <section style={{ backgroundColor: 'var(--paper-dim)' }}>
          <div className="wrap">
            <div className="section-head">
              <span className="tag">Vehicle types we service</span>
              <h2>Scooter, bike, EV & sports — we service every two-wheeler type</h2>
              <p>Pricing and packages are tailored to your specific vehicle type — select yours when booking via the FixWheel app.</p>
            </div>
            <div className="brand-tags font-sans">
              <span className="brand-tag">🛵 Scooter</span>
              <span className="brand-tag">🏍️ Bike</span>
              <span className="brand-tag">⚡ EV Scooter</span>
              <span className="brand-tag">⚡ EV Bike</span>
              <span className="brand-tag">🏁 Sports Bike</span>
              <span className="brand-tag">🔵 Royal Enfield</span>
              <span className="brand-tag">+ all other types</span>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" className="bg-[#F4F1EA]">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">Service areas</span>
              <h2>Bike repair at home — Delhi & Gurugram service areas</h2>
              <p>We cover major localities across both cities. Doorstep bike mechanic dispatched to your exact address — home, office, or roadside.</p>
            </div>

            <div className="area-cities font-sans">
              {/* GURUGRAM */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: '700', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--orange-deep)', background: 'var(--paper-dim)', padding: '5px 10px', borderRadius: '2px' }}>Gurugram</span>
                  <span style={{ fontSize: '13px', color: 'var(--grey)' }}>Entire Gurugram covered</span>
                </div>
                <div className="area-grid">
                  <div className="area-item">Palam Vihar</div>
                  <div className="area-item">Ashok Vihar</div>
                  <div className="area-item">Golf Course Road</div>
                  <div className="area-item">Sushant Lok</div>
                  <div className="area-item">Sohna Road</div>
                  <div className="area-item">Udyog Vihar</div>
                  <div className="area-item">DLF Phase 1–5</div>
                  <div className="area-item">Dwarka Expressway</div>
                  <div className="area-item">South City</div>
                  <div className="area-item">Sector 14, 15, 17</div>
                  <div className="area-item">MG Road</div>
                  <div className="area-item">Cyber City</div>
                  <div className="area-item">Sector 57, 58</div>
                  <div className="area-item">Nirvana Country</div>
                  <div className="area-item">+ all Gurugram sectors</div>
                </div>
              </div>

              {/* DELHI */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: '700', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--orange-deep)', background: 'var(--paper-dim)', padding: '5px 10px', borderRadius: '2px' }}>Delhi</span>
                  <span style={{ fontSize: '13px', color: 'var(--grey)' }}>South & South-West Delhi focus</span>
                </div>
                <div className="area-grid">
                  <div className="area-item">Kapasera</div>
                  <div className="area-item">Dwarka</div>
                  <div className="area-item">Vasant Kunj</div>
                  <div className="area-item">MG Road</div>
                  <div className="area-item">Bijwasan</div>
                  <div className="area-item">Mahipalpur</div>
                  <div className="area-item">Rangpuri</div>
                  <div className="area-item">Samalka</div>
                  <div className="area-item">Hari Nagar</div>
                  <div className="area-item">Najafgarh Road</div>
                  <div className="area-item">+ nearby areas</div>
                </div>
              </div>
            </div>

            {/* STORE LOCATION */}
            <div style={{ marginTop: '40px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: '2px', padding: '28px', display: 'grid', gap: '20px', gridTemplateColumns: '1fr' }}>
              <div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', display: 'block', marginBottom: '12px' }}>Our stores</span>
                <h3 style={{ fontSize: '18px', marginBottom: '18px', color: 'var(--paper)' }}>Walk in or call ahead</h3>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                  <div style={{ borderLeft: '3px solid var(--orange)', paddingLeft: '14px' }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Ashok Vihar Phase 3</div>
                    <div style={{ fontSize: '13px', color: '#9DA1A7', marginBottom: '8px' }}>Ashok Vihar Phase 3, Delhi</div>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange)', letterSpacing: '0.05em' }}>Get directions →</a>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--orange)', paddingLeft: '14px' }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Kapashera</div>
                    <div style={{ fontSize: '13px', color: '#9DA1A7', marginBottom: '8px' }}>Kapashera, New Delhi · 110037</div>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--orange)', letterSpacing: '0.05em' }}>Get directions →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="perf perf-dark"></div>

        {/* REVIEWS */}
        <section style={{ backgroundColor: 'var(--asphalt)', color: 'var(--paper)' }}>
          <div className="wrap">
            <div className="section-head">
              <span className="tag" style={{ color: 'var(--orange)' }}>Customer reviews</span>
              <h2 style={{ color: 'var(--paper)' }}>What Delhi & Gurugram riders say about FixWheel</h2>
            </div>
            <div className="review-grid font-sans">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Mechanic came in 20 minutes and fixed my Activa's battery on the spot. Didn't have to go anywhere."</p>
                <div className="review-meta"><span>RAHUL M.</span><span>DWARKA</span></div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Quoted the price before starting, no extra charges added later. Honest service."</p>
                <div className="review-meta"><span>PRIYA S.</span><span>GURUGRAM</span></div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★☆</div>
                <p>"Tyre punctured at 11pm, booked emergency assistance and someone showed up within the hour."</p>
                <div className="review-meta"><span>AMIT K.</span><span>JANAKPURI</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#F4F1EA]">
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <div className="section-head">
              <span className="tag">FAQs</span>
              <h2>Common questions</h2>
            </div>
            <div id="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={cn("faq-item font-sans", isOpen && "open")}>
                    <button 
                      className="faq-q font-sans font-semibold text-black"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      {faq.q} <span className="icon">{isOpen ? "×" : "+"}</span>
                    </button>
                    <div 
                      className="faq-a" 
                      style={{ 
                        maxHeight: isOpen ? '250px' : '0px', 
                        overflow: 'hidden', 
                        transition: 'max-height 0.25s ease' 
                      }}
                    >
                      <p className="font-sans font-medium text-gray-500 pt-1">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta" id="book">
          <div className="wrap">
            <h2>Book doorstep bike repair in Delhi NCR today.</h2>
            <p>Verified mechanic at your home or office. Starting ₹499. No garage visit needed.</p>
            <Link href="/book" className="btn btn-primary font-sans">Book Your Bike Service Now →</Link>
          </div>
        </section>
      </div>
    </>
  );
}
