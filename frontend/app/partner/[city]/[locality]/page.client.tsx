"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Oswald, JetBrains_Mono } from 'next/font/google';
import { PARTNER_CITY_DATA } from '@/lib/partnerData';
import {
  ChevronDown, Phone, ShieldCheck, Wrench, Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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
  const localityLead = `Are you a two-wheeler mechanic or garage owner in ${localityObj.name}? Partner with FixWheel to get doorstep bike & scooter service bookings directly in ${localityObj.name} and surrounding sectors. Complete work flexibility, zero joining fee, and full technical support.`;

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
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          line-height: 1.55;
        }

        .partner-scope h1, .partner-scope h2, .partner-scope h3, .partner-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .partner-scope .mono {
          font-family: var(--font-jetbrains), monospace;
        }

        .partner-scope .hero {
          background-color: #17181A;
          color: #FFFFFF;
          padding: 100px 0 60px 0;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        @media (min-width: 768px) {
          .partner-scope .hero {
            padding-top: 120px;
            padding-bottom: 80px;
          }
        }

        .partner-scope .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }

        .partner-scope .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

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
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-jetbrains), monospace;
          margin-bottom: 16px;
        }

        .partner-scope h1 {
          font-size: 36px;
          color: #FFFFFF;
          margin-bottom: 20px;
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
          border-radius: 4px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.15s, transform 0.15s;
        }
        .partner-scope .btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); }

        .partner-scope .btn-phone {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.18);
          color: #FFFFFF;
          padding: 14px 24px;
          border-radius: 4px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .partner-scope .btn-phone:hover { background: rgba(255,255,255,0.12); }

        /* Ticket Card */
        .partner-scope .ticket-card {
          background: #FFFFFF;
          color: var(--ink-dark);
          border-radius: 6px;
          padding: 26px 28px 22px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .partner-scope .ticket-card::before, .partner-scope .ticket-card::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: #17181A;
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .partner-scope .ticket-card::before { left: -11px; }
        .partner-scope .ticket-card::after { right: -11px; }

        .partner-scope .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed #E2E8F0;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }
        .partner-scope .ticket-id {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          color: var(--ink-dark);
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .partner-scope .ticket-status {
          background: rgba(34, 197, 94, 0.12);
          color: #16A34A;
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .partner-scope .ticket-row {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          margin-bottom: 12px;
        }
        .partner-scope .ticket-label {
          color: var(--ink-dim);
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .partner-scope .ticket-val { color: var(--ink-dark); font-weight: 600; text-align: right; }

        /* Trust Strip */
        .partner-scope .trust-strip {
          background: #FFFFFF;
          border-bottom: 1px solid var(--line-paper);
          padding: 28px 0;
        }
        .partner-scope .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 768px) {
          .partner-scope .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .partner-scope .stat-item {
          text-align: center;
          padding: 20px 16px;
          background: var(--bg-panel);
          border: 1px solid var(--line-paper);
          border-radius: 4px;
        }
        .partner-scope .stat-item b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 22px;
          color: var(--ink-dark);
          margin-bottom: 4px;
        }
        .partner-scope .stat-item span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Content Sections */
        .partner-scope .content-section {
          padding: 80px 0;
          border-bottom: 1px solid var(--line-paper);
          background: #FFFFFF;
        }
        .partner-scope .section-title {
          font-size: 34px;
          color: var(--ink-dark);
          margin-bottom: 12px;
        }
        .partner-scope .section-desc {
          font-size: 15.5px;
          color: var(--ink-dim);
          margin-bottom: 44px;
          max-width: 660px;
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
          border-radius: 4px;
          padding: 28px 24px;
          transition: transform 0.15s, border-color 0.15s;
        }
        .partner-scope .benefit-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .partner-scope .benefit-icon {
          width: 44px; height: 44px;
          border-radius: 4px;
          background: rgba(230, 43, 43, 0.08);
          color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .partner-scope .benefit-card h3 {
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 8px;
        }
        .partner-scope .benefit-card p {
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.6;
        }

        /* FAQ */
        .partner-scope .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .partner-scope .faq-question {
          padding: 20px 24px;
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
          padding: 0 24px 22px;
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.65;
          border-top: 1px solid rgba(0,0,0,0.04);
          padding-top: 16px;
        }

        .partner-scope .cta-banner {
          background: #17181A;
          color: #FFFFFF;
          padding: 70px 0;
          text-align: center;
        }
        .partner-scope .cta-banner h2 {
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

      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Become Partner", href: "/partner" }, { label: cityData.cityName, href: `/partner/${cityData.slug}` }, { label: localityObj.name }]} />
        </div>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="container">

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
                <span className="ticket-val">{localityObj.name} Sector</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Registration Fee:</span>
                <span className="ticket-val" style={{ color: "#16A34A" }}>₹0 (FREE)</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Work Schedule:</span>
                <span className="ticket-val">100% Flexible Hours</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Labor Warranty:</span>
                <span className="ticket-val">15-Day Quality Guarantee</span>
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
              <b>₹0</b>
              <span>Joining Fee</span>
            </div>
            <div className="stat-item">
              <b>{localityObj.name}</b>
              <span>Active Sector</span>
            </div>
            <div className="stat-item">
              <b>45 MIN</b>
              <span>Doorstep Dispatch</span>
            </div>
            <div className="stat-item">
              <b>15 DAYS</b>
              <span>Labor Guarantee</span>
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
              <div className="benefit-icon"><CheckCircle2 size={22} /></div>
              <h3>Direct Customer Bookings</h3>
              <p>Receive doorstep service bookings directly on the FixWheel app from residents and commuters in {localityObj.name}.</p>
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
                  <ChevronDown size={18} style={{ transform: openFaqs[idx] ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s", color: "var(--accent)" }} />
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
