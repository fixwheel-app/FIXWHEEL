"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { BIKE_DATA } from "@/lib/bikes";
import { cn } from "@/lib/utils";

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
  brandSlug: string;
}

export default function BrandDetailClient({ brandSlug }: ClientProps) {
  const brandData = BRAND_DETAILS[brandSlug];
  const [activeTab, setActiveTab] = useState<"description" | "models" | "reviews">("description");

  // Fetch all models from BIKE_DATA
  let brandObj = BIKE_DATA["Non-Electric Motorbike"].find(b => b.name.toLowerCase() === brandData.name.toLowerCase());
  if (!brandObj) {
    brandObj = BIKE_DATA["Electric Motorbike"].find(b => b.name.toLowerCase() === brandData.name.toLowerCase());
  }
  // Fallbacks for sub-brands
  if (!brandObj) {
    if (brandData.name.toLowerCase().includes("ola")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find(b => b.id === "ola");
    } else if (brandData.name.toLowerCase().includes("ather")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find(b => b.id === "ather");
    }
  }

  const allModels = brandObj ? brandObj.models.map(m => m.name) : [];

  return (
    <div className={`brand-detail-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-detail-scope {
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
        .brand-detail-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .brand-detail-scope img { max-width: 100%; display: block; }
        .brand-detail-scope a { color: inherit; text-decoration: none; }
        .brand-detail-scope ul { list-style: none; }
        .brand-detail-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .brand-detail-scope h1, .brand-detail-scope h2, .brand-detail-scope h3, .brand-detail-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .brand-detail-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .brand-detail-scope .eyebrow {
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
        .brand-detail-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .brand-detail-scope .btn {
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
        .brand-detail-scope .btn-primary { background: var(--accent); color: #17181A; }
        .brand-detail-scope .btn-primary:hover { background: #eb4d4d; transform: translateY(-2px); }
        .brand-detail-scope .btn-dark { background: var(--ink-dark); color: var(--paper); }
        .brand-detail-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== BREADCRUMB ===== */
        .brand-detail-scope .breadcrumb {
          padding: 20px 0;
          background: #111214;
          border-bottom: 1px solid var(--line);
        }
        .brand-detail-scope .breadcrumb nav {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #A7A9AC;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .brand-detail-scope .breadcrumb a {
          color: #A7A9AC;
          transition: color .15s ease;
        }
        .brand-detail-scope .breadcrumb a:hover { color: var(--accent); }
        .brand-detail-scope .breadcrumb .sep { color: #5C6066; }
        .brand-detail-scope .breadcrumb .current { color: var(--accent); font-weight: 700; }

        /* ===== HERO ===== */
        .brand-detail-scope .hero {
          position: relative;
          padding: 80px 0 56px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .brand-detail-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background: repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px), radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .brand-detail-scope .hero-inner {
          position: relative; z-index: 1;
          max-width: 800px;
        }
        .brand-detail-scope .hero h1 { font-size: 52px; margin: 0 0 22px; color: var(--paper); }
        .brand-detail-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .brand-detail-scope .hero p.lead { font-size: 17px; color: #A7A9AC; max-width: 620px; margin-bottom: 32px; }
        .brand-detail-scope .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

        /* ===== TRUST STRIP ===== */
        .brand-detail-scope .trust-strip {
          border-bottom: 1px solid var(--line-paper);
          background: var(--paper-dim);
        }
        .brand-detail-scope .trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line-paper);
        }
        .brand-detail-scope .trust-item {
          background: #FFFFFF;
          padding: 28px 24px;
          text-align: center;
        }
        .brand-detail-scope .trust-item b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 22px;
          color: var(--ink-dark);
          margin-bottom: 6px;
        }
        .brand-detail-scope .trust-item span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ===== TABS COMPONENT ===== */
        .brand-detail-scope .tabs-section {
          padding: 80px 0;
          background: var(--paper);
        }
        .brand-detail-scope .tab-container {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
        }
        
        /* The header container mirrors the custom shape from the user's attachment */
        .brand-detail-scope .tab-headers {
          display: flex;
          background: var(--paper-dim);
          border-bottom: 1px solid var(--line-paper);
          padding-top: 10px;
          padding-left: 10px;
          gap: 6px;
        }
        .brand-detail-scope .tab-header-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          color: #5A5D62;
          background: #E0D8C6;
          border: 1px solid var(--line-paper);
          border-bottom: none;
          padding: 14px 28px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          margin-bottom: -1px;
          position: relative;
        }
        .brand-detail-scope .tab-header-btn:hover {
          color: var(--ink-dark);
          background: #FFFFFF;
        }
        .brand-detail-scope .tab-header-btn.active {
          color: var(--accent);
          background: #FFFFFF;
          border-color: var(--line-paper) var(--line-paper) #FFFFFF var(--line-paper);
          z-index: 2;
        }
        
        .brand-detail-scope .tab-content {
          padding: 40px;
          background: #FFFFFF;
          color: var(--ink-dark);
        }

        /* Tab Content: Description View */
        .brand-detail-scope .info-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        .brand-detail-scope .brand-desc p {
          font-size: 15.5px;
          line-height: 1.7;
          color: #4A4D52;
          margin-bottom: 24px;
        }
        .brand-detail-scope .brand-features {
          margin-top: 32px;
        }
        .brand-detail-scope .brand-features h3 {
          font-size: 22px;
          color: var(--ink-dark);
          margin-bottom: 16px;
        }
        .brand-detail-scope .feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .brand-detail-scope .feature-item {
          background: var(--paper);
          border: 1px solid var(--line-paper);
          padding: 16px;
          border-radius: 4px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .brand-detail-scope .info-card {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 24px;
          border-radius: 2px;
        }
        .brand-detail-scope .info-card h4 {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .brand-detail-scope .info-card p {
          font-size: 14px;
          color: var(--paper);
          line-height: 1.6;
        }
        .brand-detail-scope .benefits-section-title {
          font-size: 24px;
          color: var(--paper);
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 12px;
        }
        .brand-detail-scope .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .brand-detail-scope .benefit-card {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 24px;
          border-radius: 2px;
          transition: border-color 0.15s;
        }
        .brand-detail-scope .benefit-card:hover {
          border-color: var(--accent);
        }
        .brand-detail-scope .benefit-card h3 {
          font-size: 18px;
          color: var(--paper);
          margin-bottom: 10px;
        }
        .brand-detail-scope .benefit-card p {
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.6;
        }

        /* Tab Content: Models View */
        .brand-detail-scope .models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .brand-detail-scope .model-link-card {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 20px 24px;
          border-radius: 2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.15s, transform 0.15s;
        }
        .brand-detail-scope .model-link-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .brand-detail-scope .model-link-card .name {
          font-family: var(--font-jetbrains), monospace;
          font-weight: 700;
          font-size: 14px;
          color: var(--paper);
        }
        .brand-detail-scope .model-link-card .action {
          font-size: 11px;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Tab Content: Reviews View */
        .brand-detail-scope .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .brand-detail-scope .review-card {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 28px;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
        }
        .brand-detail-scope .review-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .brand-detail-scope .review-user h4 {
          font-size: 16px;
          color: var(--paper);
        }
        .brand-detail-scope .review-user span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
        }
        .brand-detail-scope .review-rating {
          color: var(--stamp);
          font-family: var(--font-jetbrains), monospace;
          font-size: 14px;
          font-weight: bold;
        }
        .brand-detail-scope .review-comment {
          font-size: 14px;
          color: var(--paper-dim);
          line-height: 1.6;
          font-style: italic;
        }
        .brand-detail-scope .review-date {
          margin-top: 16px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          color: var(--ink-dim);
          text-transform: uppercase;
        }

        /* ===== FINAL CTA ===== */
        .brand-detail-scope .final-cta {
          text-align: center;
          padding: 90px 0;
          background: linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .brand-detail-scope .final-cta h2 { font-size: 38px; color: var(--paper); max-width: 700px; margin: 0 auto 16px;}
        .brand-detail-scope .final-cta p { color: var(--ink-dim); margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .brand-detail-scope .hero h1 { font-size: 38px; }
          .brand-detail-scope .info-grid { grid-template-columns: 1fr; gap: 20px; }
          .brand-detail-scope .benefits-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .models-grid { grid-template-columns: repeat(2, 1fr); }
          .brand-detail-scope .reviews-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .trust-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width:560px){
          .brand-detail-scope .models-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .trust-inner { grid-template-columns: 1fr; }
          .brand-detail-scope .hero { padding-top: 70px; }
          .brand-detail-scope .tab-headers { flex-direction: column; padding-right: 10px; gap: 4px; }
          .brand-detail-scope .tab-header-btn { border-bottom: 1px solid var(--line); border-radius: 4px; }
          .brand-detail-scope .tab-content { padding: 20px; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb">
        <div className="wrap">
          <nav>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/brands">Brands</Link>
            <span className="sep">/</span>
            <span className="current">{brandData.name}</span>
          </nav>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="eyebrow">{brandData.name} Supported Drivetrains · Doorstep Service</div>
            <h1>Doorstep <em>{brandData.name}</em><br />Service & Repair</h1>
            <p className="lead">{brandData.description}</p>
            <div className="hero-ctas">
              <Link href={`/book/${brandSlug}`} className="btn btn-primary">Book {brandData.name} Service →</Link>
              <button onClick={() => setActiveTab("models")} className="btn btn-dark">View Supported Models ({allModels.length})</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="trust-strip">
        <div className="wrap">
          <div className="trust-inner">
            <div className="trust-item">
              <b>45 MIN</b>
              <span>Avg arrival time</span>
            </div>
            <div className="trust-item">
              <b>4.7 ★</b>
              <span>Average rating</span>
            </div>
            <div className="trust-item">
              <b>473+</b>
              <span>Bikes serviced</span>
            </div>
            <div className="trust-item">
              <b>GENUINE</b>
              <span>OEM Spare Parts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS SECTION ===== */}
      <section className="tabs-section">
        <div className="wrap">
          <div className="tab-container">
            
            {/* Custom shaped headers mirroring user's layout */}
            <div className="tab-headers">
              <button
                className={cn("tab-header-btn", activeTab === "description" && "active")}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={cn("tab-header-btn", activeTab === "models" && "active")}
                onClick={() => setActiveTab("models")}
              >
                Serviced Models ({allModels.length})
              </button>
              <button
                className={cn("tab-header-btn", activeTab === "reviews" && "active")}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({brandData.reviews.length})
              </button>
            </div>

            <div className="tab-content">
              {/* === TAB 1: DESCRIPTION & DETAILS === */}
              {activeTab === "description" && (
                <div>
                  <div className="info-grid">
                    <div className="info-card">
                      <h4>Engine Lubrication Spec</h4>
                      <p>{brandData.additionalInfo.engineOil}</p>
                    </div>
                    <div className="info-card">
                      <h4>Parts & Service Policy</h4>
                      <p>{brandData.additionalInfo.parts}</p>
                    </div>
                    <div className="info-card">
                      <h4>Diagnostics & Repair Warranty</h4>
                      <p>{brandData.additionalInfo.warranty}</p>
                    </div>
                    <div className="info-card">
                      <h4>SLA Response Guarantee</h4>
                      <p>{brandData.additionalInfo.avgTime}</p>
                    </div>
                  </div>

                  <h3 className="benefits-section-title">Specialized Doorstep Benefits</h3>
                  <div className="benefits-grid">
                    {brandData.keyBenefits.map((benefit, idx) => (
                      <div className="benefit-card" key={idx}>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* === TAB 2: SERVICED MODELS GRID === */}
              {activeTab === "models" && (
                <div className="models-grid">
                  {allModels.length === 0 ? (
                    <p style={{ gridColumn: "span 3", textAlign: "center", color: "var(--ink-dim)" }} className="mono">
                      No models listed. General servicing applies to all {brandData.name} vehicles.
                    </p>
                  ) : (
                    allModels.map((model) => (
                      <Link
                        key={model}
                        href={`/book/${brandSlug}?model=${encodeURIComponent(model)}`}
                        className="model-link-card"
                      >
                        <span className="name">{model}</span>
                        <span className="action">Book →</span>
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* === TAB 3: CUSTOMER REVIEWS === */}
              {activeTab === "reviews" && (
                <div className="reviews-grid">
                  {brandData.reviews.map((review, idx) => (
                    <div className="review-card" key={idx}>
                      <div className="review-meta">
                        <div className="review-user">
                          <h4>{review.name}</h4>
                          <span>Owner of {review.vehicle} · {review.location}</span>
                        </div>
                        <div className="review-rating">
                          {Array(review.rating).fill("★").join("")}
                        </div>
                      </div>
                      <p className="review-comment">"{review.comment}"</p>
                      <div className="review-date">{review.date}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Instant Booking</div>
          <h2>Ready to book doorstep service?</h2>
          <p>Get a highly experienced mechanic at your home or office. Flat rates, full transparency, and a 15-day labor warranty on all {brandData.name} models.</p>
          <Link href={`/book/${brandSlug}`} className="btn btn-primary">Book Your {brandData.name} Service Now →</Link>
        </div>
      </section>
    </div>
  );
}
