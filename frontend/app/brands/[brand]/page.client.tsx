"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BRAND_DETAILS } from "@/lib/brandDetails";
import { BIKE_DATA } from "@/lib/bikes";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";

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
  const [modelQuery, setModelQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  if (!brandData) return null;

  // Fetch all models from BIKE_DATA
  let brandObj = BIKE_DATA["Non-Electric Motorbike"].find(
    (b) => b.name.toLowerCase() === brandData.name.toLowerCase()
  );
  if (!brandObj) {
    brandObj = BIKE_DATA["Electric Motorbike"].find(
      (b) => b.name.toLowerCase() === brandData.name.toLowerCase()
    );
  }
  // Fallbacks for sub-brands
  if (!brandObj) {
    if (brandData.name.toLowerCase().includes("ola")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find((b) => b.id === "ola");
    } else if (brandData.name.toLowerCase().includes("ather")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find((b) => b.id === "ather");
    }
  }

  const allModels = brandObj ? brandObj.models.map((m) => m.name) : [];
  const filteredModels = allModels.filter((m) =>
    m.toLowerCase().includes(modelQuery.toLowerCase().trim())
  );

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const brandFaqs = [
    {
      q: `How long does doorstep ${brandData.name} service take in Delhi NCR?`,
      a: `Routine servicing for ${brandData.name} two-wheelers typically takes 35 to 50 minutes. Our certified mechanics arrive fully equipped at your doorstep with all required OEM spares and tools.`,
    },
    {
      q: `Do you use 100% genuine ${brandData.name} OEM spare parts?`,
      a: `Yes, we use 100% genuine OEM spare parts (${brandData.additionalInfo.parts}). All replaced parts are inspected and handed over to you after servicing.`,
    },
    {
      q: `What engine oil is used for ${brandData.name} bikes & scooters?`,
      a: `We use recommended ${brandData.name} specification oil (${brandData.additionalInfo.engineOil}) or high-grade Motul/Yamalube synthetic blends depending on your bike model.`,
    },
    {
      q: `Is there a warranty on doorstep ${brandData.name} repairs?`,
      a: `Yes, FixWheel provides a 15-day quality labor warranty on all ${brandData.name} services and diagnostics, plus manufacturer warranties on replacement components.`,
    },
    {
      q: `Which locations in Delhi NCR do you cover for ${brandData.name} service?`,
      a: `We cover all major locations across Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad. You can book doorstep service at your home or office parking.`,
    },
  ];

  return (
    <div className={`brand-detail-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .brand-detail-scope {
          --bg: #FFFFFF;
          --bg-soft: #F8FAFC;
          --paper: #FFFFFF;
          --paper-dim: #F8FAFC;
          --ink: #1E293B;
          --ink-dim: #64748B;
          --ink-dark: #0F172A;
          --accent: #e62b2b;
          --accent-dim: #d32f2f;
          --stamp: #FFC145;
          --steel: #5C7A93;
          --line: rgba(0,0,0,0.08);
          --line-paper: #E2E8F0;
          --radius: 4px;

          --hero-bg: #17181A;
          --hero-text: #FFFFFF;
          --hero-ink-dim: #A7A9AC;

          background: var(--bg);
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
        .brand-detail-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .brand-detail-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .brand-detail-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .brand-detail-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }
        .brand-detail-scope .btn-outline { border: 1px solid var(--line-paper); background: #FFFFFF; color: var(--ink-dark); }
        .brand-detail-scope .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

        /* ===== BREADCRUMB ===== */
        .brand-detail-scope .breadcrumb {
          padding: 20px 0;
          background: #111214;
          border-bottom: 1px solid rgba(255,255,255,0.1);
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
          padding: 88px 0 60px;
          background: var(--hero-bg);
          color: var(--hero-text);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .brand-detail-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.12), transparent 70%);
          pointer-events: none;
        }
        .brand-detail-scope .hero-inner {
          position: relative; z-index: 1;
          max-width: 820px;
        }
        .brand-detail-scope .hero h1 { font-size: 54px; margin: 0 0 20px; color: var(--hero-text); }
        .brand-detail-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .brand-detail-scope .hero p.lead { font-size: 17px; color: var(--hero-ink-dim); max-width: 650px; margin-bottom: 32px; line-height: 1.6; }
        .brand-detail-scope .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }

        .brand-detail-scope .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .brand-detail-scope .hero-stat {
          font-family: var(--font-jetbrains), monospace;
        }
        .brand-detail-scope .hero-stat b {
          display: block;
          font-size: 20px;
          color: #FFFFFF;
        }
        .brand-detail-scope .hero-stat span {
          font-size: 11px;
          color: #A7A9AC;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ===== TRUST STRIP ===== */
        .brand-detail-scope .trust-strip {
          border-bottom: 1px solid var(--line-paper);
          background: var(--bg-soft);
        }
        .brand-detail-scope .trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line-paper);
        }
        .brand-detail-scope .trust-item {
          background: #FFFFFF;
          padding: 26px 20px;
          text-align: center;
        }
        .brand-detail-scope .trust-item b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 4px;
        }
        .brand-detail-scope .trust-item span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ===== TABS COMPONENT ===== */
        .brand-detail-scope .tabs-section {
          padding: 72px 0;
          background: var(--bg);
        }
        .brand-detail-scope .tab-container {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .brand-detail-scope .tab-headers {
          display: flex;
          background: var(--bg-soft);
          border-bottom: 1px solid var(--line-paper);
          padding-top: 8px;
          padding-left: 8px;
          gap: 6px;
        }
        .brand-detail-scope .tab-header-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--ink-dim);
          background: #F1F5F9;
          border: 1px solid var(--line-paper);
          border-bottom: none;
          padding: 14px 26px;
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
          padding: 36px;
          background: #FFFFFF;
          color: var(--ink-dark);
        }

        /* Tab Content: Description View */
        .brand-detail-scope .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .brand-detail-scope .info-card {
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          padding: 24px;
          border-radius: 4px;
          transition: border-color 0.15s;
        }
        .brand-detail-scope .info-card:hover {
          border-color: var(--accent);
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
          font-size: 14.5px;
          color: var(--ink-dark);
          font-weight: 500;
          line-height: 1.5;
        }

        .brand-detail-scope .benefits-section-title {
          font-size: 24px;
          color: var(--ink-dark);
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line-paper);
          padding-bottom: 12px;
        }
        .brand-detail-scope .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .brand-detail-scope .benefit-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          padding: 24px;
          border-radius: 4px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .brand-detail-scope .benefit-card:hover {
          border-color: var(--accent);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.06);
        }
        .brand-detail-scope .benefit-card h3 {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 10px;
        }
        .brand-detail-scope .benefit-card p {
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.6;
        }

        /* Tab Content: Models View */
        .brand-detail-scope .model-search-bar {
          margin-bottom: 24px;
          position: relative;
          max-width: 400px;
        }
        .brand-detail-scope .model-search-input {
          width: 100%;
          padding: 10px 14px 10px 38px;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          color: var(--ink-dark);
        }
        .brand-detail-scope .model-search-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .brand-detail-scope .models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .brand-detail-scope .model-link-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          padding: 20px 24px;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .brand-detail-scope .model-link-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -8px rgba(230,43,43,0.12);
        }
        .brand-detail-scope .model-link-card .name {
          font-family: var(--font-jetbrains), monospace;
          font-weight: 700;
          font-size: 14px;
          color: var(--ink-dark);
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
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          padding: 26px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }
        .brand-detail-scope .review-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .brand-detail-scope .review-user h4 {
          font-size: 16px;
          color: var(--ink-dark);
        }
        .brand-detail-scope .review-user span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
        }
        .brand-detail-scope .review-rating {
          color: #F59E0B;
          font-family: var(--font-jetbrains), monospace;
          font-size: 14px;
          font-weight: bold;
        }
        .brand-detail-scope .review-comment {
          font-size: 14px;
          color: var(--ink);
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

        /* ===== FAQ ACCORDION SECTION ===== */
        .brand-detail-scope .faq-section {
          padding: 80px 0;
          background: var(--bg-soft);
          border-top: 1px solid var(--line-paper);
          border-bottom: 1px solid var(--line-paper);
        }
        .brand-detail-scope .faq-head {
          max-width: 640px;
          margin-bottom: 40px;
        }
        .brand-detail-scope .faq-head h2 { font-size: 36px; color: var(--ink-dark); }
        .brand-detail-scope .faq-grid {
          max-width: 860px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .brand-detail-scope .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.15s;
        }
        .brand-detail-scope .faq-item.open {
          border-color: var(--accent);
        }
        .brand-detail-scope .faq-question {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-family: var(--font-oswald), sans-serif;
          font-size: 18px;
          color: var(--ink-dark);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .brand-detail-scope .faq-answer {
          padding: 0 24px 22px;
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.65;
          border-top: 1px solid rgba(0,0,0,0.04);
          padding-top: 16px;
        }

        /* ===== KEYWORDS & FOOTPRINT ===== */
        .brand-detail-scope .keywords-section {
          padding: 64px 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--line-paper);
        }
        .brand-detail-scope .keywords-title {
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 16px;
        }
        .brand-detail-scope .tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }
        .brand-detail-scope .tag-pill {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          padding: 6px 14px;
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          border-radius: 20px;
          color: var(--ink-dim);
        }

        .brand-detail-scope .locations-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        .brand-detail-scope .location-link {
          padding: 12px 14px;
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--ink-dark);
          text-align: center;
          transition: border-color 0.15s, color 0.15s;
        }
        .brand-detail-scope .location-link:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ===== FINAL CTA ===== */
        .brand-detail-scope .final-cta {
          text-align: center;
          padding: 88px 0;
          background: #17181A;
          color: #FFFFFF;
        }
        .brand-detail-scope .final-cta h2 { font-size: 42px; color: #FFFFFF; max-width: 720px; margin: 0 auto 16px; }
        .brand-detail-scope .final-cta p { color: #A7A9AC; margin-bottom: 32px; max-width: 580px; margin-left: auto; margin-right: auto; font-size: 16px; }
        .brand-detail-scope .final-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px){
          .brand-detail-scope .hero h1 { font-size: 38px; }
          .brand-detail-scope .info-grid { grid-template-columns: 1fr; gap: 16px; }
          .brand-detail-scope .benefits-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .models-grid { grid-template-columns: repeat(2, 1fr); }
          .brand-detail-scope .reviews-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .trust-inner { grid-template-columns: repeat(2, 1fr); }
          .brand-detail-scope .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .brand-detail-scope .locations-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width:560px){
          .brand-detail-scope .models-grid { grid-template-columns: 1fr; }
          .brand-detail-scope .trust-inner { grid-template-columns: 1fr; }
          .brand-detail-scope .hero { padding-top: 60px; }
          .brand-detail-scope .tab-headers { flex-direction: column; padding-right: 8px; gap: 4px; }
          .brand-detail-scope .tab-header-btn { border-bottom: 1px solid var(--line-paper); border-radius: 4px; }
          .brand-detail-scope .tab-content { padding: 20px; }
          .brand-detail-scope .locations-grid { grid-template-columns: 1fr; }
        }
      ` }}
      />

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
            <div className="eyebrow">{brandData.name} Doorstep Service & Repair · Delhi NCR</div>
            <h1>
              Doorstep <em>{brandData.name}</em>
              <br />
              Bike & Scooter Service
            </h1>
            <p className="lead">{brandData.description}</p>

            <div className="hero-ctas">
              <Link href={`/book/${brandSlug}`} className="btn btn-primary">
                Book {brandData.name} Service Now →
              </Link>
              <button onClick={() => setActiveTab("models")} className="btn btn-outline" style={{ background: "transparent", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}>
                View Supported Models ({allModels.length})
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <b>45 MIN</b>
                <span>Doorstep arrival</span>
              </div>
              <div className="hero-stat">
                <b>4.7 ★</b>
                <span>Average rating</span>
              </div>
              <div className="hero-stat">
                <b>473+</b>
                <span>{brandData.name} serviced</span>
              </div>
              <div className="hero-stat">
                <b>15 DAYS</b>
                <span>Labor warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="trust-strip">
        <div className="wrap">
          <div className="trust-inner">
            <div className="trust-item">
              <b>DOORSTEP</b>
              <span>Home or Office</span>
            </div>
            <div className="trust-item">
              <b>15 DAYS</b>
              <span>Labor Warranty</span>
            </div>
            <div className="trust-item">
              <b>ZERO HIGHWAY</b>
              <span>Flat Honest Rates</span>
            </div>
            <div className="trust-item">
              <b>VERIFIED</b>
              <span>Certified Mechanics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS SECTION ===== */}
      <section className="tabs-section">
        <div className="wrap">
          <div className="tab-container">
            {/* Custom shaped headers */}
            <div className="tab-headers">
              <button
                className={cn("tab-header-btn", activeTab === "description" && "active")}
                onClick={() => setActiveTab("description")}
              >
                Specifications & Policies
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
                Customer Reviews ({brandData.reviews.length})
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

                  <h3 className="benefits-section-title">Specialized Doorstep Benefits for {brandData.name}</h3>
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
                <div>
                  {allModels.length > 5 && (
                    <div className="model-search-bar">
                      <input
                        type="text"
                        placeholder={`Search ${brandData.name} model...`}
                        value={modelQuery}
                        onChange={(e) => setModelQuery(e.target.value)}
                        className="model-search-input"
                      />
                    </div>
                  )}
                  <div className="models-grid">
                    {filteredModels.length === 0 ? (
                      <p
                        style={{ gridColumn: "span 3", textAlign: "center", color: "var(--ink-dim)" }}
                        className="mono"
                      >
                        No matching models found. General doorstep servicing applies to all {brandData.name} vehicles.
                      </p>
                    ) : (
                      filteredModels.map((model) => {
                        const mSlug = model.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                        return (
                          <Link
                            key={model}
                            href={`/brands/${brandSlug}/${mSlug}`}
                            className="model-link-card"
                          >
                            <span className="name">{model}</span>
                            <span className="action">View & Book →</span>
                          </Link>
                        );
                      })
                    )}
                  </div>
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
                          <span>
                            Owner of {review.vehicle} · {review.location}
                          </span>
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

      {/* ===== BRAND FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="wrap">
          <div className="faq-head">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2>{brandData.name} Doorstep Service FAQs</h2>
          </div>
          <div className="faq-grid">
            {brandFaqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx];
              return (
                <div key={idx} className={cn("faq-item", isOpen && "open")}>
                  <div className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <ChevronDown
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </div>
                  {isOpen && <div className="faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== KEYWORDS & LOCATION FOOTPRINT ===== */}
      <section className="keywords-section">
        <div className="wrap">
          <h3 className="keywords-title">Popular {brandData.name} Service Searches in Delhi NCR</h3>
          <div className="tags-cloud">
            {brandData.seoKeywords.map((kw, i) => (
              <span key={i} className="tag-pill">
                #{kw}
              </span>
            ))}
          </div>

          <h3 className="keywords-title" style={{ marginTop: "24px" }}>
            Book {brandData.name} Doorstep Service by City
          </h3>
          <div className="locations-grid">
            <Link href="/gurgaon" className="location-link">
              Gurgaon / Gurugram
            </Link>
            <Link href="/delhi" className="location-link">
              Delhi NCR
            </Link>
            <Link href="/noida" className="location-link">
              Noida
            </Link>
            <Link href="/ghaziabad" className="location-link">
              Ghaziabad
            </Link>
            <Link href="/faridabad" className="location-link">
              Faridabad
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--accent)" }}>
            Doorstep Convenience
          </div>
          <h2>Ready to service your {brandData.name}?</h2>
          <p>
            Get a verified mechanic at your home or office parking. 45-minute arrival time, 100% genuine parts, transparent pricing, and 15-day labor warranty.
          </p>
          <div className="final-cta-btns">
            <Link href={`/book/${brandSlug}`} className="btn btn-primary">
              Book {brandData.name} Service Now →
            </Link>
            <a href="tel:+919999999999" className="btn btn-outline" style={{ background: "transparent", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}>
              <Phone className="w-4 h-4" /> Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
