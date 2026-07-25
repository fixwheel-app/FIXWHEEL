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

export default function GurgaonClientPage() {
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
    <div className={`gurgaon-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .gurgaon-scope {
          --bg:#17181A;
          --bg-soft:#1E2022;
          --paper:#F3EEE3;
          --paper-dim:#E7E0D0;
          --ink:#EDEAE2;
          --ink-dim:#6B6E72;
          --ink-dark:#17181A;
          --accent:#2563eb;
          --accent-dim:#1d4ed8;
          --stamp:#FFC145;
          --steel:#5C7A93;
          --line:rgba(255,255,255,0.12);
          --line-paper:#D8CFB8;
          --radius:2px;

          background: var(--paper);
          color: var(--ink-dark);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        .gurgaon-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .gurgaon-scope img { max-width: 100%; display: block; }
        .gurgaon-scope a { color: inherit; text-decoration: none; }
        .gurgaon-scope ul { list-style: none; }
        .gurgaon-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .gurgaon-scope h1, .gurgaon-scope h2, .gurgaon-scope h3, .gurgaon-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .gurgaon-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .gurgaon-scope .eyebrow {
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
        .gurgaon-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .gurgaon-scope .btn {
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
        .gurgaon-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .gurgaon-scope .btn-primary:hover { background: #3b82f6; transform: translateY(-2px); }
        .gurgaon-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: var(--paper); }
        .gurgaon-scope .btn-ghost:hover { border-color: var(--paper); }
        .gurgaon-scope .btn-dark { background: var(--ink-dark); color: var(--paper); }
        .gurgaon-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .gurgaon-scope .hero {
          position: relative;
          padding: 96px 0 60px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .gurgaon-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .gurgaon-scope .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .gurgaon-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: var(--paper); }
        .gurgaon-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .gurgaon-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 520px; margin-bottom: 32px; }
        .gurgaon-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 44px; flex-wrap: wrap; }
        .gurgaon-scope .stat-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .gurgaon-scope .stat-row .stat { font-family: var(--font-jetbrains); }
        .gurgaon-scope .stat b { display: block; font-size: 22px; color: var(--paper); }
        .gurgaon-scope .stat span { font-size: 11px; color: #A7A9AC; letter-spacing: 0.06em; text-transform: uppercase; }

        /* ticket mock */
        .gurgaon-scope .ticket {
          background: var(--paper);
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .gurgaon-scope .ticket::before, .gurgaon-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: var(--bg);
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .gurgaon-scope .ticket::before { left: -11px; }
        .gurgaon-scope .ticket::after { right: -11px; }
        .gurgaon-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed var(--line-paper);
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .gurgaon-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .gurgaon-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .gurgaon-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .gurgaon-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .gurgaon-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .gurgaon-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .gurgaon-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed var(--line-paper); padding-top: 14px;
        }
        .gurgaon-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .gurgaon-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        /* ===== SECTION GENERIC ===== */
        .gurgaon-scope section { padding: 88px 0; border-bottom: 1px solid var(--line-paper); background: var(--paper); color: var(--ink-dark); }
        .gurgaon-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .gurgaon-scope .section-head h2 { font-size: 34px; color: var(--ink-dark); }
        .gurgaon-scope .section-head p { color: #5A5D62; margin-top: 14px; font-size: 15.5px; }
        .gurgaon-scope .section-alt { background: var(--paper-dim); }

        /* ===== AREAS COVERED ===== */
        .gurgaon-scope .area-info-box {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .gurgaon-scope .area-info-box h3 {
          font-size: 22px;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .gurgaon-scope .area-info-box p {
          color: var(--ink-dim);
          font-size: 16px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .gurgaon-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .gurgaon-scope .area-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          color: var(--paper);
          background: var(--bg);
          transition: border-color .15s ease, color .15s ease, background-color .15s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .gurgaon-scope .area-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-soft);
        }

        /* ===== WHY CARDS ===== */
        .gurgaon-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line);}
        .gurgaon-scope .why-card { background: var(--bg); padding: 32px 26px; }
        .gurgaon-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 18px; display: block;}
        .gurgaon-scope .why-card h3 { font-size: 18px; color: var(--paper); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
        .gurgaon-scope .why-card p { font-size: 14px; color: rgba(255, 255, 255, 0.7); }

        /* ===== SERVICES ===== */
        .gurgaon-scope .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .gurgaon-scope .svc-card {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          padding: 26px;
          border-radius: 4px;
          transition: border-color .15s ease, transform .15s ease;
          position: relative;
        }
        .gurgaon-scope .svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .gurgaon-scope .svc-tag { font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: 0.08em; color: var(--stamp); margin-bottom: 12px; display: inline-block;}
        .gurgaon-scope .svc-card h3 { font-size: 17px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 10px;}
        .gurgaon-scope .svc-card p { font-size: 13.5px; color: rgba(255, 255, 255, 0.7); margin-bottom: 16px; min-height: 58px;}
        .gurgaon-scope .svc-card .go { font-family: var(--font-jetbrains); font-size: 12px; color: var(--accent); font-weight: 700;}
        .gurgaon-scope .svc-price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--paper); margin-bottom: 12px; }
        .gurgaon-scope .svc-price span { font-size: 11px; font-weight: 400; color: rgba(255, 255, 255, 0.5); letter-spacing: 0.04em; }
        .gurgaon-scope .svc-note { margin-top: 26px; font-size: 13.5px; color: var(--ink-dark);}
        .gurgaon-scope .svc-note a { color: var(--accent); font-weight: 600; }

        /* vehicle pills */
        .gurgaon-scope .pill-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;}
        .gurgaon-scope .pill {
          font-family: var(--font-jetbrains); font-size: 13px;
          border: 1px solid var(--line-paper); padding: 9px 16px; border-radius: 30px; color: var(--ink-dark);
          background: #FFFFFF;
        }

        /* brands */
        .gurgaon-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .gurgaon-scope .brand-chip {
          display: flex; align-items: center; gap: 10px;
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 10px 16px; border-radius: 30px;
          font-size: 13.5px; color: var(--ink-dark);
        }
        .gurgaon-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%;}

        /* ===== HOW IT WORKS ===== */
        .gurgaon-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; counter-reset: step;}
        .gurgaon-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line-paper);}
        .gurgaon-scope .step .n { font-family: var(--font-jetbrains); font-size: 38px; color: var(--accent); display: block; margin-bottom: 14px; font-weight: 700;}
        .gurgaon-scope .step h3 { font-size: 16px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 8px;}
        .gurgaon-scope .step p { font-size: 13.5px; color: #3C3D40; }

        /* ===== TESTIMONIALS ===== */
        .gurgaon-scope .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
        .gurgaon-scope .review {
          background: #FFFFFF; color: var(--ink-dark);
          padding: 26px; border-radius: 4px; border: 1px solid var(--line-paper);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .gurgaon-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px;}
        .gurgaon-scope .review p { font-size: 14.5px; margin-bottom: 18px; color: #3C3D40; }
        .gurgaon-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b6455;}

        /* ===== PARTNER CTA ===== */
        .gurgaon-scope .partner {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center;
        }
        .gurgaon-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px;}
        .gurgaon-scope .partner li { font-size: 14.5px; color: var(--ink-dark); display: flex; gap: 10px;}
        .gurgaon-scope .partner li::before { content: "—"; color: var(--accent); }
        .gurgaon-scope .partner-box {
          background: var(--bg-soft); border: 1px solid rgba(255, 255, 255, 0.15); padding: 34px; border-radius: 4px;
        }

        /* ===== FAQ ===== */
        .gurgaon-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .gurgaon-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer; font-size: 16px; color: var(--ink-dark); font-weight: 500;
        }
        .gurgaon-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease;}
        .gurgaon-scope .faq-item.open .plus { transform: rotate(45deg); }
        .gurgaon-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .gurgaon-scope .faq-item.open .faq-a { max-height: 200px; }
        .gurgaon-scope .faq-a p { padding-bottom: 22px; color: #3C3D40; font-size: 14.5px; max-width: 760px; }

        /* ===== CONTACT ===== */
        .gurgaon-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .gurgaon-scope .contact-list { display: flex; flex-direction: column; gap: 22px; margin-top: 20px;}
        .gurgaon-scope .contact-item { display: flex; gap: 16px; align-items: flex-start;}
        .gurgaon-scope .contact-item .ic { width: 38px; height: 38px; border: 1px solid var(--line-paper); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--accent); flex-shrink: 0;}
        .gurgaon-scope .contact-item b { display: block; color: var(--ink-dark); font-size: 15px; margin-bottom: 2px;}
        .gurgaon-scope .contact-item span { color: #5C5E62; font-size: 13.5px;}

        /* ===== FINAL CTA ===== */
        .gurgaon-scope .final-cta {
          text-align: center; padding: 90px 0;
          background:
            linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .gurgaon-scope .final-cta h2 { font-size: 38px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px;}
        .gurgaon-scope .final-cta p { color: #3C3D40; margin-bottom: 32px;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .gurgaon-scope .hero-grid { grid-template-columns: 1fr; }
          .gurgaon-scope .hero h1 { font-size: 38px; }
          .gurgaon-scope .why-grid { grid-template-columns: repeat(2,1fr); }
          .gurgaon-scope .svc-grid { grid-template-columns: repeat(2,1fr); }
          .gurgaon-scope .steps { grid-template-columns: repeat(2,1fr); }
          .gurgaon-scope .review-grid { grid-template-columns: 1fr; }
          .gurgaon-scope .partner { grid-template-columns: 1fr; }
          .gurgaon-scope .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width:560px){
          .gurgaon-scope .why-grid, .gurgaon-scope .svc-grid, .gurgaon-scope .steps { grid-template-columns: 1fr; }
          .gurgaon-scope .stat-row { gap: 22px; }
          .gurgaon-scope .hero { padding-top: 70px; }
        }

        @media (prefers-reduced-motion: reduce){
          .gurgaon-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Doorstep bike mechanic · Gurgaon</div>
            <h1>Doorstep Bike Repair Service<br /><em>in Gurgaon</em></h1>
            <p className="lead">FixWheel offers doorstep bike repair service in Gurgaon. A verified mechanic will come to your home, office, or anywhere you are stranded to fix your bike or scooter. No need to visit a garage or wait in lines.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic in Gurgaon →</Link>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>
            <div className="stat-row">
              <div className="stat"><b>45 min</b><span>Average arrival time</span></div>
              <div className="stat"><b>473+</b><span>Total vehicles serviced</span></div>
              <div className="stat"><b>4.7★</b><span>Customer rating</span></div>
              <div className="stat"><b>All sectors</b><span>Service area</span></div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket-top">
              <div className="ticket-id">FW-GGN-1042<span>SERVICE DETAILS</span></div>
              <div className="ticket-status">Completed ✓</div>
            </div>
            <div className="ticket-rows">
              <div className="r"><label>Service</label><div>Basic Service</div></div>
              <div className="r"><label>Model</label><div>Honda Activa</div></div>
              <div className="r"><label>Location</label><div>Gurgaon</div></div>
              <div className="r"><label>Mechanic</label><div>Verified ✓</div></div>
              <div className="r"><label>Warranty</label><div>15 days</div></div>
              <div className="r"><label>Response</label><div>29 min</div></div>
            </div>
            <div className="ticket-foot">
              <div className="total"><span>Total paid</span><b>₹550</b></div>
              <div className="mono" style={{ fontSize: "11px", color: "#8a836f" }}>GURUGRAM · NCR</div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>We cover all areas of Gurgaon</h2>
            <p>We dispatch mechanics across all Gurgaon sectors. A mechanic can usually reach you within 45 minutes.</p>
          </div>
          <div className="area-grid">
            <Link href="/gurgaon/dlf-phase-1" className="area-tag">📍 DLF Phase 1</Link>
            <Link href="/gurgaon/dlf-phase-2" className="area-tag">📍 DLF Phase 2</Link>
            <Link href="/gurgaon/dlf-phase-3" className="area-tag">📍 DLF Phase 3</Link>
            <Link href="/gurgaon/dlf-phase-4" className="area-tag">📍 DLF Phase 4</Link>
            <Link href="/gurgaon/dlf-phase-5" className="area-tag">📍 DLF Phase 5</Link>
            <Link href="/gurgaon/sushant-lok" className="area-tag">📍 Sushant Lok</Link>
            <Link href="/gurgaon/golf-course-road" className="area-tag">📍 Golf Course Road</Link>
            <Link href="/gurgaon/sohna-road" className="area-tag">📍 Sohna Road</Link>
            <Link href="/gurgaon/palam-vihar" className="area-tag">📍 Palam Vihar</Link>
            <Link href="/gurgaon/udyog-vihar" className="area-tag">📍 Udyog Vihar</Link>
            <Link href="/gurgaon/dwarka-expressway" className="area-tag">📍 Dwarka Expressway</Link>
            <Link href="/gurgaon/mg-road" className="area-tag">📍 MG Road</Link>
            <Link href="/gurgaon/cyber-city" className="area-tag">📍 Cyber City</Link>
            <Link href="/gurgaon/south-city-1" className="area-tag">📍 South City 1</Link>
            <Link href="/gurgaon/south-city-2" className="area-tag">📍 South City 2</Link>
            <Link href="/gurgaon/nirvana-country" className="area-tag">📍 Nirvana Country</Link>
            <Link href="/gurgaon/sector-14" className="area-tag">📍 Sector 14</Link>
            <Link href="/gurgaon/sector-15" className="area-tag">📍 Sector 15</Link>
            <Link href="/gurgaon/sector-17" className="area-tag">📍 Sector 17</Link>
            <Link href="/gurgaon/sector-23" className="area-tag">📍 Sector 23</Link>
            <Link href="/gurgaon/sector-31" className="area-tag">📍 Sector 31</Link>
            <Link href="/gurgaon/sector-40" className="area-tag">📍 Sector 40</Link>
            <Link href="/gurgaon/sector-45" className="area-tag">📍 Sector 45</Link>
            <Link href="/gurgaon/sector-46" className="area-tag">📍 Sector 46</Link>
            <Link href="/gurgaon/sector-47" className="area-tag">📍 Sector 47</Link>
            <Link href="/gurgaon/sector-49" className="area-tag">📍 Sector 49</Link>
            <Link href="/gurgaon/sector-50" className="area-tag">📍 Sector 50</Link>
            <Link href="/gurgaon/sector-56" className="area-tag">📍 Sector 56</Link>
            <Link href="/gurgaon/sector-57" className="area-tag">📍 Sector 57</Link>
            <Link href="/gurgaon/sector-58" className="area-tag">📍 Sector 58</Link>
            <Link href="/gurgaon/ashok-vihar-phase-3" className="area-tag">📍 Ashok Vihar Phase 3</Link>
            <Link href="/gurgaon/huda-city-centre" className="area-tag">📍 Huda City Centre</Link>
            <Link href="/gurgaon/manesar" className="area-tag">📍 Manesar</Link>
            <Link href="/gurgaon/bhondsi" className="area-tag">📍 Bhondsi</Link>
            <Link href="/gurgaon/badshahpur" className="area-tag">📍 Badshahpur</Link>
            <span className="area-tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', borderColor: 'var(--accent)' }}>📍 + All of Gurgaon covered</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel Gurgaon</div>
            <h2>How we work in Gurgaon</h2>
            <p>Avoid traffic and long waits. Get your bike serviced at home or office without pushing it to a shop.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h3>We come to you</h3>
              <p>Our mechanic will visit your home, office, or any location in Gurgaon. You do not have to move your bike.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h3>Trained mechanics</h3>
              <p>All our mechanics are trained, verified, and background-checked before joining the platform.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h3>Fixed pricing</h3>
              <p>We give you a clear price before we start working. There are no hidden fees or surprise costs.</p>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <h3>Fast arrival</h3>
              <p>Our mechanics are spread across Gurgaon so we can reach you quickly, usually within 45 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services & pricing</div>
            <h2>Bike Repair & Service Packages in Gurgaon</h2>
            <p>We do all services at your doorstep in Gurgaon. Select a service to see the pricing for your bike.</p>
          </div>
          <div className="svc-grid">
            <div className="svc-card">
              <span className="svc-tag mono">[BASIC]</span>
              <h3>Basic Service</h3>
              <p>Brake adjustment, chain lube, spark plug clean, air filter check, electrical check — keeps your daily ride reliable.</p>
              <div className="svc-price">₹550 <span>starting from</span></div>
              <Link href="/services/basic-service" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[OIL]</span>
              <h3>Service with Engine Oil</h3>
              <p>Old oil drained and disposed, fresh OEM-grade oil refilled, oil filter inspection, spark plug check and chain lube.</p>
              <div className="svc-price">₹999 <span>starting from</span></div>
              <Link href="/services/oil-change" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[ENGINE]</span>
              <h3>Engine Repair</h3>
              <p>Full engine diagnosis, fault repair and component inspection, done at your doorstep by a verified mechanic.</p>
              <div className="svc-price">₹4,500 <span>starting from (half engine)</span></div>
              <Link href="/services/engine-repair" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[PUNCTURE]</span>
              <h3>Puncture Repair</h3>
              <p>Flat tyre puncture repair on the spot — wherever you are parked or stranded in Gurugram.</p>
              <div className="svc-price">₹399 <span>starting from</span></div>
              <Link href="/services/tyre-replacement" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[BRAKE]</span>
              <h3>Brake Disc Replacement</h3>
              <p>Brake disc replacement, pad or shoe replacement, cable adjustment, handled right at your doorstep.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/services/brake-repair" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[BATTERY]</span>
              <h3>Battery Replacement</h3>
              <p>Battery testing, jump-start assistance, and full replacement using standard-spec batteries.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/services/battery-replacement" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[JUMPSTART]</span>
              <h3>Jump Start</h3>
              <p>Bike not starting? We come to your location and jump-start your two-wheeler on the spot.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[RUNNING]</span>
              <h3>Running Repair</h3>
              <p>On-the-spot fixes for common breakdown issues so you can get moving again.</p>
              <div className="svc-price">₹399 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[CARB]</span>
              <h3>Carburetor Cleaning</h3>
              <p>Complete carburetor cleaning and tuning to improve fuel efficiency and engine performance.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[OBD]</span>
              <h3>Inspection with OBD Scanner</h3>
              <p>We connect a diagnostic scanner to your bike's system to read fault codes and find engine or electrical issues early.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[CHAIN]</span>
              <h3>Chain Sprocket Replacement</h3>
              <p>Worn chain and sprocket replaced with standard-spec parts for smooth and safe riding.</p>
              <div className="svc-price">₹299 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[PICKUP]</span>
              <h3>Pick and Drop</h3>
              <p>We pick up your bike, service it at a certified facility, and return it to you.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
          </div>
          <p className="svc-note">Exact pricing depends on your bike type and model — select a service above to see your rate, or <Link href="/book">book directly here</Link>.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Vehicle types</div>
            <h2>We service all bikes and scooters</h2>
            <p>We repair all two-wheelers including daily scooters, commuter bikes, and electric vehicles.</p>
          </div>
          <div className="pill-row">
            <span className="pill">🛵 Scooter</span>
            <span className="pill">🏍️ Bike</span>
            <span className="pill">⚡ EV Scooter</span>
            <span className="pill">⚡ EV Bike</span>
            <span className="pill">🏁 Sports Bike</span>
            <span className="pill">🔵 Royal Enfield</span>
            <span className="pill">+ all other types</span>
          </div>
          <div style={{ height: "44px" }}></div>
          <div className="section-head" style={{ marginBottom: "24px" }}>
            <div className="eyebrow">We service all major brands</div>
            <h2 style={{ fontSize: "26px" }}>Serviced in Gurgaon, whatever you ride</h2>
          </div>
          <div className="brand-row">
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=royalenfield.com&sz=64" alt="" />Royal Enfield</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=honda.com&sz=64" alt="" />Honda</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=yamahamotorsports.com&sz=64" alt="" />Yamaha</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=suzukicycles.com&sz=64" alt="" />Suzuki</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=ktm.com&sz=64" alt="" />KTM</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=bajajauto.com&sz=64" alt="" />Bajaj</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=tvsmotor.com&sz=64" alt="" />TVS</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=heromotocorp.com&sz=64" alt="" />Hero</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=vespa.com&sz=64" alt="" />Vespa</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=olaelectric.com&sz=64" alt="" />Ola Electric</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=atherenergy.com&sz=64" alt="" />Ather</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=jawa.in&sz=64" alt="" />Jawa</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=aprilia.com&sz=64" alt="" />Aprilia</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=harley-davidson.com&sz=64" alt="" />Harley-Davidson</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=kawasakimotorcycle.com&sz=64" alt="" />Kawasaki</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=benelli.com&sz=64" alt="" />Benelli</div>
          </div>
        </div>
      </section>

      <section id="how" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>4 steps from booking to a fixed bike</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">01</span>
              <h3>1. Book a slot</h3>
              <p>Pick your service and choose a time on our app or website.</p>
            </div>
            <div className="step">
              <span className="n">02</span>
              <h3>2. Mechanic assigned</h3>
              <p>We assign a verified mechanic near you.</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h3>3. Service at your doorstep</h3>
              <p>The mechanic repairs your bike at your home or office.</p>
            </div>
            <div className="step">
              <span className="n">04</span>
              <h3>4. Pay and rate</h3>
              <p>Pay the fixed price online or cash and rate the mechanic.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>What our customers say</h2>
            <p style={{ marginTop: '10px' }}><b style={{ color: 'var(--accent)', fontSize: '18px' }}>4.7★</b> average rating from <b style={{ color: 'var(--ink-dark)' }}>473+ reviews</b></p>
          </div>
          <div className="review-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Quoted the price before starting, no extra charges added later. Honest service."</p>
              <div className="who">Priya S. — Gurgaon</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Bike broke down near Cyber Hub. Mechanic arrived in 15 minutes and didn't overcharge for the emergency call."</p>
              <div className="who">Rahul Sharma — Gurgaon</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Used them for my Royal Enfield. Genuine parts used and the engine feels noticeably smoother now."</p>
              <div className="who">Vikram Singh — Gurgaon</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic in Gurgaon?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>Join our team of mechanics in Gurgaon. Work on your own schedule, get more customers, and grow your income.</p>
            <ul>
              <li>Flexible working hours</li>
              <li>Easy booking management</li>
              <li>Receive service requests from customers in your area</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>Sign up in a few minutes and start getting service requests in your area.</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs</div>
            <h2>Common questions about bike repair in Gurgaon</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqs[0] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>How long does doorstep bike service take in Gurgaon?<span className="plus">+</span></div>
              <div className="faq-a"><p>Most repairs take 30 to 50 minutes. We tell you the time needed before we start.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[1] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>How much does doorstep bike service cost in Gurgaon?<span className="plus">+</span></div>
              <div className="faq-a"><p>Service starts from ₹550 depending on your bike model. We give you a clear price before starting.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[2] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Which areas do you cover in Gurgaon?<span className="plus">+</span></div>
              <div className="faq-a"><p>We cover all areas and sectors in Gurgaon.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[3] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>Can I book emergency roadside assistance in Gurgaon?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, our roadside assistance is available 24/7 in Gurgaon.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[4] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>Do you service Royal Enfield bikes at home in Gurgaon?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we repair and service all Royal Enfield models at your home.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[5] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(5)}>Is there a warranty on the repair?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we provide a 15-day warranty on our service.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-alt">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>Contact us</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "10px" }}>Have a question? We are available from 8 AM to 8 PM.</p>
            <div className="contact-list">
              <div className="contact-item">
                <div className="ic">☎</div>
                <div><b>+91 87459 45682</b><span>Call us between 8AM and 8PM</span></div>
              </div>
              <div className="contact-item">
                <div className="ic">✉</div>
                <div><b>support@fixwheel.app</b><span>We reply within 2 hours</span></div>
              </div>
              <div className="contact-item">
                <div className="ic">💬</div>
                <div><b>Chat on WhatsApp</b><span>Fastest way to book</span></div>
              </div>
            </div>
          </div>
          <div className="sos-highlight-box" style={{
            background: "rgba(230, 43, 43, 0.05)",
            border: "1px solid var(--accent)",
            padding: "30px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: "-12px",
              right: "20px",
              background: "var(--accent)",
              color: "#17181A",
              fontSize: "10px",
              fontFamily: "var(--font-jetbrains)",
              fontWeight: 700,
              padding: "4px 10px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              borderRadius: "2px",
            }}>
              24/7 EMERGENCY
            </div>
            <h3 style={{ fontSize: "22px", color: "var(--paper)", marginTop: "10px" }}>Gurgaon Roadside Assistance</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px" }}>
              Stranded on the road or have a breakdown in Gurgaon? A mechanic will come to your location with tools to fix your bike or scooter on the spot. Average arrival: 45 minutes.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "10px" }}>
              <Link href="/book" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "12px" }}>
                Request Roadside Assistance →
              </Link>
              <a href="tel:+918745945682" className="btn btn-ghost" style={{ padding: "10px 20px", fontSize: "12px" }}>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h2>Book doorstep bike repair in Gurgaon.</h2>
          <p>Verified mechanic at your home or office, anywhere in Gurugram. Starting ₹550. No garage visit needed.</p>
          <Link href="/book" className="btn btn-dark">Book Your Bike Service →</Link>
        </div>
      </section>
    </div>
  );
}
