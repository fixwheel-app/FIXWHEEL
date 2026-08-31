"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import { getPageVariables, PageVariables, DEFAULT_PAGE_VARIABLES } from "@/lib/pageVariables";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
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

export default function NoidaClientPage() {
  const [pageVars, setPageVars] = useState<PageVariables>(DEFAULT_PAGE_VARIABLES);
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.noida || DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity('noida').then(setStats);
    getPageVariables('noida', 'noida').then(setPageVars);
  }, []);

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
    { name: "Sector 18", slug: "sector-18" },
    { name: "Sector 22", slug: "sector-22" },
    { name: "Sector 27", slug: "sector-27" },
    { name: "Sector 29", slug: "sector-29" },
    { name: "Sector 37", slug: "sector-37" },
    { name: "Sector 44", slug: "sector-44" },
    { name: "Sector 50", slug: "sector-50" },
    { name: "Sector 51", slug: "sector-51" },
    { name: "Sector 52", slug: "sector-52" },
    { name: "Sector 55", slug: "sector-55" },
    { name: "Sector 56", slug: "sector-56" },
    { name: "Sector 62", slug: "sector-62" },
    { name: "Sector 63", slug: "sector-63" },
    { name: "Sector 75", slug: "sector-75" },
    { name: "Sector 76", slug: "sector-76" },
    { name: "Sector 77", slug: "sector-77" },
    { name: "Sector 78", slug: "sector-78" },
    { name: "Sector 100", slug: "sector-100" },
    { name: "Sector 104", slug: "sector-104" },
    { name: "Sector 110", slug: "sector-110" },
    { name: "Sector 120", slug: "sector-120" },
    { name: "Sector 125", slug: "sector-125" },
    { name: "Sector 126", slug: "sector-126" },
    { name: "Sector 128", slug: "sector-128" },
    { name: "Sector 132", slug: "sector-132" },
    { name: "Sector 135", slug: "sector-135" },
    { name: "Sector 137", slug: "sector-137" },
    { name: "Sector 143", slug: "sector-143" },
    { name: "Sector 150", slug: "sector-150" },
    { name: "Greater Noida West", slug: "greater-noida-west" },
    { name: "Knowledge Park", slug: "knowledge-park" },
    { name: "Alpha 1", slug: "alpha-1" },
    { name: "Alpha 2", slug: "alpha-2" },
    { name: "Omega", slug: "omega" },
    { name: "Chi Phi", slug: "chi-phi" },
    { name: "Techzone 4", slug: "techzone-4" },
    { name: "Noida Extension", slug: "noida-extension" }
  ];

  return (
    <div className={`noida-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .noida-scope {
          --bg:#0F172A;
          --bg-soft:#1E293B;
          --paper:#FFFFFF;
          --paper-dim:#F8FAFC;
          --ink:#1E293B;
          --ink-dim:#64748B;
          --ink-dark:#0F172A;
          --accent:#e62b2b;
          --accent-dim:#d32f2f;
          --stamp:#FFC145;
          --steel:#5C7A93;
          --line:rgba(0,0,0,0.08);
          --line-paper:#E2E8F0;
          --radius:4px;

          background: #FFFFFF;
          color: var(--ink-dark);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        .noida-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .noida-scope img { max-width: 100%; display: block; }
        .noida-scope a { color: inherit; text-decoration: none; }
        .noida-scope ul { list-style: none; }
        .noida-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .noida-scope h1, .noida-scope h2, .noida-scope h3, .noida-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .noida-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .noida-scope .eyebrow {
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
        .noida-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .noida-scope .btn {
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
        .noida-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .noida-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .noida-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: #FFFFFF; }
        .noida-scope .btn-ghost:hover { border-color: var(--paper); }
        .noida-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .noida-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .noida-scope .hero {
          position: relative;
          padding: 96px 0 60px;
          background: #17181A; color: #FFFFFF;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
        }
        .noida-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .noida-scope .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .noida-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: #FFFFFF; }
        .noida-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .noida-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 520px; margin-bottom: 32px; }
        .noida-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 44px; flex-wrap: wrap; }
        .noida-scope .stat-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .noida-scope .stat-row .stat { font-family: var(--font-jetbrains); }
        .noida-scope .stat b { display: block; font-size: 22px; color: var(--paper); }
        .noida-scope .stat span { font-size: 11px; color: #A7A9AC; letter-spacing: 0.06em; text-transform: uppercase; }

        /* ticket mock */
        .noida-scope .ticket {
          background: #FFFFFF;
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .noida-scope .ticket::before, .noida-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: #17181A;
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .noida-scope .ticket::before { left: -11px; }
        .noida-scope .ticket::after { right: -11px; }
        .noida-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8;
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .noida-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .noida-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .noida-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .noida-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .noida-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .noida-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .noida-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed #D8CFB8; padding-top: 14px;
        }
        .noida-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .noida-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        /* ===== SECTION GENERIC ===== */
        .noida-scope section { padding: 88px 0; border-bottom: 1px solid var(--line-paper); background: #FFFFFF; color: var(--ink-dark); }
        .noida-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .noida-scope .section-head h2 { font-size: 34px; color: var(--ink-dark); }
        .noida-scope .section-head p { color: #475569; margin-top: 14px; font-size: 15.5px; }
        .noida-scope .section-alt { background: #F8FAFC; }

        /* ===== AREAS COVERED ===== */
        .noida-scope .area-info-box {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .noida-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .noida-scope .area-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          color: var(--paper);
          background: var(--bg);
          transition: border-color .15s ease, color .15s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .noida-scope .area-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-soft);
        }

        /* ===== WHY CARDS ===== */
        .noida-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;}
        .noida-scope .why-card { background: #FFFFFF; border: 1px solid var(--line-paper); border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.02); padding: 32px 26px; }
        .noida-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 18px; display: block;}
        .noida-scope .why-card h3 { font-size: 18px; color: var(--ink-dark); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
        .noida-scope .why-card p { font-size: 14px; color: #475569; }

        /* ===== SERVICES ===== */
        .noida-scope .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .noida-scope .svc-card {
          background: #FFFFFF; border: 1px solid var(--line-paper); box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          padding: 26px;
          border-radius: 4px;
          transition: border-color .15s ease, transform .15s ease;
          position: relative;
        }
        .noida-scope .svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .noida-scope .svc-tag { font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 12px; display: inline-block;}
        .noida-scope .svc-card h3 { font-size: 17px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 10px;}
        .noida-scope .svc-card p { font-size: 13.5px; color: #475569; margin-bottom: 16px; min-height: 58px;}
        .noida-scope .svc-card .go { font-family: var(--font-jetbrains); font-size: 12px; color: var(--accent); font-weight: 700;}
        .noida-scope .svc-price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 12px; }
        .noida-scope .svc-price span { font-size: 11px; font-weight: 400; color: #64748B; letter-spacing: 0.04em; }
        .noida-scope .svc-note { margin-top: 26px; font-size: 13.5px; color: var(--ink-dark);}
        .noida-scope .svc-note a { color: var(--accent); font-weight: 600; }

        /* vehicle pills */
        .noida-scope .pill-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;}
        .noida-scope .pill {
          font-family: var(--font-jetbrains); font-size: 13px;
          border: 1px solid var(--line-paper); padding: 9px 16px; border-radius: 30px; color: var(--ink-dark);
          background: #FFFFFF;
        }

        /* brands */
        .noida-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .noida-scope .brand-chip {
          display: flex; align-items: center; gap: 10px;
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 10px 16px; border-radius: 30px;
          font-size: 13.5px; color: var(--ink-dark);
        }
        .noida-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%;}

        /* ===== HOW IT WORKS ===== */
        .noida-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; counter-reset: step;}
        .noida-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line-paper);}
        .noida-scope .step .n { font-family: var(--font-jetbrains); font-size: 38px; color: var(--accent); display: block; margin-bottom: 14px; font-weight: 700;}
        .noida-scope .step h3 { font-size: 16px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 8px;}
        .noida-scope .step p { font-size: 13.5px; color: #3C3D40; }

        /* ===== TESTIMONIALS ===== */
        .noida-scope .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
        .noida-scope .review {
          background: #FFFFFF; color: var(--ink-dark);
          padding: 26px; border-radius: 4px; border: 1px solid var(--line-paper);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .noida-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px;}
        .noida-scope .review p { font-size: 14.5px; margin-bottom: 18px; color: #475569; }
        .noida-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;}

        /* ===== PARTNER CTA ===== */
        .noida-scope .partner {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center;
        }
        .noida-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px;}
        .noida-scope .partner li { font-size: 14.5px; color: var(--ink-dark); display: flex; gap: 10px;}
        .noida-scope .partner li::before { content: "—"; color: var(--accent); }
        .noida-scope .partner-box {
          background: #0F172A; border: 1px solid rgba(255, 255, 255, 0.15); padding: 34px; border-radius: 4px;
        }

        /* ===== FAQ ===== */
        .noida-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .noida-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer; font-size: 16px; color: var(--ink-dark); font-weight: 500;
        }
        .noida-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease;}
        .noida-scope .faq-item.open .plus { transform: rotate(45deg); }
        .noida-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .noida-scope .faq-item.open .faq-a { max-height: 200px; }
        .noida-scope .faq-a p { padding-bottom: 22px; color: #475569; font-size: 14.5px; max-width: 760px; }

        /* ===== CONTACT ===== */
        .noida-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .noida-scope .contact-list { display: flex; flex-direction: column; gap: 22px; margin-top: 20px;}
        .noida-scope .contact-item { display: flex; gap: 16px; align-items: flex-start;}
        .noida-scope .contact-item .ic { width: 38px; height: 38px; border: 1px solid var(--line-paper); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--accent); flex-shrink: 0;}
        .noida-scope .contact-item b { display: block; color: var(--ink-dark); font-size: 15px; margin-bottom: 2px;}
        .noida-scope .contact-item span { color: #5C5E62; font-size: 13.5px;}

        /* ===== FINAL CTA ===== */
        .noida-scope .final-cta {
          text-align: center; padding: 90px 0;
          background:
            linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .noida-scope .final-cta h2 { font-size: 38px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px;}
        .noida-scope .final-cta p { color: #475569; margin-bottom: 32px;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .noida-scope .hero-grid { grid-template-columns: 1fr; }
          .noida-scope .hero h1 { font-size: 38px; }
          .noida-scope .why-grid { grid-template-columns: repeat(2,1fr); }
          .noida-scope .svc-grid { grid-template-columns: repeat(2,1fr); }
          .noida-scope .steps { grid-template-columns: repeat(2,1fr); }
          .noida-scope .review-grid { grid-template-columns: 1fr; }
          .noida-scope .partner { grid-template-columns: 1fr; }
          .noida-scope .contact-grid { grid-template-columns: 1fr; }
        }
                @media (max-width: 560px) {
          .noida-scope .wrap { padding: 0 16px !important; }
          .noida-scope .hero h1 { font-size: 24px !important; line-height: 1.2 !important; word-break: break-word !important; overflow-wrap: break-word !important; }
          .noida-scope .hero-ctas { flex-direction: column !important; width: 100% !important; gap: 10px !important; }
          .noida-scope .btn { width: 100% !important; justify-content: center !important; text-align: center !important; padding: 12px 16px !important; font-size: 12px !important; white-space: normal !important; word-break: break-word !important; }
          .noida-scope .trust-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .noida-scope .trust-cell { padding: 14px 10px !important; text-align: center !important; border-radius: 6px !important; }
          .noida-scope .trust-cell b { font-size: 20px !important; margin-bottom: 2px !important; color: var(--ink-dark) !important; }
          .noida-scope .trust-cell span { font-size: 10px !important; letter-spacing: 0.03em !important; color: #64748B !important; }

          .noida-scope .stat-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .noida-scope .stat { padding: 10px !important; background: rgba(255,255,255,0.05) !important; border-radius: 4px !important; text-align: center !important; }
          .noida-scope .stat b { font-size: 18px !important; }
          .noida-scope .stat span { font-size: 9.5px !important; }

          .noida-scope .street-board { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; background: transparent !important; border: none !important; margin-top: 16px !important; }
          .noida-scope .street-cell { padding: 6px 12px !important; font-size: 11.5px !important; border-radius: 20px !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; flex: 0 0 auto !important; color: var(--ink-dark) !important; }

          .noida-scope .area-grid { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-top: 16px !important; }
          .noida-scope .area-tag { padding: 6px 10px !important; font-size: 11px !important; border-radius: 20px !important; flex: 0 0 auto !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; color: var(--ink-dark) !important; }

          .noida-scope .top-svc,
          .noida-scope .why-grid,
          .noida-scope .svc-grid,
          .noida-scope .steps {
            grid-template-columns: 1fr;
          }
          .noida-scope .hero { padding-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce){
          .noida-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Noida" }]} />
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Bike mechanic at your doorstep · Noida</div>
            <h1>Doorstep Bike Repair<br /><em>in Noida</em></h1>
            <p className="lead">FixWheel sends verified mechanics directly to your high-rise society, gated sector, or corporate office across Noida & Greater Noida. Forget towing your bike to local garages — we bring the tools and service to you.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic in Noida →</Link>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>
            <div className="stat-row">
              <div className="stat"><b>45 min</b><span>Arrival time</span></div>
              <div className="stat"><b>{pageVars.bikesServicedText}</b><span>Total vehicles serviced</span></div>
              <div className="stat"><b>{stats.average_rating}★</b><span>Customer rating</span></div>
              <div className="stat"><b>Noida & Gr. Noida</b><span>Service area</span></div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket-top">
              <div className="ticket-id">FW-NOI-0914<span>SERVICE DETAILS</span></div>
              <div className="ticket-status">Completed ✓</div>
            </div>
            <div className="ticket-rows">
              <div className="r"><label>Service</label><div>Basic Service</div></div>
              <div className="r"><label>Model</label><div>Honda Activa 6G</div></div>
              <div className="r"><label>Location</label><div>Sector 62, Noida</div></div>
              <div className="r"><label>Mechanic</label><div>Verified ✓</div></div>
              <div className="r"><label>Warranty</label><div>15 days</div></div>
              <div className="r"><label>Response</label><div>27 min</div></div>
            </div>
            <div className="ticket-foot">
              <div className="total"><span>Total paid</span><b>₹499</b></div>
              <div className="mono" style={{ fontSize: "11px", color: "#8a836f" }}>NOIDA · NCR</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS COVERED ===== */}
      <section id="areas" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>Where we operate in Noida</h2>
            <p>We serve all major residential sectors and commercial parks across Noida and Greater Noida. Select your locality below for detailed street coverage.</p>
          </div>
          <div className="area-grid">
            {areas.map((area, idx) => (
              <Link key={idx} href={`/noida/${area.slug}`} className="area-tag">📍 {area.name}</Link>
            ))}
            <span className="area-tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>📍 + Expanding across Noida</span>
          </div>
        </div>
      </section>

      {/* ===== WHY FIXWHEEL ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel Noida</div>
            <h2>Professional service right in your society parking</h2>
            <p>High-rise society gates or busy tech parks — our mechanics coordinate directly to service your bike while you work or relax.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h3>Convenient at-home service</h3>
              <p>Our mechanics carry out the entire service inside your gated society basement, driveway, or office parking slot.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h3>Trained & verified professionals</h3>
              <p>Every mechanic is background-checked and trained, giving you complete safety and professional mechanical work.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h3>No hidden billing</h3>
              <p>Upfront itemized quotes before the service begins. You only pay for what you explicitly approve.</p>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <h3>15-day labor warranty</h3>
              <p>All mechanical and electrical adjustments are backed by a solid 15-day service guarantee for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES & PRICING ===== */}
      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services & pricing</div>
            <h2>Two Wheeler Service & Repair in Noida</h2>
            <p>Flat-rate doorstep repairs across all Noida sectors. Select any service to explore specialized pricing details.</p>
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
              <p>Flat tyre fixed on the spot — whether you are parked at home or stranded roadside in Noida.</p>
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
              <p>Battery testing, jump-start assistance, and full replacement using standard-spec batteries.</p>
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
            <h2 style={{ fontSize: "26px" }}>Any brand, any model — Noida doorstep</h2>
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
              <p>A verified mechanic near your location in Noida is assigned and heads to you.</p>
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
            <h2>From Noida riders</h2>
            <p style={{ marginTop: '10px' }}><b style={{ color: 'var(--accent)', fontSize: '18px' }}>4.7★</b> average rating from <b style={{ color: 'var(--ink-dark)' }}>473+ reviews</b></p>
          </div>
          <div className="review-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Excellent experience in Sector 137. The mechanic coordinated with the society gate security himself and finished the general service in the basement. Spotless cleanup after service."</p>
              <div className="who">Abhishek T. — Sector 137</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"My Royal Enfield Bullet broke down near Noida Sector 62. The roadside assistance mechanic was there in 45 minutes, cleaned the carburetor on the spot, and got it started. Highly recommended!"</p>
              <div className="who">Vikram S. — Sector 62</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Got my TVS Jupiter serviced at home in Greater Noida West. Very polite technician, pre-confirmed pricing, and no pushy upselling."</p>
              <div className="who">Pallavi G. — Greater Noida West</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER CTA ===== */}
      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic in Noida?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>Join the FixWheel network and receive bookings from riders in Noida and Greater Noida. Set your own hours and manage everything from your phone.</p>
            <ul>
              <li>Set your own working hours</li>
              <li>Manage bookings from your phone</li>
              <li>Receive service requests from nearby customers</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>Register in a few minutes and start receiving service requests in Noida.</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs</div>
            <h2>Common questions about bike repair in Noida</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqs[0] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>How quickly can a mechanic reach me in Noida?<span className="plus">+</span></div>
              <div className="faq-a"><p>In most Noida sectors, our mechanics arrive within 45 minutes of booking confirmation.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[1] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>What does doorstep bike repair cost in Noida?<span className="plus">+</span></div>
              <div className="faq-a"><p>Basic service starts from ₹499 depending on your bike model. We confirm the exact price before starting any work.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[2] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Which areas in Noida does FixWheel cover?<span className="plus">+</span></div>
              <div className="faq-a"><p>We cover all major Noida sectors (18, 62, 137, 150, etc.) as well as Greater Noida West, Knowledge Park, and Noida Extension.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[3] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>Do you offer emergency roadside help in Noida?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we dispatch mechanics for roadside breakdowns across our Noida service area. Available 24/7.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[4] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>Can you service my EV scooter in Noida?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we service Ola, Ather, TVS iQube, and other electric two-wheelers at your doorstep in Noida.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[5] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(5)}>Is there a warranty on the repair?<span className="plus">+</span></div>
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
            <h3 style={{ fontSize: "22px", color: "var(--ink-dark)", marginTop: "10px" }}>Noida Roadside Assistance</h3>
            <p style={{ color: "#475569", fontSize: "14px" }}>
              Stranded on Yamuna Expressway, DND Flyway, or a sector road? A mechanic will come to your exact location with tools to fix the issue on the spot.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "10px" }}>
              <Link href="/book" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "12px" }}>
                Request Roadside Assistance →
              </Link>
              <a href="tel:+918745945682" className="btn" style={{ padding: "10px 20px", fontSize: "12px", border: "1px solid #0F172A", color: "#0F172A", background: "transparent" }}>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h2>Book doorstep bike repair in Noida.</h2>
          <p>Verified mechanic at your home or office across Sector 18, 62, 137, 150 & all Noida sectors. Starting ₹499.</p>
          <Link href="/book" className="btn btn-dark">Book Your Bike Service →</Link>
        </div>
      </section>
    </div>
  );
}
