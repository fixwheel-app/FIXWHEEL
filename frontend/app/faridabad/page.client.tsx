"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import { getPageVariables, PageVariables, DEFAULT_PAGE_VARIABLES } from "@/lib/pageVariables";
import { FaridabadSections } from "@/components/city/faridabad/FaridabadSections";
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

export default function FaridabadClientPage() {
  const [pageVars, setPageVars] = useState<PageVariables>(DEFAULT_PAGE_VARIABLES);
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.faridabad || DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity('faridabad').then(setStats);
    getPageVariables('faridabad', 'faridabad').then(setPageVars);
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

  return (
    <div className={`faridabad-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .faridabad-scope {
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
        .faridabad-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .faridabad-scope img { max-width: 100%; display: block; }
        .faridabad-scope a { color: inherit; text-decoration: none; }
        .faridabad-scope ul { list-style: none; }
        .faridabad-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .faridabad-scope h1, .faridabad-scope h2, .faridabad-scope h3, .faridabad-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .faridabad-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .faridabad-scope .eyebrow {
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
        .faridabad-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .faridabad-scope .btn {
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
        .faridabad-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .faridabad-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .faridabad-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: #FFFFFF; }
        .faridabad-scope .btn-ghost:hover { border-color: var(--paper); }
        .faridabad-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .faridabad-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .faridabad-scope .hero {
          position: relative;
          padding: 96px 0 60px;
          background: #17181A; color: #FFFFFF;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
        }
        .faridabad-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .faridabad-scope .hero-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .faridabad-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: #FFFFFF; }
        .faridabad-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .faridabad-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 520px; margin-bottom: 32px; }
        .faridabad-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 44px; flex-wrap: wrap; }
        .faridabad-scope .stat-row { display: flex; gap: 36px; flex-wrap: wrap; }
        .faridabad-scope .stat-row .stat { font-family: var(--font-jetbrains); }
        .faridabad-scope .stat b { display: block; font-size: 22px; color: var(--paper); }
        .faridabad-scope .stat span { font-size: 11px; color: #A7A9AC; letter-spacing: 0.06em; text-transform: uppercase; }

        /* ticket mock */
        .faridabad-scope .ticket {
          background: #FFFFFF;
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .faridabad-scope .ticket::before, .faridabad-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: #17181A;
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .faridabad-scope .ticket::before { left: -11px; }
        .faridabad-scope .ticket::after { right: -11px; }
        .faridabad-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8;
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .faridabad-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .faridabad-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .faridabad-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .faridabad-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .faridabad-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .faridabad-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .faridabad-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed #D8CFB8; padding-top: 14px;
        }
        .faridabad-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .faridabad-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        /* ===== SECTION GENERIC ===== */
        .faridabad-scope section { padding: 88px 0; border-bottom: 1px solid var(--line-paper); background: #FFFFFF; color: var(--ink-dark); }
        .faridabad-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .faridabad-scope .section-head h2 { font-size: 34px; color: var(--ink-dark); }
        .faridabad-scope .section-head p { color: #475569; margin-top: 14px; font-size: 15.5px; }
        .faridabad-scope .section-alt { background: #F8FAFC; }

        /* ===== AREAS COVERED ===== */
        .faridabad-scope .area-info-box {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 40px;
          border-radius: 4px;
          text-align: center;
        }
        .faridabad-scope .area-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }
        .faridabad-scope .area-tag {
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
        .faridabad-scope .area-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-soft);
        }

        /* ===== WHY CARDS ===== */
        .faridabad-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;}
        .faridabad-scope .why-card { background: #FFFFFF; border: 1px solid var(--line-paper); border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.02); padding: 32px 26px; }
        .faridabad-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 18px; display: block;}
        .faridabad-scope .why-card h3 { font-size: 18px; color: var(--ink-dark); margin-bottom: 10px; text-transform: none; letter-spacing: 0; }
        .faridabad-scope .why-card p { font-size: 14px; color: #475569; }

        /* ===== SERVICES HORIZONTAL SLIDER ===== */
        .faridabad-scope .svc-grid {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          scroll-snap-type: x mandatory !important;
          scroll-behavior: smooth !important;
          gap: 16px !important;
          padding: 8px 4px 18px 4px !important;
          -webkit-overflow-scrolling: touch !important;
          scrollbar-width: thin !important;
          scrollbar-color: var(--accent) #E2E8F0 !important;
        }
        .faridabad-scope .svc-grid::-webkit-scrollbar {
          height: 6px !important;
        }
        .faridabad-scope .svc-grid::-webkit-scrollbar-track {
          background: #E2E8F0 !important;
          border-radius: 4px !important;
        }
        .faridabad-scope .svc-grid::-webkit-scrollbar-thumb {
          background: var(--accent) !important;
          border-radius: 4px !important;
        }
        .faridabad-scope .svc-card {
          flex: 0 0 310px !important;
          width: 310px !important;
          min-width: 310px !important;
          scroll-snap-align: start !important;
          box-sizing: border-box !important;
          background: #FFFFFF; border: 1px solid var(--line-paper); box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          padding: 26px;
          border-radius: 4px;
          transition: border-color .15s ease, transform .15s ease;
          position: relative;
        }
        @media (max-width: 640px) {
          .faridabad-scope .svc-card {
            flex: 0 0 82% !important;
            width: 82% !important;
            min-width: 82% !important;
          }
        }
        .faridabad-scope .svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .faridabad-scope .svc-tag { font-family: var(--font-jetbrains); font-size: 10.5px; letter-spacing: 0.08em; color: var(--accent); margin-bottom: 12px; display: inline-block;}
        .faridabad-scope .svc-card h3 { font-size: 17px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 10px;}
        .faridabad-scope .svc-card p { font-size: 13.5px; color: #475569; margin-bottom: 16px; min-height: 58px;}
        .faridabad-scope .svc-card .go { font-family: var(--font-jetbrains); font-size: 12px; color: var(--accent); font-weight: 700;}
        .faridabad-scope .svc-price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 12px; }
        .faridabad-scope .svc-price span { font-size: 11px; font-weight: 400; color: #64748B; letter-spacing: 0.04em; }
        .faridabad-scope .svc-note { margin-top: 26px; font-size: 13.5px; color: var(--ink-dark);}
        .faridabad-scope .svc-note a { color: var(--accent); font-weight: 600; }

        /* vehicle pills */
        .faridabad-scope .pill-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;}
        .faridabad-scope .pill {
          font-family: var(--font-jetbrains); font-size: 13px;
          border: 1px solid var(--line-paper); padding: 9px 16px; border-radius: 30px; color: var(--ink-dark);
          background: #FFFFFF;
        }

        /* brands */
        .faridabad-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .faridabad-scope .brand-chip {
          display: flex; align-items: center; gap: 10px;
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 10px 16px; border-radius: 30px;
          font-size: 13.5px; color: var(--ink-dark);
        }
        .faridabad-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%;}

        /* ===== HOW IT WORKS ===== */
        .faridabad-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; counter-reset: step;}
        .faridabad-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line-paper);}
        .faridabad-scope .step .n { font-family: var(--font-jetbrains); font-size: 38px; color: var(--accent); display: block; margin-bottom: 14px; font-weight: 700;}
        .faridabad-scope .step h3 { font-size: 16px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 8px;}
        .faridabad-scope .step p { font-size: 13.5px; color: #3C3D40; }

        /* ===== TESTIMONIALS ===== */
        .faridabad-scope .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
        .faridabad-scope .review {
          background: #FFFFFF; color: var(--ink-dark);
          padding: 26px; border-radius: 4px; border: 1px solid var(--line-paper);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .faridabad-scope .review .stars { color: var(--accent-dim); font-size: 14px; margin-bottom: 14px; letter-spacing: 2px;}
        .faridabad-scope .review p { font-size: 14.5px; margin-bottom: 18px; color: #475569; }
        .faridabad-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;}

        /* ===== PARTNER CTA ===== */
        .faridabad-scope .partner {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center;
        }
        .faridabad-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px;}
        .faridabad-scope .partner li { font-size: 14.5px; color: var(--ink-dark); display: flex; gap: 10px;}
        .faridabad-scope .partner li::before { content: "—"; color: var(--accent); }
        .faridabad-scope .partner-box {
          background: #0F172A; border: 1px solid rgba(255, 255, 255, 0.15); padding: 34px; border-radius: 4px;
        }

        /* ===== FAQ ===== */
        .faridabad-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .faridabad-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 0; cursor: pointer; font-size: 16px; color: var(--ink-dark); font-weight: 500;
        }
        .faridabad-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease;}
        .faridabad-scope .faq-item.open .plus { transform: rotate(45deg); }
        .faridabad-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .faridabad-scope .faq-item.open .faq-a { max-height: 200px; }
        .faridabad-scope .faq-a p { padding-bottom: 22px; color: #475569; font-size: 14.5px; max-width: 760px; }

        /* ===== CONTACT ===== */
        .faridabad-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .faridabad-scope .contact-list { display: flex; flex-direction: column; gap: 22px; margin-top: 20px;}
        .faridabad-scope .contact-item { display: flex; gap: 16px; align-items: flex-start;}
        .faridabad-scope .contact-item .ic { width: 38px; height: 38px; border: 1px solid var(--line-paper); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--accent); flex-shrink: 0;}
        .faridabad-scope .contact-item b { display: block; color: var(--ink-dark); font-size: 15px; margin-bottom: 2px;}
        .faridabad-scope .contact-item span { color: #5C5E62; font-size: 13.5px;}

        /* ===== FINAL CTA ===== */
        .faridabad-scope .final-cta {
          text-align: center; padding: 90px 0;
          background:
            linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .faridabad-scope .final-cta h2 { font-size: 38px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px;}
        .faridabad-scope .final-cta p { color: #475569; margin-bottom: 32px;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .faridabad-scope .hero-grid { grid-template-columns: 1fr; }
          .faridabad-scope .hero h1 { font-size: 38px; }
          .faridabad-scope .why-grid { grid-template-columns: repeat(2,1fr); }
          .faridabad-scope .steps { grid-template-columns: repeat(2,1fr); }
          .faridabad-scope .review-grid { grid-template-columns: 1fr; }
          .faridabad-scope .partner { grid-template-columns: 1fr; }
          .faridabad-scope .contact-grid { grid-template-columns: 1fr; }
        }
                @media (max-width: 560px) {
          .faridabad-scope .wrap { padding: 0 16px !important; }
          .faridabad-scope .hero h1 { font-size: 24px !important; line-height: 1.2 !important; word-break: break-word !important; overflow-wrap: break-word !important; }
          .faridabad-scope .hero-ctas { flex-direction: column !important; width: 100% !important; gap: 10px !important; }
          .faridabad-scope .btn { width: 100% !important; justify-content: center !important; text-align: center !important; padding: 12px 16px !important; font-size: 12px !important; white-space: normal !important; word-break: break-word !important; }
          .faridabad-scope .trust-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .faridabad-scope .trust-cell { padding: 14px 10px !important; text-align: center !important; border-radius: 6px !important; }
          .faridabad-scope .trust-cell b { font-size: 20px !important; margin-bottom: 2px !important; color: var(--ink-dark) !important; }
          .faridabad-scope .trust-cell span { font-size: 10px !important; letter-spacing: 0.03em !important; color: #64748B !important; }

          .faridabad-scope .stat-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .faridabad-scope .stat { padding: 10px !important; background: rgba(255,255,255,0.05) !important; border-radius: 4px !important; text-align: center !important; }
          .faridabad-scope .stat b { font-size: 18px !important; }
          .faridabad-scope .stat span { font-size: 9.5px !important; }

          .faridabad-scope .street-board { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; background: transparent !important; border: none !important; margin-top: 16px !important; }
          .faridabad-scope .street-cell { padding: 6px 12px !important; font-size: 11.5px !important; border-radius: 20px !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; flex: 0 0 auto !important; color: var(--ink-dark) !important; }

          .faridabad-scope .area-grid { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-top: 16px !important; }
          .faridabad-scope .area-tag { padding: 6px 10px !important; font-size: 11px !important; border-radius: 20px !important; flex: 0 0 auto !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; color: var(--ink-dark) !important; }

          .faridabad-scope .top-svc,
          .faridabad-scope .why-grid,
          .faridabad-scope .steps {
            grid-template-columns: 1fr;
          }
          .faridabad-scope .hero { padding-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce){
          .faridabad-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      <FaridabadSections pageVars={pageVars} stats={stats} openFaqs={openFaqs} toggleFaq={toggleFaq} />
    </div>
  );
}
