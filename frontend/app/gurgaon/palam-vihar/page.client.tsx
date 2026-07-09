"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export default function PalamViharClientPage() {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true, // First one open by default
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className={`palam-vihar-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .palam-vihar-scope {
          --bg:#17181A;
          --bg-soft:#1E2022;
          --paper:#F3EEE3;
          --paper-dim:#E7E0D0;
          --ink:#EDEAE2;
          --ink-dim:#A7A9AC;
          --ink-dark:#17181A;
          --accent:#E62B2B;
          --accent-dim:#a81f1f;
          --stamp:#FFC145;
          --live:#38B26A;
          --line:#34373A;
          --line-paper:#D8CFB8;
          --radius:2px;

          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .palam-vihar-scope img { max-width: 100%; display: block; }
        .palam-vihar-scope a { color: inherit; text-decoration: none; }
        .palam-vihar-scope ul { list-style: none; }
        .palam-vihar-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .palam-vihar-scope h1, .palam-vihar-scope h2, .palam-vihar-scope h3, .palam-vihar-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .palam-vihar-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .palam-vihar-scope .eyebrow {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .palam-vihar-scope .eyebrow::before { content:""; width:24px; height:1px; background:var(--accent); }
        .palam-vihar-scope .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius);
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .palam-vihar-scope .btn-primary { background: var(--accent); color: #fff; }
        .palam-vihar-scope .btn-primary:hover { background: #ff3d3d; transform: translateY(-2px); }
        .palam-vihar-scope .btn-ghost { border-color: var(--line); color: var(--ink); }
        .palam-vihar-scope .btn-ghost:hover { border-color: var(--ink-dim); }
        .palam-vihar-scope .btn-dark { background: var(--ink-dark); color: var(--paper); }
        .palam-vihar-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* breadcrumb */
        .palam-vihar-scope .crumb { background: var(--bg-soft); border-bottom: 1px solid var(--line); padding-top: 16px; }
        .palam-vihar-scope .crumb .wrap { display: flex; align-items: center; gap: 8px; padding: 12px 24px; font-family: var(--font-jetbrains); font-size: 11.5px; letter-spacing: 0.04em; color: var(--paper-dim); }
        .palam-vihar-scope .crumb a { color: var(--paper-dim); font-weight: 500; }
        .palam-vihar-scope .crumb a:hover { color: var(--accent); }
        .palam-vihar-scope .crumb .sep { opacity: .6; color: var(--ink-dim); }
        .palam-vihar-scope .crumb .current { color: var(--accent); font-weight: 700; }

        /* ===== HERO ===== */
        .palam-vihar-scope .hero { position: relative; padding: 64px 0 56px; border-bottom: 1px solid var(--line); overflow: hidden; }
        .palam-vihar-scope .hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%); pointer-events: none; }
        .palam-vihar-scope .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; position: relative; z-index: 1; }
        .palam-vihar-scope .hero h1 { font-size: 44px; margin: 0 0 20px; color: var(--paper); }
        .palam-vihar-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .palam-vihar-scope .hero p.lead { font-size: 16.5px; color: var(--ink-dim); max-width: 500px; margin-bottom: 28px; }
        .palam-vihar-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 0; flex-wrap: wrap; }

        /* live dispatch card */
        .palam-vihar-scope .live-card { background: var(--paper); color: var(--ink-dark); border-radius: 6px; padding: 24px 26px 22px; position: relative; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6); }
        .palam-vihar-scope .live-card::before, .palam-vihar-scope .live-card::after { content: ""; position: absolute; width: 22px; height: 22px; background: var(--bg); border-radius: 50%; top: 50%; transform: translateY(-50%); }
        .palam-vihar-scope .live-card::before { left: -11px; }
        .palam-vihar-scope .live-card::after { right: -11px; }
        .palam-vihar-scope .live-top { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--line-paper); padding-bottom: 14px; margin-bottom: 16px; }
        .palam-vihar-scope .live-top .lt-label { font-family: var(--font-jetbrains); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b6455; }
        .palam-vihar-scope .live-dot { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-jetbrains); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--live); }
        .palam-vihar-scope .live-dot::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--live); box-shadow: 0 0 0 0 rgba(56,178,106,.6); animation: palam-vihar-pulse 1.8s infinite; }
        
        @keyframes palam-vihar-pulse {
          0% { box-shadow: 0 0 0 0 rgba(56,178,106,.5); }
          70% { box-shadow: 0 0 0 8px rgba(56,178,106,0); }
          100% { box-shadow: 0 0 0 0 rgba(56,178,106,0); }
        }

        .palam-vihar-scope .mech-row { display: flex; gap: 14px; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--line-paper); }
        .palam-vihar-scope .mech-row:last-of-type { border-bottom: none; }
        .palam-vihar-scope .mech-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--ink-dark); color: var(--paper); display: flex; align-items: center; justify-content: center; font-family: var(--font-oswald); font-weight: 600; font-size: 14px; flex-shrink: 0; }
        .palam-vihar-scope .mech-info b { display: block; font-size: 14px; }
        .palam-vihar-scope .mech-info span { font-size: 11.5px; color: #8a836f; font-family: var(--font-jetbrains); }
        .palam-vihar-scope .mech-eta { margin-left: auto; text-align: right; font-family: var(--font-jetbrains); font-size: 12px; font-weight: 700; color: var(--accent-dim); }
        .palam-vihar-scope .mech-eta span { display: block; font-size: 10px; color: #8a836f; font-weight: 400; text-transform: uppercase; }

        .palam-vihar-scope section { padding: 76px 0; border-bottom: 1px solid var(--line); }
        .palam-vihar-scope .section-head { max-width: 640px; margin-bottom: 40px; }
        .palam-vihar-scope .section-head h2 { font-size: 30px; color: var(--paper); }
        .palam-vihar-scope .section-head p { color: var(--ink-dim); margin-top: 14px; font-size: 15px; }
        .palam-vihar-scope .section-alt { background: var(--bg-soft); }

        /* local trust strip */
        .palam-vihar-scope .trust-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .palam-vihar-scope .trust-cell { background: var(--bg); padding: 26px 22px; }
        .palam-vihar-scope .trust-cell b { display: block; font-family: var(--font-jetbrains); font-size: 26px; color: var(--paper); margin-bottom: 4px; }
        .palam-vihar-scope .trust-cell span { font-size: 11.5px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-jetbrains); }

        /* streets/societies list */
        .palam-vihar-scope .street-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .palam-vihar-scope .street-cell { background: var(--bg); padding: 18px 18px; font-family: var(--font-jetbrains); font-size: 13px; display: flex; align-items: center; gap: 10px; }
        .palam-vihar-scope .street-cell .pin { color: var(--accent); font-size: 11px; }
        .palam-vihar-scope .street-note { margin-top: 20px; font-size: 13.5px; color: var(--ink-dim); }
        .palam-vihar-scope .street-note a { color: var(--accent); font-weight: 600; }

        /* top services */
        .palam-vihar-scope .top-svc { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .palam-vihar-scope .top-svc-card { background: var(--bg-soft); border: 1px solid var(--line); padding: 22px; border-radius: 4px; transition: border-color .15s ease, transform .15s ease; }
        .palam-vihar-scope .top-svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .palam-vihar-scope .top-svc-card .rank { font-family: var(--font-jetbrains); font-size: 10.5px; color: var(--stamp); letter-spacing: 0.08em; margin-bottom: 10px; display: block; }
        .palam-vihar-scope .top-svc-card h3 { font-size: 15.5px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 8px; }
        .palam-vihar-scope .top-svc-card p { font-size: 13px; color: var(--ink-dim); margin-bottom: 14px; min-height: 40px; }
        .palam-vihar-scope .top-svc-card .go { font-family: var(--font-jetbrains); font-size: 11.5px; color: var(--accent); font-weight: 700; }
        .palam-vihar-scope .catalog-link { margin-top: 24px; font-size: 14px; color: var(--ink-dim); }
        .palam-vihar-scope .catalog-link a { color: var(--accent); font-weight: 600; }

        /* local mechanic mini-cards */
        .palam-vihar-scope .mech-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .palam-vihar-scope .mech-card { background: var(--bg); border: 1px solid var(--line); padding: 24px; border-radius: 4px; display: flex; gap: 14px; align-items: flex-start; }
        .palam-vihar-scope .mech-card .av { width: 44px; height: 44px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-oswald); font-weight: 600; flex-shrink: 0; }
        .palam-vihar-scope .mech-card h3 { font-size: 15.5px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 4px; }
        .palam-vihar-scope .mech-card .role { font-family: var(--font-jetbrains); font-size: 11px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; display: block; }
        .palam-vihar-scope .mech-card p { font-size: 13px; color: var(--ink-dim); }

        /* ===== WHY CARDS ===== */
        .palam-vihar-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
        .palam-vihar-scope .why-card { background: var(--bg); padding: 28px 24px; }
        .palam-vihar-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 16px; display: block; }
        .palam-vihar-scope .why-card h3 { font-size: 16.5px; color: var(--paper); margin-bottom: 8px; text-transform: none; letter-spacing: 0; }
        .palam-vihar-scope .why-card p { font-size: 13.5px; color: var(--ink-dim); }

        /* ===== HOW IT WORKS ===== */
        .palam-vihar-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .palam-vihar-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line); }
        .palam-vihar-scope .step .n { font-family: var(--font-jetbrains); font-size: 34px; color: var(--accent); display: block; margin-bottom: 12px; font-weight: 700; }
        .palam-vihar-scope .step h3 { font-size: 15px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 6px; }
        .palam-vihar-scope .step p { font-size: 13px; color: var(--ink-dim); }

        /* ===== BRANDS ===== */
        .palam-vihar-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .palam-vihar-scope .brand-chip { display: flex; align-items: center; gap: 10px; background: var(--bg-soft); border: 1px solid var(--line); padding: 10px 16px; border-radius: 30px; font-size: 13.5px; }
        .palam-vihar-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%; }

        /* ===== PARTNER ===== */
        .palam-vihar-scope .partner { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .palam-vihar-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .palam-vihar-scope .partner li { font-size: 14.5px; color: var(--ink-dim); display: flex; gap: 10px; }
        .palam-vihar-scope .partner li::before { content: "—"; color: var(--accent); }
        .palam-vihar-scope .partner-box { background: var(--bg-soft); border: 1px solid var(--line); padding: 34px; border-radius: 4px; }

        .palam-vihar-scope .review-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .palam-vihar-scope .review { background: var(--paper); color: var(--ink-dark); padding: 24px; border-radius: 4px; }
        .palam-vihar-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 12px; letter-spacing: 2px; }
        .palam-vihar-scope .review p { font-size: 14px; margin-bottom: 16px; }
        .palam-vihar-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b6455; }

        .palam-vihar-scope .faq-item { border-bottom: 1px solid var(--line); }
        .palam-vihar-scope .faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15.5px; color: var(--paper); font-weight: 500; }
        .palam-vihar-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease; }
        .palam-vihar-scope .faq-item.open .plus { transform: rotate(45deg); }
        .palam-vihar-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .palam-vihar-scope .faq-item.open .faq-a { max-height: 200px; }
        .palam-vihar-scope .faq-a p { padding-bottom: 20px; color: var(--ink-dim); font-size: 14px; max-width: 760px; }

        /* silo links */
        .palam-vihar-scope .silo { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .palam-vihar-scope .silo a { font-family: var(--font-jetbrains); font-size: 12px; border: 1px solid var(--line); padding: 9px 16px; border-radius: 30px; color: var(--ink-dim); transition: border-color .15s ease, color .15s ease; }
        .palam-vihar-scope .silo a:hover { border-color: var(--accent); color: var(--paper); }
        .palam-vihar-scope .silo a.hub { border-color: var(--accent); color: var(--accent); }

        .palam-vihar-scope .final-cta { text-align: center; padding: 80px 0; background: linear-gradient(180deg, transparent, rgba(230,43,43,0.06)); }
        .palam-vihar-scope .final-cta h2 { font-size: 34px; color: var(--paper); max-width: 700px; margin: 0 auto 16px; }
        .palam-vihar-scope .final-cta p { color: var(--ink-dim); margin-bottom: 28px; }

        @media (max-width: 900px) {
          .palam-vihar-scope .hero-grid { grid-template-columns: 1fr; }
          .palam-vihar-scope .hero h1 { font-size: 34px; }
          .palam-vihar-scope .trust-strip { grid-template-columns: repeat(2, 1fr); }
          .palam-vihar-scope .street-board { grid-template-columns: repeat(2, 1fr); }
          .palam-vihar-scope .top-svc { grid-template-columns: repeat(2, 1fr); }
          .palam-vihar-scope .why-grid { grid-template-columns: repeat(2, 1fr); }
          .palam-vihar-scope .steps { grid-template-columns: repeat(2, 1fr); }
          .palam-vihar-scope .partner { grid-template-columns: 1fr; }
          .palam-vihar-scope .mech-grid { grid-template-columns: 1fr; }
          .palam-vihar-scope .review-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .palam-vihar-scope .trust-strip,
          .palam-vihar-scope .street-board,
          .palam-vihar-scope .top-svc,
          .palam-vihar-scope .why-grid,
          .palam-vihar-scope .steps {
            grid-template-columns: 1fr;
          }
          .palam-vihar-scope .hero { padding-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .palam-vihar-scope * { transition: none !important; scroll-behavior: auto !important; }
          .palam-vihar-scope .live-dot::before { animation: none; }
        }
      ` }} />

      <div className="crumb">
        <div className="wrap">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/gurgaon">Gurgaon</Link>
          <span className="sep">/</span>
          <span className="current">Palam Vihar</span>
        </div>
      </div>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Bike repair service · Palam Vihar</div>
            <h1>Doorstep bike repair,<br />right in <em>Palam Vihar</em>.</h1>
            <p className="lead">A verified, background-checked mechanic comes to your home, society gate, or roadside anywhere in Palam Vihar — Block A to J, the Market, Club Road, or the Extension — with an average arrival time of 45 minutes.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic Now →</Link>
              <a href="#coverage" className="btn btn-ghost">Check my street</a>
            </div>
          </div>
          <div className="live-card">
            <div className="live-top">
              <span className="lt-label">Service Snapshot · Palam Vihar</span>
            </div>
            <div className="mech-row">
              <div className="mech-info"><b>Avg. arrival time</b><span>Standard across Gurgaon</span></div>
              <div className="mech-eta">45 min</div>
            </div>
            <div className="mech-row">
              <div className="mech-info"><b>Mechanics</b><span>Verified & background-checked</span></div>
              <div className="mech-eta">✓</div>
            </div>
            <div className="mech-row">
              <div className="mech-info"><b>Rider rating</b><span>Across all serviced areas</span></div>
              <div className="mech-eta">4.7★</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Palam Vihar</div>
            <h2>Verified doorstep bike repair, at our standard service level</h2>
            <p>We provide doorstep bike repair and servicing across all blocks of Palam Vihar.</p>
          </div>
          <div className="trust-strip">
            <div className="trust-cell"><b>45 min</b><span>Average arrival time</span></div>
            <div className="trust-cell"><b>500+</b><span>Bikes serviced</span></div>
            <div className="trust-cell"><b>4.7★</b><span>Rider rating</span></div>
            <div className="trust-cell"><b>All blocks</b><span>Coverage across Palam Vihar</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel Palam Vihar</div>
            <h2>Built for how Palam Vihar actually rides</h2>
            <p>Narrow society lanes, guarded gates, and a market stretch that's always busy — doorstep service is built to work around all of it.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h3>True doorstep, not drop-off</h3>
              <p>Mechanic comes to your home, society gate, or the market anywhere in Palam Vihar — you never push the bike anywhere.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h3>Verified, background-checked</h3>
              <p>Every mechanic is trained and vetted before being assigned to a job — not a random gig worker showing up at your door.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h3>Price quoted before work starts</h3>
              <p>No "found more issues" surprise bills. You see and approve the price before a single tool comes out.</p>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <h3>Same standard, every visit</h3>
              <p>45-minute average arrival and a 15-day service warranty, applied consistently across Palam Vihar.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>Every block and stretch of Palam Vihar</h2>
            <p>This is the street-level detail we don't repeat on the main Gurgaon page — because it only matters if you actually live or ride here.</p>
          </div>
          <div className="street-board">
            <div className="street-cell"><span className="pin">📍</span>Block A – Block J</div>
            <div className="street-cell"><span className="pin">📍</span>Palam Vihar Market</div>
            <div className="street-cell"><span className="pin">📍</span>Palam Vihar Club Road</div>
            <div className="street-cell"><span className="pin">📍</span>DAV School stretch</div>
            <div className="street-cell"><span className="pin">📍</span>St. Xavier's School Road</div>
            <div className="street-cell"><span className="pin">📍</span>Palam Vihar Extension</div>
            <div className="street-cell"><span className="pin">📍</span>Dwarka-border stretch</div>
            <div className="street-cell"><span className="pin">📍</span>Near Sector 109–113 boundary</div>
            <div className="street-cell"><span className="pin">📍</span>Palam Vihar Metro stretch</div>
          </div>
          <p className="street-note">Don't see your exact street? We still reach it — <Link href="/book">book anyway</Link> and share your location.</p>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Most booked in Palam Vihar</div>
            <h2>What riders here actually book</h2>
            <p>The four services Palam Vihar riders request most. Looking for the full catalog and pricing? It lives on our Gurgaon page.</p>
          </div>
          <div className="top-svc">
            <div className="top-svc-card">
              <span className="rank mono">#1 IN PALAM VIHAR</span>
              <h3>Basic Service</h3>
              <p>Brake, chain, spark plug and electrical check — the default for daily commuter bikes here.</p>
              <Link href="/services/basic-service" className="go">View pricing →</Link>
            </div>
            <div className="top-svc-card">
              <span className="rank mono">#2 IN PALAM VIHAR</span>
              <h3>Engine Oil Change</h3>
              <p>Fresh OEM-grade oil, filter check and chain lube, done at your society gate.</p>
              <Link href="/services/oil-change" className="go">View pricing →</Link>
            </div>
            <div className="top-svc-card">
              <span className="rank mono">#3 IN PALAM VIHAR</span>
              <h3>Tyre Replacement</h3>
              <p>Common request near the Metro stretch and Market, where road cuts are frequent.</p>
              <Link href="/services/tyre-replacement" className="go">View pricing →</Link>
            </div>
            <div className="top-svc-card">
              <span className="rank mono">#4 IN PALAM VIHAR</span>
              <h3>Battery Replacement</h3>
              <p>Testing, jump-start and replacement — frequent for bikes parked in open society lots overnight.</p>
              <Link href="/services/battery-replacement" className="go">View pricing →</Link>
            </div>
          </div>
          <p className="catalog-link">Need something else — engine repair, brakes, wash, or emergency SOS? <Link href="/gurgaon#services">See the full Gurgaon service catalog →</Link></p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Trusted by every major brand</div>
            <h2>Serviced in Palam Vihar, whatever you ride</h2>
            <p>From daily commuter scooters to Royal Enfields, our mechanics work across every major brand.</p>
          </div>
          <div className="brand-row">
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=royalenfield.com&sz=64" alt="Royal Enfield bike repair Palam Vihar" />Royal Enfield</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=honda.com&sz=64" alt="Honda bike repair Palam Vihar" />Honda</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=yamahamotorsports.com&sz=64" alt="Yamaha bike repair Palam Vihar" />Yamaha</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=suzukicycles.com&sz=64" alt="Suzuki bike repair Palam Vihar" />Suzuki</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=ktm.com&sz=64" alt="KTM bike repair Palam Vihar" />KTM</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=bajajauto.com&sz=64" alt="Bajaj bike repair Palam Vihar" />Bajaj</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=tvsmotor.com&sz=64" alt="TVS bike repair Palam Vihar" />TVS</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=heromotocorp.com&sz=64" alt="Hero bike repair Palam Vihar" />Hero</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=vespa.com&sz=64" alt="Vespa bike repair Palam Vihar" />Vespa</div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>Doorstep bike repair in Palam Vihar — 4 steps, no garage visit</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">01</span>
              <h3>Book</h3>
              <p>Pick your service and time slot on the app or by phone — takes under a minute.</p>
            </div>
            <div className="step">
              <span className="n">02</span>
              <h3>Get matched</h3>
              <p>A verified mechanic covering Palam Vihar is assigned and dispatched to you.</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h3>Service done</h3>
              <p>Repair happens right at your location while you carry on with your day.</p>
            </div>
            <div className="step">
              <span className="n">04</span>
              <h3>Pay & rate</h3>
              <p>Pay only the quoted price, then rate the mechanic who serviced your bike.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap partner">
        <div>
          <div className="eyebrow">Join our network</div>
          <h2>Are you a bike mechanic in Palam Vihar?</h2>
          <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>We're building out our mechanic network in Palam Vihar and don't yet have anyone permanently assigned to this locality — which means early partners get first pick of the job requests coming from Block A–J, the Market, Club Road and the Extension.</p>
          <ul>
            <li>Be among the first assigned to Palam Vihar</li>
            <li>Flexible working hours</li>
            <li>Easy booking management from the app</li>
          </ul>
        </div>
        <div className="partner-box">
          <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
          <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>Sign up in a few minutes and start receiving job requests from riders in Palam Vihar.</p>
          <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>What Palam Vihar riders say</h2>
          </div>
          <div className="review-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Scooter wouldn't start one morning. Mechanic came right to Block D and had it running before I left for work."</p>
              <div className="who">Ankit Malhotra — Block D, Palam Vihar</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"He came right up to our society gate near Club Road. Guard let him in, no issues at all."</p>
              <div className="who">Simran Kaur — Palam Vihar Club Road</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Battery died overnight near the Extension. Fixed before I even had my morning tea."</p>
              <div className="who">Deepak Yadav — Palam Vihar Extension</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Price was quoted on WhatsApp before he even left for the market stop. No surprise add-ons."</p>
              <div className="who">Ritu Chawla — Palam Vihar Market</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs — Palam Vihar</div>
            <h2>Questions specific to this locality</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqs[0] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>How do I book a service on FixWheel?<span className="plus">+</span></div>
              <div className="faq-a"><p>You can call us on the contact number listed in the footer below, or simply tap the "Book Now" option on this page to book directly.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[1] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>Does the mechanic come inside my society, or do I bring the bike to the gate?<span className="plus">+</span></div>
              <div className="faq-a"><p>The mechanic comes to wherever your bike is parked — inside your society, at the gate, or on the road — as long as the RWA allows visitor entry. Most Palam Vihar societies do.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[2] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Do you cover Palam Vihar Extension and the Dwarka-border stretch?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes — Extension and the Dwarka-border stretch are within regular coverage, with the same response time as the main blocks.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[3] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>How fast can someone actually reach me here?<span className="plus">+</span></div>
              <div className="faq-a"><p>Average arrival time in Palam Vihar is around 45 minutes — the same standard we maintain across Gurgaon.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[4] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>My exact street isn't on the coverage list — am I still covered?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes. The listed streets are just the most requested ones. Book anyway and share your location — a mechanic will be dispatched.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h2>Bike repair, right where you are in Palam Vihar.</h2>
          <p>Verified, background-checked mechanics. Average arrival 45 minutes.</p>
          <Link href="/book" className="btn btn-dark">Book Bike Repair in Palam Vihar →</Link>
          <div className="silo">
            <Link href="/gurgaon" className="hub">← All of Gurgaon</Link>
            <Link href="/gurgaon/cyber-city">Cyber City</Link>
            <Link href="/gurgaon/dlf-phases">DLF Phase 1–5</Link>
            <Link href="/gurgaon/sohna-road">Sohna Road</Link>
            <Link href="/gurgaon/sushant-lok">Sushant Lok</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
