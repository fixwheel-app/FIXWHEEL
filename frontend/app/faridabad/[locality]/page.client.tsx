"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { LOCALITY_DB } from "./localityData";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getIntroParagraph,
  getWhyChooseTitle,
  getWhyChooseCards,
  getHowItWorksTitle,
  getHowItWorksSteps,
  getCoverageTitle,
  getFinalCTAText
} from "@/lib/contentVariations";

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

interface LocalityClientProps {
  slug: string;
}

function getDeterministicTicketDetails(localityName: string, slug: string, servicePrice: string, eta: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const bookingIdNum = 1000 + (hash % 150);
  const bookingId = `FW-FBD-${bookingIdNum}`;

  const services = [
    "Basic Service",
    "Engine Oil Change",
    "Brake Replacement",
    "Comprehensive Service",
    "Battery Replacement"
  ];
  const service = services[hash % services.length];

  const models = [
    "Honda Activa",
    "Royal Enfield Classic 350",
    "TVS Jupiter",
    "Hero Splendor Plus",
    "Bajaj Pulsar 150",
    "Yamaha FZ",
    "Suzuki Access 125"
  ];
  const model = models[hash % models.length];

  let price = parseInt(servicePrice) || 499;
  if (service === "Engine Oil Change") price = 999;
  if (service === "Battery Replacement") price = 199;
  if (service === "Comprehensive Service") price = 1499;

  return {
    bookingId,
    service,
    model,
    price: `₹${price}`,
    location: localityName,
    eta: `${25 + (hash % 21)} min`
  };
}

