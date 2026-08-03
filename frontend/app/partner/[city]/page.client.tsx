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
          font-size: 38px;
          line-height: 1.1;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        @media (min-width: 768px) {
          .partner-scope h1 { font-size: 52px; }
        }

        .partner-scope .lead {
          font-size: 17px;
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

        /* Benefits & Workflow */
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
          transition: transform 0.15s, border-color 0.15s;
        }
        .partner-scope .benefit-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
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
          border-radius: 8px;
          padding: 24px;
          position: relative;
        }
        .partner-scope .step-num {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          background: rgba(230, 43, 43, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 16px;
        }
        .partner-scope .step-card h4 {
          font-family: var(--font-oswald), sans-serif;
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
          border-radius: 6px;
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
          padding: 6px 12px;
          border-radius: 99px;
        }

        /* CTA Banner */
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
                <span className="ticket-label">Monthly Potential:</span>
                <span className="ticket-val" style={{ color: "#4ADE80" }}>{cityData.monthlyEarnings}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Registration Fee:</span>
                <span className="ticket-val">{cityData.joiningFee}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Daily Payout SLA:</span>
                <span className="ticket-val">Same-Day Bank Transfer</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Coverage Region:</span>
                <span className="ticket-val">{cityData.cityName} & Sectors</span>
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
              <b>{cityData.monthlyEarnings}</b>
              <span>Monthly Earning</span>
            </div>
            <div className="stat-item">
              <b>₹0</b>
              <span>Joining Fee</span>
            </div>
            <div className="stat-item">
              <b>DAILY</b>
              <span>Instant Payout</span>
            </div>
            <div className="stat-item">
              <b>{cityData.activePartnersCount}</b>
              <span>Active Mechanics</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Why Become a FixWheel Partner in {cityData.cityName}?</h2>
          <p className="section-desc">Join Delhi NCR's most mechanic-friendly doorstep bike repair platform with guaranteed orders and transparent payouts.</p>
          
          <div className="benefits-grid">
            {cityData.benefits.map((b, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-icon">
                  {idx === 0 ? <DollarSign size={22} /> : idx === 1 ? <ShieldCheck size={22} /> : <Wrench size={22} />}
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
          <h2 className="section-title">4 Simple Steps to Start Earning</h2>
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
              <h4>Start Earning</h4>
              <p>Accept doorstep repair requests in your preferred {cityData.cityName} sectors and get daily payouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALITIES GRID */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Partner Locality Coverage in {cityData.cityName}</h2>
          <p className="section-desc">Click on your preferred locality to view mechanic onboarding details and earnings potential.</p>

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
          <h2 className="section-title">Partner FAQs — {cityData.cityName}</h2>
          <p className="section-desc">Frequently asked questions by mechanics and garage owners in {cityData.cityName}.</p>

          <div>
            {partnerFaqs.map((faq, idx) => (
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

      {/* KEYWORDS */}
      <section className="content-section">
        <div className="container">
          <h3 style={{ fontFamily: "var(--font-oswald), sans-serif", fontSize: 20, marginBottom: 16 }}>Popular Searches for Mechanic Jobs in {cityData.cityName}</h3>
          <div className="tag-cloud">
            {cityData.seoKeywords.map((kw, i) => (
              <span key={i}>#{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Become a Certified Mechanic Partner in {cityData.cityName}?</h2>
          <p>Join over 400+ active partner mechanics earning ₹35,000 to ₹65,000/month with zero joining fees.</p>
          <Link href="/partner" className="btn-primary" style={{ display: "inline-flex" }}>
            Apply for Onboarding Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
