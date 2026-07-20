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

export default function GhaziabadClientPage() {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const areas = [
    { name: "Indirapuram", slug: "indirapuram" },
    { name: "Vaishali", slug: "vaishali" },
    { name: "Kaushambi", slug: "kaushambi" },
    { name: "Raj Nagar Extension", slug: "raj-nagar-extension" },
    { name: "Raj Nagar", slug: "raj-nagar" },
    { name: "Vasundhara", slug: "vasundhara" },
    { name: "Crossings Republik", slug: "crossings-republik" },
    { name: "Abhay Khand", slug: "abhay-khand" },
    { name: "Nyay Khand", slug: "nyay-khand" },
    { name: "Shakti Khand", slug: "shakti-khand" },
    { name: "Ahinsa Khand", slug: "ahinsa-khand" },
    { name: "Shipra Suncity", slug: "shipra-suncity" },
    { name: "Govindpuram", slug: "govindpuram" },
    { name: "Loni", slug: "loni" },
    { name: "Mohan Nagar", slug: "mohan-nagar" },
    { name: "Sanjay Nagar", slug: "sanjay-nagar" },
    { name: "Vijay Nagar", slug: "vijay-nagar" },
    { name: "Gandhi Nagar", slug: "gandhi-nagar" },
    { name: "Shastri Nagar", slug: "shastri-nagar" },
    { name: "Nehru Nagar", slug: "nehru-nagar" },
    { name: "Surya Nagar", slug: "surya-nagar" },
    { name: "Dilshad Garden border", slug: "dilshad-garden-border" },
    { name: "NH-24", slug: "nh-24" },
    { name: "GT Road", slug: "gt-road" },
    { name: "Hindon", slug: "hindon" },
    { name: "Dasna", slug: "dasna" }
  ];

  return (
    <div className={`ghaziabad-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .ghaziabad-scope {
          --bg:#17181A;
          --bg-soft:#1E2022;
          --paper:#F3EEE3;
          --paper-dim:#E7E0D0;
          --ink:#EDEAE2;
          --ink-dim:#6B6E72;
          --ink-dark:#17181A;
          --accent:#E62B2B;
          --accent-dim:#b01d1d;
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
        .ghaziabad-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .ghaziabad-scope img { max-width: 100%; display: block; }
        .ghaziabad-scope a { color: inherit; text-decoration: none; }
        .ghaziabad-scope ul { list-style: none; }
        .ghaziabad-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .ghaziabad-scope h1, .ghaziabad-scope h2, .ghaziabad-scope h3, .ghaziabad-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .ghaziabad-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .ghaziabad-scope .eyebrow {
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
        .ghaziabad-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .ghaziabad-scope .btn {
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
        .ghaziabad-scope .btn-primary { background: var(--accent); color: #17181A; }
        .ghaziabad-scope .btn-primary:hover { background: #eb4d4d; transform: translateY(-2px); }
        .ghaziabad-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: var(--paper); }
        .ghaziabad-scope .btn-ghost:hover { border-color: var(--paper); }
        .ghaziabad-scope .btn-dark { background: var(--ink-dark); color: var(--paper); }
        .ghaziabad-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .ghaziabad-scope .hero {
          position: relative;
          padding: 96px 0 60px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .ghaziabad-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .ghaziabad-scope .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .ghaziabad-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: var(--paper); }
        .ghaziabad-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .ghaziabad-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 520px; margin-bottom: 32px; }
        .ghaziabad-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 44px; flex-wrap: wrap; }
        .ghaziabad-scope .stat-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .ghaziabad-scope .stat-row .stat { font-family: var(--font-jetbrains); }
        .ghaziabad-scope .stat b { display: block; font-size: 22px; color: var(--paper); }
        .ghaziabad-scope .stat span { font-size: 11px; color: #A7A9AC; letter-spacing: 0.06em; text-transform: uppercase; }

        /* ticket mock */
        .ghaziabad-scope .ticket {
          background: var(--paper);
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .ghaziabad-scope .ticket::before, .ghaziabad-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: var(--bg);
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .ghaziabad-scope .ticket::before { left: -11px; }
        .ghaziabad-scope .ticket::after { right: -11px; }
        .ghaziabad-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed var(--line-paper);
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .ghaziabad-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .ghaziabad-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .ghaziabad-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .ghaziabad-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .ghaziabad-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .ghaziabad-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .ghaziabad-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed var(--line-paper); padding-top: 14px;
        }
        .ghaziabad-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .ghaziabad-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        /* ===== SECTION GENERIC ===== */
        .ghaziabad-scope section { padding: 88px 0; border-bottom: 1px solid var(--line-paper); background: var(--paper); color: var(--ink-dark); }
        .ghaziabad-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .ghaziabad-scope .section-head h2 { font-size: 34px; color: var(--ink-dark); }
        .ghaziabad-scope .section-head p { color: #5A5D62; margin-top: 14px; font-size: 15.5px; }
        .ghaziabad-scope .section-alt { background: var(--paper-dim); }

        /* ===== AREAS COVERED ===== */
        .ghaziabad-scope .area-info-box {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .ghaziabad-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .ghaziabad-scope .area-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          border: 1px solid var(--line);
          border-radius: 30px;
          color: var(--ink-dim);
          background: var(--bg);
          transition: border-color .15s ease, color .15s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ghaziabad-scope .area-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ===== WHY CARDS ===== */
        .ghaziabad-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line);}
        .ghaziabad-scope .why-card { background: var(--bg); padding: 32px 26px; }
        .ghaziabad-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 18px; display: block;}
        .ghaziabad-scope .why-card h3 { font-size: 18px; color: var(--paper); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
        .ghaziabad-scope .why-card p { font-size: 14px; color: var(--ink-dim); }

        /* ===== SERVICES ===== */
        .ghaziabad-scope .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ghaziabad-scope .svc-card {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          padding: 26px;
          border-radius: 4px;
          transition: border-color .15s ease, transform .15s ease;
          position: relative;
        }
        .ghaziabad-scope .svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .ghaziabad-scope .svc-tag { font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: 0.08em; color: var(--stamp); margin-bottom: 12px; display: inline-block;}
        .ghaziabad-scope .svc-card h3 { font-size: 17px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 10px;}
        .ghaziabad-scope .svc-card p { font-size: 13.5px; color: var(--ink-dim); margin-bottom: 16px; min-height: 58px;}
        .ghaziabad-scope .svc-card .go { font-family: var(--font-jetbrains); font-size: 12px; color: var(--accent); font-weight: 700;}
        .ghaziabad-scope .svc-price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--paper); margin-bottom: 12px; }
        .ghaziabad-scope .svc-price span { font-size: 11px; font-weight: 400; color: var(--ink-dim); letter-spacing: 0.04em; }
        .ghaziabad-scope .svc-note { margin-top: 26px; font-size: 13.5px; color: var(--ink-dim);}
        .ghaziabad-scope .svc-note a { color: var(--accent); font-weight: 600; }

        /* vehicle pills */
        .ghaziabad-scope .pill-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;}
        .ghaziabad-scope .pill {
          font-family: var(--font-jetbrains); font-size: 13px;
          border: 1px solid var(--line); padding: 9px 16px; border-radius: 30px; color: var(--ink-dim);
        }

        /* brands */
        .ghaziabad-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .ghaziabad-scope .brand-chip {
          display: flex; align-items: center; gap: 10px;
          background: var(--bg-soft); border: 1px solid var(--line); padding: 10px 16px; border-radius: 30px;
          font-size: 13.5px;
        }
        .ghaziabad-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%;}

        /* ===== HOW IT WORKS ===== */
        .ghaziabad-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; counter-reset: step;}
        .ghaziabad-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line);}
        .ghaziabad-scope .step .n { font-family: var(--font-jetbrains); font-size: 38px; color: var(--accent); display: block; margin-bottom: 14px; font-weight: 700;}
        .ghaziabad-scope .step h3 { font-size: 16px; text-transform: none; letter-spacing: 0; color: var(--paper); margin-bottom: 8px;}
        .ghaziabad-scope .step p { font-size: 13.5px; color: var(--ink-dim); }

        /* ===== TESTIMONIALS ===== */
        .ghaziabad-scope .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
        .ghaziabad-scope .review {
          background: var(--paper); color: var(--ink-dark);
          padding: 26px; border-radius: 4px;
        }
        .ghaziabad-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px;}
        .ghaziabad-scope .review p { font-size: 14.5px; margin-bottom: 18px; }
        .ghaziabad-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b6455;}

        /* ===== PARTNER CTA ===== */
        .ghaziabad-scope .partner {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center;
        }
        .ghaziabad-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px;}
        .ghaziabad-scope .partner li { font-size: 14.5px; color: var(--ink-dim); display: flex; gap: 10px;}
        .ghaziabad-scope .partner li::before { content: "—"; color: var(--accent); }
        .ghaziabad-scope .partner-box {
          background: var(--bg-soft); border: 1px solid var(--line); padding: 34px; border-radius: 4px;
        }

        /* ===== FAQ ===== */
        .ghaziabad-scope .faq-item { border-bottom: 1px solid var(--line); }
        .ghaziabad-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer; font-size: 16px; color: var(--paper); font-weight: 500;
        }
        .ghaziabad-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease;}
        .ghaziabad-scope .faq-item.open .plus { transform: rotate(45deg); }
        .ghaziabad-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .ghaziabad-scope .faq-item.open .faq-a { max-height: 200px; }
        .ghaziabad-scope .faq-a p { padding-bottom: 22px; color: var(--ink-dim); font-size: 14.5px; max-width: 760px; }

        /* ===== CONTACT ===== */
        .ghaziabad-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .ghaziabad-scope .contact-list { display: flex; flex-direction: column; gap: 22px; margin-top: 20px;}
        .ghaziabad-scope .contact-item { display: flex; gap: 16px; align-items: flex-start;}
        .ghaziabad-scope .contact-item .ic { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--accent); flex-shrink: 0;}
        .ghaziabad-scope .contact-item b { display: block; color: var(--paper); font-size: 15px; margin-bottom: 2px;}
        .ghaziabad-scope .contact-item span { color: var(--ink-dim); font-size: 13.5px;}

        /* ===== FINAL CTA ===== */
        .ghaziabad-scope .final-cta {
          text-align: center; padding: 90px 0;
          background:
            linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .ghaziabad-scope .final-cta h2 { font-size: 38px; color: var(--paper); max-width: 700px; margin: 0 auto 16px;}
        .ghaziabad-scope .final-cta p { color: var(--ink-dim); margin-bottom: 32px;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .ghaziabad-scope .hero-grid { grid-template-columns: 1fr; }
          .ghaziabad-scope .hero h1 { font-size: 38px; }
          .ghaziabad-scope .why-grid { grid-template-columns: repeat(2,1fr); }
          .ghaziabad-scope .svc-grid { grid-template-columns: repeat(2,1fr); }
          .ghaziabad-scope .steps { grid-template-columns: repeat(2,1fr); }
          .ghaziabad-scope .review-grid { grid-template-columns: 1fr; }
          .ghaziabad-scope .partner { grid-template-columns: 1fr; }
          .ghaziabad-scope .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width:560px){
          .ghaziabad-scope .why-grid, .ghaziabad-scope .svc-grid, .ghaziabad-scope .steps { grid-template-columns: 1fr; }
          .ghaziabad-scope .stat-row { gap: 22px; }
          .ghaziabad-scope .hero { padding-top: 70px; }
        }

        @media (prefers-reduced-motion: reduce){
          .ghaziabad-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Bike mechanic at your doorstep · Ghaziabad</div>
            <h1>Doorstep Bike Repair<br /><em>in Ghaziabad</em></h1>
            <p className="lead">FixWheel sends verified mobile mechanics directly to your house driveway, society parking lot, or office basement across Ghaziabad. No more pushing your broken motorcycle to local workshops — we carry the parts and tools to fix it on-site.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic in Ghaziabad →</Link>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>
            <div className="stat-row">
              <div className="stat"><b>45 min</b><span>Average arrival time</span></div>
              <div className="stat"><b>473+</b><span>Total vehicles serviced</span></div>
              <div className="stat"><b>4.7★</b><span>Customer rating</span></div>
              <div className="stat"><b>Ghaziabad NCR</b><span>Service area</span></div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket-top">
              <div className="ticket-id">FW-GZB-0941<span>SERVICE DETAILS</span></div>
              <div className="ticket-status">Completed ✓</div>
            </div>
            <div className="ticket-rows">
              <div className="r"><label>Service</label><div>Basic Service + Oil</div></div>
              <div className="r"><label>Model</label><div>Hero Splendor Plus</div></div>
              <div className="r"><label>Location</label><div>Indirapuram, Ghaziabad</div></div>
              <div className="r"><label>Mechanic</label><div>Verified ✓</div></div>
              <div className="r"><label>Warranty</label><div>15 days</div></div>
              <div className="r"><label>Response</label><div>45 min</div></div>
            </div>
            <div className="ticket-foot">
              <div className="total"><span>Total paid</span><b>₹999</b></div>
              <div className="mono" style={{ fontSize: "11px", color: "#8a836f" }}>GHAZIABAD · NCR</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS COVERED ===== */}
      <section id="areas" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>Where we operate in Ghaziabad</h2>
            <p>We serve all major sectors, residential enclaves, and industrial areas across Ghaziabad. Select your locality below for detailed street coverage.</p>
          </div>
          <div className="area-grid">
            {areas.map((area, idx) => (
              <Link key={idx} href={`/ghaziabad/${area.slug}`} className="area-tag">📍 {area.name}</Link>
            ))}
            <span className="area-tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>📍 + Expanding across Ghaziabad</span>
          </div>
        </div>
      </section>

      {/* ===== WHY FIXWHEEL ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel Ghaziabad</div>
            <h2>Professional service right in your driveway</h2>
            <p>From Indirapuram enclaves to old GT Road stretches, our mechanics coordinate directly to service your two-wheeler while you relax at home.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h3>On-site doorstep servicing</h3>
              <p>We perform all servicing, oil changes, and repairs directly in your parking area, driveway, or office basement.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h3>Verified, trained mechanics</h3>
              <p>Every technician is background-checked, trained, and accountable, giving you complete safety and quality mechanical work.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h3>Transparent itemized billing</h3>
              <p>No surprise bills or hidden margins. You review and approve the exact quote before the service begins.</p>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <h3>15-day service guarantee</h3>
              <p>All doorstep work and mechanical tuning are backed by our standard 15-day labor warranty for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES & PRICING ===== */}
      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services & pricing</div>
            <h2>Two Wheeler Service & Repair in Ghaziabad</h2>
            <p>Flat-rate doorstep repairs across all Ghaziabad sectors. Select any service to explore specialized pricing details.</p>
          </div>
          <div className="svc-grid">
            <div className="svc-card">
              <span className="svc-tag mono">[BASIC]</span>
              <h3>Basic Service</h3>
              <p>Brake adjustment, chain lubrication, air filter check, spark plug cleaning, and general electric checkups.</p>
              <div className="svc-price">₹499 <span>starting from</span></div>
              <Link href="/services/basic-service" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[OIL]</span>
              <h3>Engine Oil Change</h3>
              <p>Complete oil drain, OEM-grade refill, oil filter check, spark plug inspection and chain lubrication.</p>
              <div className="svc-price">₹999 <span>starting from</span></div>
              <Link href="/services/oil-change" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[ENGINE]</span>
              <h3>Engine Repair</h3>
              <p>Engine diagnosis, fault identification and component-level repair — all done at your doorstep by a verified mechanic.</p>
              <div className="svc-price">₹4,500 <span>starting from (half engine)</span></div>
              <Link href="/services/engine-repair" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[PUNCTURE]</span>
              <h3>Puncture Repair</h3>
              <p>Flat tyre fixed on the spot — whether you are parked at home or stranded roadside in Ghaziabad.</p>
              <div className="svc-price">₹399 <span>starting from</span></div>
              <Link href="/services/tyre-replacement" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[BRAKE]</span>
              <h3>Brake Disc Replacement</h3>
              <p>Disc, pad, or shoe replacement and brake cable adjustment — handled at your location.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/services/brake-repair" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[BATTERY]</span>
              <h3>Battery Replacement</h3>
              <p>Battery testing, jump-start, and full replacement using standard-spec batteries at your doorstep.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/services/battery-replacement" className="go">View pricing →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[JUMPSTART]</span>
              <h3>Jump Start</h3>
              <p>Bike won't start? A mechanic reaches your location and gets your two-wheeler running again.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[RUNNING]</span>
              <h3>Running Repair</h3>
              <p>Quick on-location fixes for common two-wheeler breakdowns so you can get moving again.</p>
              <div className="svc-price">₹399 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[CARB]</span>
              <h3>Carburetor Cleaning</h3>
              <p>Full carburetor disassembly, cleaning, and re-tuning for better fuel efficiency and throttle response.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[OBD]</span>
              <h3>OBD Scanner Inspection</h3>
              <p>A diagnostic scanner is connected to your bike to read fault codes and pinpoint engine or electrical issues.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[CHAIN]</span>
              <h3>Chain Sprocket Replacement</h3>
              <p>Worn chain and sprocket replaced with standard-spec parts to restore smooth power transfer.</p>
              <div className="svc-price">₹299 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
            <div className="svc-card">
              <span className="svc-tag mono">[PICKUP]</span>
              <h3>Pick and Drop</h3>
              <p>We collect your bike from your location, get it serviced, and deliver it back — you stay put.</p>
              <div className="svc-price">₹199 <span>starting from</span></div>
              <Link href="/book" className="go">Book now →</Link>
            </div>
          </div>
          <p className="svc-note">Pricing depends on your bike model and cc — select a service above to check, or <Link href="/book">book directly here</Link>.</p>
        </div>
      </section>

      {/* ===== VEHICLE TYPES & BRANDS ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Vehicle types</div>
            <h2>Every two-wheeler, serviced at your door</h2>
            <p>From daily scooters and commuter bikes to sports motorcycles and EVs — our mechanics handle them all.</p>
          </div>
          <div className="pill-row">
            <span className="pill">🛵 Scooter</span>
            <span className="pill">🏍️ Commuter Bike</span>
            <span className="pill">⚡ EV Scooter</span>
            <span className="pill">⚡ EV Bike</span>
            <span className="pill">🏁 Sports Bike</span>
            <span className="pill">🔵 Royal Enfield</span>
            <span className="pill">🚲 Moped</span>
            <span className="pill">+ all other types</span>
          </div>
          <div style={{ height: "44px" }}></div>
          <div className="section-head" style={{ marginBottom: "24px" }}>
            <div className="eyebrow">We service all major brands</div>
            <h2 style={{ fontSize: "26px" }}>Any brand, any model — Ghaziabad doorstep</h2>
          </div>
          <div className="brand-row">
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=honda.com&sz=64" alt="" />Honda</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=heromotocorp.com&sz=64" alt="" />Hero</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=bajajauto.com&sz=64" alt="" />Bajaj</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=tvsmotor.com&sz=64" alt="" />TVS</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=royalenfield.com&sz=64" alt="" />Royal Enfield</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=yamahamotorsports.com&sz=64" alt="" />Yamaha</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=suzukicycles.com&sz=64" alt="" />Suzuki</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=ktm.com&sz=64" alt="" />KTM</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=olaelectric.com&sz=64" alt="" />Ola Electric</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=atherenergy.com&sz=64" alt="" />Ather</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=vespa.com&sz=64" alt="" />Vespa</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=jawa.in&sz=64" alt="" />Jawa</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=aprilia.com&sz=64" alt="" />Aprilia</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=harley-davidson.com&sz=64" alt="" />Harley-Davidson</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=kawasakimotorcycle.com&sz=64" alt="" />Kawasaki</div>
            <div className="brand-chip"><img src="https://www.google.com/s2/favicons?domain=benelli.com&sz=64" alt="" />Benelli</div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>Book to fixed — 4 simple steps</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">01</span>
              <h3>1. Pick a service</h3>
              <p>Select what your bike needs and pick a time slot on our app or website.</p>
            </div>
            <div className="step">
              <span className="n">02</span>
              <h3>2. Mechanic dispatched</h3>
              <p>A verified mechanic near your location in Ghaziabad is assigned and heads to you.</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h3>3. Repaired on-site</h3>
              <p>Your bike is fixed right where it is parked — home, office, or society parking.</p>
            </div>
            <div className="step">
              <span className="n">04</span>
              <h3>4. Pay and rate</h3>
              <p>Pay the quoted amount via UPI, card, or cash, then rate the mechanic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>From Ghaziabad riders</h2>
            <p style={{ marginTop: '10px' }}><b style={{ color: 'var(--paper)', fontSize: '18px' }}>4.7★</b> average rating from <b style={{ color: 'var(--paper)' }}>473+ reviews</b></p>
          </div>
          <div className="review-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Excellent experience in Indirapuram. The mechanic coordinated with my high-rise apartment security and did the brake disc change in the basement. Extremely convenient."</p>
              <div className="who">Sanjay P. — Indirapuram</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"My Scooty had a flat tyre near GT Road. FixWheel dispatched a mechanic who reached in 25 minutes, did a puncture patch, and got me moving again. Genuine savior."</p>
              <div className="who">Garima S. — Vaishali</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"No hidden margins, no pushy sales. Replaced my engine oil and tuned the carburetor in my apartment parking in Raj Nagar. Will use again."</p>
              <div className="who">Sameer M. — Raj Nagar Extension</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER CTA ===== */}
      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic in Ghaziabad?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>Join the FixWheel network and receive bookings from riders in Ghaziabad. Set your own hours and manage everything from your phone.</p>
            <ul>
              <li>Set your own working hours</li>
              <li>Manage bookings from your phone</li>
              <li>Receive service requests from nearby customers</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>Register in a few minutes and start receiving service requests in Ghaziabad.</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs</div>
            <h2>Common questions about bike repair in Ghaziabad</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqs[0] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>How quickly can a mechanic reach me in Ghaziabad?<span className="plus">+</span></div>
              <div className="faq-a"><p>In most Ghaziabad sectors and residential blocks, our mechanics arrive within 45 minutes of booking confirmation.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[1] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>What does doorstep bike repair cost in Ghaziabad?<span className="plus">+</span></div>
              <div className="faq-a"><p>Basic service starts from ₹499 depending on your bike model. We confirm the exact price before starting any work.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[2] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Which areas in Ghaziabad does FixWheel cover?<span className="plus">+</span></div>
              <div className="faq-a"><p>We cover all major locations including Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar Extension, Sanjay Nagar, and Crossings Republik.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[3] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>Do you offer emergency roadside help in Ghaziabad?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we dispatch mechanics for roadside breakdowns across our Ghaziabad service area, including NH-24 and GT Road. Available 24/7.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[4] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>Is there a warranty on the repair?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, all repairs come with a 15-day labor warranty. If anything goes wrong with the same issue, we send a mechanic back at no extra charge.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT + SOS ===== */}
      <section id="contact" className="section-alt">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>Get in touch</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "10px" }}>Call or email us. We respond within 2 hours during business hours (8 AM – 8 PM).</p>
            <div className="contact-list">
              <div className="contact-item">
                <div className="ic">☎</div>
                <div><b>+91 87459 45682</b><span>Call us between 8 AM and 8 PM</span></div>
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
            <h3 style={{ fontSize: "22px", color: "var(--paper)", marginTop: "10px" }}>Ghaziabad Roadside Assistance</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px" }}>
              Stranded on NH-24, GT Road, or near Hindon River? A mechanic will come to your exact location with tools to fix the issue on the spot. Average arrival: 45 minutes.
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

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h2>Book doorstep bike repair in Ghaziabad.</h2>
          <p>Verified mechanic at your home or office across Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar & all Ghaziabad areas. Starting ₹499.</p>
          <Link href="/book" className="btn btn-dark">Book Your Bike Service →</Link>
        </div>
      </section>
    </div>
  );
}
