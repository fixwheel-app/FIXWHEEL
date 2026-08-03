"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Oswald, JetBrains_Mono } from 'next/font/google';
import { PARTNER_CITY_DATA } from '@/lib/partnerData';
import { cn } from '@/lib/utils';
import {
  ChevronDown, Phone, CheckCircle2, ShieldCheck, DollarSign, Wrench, Clock, MapPin, Sparkles, ArrowRight
} from 'lucide-react';

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

interface ClientProps {
  citySlug: string;
  localitySlug: string;
}

export default function PartnerLocalityClient({ citySlug, localitySlug }: ClientProps) {
  const cityData = PARTNER_CITY_DATA[citySlug] || PARTNER_CITY_DATA["gurgaon"];
  const localityObj = cityData.localities.find((l) => l.slug === localitySlug) || {
    slug: localitySlug,
    name: localitySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  };

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const localityHeading = `Become a Partner Mechanic in ${localityObj.name}, ${cityData.cityName}`;
  const localityLead = `Are you a two-wheeler mechanic or garage owner in ${localityObj.name}? Partner with FixWheel to get doorstep bike service bookings directly in ${localityObj.name} and surrounding sectors. Earn up to ${cityData.monthlyEarnings}/month with zero joining fees and instant daily bank payouts.`;

  return (
    <div className={`partner-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .partner-scope {
          --ink-dark: #0F172A;
          --ink-body: #1E293B;
          --ink-dim: #64748B;
          --bg-paper: #FFFFFF;
          --bg-panel: #F8FAFC;
          --line-paper: #E2E8F0;
          --accent: #e62b2b;
          --accent-hover: #cc2222;
          background: #FFFFFF;
          color: var(--ink-body);
          font-family: system-ui, -apple-system, sans-serif;
        }

        .partner-scope .hero {
          background-color: #17181A;
          color: #FFFFFF;
          padding: 120px 0 64px 0;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        @media (min-width: 768px) {
          .partner-scope .hero {
            padding-top: 150px;
            padding-bottom: 80px;
          }
        }

        .partner-scope .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(230, 43, 43, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .partner-scope .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .partner-scope .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #94A3B8;
          margin-bottom: 24px;
          font-family: var(--font-jetbrains), monospace;
          text-transform: uppercase;
        }
        .partner-scope .breadcrumb a { color: #94A3B8; text-decoration: none; }
        .partner-scope .breadcrumb a:hover { color: var(--accent); }

        .partner-scope .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .partner-scope .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .partner-scope .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(230, 43, 43, 0.12);
          border: 1px solid rgba(230, 43, 43, 0.3);
          color: #FF6B6B;
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .partner-scope h1 {
          font-family: var(--font-oswald), sans-serif;
          font-size: 36px;
          line-height: 1.1;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        @media (min-width: 768px) {
          .partner-scope h1 { font-size: 48px; }
        }

        .partner-scope .lead {
          font-size: 16.5px;
          line-height: 1.6;
          color: #CBD5E1;
          margin-bottom: 32px;
        }

        .partner-scope .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .partner-scope .btn-primary {
          background: var(--accent);
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.15s;
          font-size: 15px;
        }
        .partner-scope .btn-primary:hover { background: var(--accent-hover); }

        .partner-scope .btn-phone {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          color: #FFFFFF;
          padding: 14px 24px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
        }
        .partner-scope .btn-phone:hover { background: rgba(255,255,255,0.12); }

        /* Ticket Card */
        .partner-scope .ticket-card {
          background: #202225;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          position: relative;
        }
        .partner-scope .ticket-card::before {
          content: "";
          position: absolute;
          top: -1px; left: 24px; right: 24px;
          height: 3px;
          background: var(--accent);
          border-radius: 3px 3px 0 0;
        }
        .partner-scope .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed rgba(255,255,255,0.15);
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .partner-scope .ticket-id {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          color: var(--accent);
          font-weight: 700;
        }
        .partner-scope .ticket-status {
          background: rgba(34, 197, 94, 0.15);
          color: #4ADE80;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 99px;
          text-transform: uppercase;
        }
        .partner-scope .ticket-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .partner-scope .ticket-label { color: #94A3B8; }
        .partner-scope .ticket-val { color: #FFFFFF; font-weight: 600; text-align: right; }

        /* Trust Strip */
        .partner-scope .trust-strip {
          background: #FFFFFF;
          border-bottom: 1px solid var(--line-paper);
          padding: 28px 0;
        }
        .partner-scope .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (min-width: 768px) {
          .partner-scope .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .partner-scope .stat-item {
          text-align: center;
          padding: 12px;
          background: var(--bg-panel);
          border: 1px solid var(--line-paper);
          border-radius: 8px;
        }
        .partner-scope .stat-item b {
          display: block;
          font-family: var(--font-oswald), sans-serif;
          font-size: 26px;
          color: var(--ink-dark);
          line-height: 1.1;
        }
        .partner-scope .stat-item span {
          font-size: 12px;
          color: var(--ink-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* Content Sections */
        .partner-scope .content-section {
          padding: 64px 0;
          border-bottom: 1px solid var(--line-paper);
        }
        .partner-scope .section-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 32px;
          color: var(--ink-dark);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .partner-scope .section-desc {
          font-size: 16px;
          color: var(--ink-dim);
          margin-bottom: 40px;
          max-width: 700px;
        }
        .partner-scope .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .partner-scope .benefits-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .partner-scope .benefit-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 8px;
          padding: 24px;
        }
        .partner-scope .benefit-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: rgba(230, 43, 43, 0.08);
          color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .partner-scope .benefit-card h3 {
          font-family: var(--font-oswald), sans-serif;
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 8px;
        }
        .partner-scope .benefit-card p {
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.5;
        }

        /* FAQ */
        .partner-scope .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 6px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .partner-scope .faq-question {
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-family: var(--font-oswald), sans-serif;
          font-size: 18px;
          color: var(--ink-dark);
          text-transform: uppercase;
        }
        .partner-scope .faq-answer {
          padding: 0 24px 20px;
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.6;
          border-top: 1px solid rgba(0,0,0,0.04);
          padding-top: 14px;
        }

        .partner-scope .cta-banner {
          background: #17181A;
          color: #FFFFFF;
          padding: 60px 0;
          text-align: center;
        }
        .partner-scope .cta-banner h2 {
          font-family: var(--font-oswald), sans-serif;
          font-size: 36px;
          margin-bottom: 16px;
        }
        .partner-scope .cta-banner p {
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto 28px;
          font-size: 16px;
        }
      `}}
      />

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/partner">Become Partner</Link> / <Link href={`/partner/${cityData.slug}`}>{cityData.cityName}</Link> / <span>{localityObj.name}</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="hero-tag">
                <Sparkles size={14} /> Local Onboarding — {localityObj.name}
              </div>
              <h1>{localityHeading}</h1>
              <p className="lead">{localityLead}</p>
              <div className="hero-cta">
                <Link href="/partner" className="btn-primary">
                  Apply as Partner Mechanic <ArrowRight size={16} />
                </Link>
                <a href="tel:+919999999999" className="btn-phone">
                  <Phone size={16} /> Call Onboarding Desk
                </a>
              </div>
            </div>

            {/* Ticket Card */}
            <div className="ticket-card">
              <div className="ticket-header">
                <span className="ticket-id">PASS #{localityObj.slug.toUpperCase()}-PARTNER</span>
                <span className="ticket-status">Active Recruiting ✓</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Locality Radius:</span>
                <span className="ticket-val" style={{ color: "#4ADE80" }}>{localityObj.name} Sector</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Monthly Income:</span>
                <span className="ticket-val">{cityData.monthlyEarnings}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Registration Fee:</span>
                <span className="ticket-val">₹0 (FREE)</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Payout Settlement:</span>
                <span className="ticket-val">Same-Day Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <b>{cityData.monthlyEarnings}</b>
              <span>Monthly Income</span>
            </div>
            <div className="stat-item">
              <b>₹0</b>
              <span>Joining Fee</span>
            </div>
            <div className="stat-item">
              <b>DAILY</b>
              <span>Same-Day Payout</span>
            </div>
            <div className="stat-item">
              <b>{localityObj.name}</b>
              <span>Active Zone</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Partner Benefits in {localityObj.name}</h2>
          <p className="section-desc">Get direct customer repair bookings from residential complexes and commercial centers in {localityObj.name}.</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><DollarSign size={22} /></div>
              <h3>100% Daily Bank Payouts</h3>
              <p>Receive every rupee earned directly into your UPI/Bank account at the end of each working day in {localityObj.name}.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><ShieldCheck size={22} /></div>
              <h3>Work Near Your Home</h3>
              <p>Set your primary operational radius to {localityObj.name} to minimize travel time and maximize completed daily jobs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Wrench size={22} /></div>
              <h3>Free Portable Tool Kit</h3>
              <p>Get a complete set of portable wrenches, diagnostic cables, safety gear, and FixWheel partner uniform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="content-section" style={{ background: "var(--bg-panel)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Partner FAQs — {localityObj.name}</h2>
          <p className="section-desc">Frequently asked questions by bike mechanics servicing {localityObj.name}.</p>

          <div>
            {cityData.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaqs[idx] ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }} />
                </div>
                {openFaqs[idx] && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2>Apply for Mechanic Onboarding in {localityObj.name} Today</h2>
          <p>Start receiving doorstep two-wheeler service orders in {localityObj.name} with zero joining fees.</p>
          <Link href="/partner" className="btn-primary" style={{ display: "inline-flex" }}>
            Apply for Onboarding Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