export default function FaridabadLocalityClientPage({ slug }: LocalityClientProps) {
  const data = LOCALITY_DB[slug];
  const ticket = data ? getDeterministicTicketDetails(data.name, slug, data.servicePrice, data.eta) : null;

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true, // First one open by default
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  if (!data) {
    return (
      <div style={{ padding: "80px 24px", textAlign: "center", color: "#EDEAE2", background: "#17181A", minHeight: "100vh" }}>
        <h2>Locality not found</h2>
        <p style={{ marginTop: "12px" }}><Link href="/faridabad" style={{ color: "#ff3b30" }}>Return to Faridabad All Coverage →</Link></p>
      </div>
    );
  }

  // Interlinking: List other key localities in Faridabad
  const otherSlugs = Object.keys(LOCALITY_DB).filter((k) => k !== slug).slice(0, 5);

  const whyCards = getWhyChooseCards(data.name);
  const howSteps = getHowItWorksSteps(data.name);
  const finalCta = getFinalCTAText(data.name);

  return (
    <div className={`${slug}-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .${slug}-scope {
          --bg:#0F172A;
          --bg-soft:#1E293B;
          --paper:#FFFFFF;
          --paper-dim:#F8FAFC;
          --ink:#1E293B;
          --ink-dim:#64748B;
          --ink-dark:#0F172A;
          --accent:#e62b2b;
          --accent-dim:#a81f1f;
          --stamp:#FFC145;
          --live:#38B26A;
          --line:rgba(0,0,0,0.08);
          --line-paper:#E2E8F0;
          --radius:4px;

          background: #FFFFFF;
          color: var(--ink-dark);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .${slug}-scope img { max-width: 100%; display: block; }
        .${slug}-scope a { color: inherit; text-decoration: none; }
        .${slug}-scope ul { list-style: none; }
        .${slug}-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .${slug}-scope h1, .${slug}-scope h2, .${slug}-scope h3, .${slug}-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .${slug}-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .${slug}-scope .eyebrow {
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
        .${slug}-scope .eyebrow::before { content:""; width:24px; height:1px; background:var(--accent); }
        .${slug}-scope .btn {
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
        .${slug}-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .${slug}-scope .btn-primary:hover { background: #ff3d3d; transform: translateY(-2px); }
        .${slug}-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: #FFFFFF; }
        .${slug}-scope .btn-ghost:hover { border-color: var(--paper); }
        .${slug}-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .${slug}-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* breadcrumb */
        .${slug}-scope .crumb { background: #111214; color: #FFFFFF; border-bottom: 1px solid var(--line); padding-top: 16px; }
        .${slug}-scope .crumb .wrap { display: flex; align-items: center; gap: 8px; padding: 12px 24px; font-family: var(--font-jetbrains); font-size: 11.5px; letter-spacing: 0.04em; color: #A7A9AC; }
        .${slug}-scope .crumb a { color: #A7A9AC; font-weight: 500; }
        .${slug}-scope .crumb a:hover { color: var(--accent); }
        .${slug}-scope .crumb .sep { opacity: .6; color: #5C6066; }
        .${slug}-scope .crumb .current { color: var(--accent); font-weight: 700; }

        /* ===== HERO ===== */
        .${slug}-scope .hero { position: relative; padding: 64px 0 56px; background: #17181A; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.12); overflow: hidden; }
        .${slug}-scope .hero::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px), radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%); pointer-events: none; }
        .${slug}-scope .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; position: relative; z-index: 1; }
        .${slug}-scope .hero h1 { font-size: 44px; margin: 0 0 20px; color: #FFFFFF; }
        .${slug}-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .${slug}-scope .hero p.lead { font-size: 16.5px; color: #A7A9AC; max-width: 500px; margin-bottom: 28px; }
        .${slug}-scope .hero-ctas { display: flex; gap: 16px; margin-bottom: 0; flex-wrap: wrap; }

        /* ticket mock */
        .${slug}-scope .ticket {
          background: #FFFFFF;
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .${slug}-scope .ticket::before, .${slug}-scope .ticket::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: var(--bg);
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .${slug}-scope .ticket::before { left: -11px; }
        .${slug}-scope .ticket::after { right: -11px; }
        .${slug}-scope .ticket-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8;
          padding-bottom: 14px; margin-bottom: 14px;
        }
        .${slug}-scope .ticket-id { font-family: var(--font-jetbrains); font-size: 13px; letter-spacing: 0.04em; font-weight: 700; }
        .${slug}-scope .ticket-id span { display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;}
        .${slug}-scope .ticket-status {
          font-family: var(--font-jetbrains); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
          transform: rotate(2deg);
        }
        .${slug}-scope .ticket-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 16px;}
        .${slug}-scope .ticket-rows .r label { display: block; font-family: var(--font-jetbrains); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;}
        .${slug}-scope .ticket-rows .r div { font-size: 14px; font-weight: 600; }
        .${slug}-scope .ticket-foot {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px dashed #D8CFB8; padding-top: 14px;
        }
        .${slug}-scope .ticket-foot .total b { font-size: 20px; color: var(--accent); }
        .${slug}-scope .ticket-foot .total span { display: block; font-size: 10px; color: #8a836f; letter-spacing: 0.06em; text-transform: uppercase;}

        .${slug}-scope section { padding: 76px 0; border-bottom: 1px solid var(--line-paper); background: #FFFFFF; color: var(--ink-dark); }
        .${slug}-scope .section-head { max-width: 640px; margin-bottom: 40px; }
        .${slug}-scope .section-head h2 { font-size: 30px; color: var(--ink-dark); }
        .${slug}-scope .section-head p { color: #475569; margin-top: 14px; font-size: 15px; }
        .${slug}-scope .section-alt { background: #F8FAFC; }

        /* local trust strip */
        .${slug}-scope .trust-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line-paper); border: 1px solid var(--line-paper); }
        .${slug}-scope .trust-cell { background: #FFFFFF; padding: 26px 22px; }
        .${slug}-scope .trust-cell b { display: block; font-family: var(--font-jetbrains); font-size: 26px; color: var(--ink-dark); margin-bottom: 4px; }
        .${slug}-scope .trust-cell span { font-size: 11.5px; color: #6B6E72; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-jetbrains); }

        /* streets/societies list */
        .${slug}-scope .street-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line-paper); border: 1px solid var(--line-paper); }
        .${slug}-scope .street-cell { background: #FFFFFF; color: var(--ink-dark); padding: 18px 18px; font-family: var(--font-jetbrains); font-size: 13px; display: flex; align-items: center; gap: 10px; }
        .${slug}-scope .street-cell .pin { color: var(--accent); font-size: 11px; }
        .${slug}-scope .street-note { margin-top: 20px; font-size: 13.5px; color: #5A5D62; }
        .${slug}-scope .street-note a { color: var(--accent); font-weight: 600; }

        /* top services */
        .${slug}-scope .top-svc { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .${slug}-scope .top-svc-card { background: #FFFFFF; border: 1px solid var(--line-paper); padding: 22px; border-radius: 4px; transition: border-color .15s ease, transform .15s ease; }
        .${slug}-scope .top-svc-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .${slug}-scope .top-svc-card .rank { font-family: var(--font-jetbrains); font-size: 10.5px; color: var(--accent); font-weight: 700; letter-spacing: 0.08em; margin-bottom: 10px; display: block; }
        .${slug}-scope .top-svc-card h3 { font-size: 15.5px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 8px; }
        .${slug}-scope .top-svc-card p { font-size: 13px; color: #5A5D62; margin-bottom: 14px; min-height: 40px; }
        .${slug}-scope .top-svc-card .go { font-family: var(--font-jetbrains); font-size: 11.5px; color: var(--accent); font-weight: 700; }
        .${slug}-scope .catalog-link { margin-top: 24px; font-size: 14px; color: #5A5D62; }
        .${slug}-scope .catalog-link a { color: var(--accent); font-weight: 600; }

        /* ===== WHY CARDS ===== */
        .${slug}-scope .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .${slug}-scope .why-card { background: #FFFFFF; border: 1px solid var(--line-paper); border-left: 4px solid var(--accent); padding: 28px 24px; border-radius: 4px; }
        .${slug}-scope .why-card .num { font-family: var(--font-jetbrains); color: var(--accent); font-size: 13px; margin-bottom: 16px; display: block; font-weight: 700; }
        .${slug}-scope .why-card h3 { font-size: 16.5px; color: var(--ink-dark); margin-bottom: 8px; text-transform: none; letter-spacing: 0; }
        .${slug}-scope .why-card p { font-size: 13.5px; color: #475569; }

        /* ===== HOW IT WORKS ===== */
        .${slug}-scope .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .${slug}-scope .step { position: relative; padding-top: 20px; border-top: 2px solid var(--line-paper); }
        .${slug}-scope .step .n { font-family: var(--font-jetbrains); font-size: 34px; color: var(--accent); display: block; margin-bottom: 12px; font-weight: 700; }
        .${slug}-scope .step h3 { font-size: 15px; text-transform: none; letter-spacing: 0; color: var(--ink-dark); margin-bottom: 6px; }
        .${slug}-scope .step p { font-size: 13px; color: #5A5D62; }

        /* ===== BRANDS ===== */
        .${slug}-scope .brand-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .${slug}-scope .brand-chip { display: flex; align-items: center; gap: 10px; background: #FFFFFF; border: 1px solid var(--line-paper); padding: 10px 16px; border-radius: 30px; font-size: 13.5px; color: var(--ink-dark); }
        .${slug}-scope .brand-chip img { width: 18px; height: 18px; border-radius: 50%; }

        /* ===== PARTNER ===== */
        .${slug}-scope .partner { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .${slug}-scope .partner ul { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .${slug}-scope .partner li { font-size: 14.5px; color: var(--ink-dark); display: flex; gap: 10px; }
        .${slug}-scope .partner li::before { content: "—"; color: var(--accent); }
        .${slug}-scope .partner-box { background: #0F172A; border: 1px solid rgba(255, 255, 255, 0.15); padding: 34px; border-radius: 6px; }

        /* ===== CONTACT & EMERGENCY ===== */
        .${slug}-scope .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .${slug}-scope .contact-list { margin-top: 24px; display: flex; flex-direction: column; gap: 16px; }
        .${slug}-scope .contact-item { display: flex; align-items: center; gap: 16px; }
        .${slug}-scope .contact-item .ic {
          width: 40px; height: 40px; border-radius: 50%; background: rgba(230, 43, 43, 0.08);
          color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .${slug}-scope .contact-item b { display: block; font-size: 15px; color: var(--ink-dark); }
        .${slug}-scope .contact-item span { font-size: 12px; color: var(--ink-dim); }

        .${slug}-scope .review-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .${slug}-scope .review { background: #FFFFFF; border: 1px solid var(--line-paper); color: var(--ink-dark); padding: 24px; border-radius: 4px; }
        .${slug}-scope .review .stars { color: var(--accent); font-size: 14px; margin-bottom: 12px; letter-spacing: 2px; }
        .${slug}-scope .review p { font-size: 14px; margin-bottom: 16px; color: #4A4D52; }
        .${slug}-scope .review .who { font-family: var(--font-jetbrains); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; }



        .${slug}-scope .final-cta { text-align: center; padding: 90px 0; background: var(--bg); color: var(--paper); border-top: 1px solid var(--line); }
        .${slug}-scope .final-cta h2 { font-size: 38px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px; }
        .${slug}-scope .final-cta p { color: #475569; margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto; }

        .${slug}-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .${slug}-scope .faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15.5px; color: var(--ink-dark); font-weight: 500; }
        .${slug}-scope .faq-q .plus { font-family: var(--font-jetbrains); color: var(--accent); font-size: 18px; transition: transform .2s ease; }
        .${slug}-scope .faq-item.open .plus { transform: rotate(45deg); }
        .${slug}-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .${slug}-scope .faq-item.open .faq-a { max-height: 200px; }
        .${slug}-scope .faq-a p { padding-bottom: 20px; color: #475569; font-size: 14px; max-width: 760px; }

        /* silo links */
        .${slug}-scope .silo { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .${slug}-scope .silo a { font-family: var(--font-jetbrains); font-size: 12px; border: 1px solid var(--line-paper); padding: 9px 16px; border-radius: 30px; color: var(--ink-dark); background: #FFFFFF; transition: border-color .15s ease, color .15s ease; }
        .${slug}-scope .silo a:hover { border-color: var(--accent); color: var(--paper); }
        .${slug}-scope .silo a.hub { border-color: var(--accent); color: var(--accent); }

        .${slug}-scope .final-cta { text-align: center; padding: 80px 0; background: linear-gradient(180deg, transparent, rgba(230,43,43,0.06)); }
        .${slug}-scope .final-cta h2 { font-size: 34px; color: var(--ink-dark); max-width: 700px; margin: 0 auto 16px; }
        .${slug}-scope .final-cta p { color: #475569; margin-bottom: 28px; }

        @media (max-width: 900px) {
          .${slug}-scope .hero-grid { grid-template-columns: 1fr; }
          .${slug}-scope .hero h1 { font-size: 34px; }
          .${slug}-scope .trust-strip { grid-template-columns: repeat(2, 1fr); }
          .${slug}-scope .street-board { grid-template-columns: repeat(2, 1fr); }
          .${slug}-scope .top-svc { grid-template-columns: repeat(2, 1fr); }
          .${slug}-scope .why-grid { grid-template-columns: repeat(2, 1fr); }
          .${slug}-scope .steps { grid-template-columns: repeat(2, 1fr); }
          .${slug}-scope .partner { grid-template-columns: 1fr; }
          .${slug}-scope .review-grid { grid-template-columns: 1fr; }
        }

                @media (max-width: 560px) {
          .${slug}-scope .trust-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .${slug}-scope .trust-cell { padding: 14px 10px !important; text-align: center !important; border-radius: 6px !important; }
          .${slug}-scope .trust-cell b { font-size: 20px !important; margin-bottom: 2px !important; color: var(--ink-dark) !important; }
          .${slug}-scope .trust-cell span { font-size: 10px !important; letter-spacing: 0.03em !important; color: #64748B !important; }

          .${slug}-scope .stat-row { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .${slug}-scope .stat { padding: 10px !important; background: rgba(255,255,255,0.05) !important; border-radius: 4px !important; text-align: center !important; }
          .${slug}-scope .stat b { font-size: 18px !important; }
          .${slug}-scope .stat span { font-size: 9.5px !important; }

          .${slug}-scope .street-board { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; background: transparent !important; border: none !important; margin-top: 16px !important; }
          .${slug}-scope .street-cell { padding: 6px 12px !important; font-size: 11.5px !important; border-radius: 20px !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; flex: 0 0 auto !important; color: var(--ink-dark) !important; }

          .${slug}-scope .area-grid { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-top: 16px !important; }
          .${slug}-scope .area-tag { padding: 6px 10px !important; font-size: 11px !important; border-radius: 20px !important; flex: 0 0 auto !important; background: #FFFFFF !important; border: 1px solid var(--line-paper) !important; color: var(--ink-dark) !important; }

          .${slug}-scope .top-svc,
          .${slug}-scope .why-grid,
          .${slug}-scope .svc-grid,
          .${slug}-scope .steps {
            grid-template-columns: 1fr;
          }
          .${slug}-scope .hero { padding-top: 48px; }
        }
          .${slug}-scope .hero { padding-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .${slug}-scope * { transition: none !important; scroll-behavior: auto !important; }
          .${slug}-scope .live-dot::before { animation: none; }
        }
      ` }} />

      <div className="crumb" style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Faridabad", href: "/faridabad" }, { label: data.name }]} />
        </div>
      </div>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Bike repair service · {data.name}</div>
            <h1>Doorstep Bike Repair<br />in <em>{data.name}, Faridabad</em></h1>
            <p className="lead">Looking for <strong>doorstep repair near me</strong> or a verified <strong>two wheeler mechanic near me</strong>? FixWheel provides <strong>doorstep repair in {data.name}</strong> and professional <strong>bike repair in {data.name} at home</strong>. {data.heroText}</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic Now →</Link>
              <a href="#coverage" className="btn btn-ghost">Check my street</a>
            </div>
          </div>
          {ticket && (
            <div className="ticket">
              <div className="ticket-top">
                <div className="ticket-id">{ticket.bookingId}<span>SERVICE DETAILS</span></div>
                <div className="ticket-status">Completed ✓</div>
              </div>
              <div className="ticket-rows">
                <div className="r"><label>Service</label><div>{ticket.service}</div></div>
                <div className="r"><label>Model</label><div>{ticket.model}</div></div>
                <div className="r"><label>Location</label><div>{ticket.location}</div></div>
                <div className="r"><label>Mechanic</label><div>Verified ✓</div></div>
                <div className="r"><label>Warranty</label><div>15 days</div></div>
                <div className="r"><label>Response</label><div>{ticket.eta}</div></div>
              </div>
              <div className="ticket-foot">
                <div className="total"><span>Total paid</span><b>{ticket.price}</b></div>
                <div className="mono" style={{ fontSize: "11px", color: "#8a836f" }}>FARIDABAD · NCR</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{data.name}</div>
            <h2>Two Wheeler Mechanic in {data.name}, Faridabad</h2>
            <p>{getIntroParagraph(data.name, "Faridabad")}</p>
          </div>
          <div className="trust-strip">
            <div className="trust-cell"><b>45 min</b><span>Arrival time</span></div>
            <div className="trust-cell"><b>473+</b><span>Total vehicles serviced</span></div>
            <div className="trust-cell"><b>4.7★</b><span>Rider rating</span></div>
            <div className="trust-cell"><b>All blocks</b><span>Local Coverage</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why FixWheel {data.name}</div>
            <h2>{getWhyChooseTitle(data.name)}</h2>
            <p>{data.whyChooseText}</p>
          </div>
          <div className="why-grid">
            {whyCards.map((card, idx) => (
              <div className="why-card" key={idx}>
                <span className="num">0{idx + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>{getHowItWorksTitle(data.name)}</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">01</span>
              <h3>Book</h3>
              <p>{howSteps[0]}</p>
            </div>
            <div className="step">
              <span className="n">02</span>
              <h3>Get matched</h3>
              <p>{howSteps[1]}</p>
            </div>
            <div className="step">
              <span className="n">03</span>
              <h3>Service done</h3>
              <p>{howSteps[2]}</p>
            </div>
            <div className="step">
              <span className="n">04</span>
              <h3>Pay & rate</h3>
              <p>{howSteps[3]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>{getCoverageTitle(data.name)}</h2>
            <p>This is the street-level detail we don't repeat on the main Faridabad page — because it only matters if you actually live or ride here.</p>
          </div>
          <div className="street-board">
            {data.coveragePoints.map((point, idx) => (
              <div key={idx} className="street-cell">
                <span className="pin">📍</span>{point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Top doorstep service packages in {data.name}</h2>
            <p>Flat-rate mechanical services handled directly at your residence.</p>
          </div>
          <div className="top-svc">
            {data.topServices.map((svc, idx) => (
              <div key={idx} className="top-svc-card">
                <span className="rank">{svc.rank}</span>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <Link href={svc.link} className="go">View Service →</Link>
              </div>
            ))}
          </div>
          <div className="catalog-link">
            Looking for something else? <Link href="/services">Explore our full repair catalog →</Link>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic in {data.name}?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>We're building out our mechanic network in {data.name} — join early to get priority dispatch on job requests coming from surrounding sectors.</p>
            <ul>
              <li>Be assigned to bookings in {data.name}</li>
              <li>Flexible working hours</li>
              <li>Easy booking management from the app</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "#FFFFFF", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "22px" }}>Sign up in a few minutes and start receiving job requests from riders in {data.name}.</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>What riders in {data.name} say</h2>
          </div>
          <div className="review-grid">
            {data.reviews.map((rev, idx) => (
              <div key={idx} className="review">
                <div className="stars">{rev.stars}</div>
                <p>"{rev.text}"</p>
                <div className="who">{rev.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" id="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs</div>
            <h2>Frequently asked questions about doorstep service in {data.name}</h2>
          </div>
          <div className="faq-list">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaqs[idx] ? "open" : ""}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="plus">+</span>
                </div>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="silo">
            <span style={{ fontSize: "13px", color: "var(--ink-dim)", marginRight: "10px", alignSelf: "center" }}>Other localities in Faridabad:</span>
            <Link href="/faridabad" className="hub">Faridabad City Hub</Link>
            {otherSlugs.map((s, idx) => {
              const otherLoc = LOCALITY_DB[s];
              return (
                <Link key={idx} href={`/faridabad/${s}`}>{otherLoc.name}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT & ROADSIDE ASSISTANCE ===== */}
      <section id="contact">
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
              color: "#FFFFFF",
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
            <h3 style={{ fontSize: "22px", color: "var(--ink-dark)", marginTop: "10px" }}>{data.name} Roadside Assistance</h3>
            <p style={{ color: "#475569", fontSize: "14px" }}>
              Stranded on the road or have a breakdown in {data.name}? A mechanic will come to your location with tools to fix your bike or scooter on the spot.</p>
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

      {/* ===== LOCATION FOOTPRINT (PLACED DIRECTLY AFTER CONTACT US) ===== */}
      <section className="keywords-section" style={{ padding: "60px 0", borderBottom: "1px solid var(--line-paper)", background: "#FFFFFF" }}>
        <div className="wrap">
          <h3 className="keywords-title" style={{ fontSize: "18px", color: "var(--ink-dark)", marginBottom: "20px", fontFamily: "var(--font-jetbrains)", textTransform: "uppercase" }}>
            Book Doorstep Service by City
          </h3>
          <div className="locations-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
            <Link href="/gurgaon" style={{ padding: "14px 16px", background: "#0F172A", border: "1px solid #334155", borderRadius: "6px", fontWeight: "700", color: "#FFFFFF", textAlign: "center", fontSize: "13.5px", textDecoration: "none" }}>
              Gurgaon / Gurugram
            </Link>
            <Link href="/delhi" style={{ padding: "14px 16px", background: "#0F172A", border: "1px solid #334155", borderRadius: "6px", fontWeight: "700", color: "#FFFFFF", textAlign: "center", fontSize: "13.5px", textDecoration: "none" }}>
              Delhi NCR
            </Link>
            <Link href="/noida" style={{ padding: "14px 16px", background: "#0F172A", border: "1px solid #334155", borderRadius: "6px", fontWeight: "700", color: "#FFFFFF", textAlign: "center", fontSize: "13.5px", textDecoration: "none" }}>
              Noida
            </Link>
            <Link href="/ghaziabad" style={{ padding: "14px 16px", background: "#0F172A", border: "1px solid #334155", borderRadius: "6px", fontWeight: "700", color: "#FFFFFF", textAlign: "center", fontSize: "13.5px", textDecoration: "none" }}>
              Ghaziabad
            </Link>
            <Link href="/faridabad" style={{ padding: "14px 16px", background: "#0F172A", border: "1px solid #334155", borderRadius: "6px", fontWeight: "700", color: "#FFFFFF", textAlign: "center", fontSize: "13.5px", textDecoration: "none" }}>
              Faridabad
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>{finalCta.h2}</h2>
          <p>{finalCta.p}</p>
          <Link href="/book" className="btn btn-primary">Book Your Doorstep Service Now →</Link>
        </div>
      </section>
    </div>
  );
}
