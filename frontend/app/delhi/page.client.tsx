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

export default function DelhiClientPage() {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className={`delhi-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .delhi-scope {
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
        .delhi-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .delhi-scope img { max-width: 100%; display: block; }
        .delhi-scope a { color: inherit; text-decoration: none; }
        .delhi-scope ul { list-style: none; }
        .delhi-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .delhi-scope h1, .delhi-scope h2, .delhi-scope h3, .delhi-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .delhi-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .delhi-scope .eyebrow {
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
        .delhi-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .delhi-scope .btn {
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
        .delhi-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .delhi-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .delhi-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: #FFFFFF; }
        .delhi-scope .btn-ghost:hover { border-color: var(--paper); }
        .delhi-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .delhi-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .delhi-scope .hero {
          position: relative;
          padding: 96px 0 60px;
          background: #17181A; color: #FFFFFF;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
        }
        .delhi-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .delhi-scope .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .delhi-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: #FFFFFF; }
        .delhi-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .delhi-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 520px; margin-bottom: 32px; }
        .delhi-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 44px; flex-wrap: wrap; }
        .delhi-scope .stat-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .delhi-scope .stat-row .stat { font-family: var(--font-jetbrains); }
        .delhi-scope .stat b { display: block; font-size: 22px; color: var(--paper); }
        .delhi-scope .stat span { font-size: 11px; color: #A7A9AC; letter-spacing: 0.06em; text-transform: uppercase; }

        /* ticket mock */
        .delhi-scope .ticket {
          background: #FFFFFF;
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .delhi-scope .ticket::before, .delhi-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: #17181A;
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .delhi-scope .ticket::before { left: -11px; }
        .delhi-scope .ticket::after { right: -11px; }
        .delhi-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8;
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .delhi-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .delhi-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .delhi-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .delhi-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .delhi-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .delhi-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .delhi-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed #D8CFB8; padding-top: 14px;
        }
        .delhi-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .delhi-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        /* ===== SECTION GENERIC ===== */
        .delhi-scope section { padding: 88px 0; border-bottom: 1px solid var(--line-paper); background: #FFFFFF; color: var(--ink-dark); }
        .delhi-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .delhi-scope .section-head h2 { font-size: 34px; color: var(--ink-dark); }
        .delhi-scope .section-head p { color: #475569; margin-top: 14px; font-size: 15.5px; }
        .delhi-scope .section-alt { background: #F8FAFC; }

        /* ===== AREAS COVERED ===== */
        .delhi-scope .area-info-box {
          background: #F8FAFC; color: var(--ink-dark); border: 1px solid var(--line-paper);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .delhi-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .delhi-scope .area-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          background: #FFFFFF;
          color: var(--ink-dark);
          border: 1px solid var(--line-paper);
          padding: 8px 16px;
          border-radius: 4px;
          transition: border-color 0.15s, transform 0.15s;
        }
        .delhi-scope .area-tag:hover {
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        /* ===== WHY CHOOSE US ===== */
        .delhi-scope .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .delhi-scope .why-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-left: 4px solid var(--accent);
          padding: 28px;
          border-radius: 4px;
        }
        .delhi-scope .why-card .num {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          color: var(--accent);
          display: block;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .delhi-scope .why-card h3 {
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 10px;
        }
        .delhi-scope .why-card p {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
        }

        /* ===== HOW IT WORKS ===== */
        .delhi-scope .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
        }
        .delhi-scope .step {
          padding: 32px 24px;
          border-right: 1px solid var(--line-paper);
        }
        .delhi-scope .step:last-child {
          border-right: none;
        }
        .delhi-scope .step .n {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          color: var(--accent);
          font-weight: 700;
          display: block;
          margin-bottom: 14px;
        }
        .delhi-scope .step h3 {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 10px;
        }
        .delhi-scope .step p {
          font-size: 13.5px;
          color: #5A5D62;
          line-height: 1.55;
        }

        /* ===== SERVICES GRID ===== */
        .delhi-scope .svc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .delhi-scope .svc-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          padding: 28px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .delhi-scope .svc-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .delhi-scope .svc-tag {
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          display: block;
          font-weight: 700;
        }
        .delhi-scope .svc-card h3 {
          font-size: 22px;
          color: var(--ink-dark);
          margin-bottom: 10px;
        }
        .delhi-scope .svc-card p {
          font-size: 14px;
          color: #5A5D62;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .delhi-scope .svc-price {
          font-family: var(--font-jetbrains), monospace;
          font-size: 22px;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .delhi-scope .svc-price span {
          font-size: 11px;
          color: #8A8D91;
          font-weight: 400;
          margin-left: 6px;
        }
        .delhi-scope .svc-card .go {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--ink-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.15s;
        }
        .delhi-scope .svc-card .go:hover {
          color: var(--accent);
        }



        /* ===== FINAL CTA ===== */
        .delhi-scope .final-cta {
          text-align: center;
          padding: 96px 0;
          background: var(--bg);
          color: var(--paper);
          border-top: 1px solid var(--line);
        }
        .delhi-scope .final-cta h2 { font-size: 40px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px; }
        .delhi-scope .final-cta p { color: #475569; margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto; }

        /* ===== AREAS COVERED ===== */
        .delhi-scope .area-info-box {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .delhi-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .delhi-scope .area-tag {
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
        .delhi-scope .area-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-soft);
        }

        /* ===== WHY CARDS ===== */
        .delhi-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;}
        .delhi-scope .why-card { background: #FFFFFF; border: 1px solid var(--line-paper); border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.02); padding: 32px 26px; }
        .delhi-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 18px; display: block;}
        .delhi-scope .why-card h3 { font-size: 18px; color: var(--ink-dark); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
        .delhi-scope .why-card p { font-size: 14px; color: #475569; }

        /* ===== SERVICES ===== */
        .delhi-scope .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .delhi-scope .svc-card {
          background: #FFFFFF; border: 1px solid var(--line-paper); box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          padding: 26px;
          border-radius: 4px;
          transition: border-color .15s ease, transform .15s ease;
          position: relative;
        }
        .delhi-scope .svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .delhi-scope .svc-tag { font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 12px; display: inline-block;}
        .delhi-scope .svc-card h3 { font-size: 17px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 10px;}
        .delhi-scope .svc-card p { font-size: 13.5px; color: #475569; margin-bottom: 16px; min-height: 58px;}
        .delhi-scope .svc-card .go { font-family: var(--font-jetbrains); font-size: 12px; color: var(--accent); font-weight: 700;}
        .delhi-scope .svc-price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 12px; }
        .delhi-scope .svc-price span { font-size: 11px; font-weight: 400; color: #64748B; letter-spacing: 0.04em; }
        .delhi-scope .svc-note { margin-top: 26px; font-size: 13.5px; color: var(--ink-dark);}
        .delhi-scope .svc-note a { color: var(--accent); font-weight: 600; }

        /* vehicle pills */
        .delhi-scope .pill-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;}
        .delhi-scope .pill {
          font-family: var(--font-jetbrains); font-size: 13px;
          border: 1px solid var(--line-paper); padding: 9px 16px; border-radius: 30px; color: var(--ink-dark);
          background: #FFFFFF;
        }

        /* brands */
        .delhi-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .delhi-scope .brand-chip {
          display: flex; align-items: center; gap: 10px;
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 10px 16px; border-radius: 30px;
          font-size: 13.5px; color: var(--ink-dark);
        }
        .delhi-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%;}

        /* ===== HOW IT WORKS ===== */
        .delhi-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; counter-reset: step;}
        .delhi-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line-paper);}
        .delhi-scope .step .n { font-family: var(--font-jetbrains); font-size: 38px; color: var(--accent); display: block; margin-bottom: 14px; font-weight: 700;}
        .delhi-scope .step h3 { font-size: 16px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 8px;}
        .delhi-scope .step p { font-size: 13.5px; color: #3C3D40; }

        /* ===== TESTIMONIALS ===== */
        .delhi-scope .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
        .delhi-scope .review {
          background: #FFFFFF; color: var(--ink-dark);
          padding: 26px; border-radius: 4px; border: 1px solid var(--line-paper);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .delhi-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px;}
        .delhi-scope .review p { font-size: 14.5px; margin-bottom: 18px; color: #475569; }
        .delhi-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;}

        /* ===== PARTNER CTA ===== */
        .delhi-scope .partner {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center;
        }
        .delhi-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px;}
        .delhi-scope .partner li { font-size: 14.5px; color: var(--ink-dark); display: flex; gap: 10px;}
        .delhi-scope .partner li::before { content: "—"; color: var(--accent); }
        .delhi-scope .partner-box {
          background: #0F172A; border: 1px solid rgba(255, 255, 255, 0.15); padding: 34px; border-radius: 4px;
        }

        /* ===== FAQ ===== */
        .delhi-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .delhi-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer; font-size: 16px; color: var(--ink-dark); font-weight: 500;
        }
        .delhi-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease;}
        .delhi-scope .faq-item.open .plus { transform: rotate(45deg); }
        .delhi-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .delhi-scope .faq-item.open .faq-a { max-height: 200px; }
        .delhi-scope .faq-a p { padding-bottom: 22px; color: #475569; font-size: 14.5px; max-width: 760px; }

        /* ===== CONTACT ===== */
        .delhi-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .delhi-scope .contact-list { display: flex; flex-direction: column; gap: 22px; margin-top: 20px;}
        .delhi-scope .contact-item { display: flex; gap: 16px; align-items: flex-start;}
        .delhi-scope .contact-item .ic { width: 38px; height: 38px; border: 1px solid var(--line-paper); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--accent); flex-shrink: 0;}
        .delhi-scope .contact-item b { display: block; color: var(--ink-dark); font-size: 15px; margin-bottom: 2px;}
        .delhi-scope .contact-item span { color: #5C5E62; font-size: 13.5px;}

        /* ===== FINAL CTA ===== */
        .delhi-scope .final-cta {
          text-align: center; padding: 90px 0;
          background:
            linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .delhi-scope .final-cta h2 { font-size: 38px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px;}
        .delhi-scope .final-cta p { color: #475569; margin-bottom: 32px;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .delhi-scope .hero-grid { grid-template-columns: 1fr; }
          .delhi-scope .hero h1 { font-size: 38px; }
          .delhi-scope .why-grid { grid-template-columns: repeat(2,1fr); }
          .delhi-scope .svc-grid { grid-template-columns: repeat(2,1fr); }
          .delhi-scope .steps { grid-template-columns: repeat(2,1fr); }
          .delhi-scope .review-grid { grid-template-columns: 1fr; }
          .delhi-scope .partner { grid-template-columns: 1fr; }
          .delhi-scope .contact-grid { grid-template-columns: 1fr; }
        }
                @media (max-width: 560px) {
          .delhi-scope .trust-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .delhi-scope .trust-cell { padding: 14px 10px !important; text-align: center !important; border-radius: 6px !important; }
          .delhi-scope .trust-cell b { font-size: 20px !important; margin-bottom: 2px !important; color: var(--ink-dark) !important; }
          .delhi-scope .trust-cell span { font-size: 10px !important; letter-spacing: 0.03em !important; color: #64748B !important; }

          .delhi-scope .stat-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .delhi-scope .stat { padding: 10px !important; background: rgba(255,255,255,0.05) !important; border-radius: 4px !important; text-align: center !important; }
          .delhi-scope .stat b { font-size: 18px !important; }
          .delhi-scope .stat span { font-size: 9.5px !important; }

          .delhi-scope .street-board { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; background: transparent !important; border: none !important; margin-top: 16px !important; }
          .delhi-scope .street-cell { padding: 6px 12px !important; font-size: 11.5px !important; border-radius: 20px !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; flex: 0 0 auto !important; color: var(--ink-dark) !important; }

          .delhi-scope .area-grid { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-top: 16px !important; }
          .delhi-scope .area-tag { padding: 6px 10px !important; font-size: 11px !important; border-radius: 20px !important; flex: 0 0 auto !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; color: var(--ink-dark) !important; }

          .delhi-scope .top-svc,
          .delhi-scope .why-grid,
          .delhi-scope .svc-grid,
          .delhi-scope .steps {
            grid-template-columns: 1fr;
          }
          .delhi-scope .hero { padding-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce){
          .delhi-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Bike mechanic at your doorstep · Delhi</div>
            <h1>Doorstep Bike Repair<br /><em>in Delhi</em></h1>
            <p className="lead">FixWheel sends verified mechanics to your location anywhere in South and South-West Delhi. Whether it is your home parking, office basement, or a roadside breakdown — we bring the tools, you keep your day going.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic in Delhi →</Link>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>
            <div className="stat-row">
              <div className="stat"><b>45 min</b><span>Arrival time</span></div>
              <div className="stat"><b>473+</b><span>Total vehicles serviced</span></div>
              <div className="stat"><b>4.7★</b><span>Customer rating</span></div>
              <div className="stat"><b>South & SW Delhi</b><span>Service area</span></div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket-top">
              <div className="ticket-id">FW-DEL-0837<span>SERVICE DETAILS</span></div>
              <div className="ticket-status">Completed ✓</div>
            </div>
            <div className="ticket-rows">
              <div className="r"><label>Service</label><div>Engine Oil Change</div></div>
              <div className="r"><label>Model</label><div>Bajaj Pulsar 150</div></div>
              <div className="r"><label>Location</label><div>Dwarka, Delhi</div></div>
              <div className="r"><label>Mechanic</label><div>Verified ✓</div></div>
              <div className="r"><label>Warranty</label><div>15 days</div></div>
              <div className="r"><label>Response</label><div>32 min</div></div>
            </div>
            <div className="ticket-foot">
              <div className="total"><span>Total paid</span><b>₹999</b></div>
              <div className="mono" style={{ fontSize: "11px", color: "#8a836f" }}>DELHI · NCR</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS COVERED ===== */}
      <section id="areas" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>Where we operate in Delhi</h2>
            <p>We currently serve South and South-West Delhi. Our mechanics are stationed across these localities and can usually reach you within 45 minutes.</p>
          </div>
          <div className="area-grid">
            <Link href="/delhi/dwarka" className="area-tag">📍 Dwarka</Link>
            <Link href="/delhi/kapashera" className="area-tag">📍 Kapashera</Link>
            <Link href="/delhi/vasant-kunj" className="area-tag">📍 Vasant Kunj</Link>
            <Link href="/delhi/janakpuri" className="area-tag">📍 Janakpuri</Link>
            <Link href="/delhi/bijwasan" className="area-tag">📍 Bijwasan</Link>
            <Link href="/delhi/mahipalpur" className="area-tag">📍 Mahipalpur</Link>
            <Link href="/delhi/palam" className="area-tag">📍 Palam</Link>
            <Link href="/delhi/hari-nagar" className="area-tag">📍 Hari Nagar</Link>
            <Link href="/delhi/najafgarh-road" className="area-tag">📍 Najafgarh Road</Link>
            <Link href="/delhi/rangpuri" className="area-tag">📍 Rangpuri</Link>
            <Link href="/delhi/samalka" className="area-tag">📍 Samalka</Link>
            <Link href="/delhi/uttam-nagar" className="area-tag">📍 Uttam Nagar</Link>
            <Link href="/delhi/rajouri-garden" className="area-tag">📍 Rajouri Garden</Link>
            <Link href="/delhi/tilak-nagar" className="area-tag">📍 Tilak Nagar</Link>
            <Link href="/delhi/vikaspuri" className="area-tag">📍 Vikaspuri</Link>
            <Link href="/delhi/paschim-vihar" className="area-tag">📍 Paschim Vihar</Link>
            <Link href="/delhi/punjabi-bagh" className="area-tag">📍 Punjabi Bagh</Link>
            <Link href="/delhi/dabri" className="area-tag">📍 Dabri</Link>
            <Link href="/delhi/bindapur" className="area-tag">📍 Bindapur</Link>
            <Link href="/delhi/nawada" className="area-tag">📍 Nawada</Link>
            <Link href="/delhi/nihal-vihar" className="area-tag">📍 Nihal Vihar</Link>
            <Link href="/delhi/subhash-nagar" className="area-tag">📍 Subhash Nagar</Link>
            <Link href="/delhi/ashok-vihar" className="area-tag">📍 Ashok Vihar</Link>
            <Link href="/delhi/pitampura" className="area-tag">📍 Pitampura</Link>
            <Link href="/delhi/rohini" className="area-tag">📍 Rohini</Link>
            <Link href="/delhi/shalimar-bagh" className="area-tag">📍 Shalimar Bagh</Link>
            <Link href="/delhi/kirti-nagar" className="area-tag">📍 Kirti Nagar</Link>
            <span className="area-tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>📍 + Expanding across Delhi</span>
          </div>
        </div>
      </section>

      {/* ===== WHY FIXWHEEL ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel Delhi</div>
            <h2>Bike repair without the garage run</h2>
            <p>Delhi traffic makes getting to a mechanic a half-day task. We bring the mechanic to you instead.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h3>Your location, our tools</h3>
              <p>The mechanic arrives at your address with a full toolkit. You do not need to move your bike anywhere.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h3>Verified before dispatch</h3>
              <p>Every mechanic on the platform is background-checked and trained before they get assigned a single job.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h3>Price locked upfront</h3>
              <p>You see the price before any work starts. If extra parts are needed, we confirm the cost with you first.</p>
            </div>
            <div className="why-card">
              <span className="num">04</span>
              <h3>15-day labor warranty</h3>
              <p>If something goes wrong with the same repair within 15 days, a mechanic comes back at no extra charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES & PRICING ===== */}
      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services & pricing</div>
            <h2>Two Wheeler Service & Repair in Delhi</h2>
            <p>All repairs are done at your doorstep across South and South-West Delhi. Select a service to check pricing for your bike model.</p>
          </div>
          <div className="svc-grid">
            <div className="svc-card">
              <span className="svc-tag mono">[BASIC]</span>
              <h3>Basic Service</h3>
              <p>Brake check, chain lube, spark plug clean, air filter inspection, and electrical system check.</p>
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
              <p>Flat tyre fixed on the spot — whether you are parked at home or stranded roadside in Delhi.</p>
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
            <h2 style={{ fontSize: "26px" }}>Any brand, any model — Delhi doorstep</h2>
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
              <p>A verified mechanic near your location is assigned and heads to you.</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h3>3. Repaired on-site</h3>
              <p>Your bike is fixed right where it is parked — home, office, or roadside.</p>
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
            <h2>From riders across Delhi</h2>
            <p style={{ marginTop: '10px' }}><b style={{ color: 'var(--accent)', fontSize: '18px' }}>4.7★</b> average rating from <b style={{ color: 'var(--ink-dark)' }}>473+ reviews</b></p>
          </div>
          <div className="review-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Puncture at 10 PM near Dwarka Mor. Called FixWheel, mechanic was there in 45 minutes. Sorted and back on the road."</p>
              <div className="who">Ankit R. — Dwarka</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>"Got my Pulsar serviced at my office parking in Janakpuri. Oil change done in 45 minutes. Price was exactly what they quoted."</p>
              <div className="who">Deepak M. — Janakpuri</div>
            </div>
            <div className="review">
              <div className="stars">★★★★☆</div>
              <p>"Battery died on my Activa in Vasant Kunj. Mechanic tested it, replaced the battery on the spot with a new one. Transparent billing."</p>
              <div className="who">Sneha K. — Vasant Kunj</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER CTA ===== */}
      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic in Delhi?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>Join the FixWheel network and receive bookings from riders in your area. Set your own hours and manage everything from your phone.</p>
            <ul>
              <li>Set your own working hours</li>
              <li>Manage bookings from your phone</li>
              <li>Receive service requests from nearby customers</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>Register in a few minutes and start receiving service requests in Delhi.</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs</div>
            <h2>Common questions about bike repair in Delhi</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqs[0] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>How quickly can a mechanic reach me in Delhi?<span className="plus">+</span></div>
              <div className="faq-a"><p>In most South and South-West Delhi localities, our mechanics arrive within 30 to 45 minutes of booking confirmation.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[1] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>What does doorstep bike repair cost in Delhi?<span className="plus">+</span></div>
              <div className="faq-a"><p>Basic service starts from ₹499 depending on your bike model and cc. We confirm the exact price before starting any work.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[2] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Which areas in Delhi does FixWheel cover?<span className="plus">+</span></div>
              <div className="faq-a"><p>We cover South and South-West Delhi including Dwarka, Kapashera, Vasant Kunj, Janakpuri, Bijwasan, Mahipalpur, Hari Nagar, Najafgarh, Palam, Saket, Hauz Khas, and surrounding areas.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[3] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>Do you offer emergency roadside help in Delhi?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we dispatch mechanics for roadside breakdowns across our Delhi service area. Available 24/7.</p></div>
            </div>
            <div className={`faq-item ${openFaqs[4] ? "open" : ""}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>Can you service my EV scooter in Delhi?<span className="plus">+</span></div>
              <div className="faq-a"><p>Yes, we service Ola, Ather, TVS iQube, and other electric two-wheelers at your doorstep in Delhi.</p></div>
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
            <h3 style={{ fontSize: "22px", color: "var(--ink-dark)", marginTop: "10px" }}>Delhi Roadside Assistance</h3>
            <p style={{ color: "#475569", fontSize: "14px" }}>
              Broken down on a Delhi road? A mechanic will come to your exact location with tools to diagnose and fix the issue on the spot.</p>
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
          <h2>Book doorstep bike repair in Delhi.</h2>
          <p>Verified mechanic at your home or office across South & South-West Delhi. Starting ₹499. No garage visit needed.</p>
          <Link href="/book" className="btn btn-dark">Book Your Bike Service →</Link>
        </div>
      </section>
    </div>
  );
}
