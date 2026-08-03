"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Oswald, JetBrains_Mono } from 'next/font/google';
import { PARTNER_CITY_DATA } from '@/lib/partnerData';
import {
  ChevronDown, Phone, ShieldCheck, Wrench, Sparkles, ArrowRight, CheckCircle2, Clock
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
}

export default function PartnerCityClient({ citySlug }: ClientProps) {
  const cityData = PARTNER_CITY_DATA[citySlug] || PARTNER_CITY_DATA["gurgaon"];
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const partnerFaqs = cityData.faqs;

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

        .partner-scope .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #94A3B8;
          margin-bottom: 24px;
          font-family: var(--font-jetbrains), monospace;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .partner-scope .breadcrumb a { color: #94A3B8; text-decoration: none; transition: color 0.15s; }
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
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-jetbrains), monospace;
          margin-bottom: 16px;
        }

        .partner-scope h1 {
          font-size: 38px;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .partner-scope h1 { font-size: 52px; }
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

        /* Benefits & Workflow */
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

        /* Onboarding Steps */
        .partner-scope .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .partner-scope .steps-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .partner-scope .step-card {
          background: var(--bg-panel);
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 24px;
        }
        .partner-scope .step-num {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          background: rgba(230, 43, 43, 0.08);
          padding: 4px 10px;
          border-radius: 3px;
          display: inline-block;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }
        .partner-scope .step-card h4 {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 8px;
        }
        .partner-scope .step-card p {
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.5;
        }

        /* Localities Grid */
        .partner-scope .locality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 640px) { .partner-scope .locality-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 992px) { .partner-scope .locality-grid { grid-template-columns: repeat(4, 1fr); } }

        .partner-scope .locality-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: var(--ink-dark);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.15s;
        }
        .partner-scope .locality-card:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: #FFF5F5;
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

        /* Keywords tag cloud */
        .partner-scope .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .partner-scope .tag-cloud span {
          background: var(--bg-panel);
          border: 1px solid var(--line-paper);
          color: var(--ink-dim);
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 3px;
          font-family: var(--font-jetbrains), monospace;
        }

        /* CTA Banner */
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

      {/* HERO HEADER */}
      <header className="hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/partner">Become Partner</Link> / <span>{cityData.cityName}</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="hero-tag">
                <Sparkles size={14} /> Partner Onboarding — {cityData.cityName}
              </div>
              <h1>{cityData.headingTitle}</h1>
              <p className="lead">{cityData.leadParagraph}</p>
              <div className="hero-cta">
                <Link href="/partner" className="btn-primary">
                  Apply as Partner Mechanic <ArrowRight size={16} />
                </Link>
                <a href="tel:+919999999999" className="btn-phone">
                  <Phone size={16} /> Call Partner Desk
                </a>
              </div>
            </div>

            {/* Ticket Pass */}
            <div className="ticket-card">
              <div className="ticket-header">
                <span className="ticket-id">PASS #{cityData.slug.toUpperCase()}-PARTNER</span>
                <span className="ticket-status">Recruiting Now ✓</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Registration Fee:</span>
                <span className="ticket-val" style={{ color: "#16A34A" }}>{cityData.joiningFee}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Work Schedule:</span>
                <span className="ticket-val">100% Flexible Hours</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Coverage Region:</span>
                <span className="ticket-val">{cityData.cityName} & Sectors</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Labor Warranty:</span>
                <span className="ticket-val">15-Day Quality Guarantee</span>
              </div>
              <div className="ticket-row" style={{ marginBottom: 0 }}>
                <span className="ticket-label">Active Mechanics:</span>
                <span className="ticket-val">{cityData.activePartnersCount}</span>
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
              <b>{cityData.activePartnersCount}</b>
              <span>Active Mechanics</span>
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
          <h2 className="section-title">Why Become a FixWheel Partner in {cityData.cityName}?</h2>
          <p className="section-desc">Join Delhi NCR's most mechanic-friendly doorstep bike repair platform with direct customer bookings and full operational support.</p>
          
          <div className="benefits-grid">
            {cityData.benefits.map((b, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-icon">
                  {idx === 0 ? <CheckCircle2 size={22} /> : idx === 1 ? <ShieldCheck size={22} /> : <Wrench size={22} />}
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP WORKFLOW */}
      <section className="content-section" style={{ background: "var(--bg-panel)" }}>
        <div className="container">
          <h2 className="section-title">4 Simple Steps to Get Started</h2>
          <p className="section-desc">Getting started with FixWheel in {cityData.cityName} takes less than 24 hours.</p>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">STEP 01</span>
              <h4>Submit Application</h4>
              <p>Fill out the online partner registration form with your basic details and mechanic experience.</p>
            </div>
            <div className="step-card">
              <span className="step-num">STEP 02</span>
              <h4>Quick Verification</h4>
              <p>Visit our local {cityData.cityName} hub for a 15-minute document check and practical skill test.</p>
            </div>
            <div className="step-card">
              <span className="step-num">STEP 03</span>
              <h4>Receive Tool Kit</h4>
              <p>Get your portable tool kit, safety gear, and FixWheel Partner App access setup.</p>
            </div>
            <div className="step-card">
              <span className="step-num">STEP 04</span>
              <h4>Start Servicing</h4>
              <p>Accept doorstep repair requests in your preferred {cityData.cityName} sectors and deliver quality mechanic work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALITIES GRID */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Partner Locality Coverage in {cityData.cityName}</h2>
          <p className="section-desc">Click on your preferred locality to view mechanic onboarding and service area details.</p>

          <div className="locality-grid">
            {cityData.localities.map((loc) => (
              <Link key={loc.slug} href={`/partner/${cityData.slug}/${loc.slug}`} className="locality-card">
                <span>{loc.name}</span>
                <ChevronDown size={16} style={{ transform: "rotate(-90deg)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="content-section" style={{ background: "var(--bg-panel)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Frequently Asked Partner Questions — {cityData.cityName}</h2>
          <p className="section-desc">Everything you need to know about mechanic partnership, registration, tools, and onboarding in {cityData.cityName}.</p>

          <div>
            {partnerFaqs.map((faq, idx) => (
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

      {/* SEO KEYWORDS */}
      {cityData.seoKeywords && cityData.seoKeywords.length > 0 && (
        <section className="content-section" style={{ padding: "48px 0" }}>
          <div className="container">
            <h3 style={{ fontSize: "16px", color: "var(--ink-dark)", marginBottom: "16px" }} className="mono">
              POPULAR PARTNER SEARCHES IN {cityData.cityName.toUpperCase()}
            </h3>
            <div className="tag-cloud">
              {cityData.seoKeywords.map((kw, i) => (
                <span key={i}>{kw}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Partner with FixWheel in {cityData.cityName}?</h2>
          <p>Join Delhi NCR's trusted doorstep two-wheeler service network with zero joining fees and full technical support.</p>
          <Link href="/partner" className="btn-primary" style={{ display: "inline-flex" }}>
            Apply for Partner Mechanic Onboarding <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
