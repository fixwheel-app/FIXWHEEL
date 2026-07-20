"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { PRICING_CATEGORIES, SERVICE_PRICING_LIST, ServicePriceItem } from "@/lib/pricingData";

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

export default function PricingClientPage() {
  const [activeTab, setActiveTab] = useState<string>("cc0_249");

  const currentCategory = PRICING_CATEGORIES.find((c) => c.id === activeTab) || PRICING_CATEGORIES[0];

  // Helper to format price for display
  const getDisplayPrice = (item: ServicePriceItem) => {
    if (activeTab === "electric") {
      return item.prices.electric !== undefined ? item.prices.electric : item.prices.cc0_249;
    }
    const val = item.prices[activeTab as keyof typeof item.prices];
    return val !== undefined ? val : item.prices.cc0_249;
  };

  // Filter items for Electric vs Non-Electric
  const displayServices = SERVICE_PRICING_LIST.filter((item) => {
    if (activeTab === "electric") {
      return item.category === "Electric" || item.prices.electric !== undefined;
    }
    return true;
  });

  return (
    <div className={`pricing-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-scope {
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
        .pricing-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .pricing-scope img { max-width: 100%; display: block; object-fit: cover; }
        .pricing-scope a { color: inherit; text-decoration: none; }
        .pricing-scope ul { list-style: none; }
        .pricing-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .pricing-scope h1, .pricing-scope h2, .pricing-scope h3, .pricing-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .pricing-scope .wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
        .pricing-scope .eyebrow {
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
        .pricing-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .pricing-scope .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 22px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius);
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .pricing-scope .btn-primary { background: var(--accent); color: #17181A; }
        .pricing-scope .btn-primary:hover { background: #eb4d4d; transform: translateY(-2px); }

        /* ===== BREADCRUMB ===== */
        .pricing-scope .breadcrumb {
          padding: 20px 0;
          background: #111214;
          border-bottom: 1px solid var(--line);
        }
        .pricing-scope .breadcrumb nav {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #A7A9AC;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pricing-scope .breadcrumb a {
          color: #A7A9AC;
          transition: color .15s ease;
        }
        .pricing-scope .breadcrumb a:hover { color: var(--accent); }
        .pricing-scope .breadcrumb .sep { color: #5C6066; }
        .pricing-scope .breadcrumb .current { color: var(--accent); font-weight: 700; }

        /* ===== HERO HEADER ===== */
        .pricing-scope .pricing-hero {
          position: relative;
          padding: 64px 0 60px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .pricing-scope .pricing-hero::before {
          content: "";
          position: absolute; inset: 0;
          background: repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px), radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }

        .pricing-scope .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }
        .pricing-scope .hero-text h1 {
          font-size: 44px;
          color: var(--paper);
          margin-bottom: 18px;
          line-height: 1.12;
        }
        .pricing-scope .hero-text p {
          font-size: 16px;
          color: #A7A9AC;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        /* Ticket Card */
        .pricing-scope .ticket {
          background: var(--paper);
          color: var(--ink-dark);
          padding: 28px;
          border-radius: 4px;
          border: 1px solid var(--line-paper);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          position: relative;
        }
        .pricing-scope .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px dashed var(--line-paper);
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .pricing-scope .ticket-header span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
        }
        .pricing-scope .ticket-price-main {
          font-family: var(--font-oswald), sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 6px;
        }

        /* ===== CATEGORY FILTER TABS ===== */
        .pricing-scope .tabs-section {
          padding: 36px 0;
          background: var(--paper-dim);
          border-bottom: 1px solid var(--line-paper);
          position: sticky;
          top: 80px;
          z-index: 40;
        }
        .pricing-scope .tabs-bar {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
        }
        .pricing-scope .tab-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          color: #5A5D62;
          padding: 12px 20px;
          border-radius: 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pricing-scope .tab-btn:hover {
          border-color: var(--accent);
          color: var(--ink-dark);
        }
        .pricing-scope .tab-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #17181A;
        }
        .pricing-scope .tab-badge {
          font-size: 10px;
          background: rgba(0,0,0,0.15);
          padding: 2px 6px;
          border-radius: 10px;
        }

        /* Category Banner Info */
        .pricing-scope .category-banner {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-left: 4px solid var(--accent);
          border-radius: 4px;
          padding: 18px 24px;
          margin: 32px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .pricing-scope .category-banner h3 {
          font-size: 20px;
          color: var(--ink-dark);
          margin-bottom: 2px;
        }
        .pricing-scope .category-banner p {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          color: #6B6E72;
        }

        /* ===== PRICING CARDS GRID ===== */
        .pricing-scope .pricing-grid-section {
          padding: 60px 0 90px;
          background: var(--paper);
        }
        .pricing-scope .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .pricing-scope .price-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .pricing-scope .price-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -10px rgba(0,0,0,0.12);
        }
        .pricing-scope .price-card.popular-card {
          border: 2px solid var(--accent);
        }
        .pricing-scope .popular-stamp {
          position: absolute;
          top: -12px;
          right: 20px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          background: var(--stamp);
          color: #3a2c00;
          padding: 3px 10px;
          border-radius: 12px;
        }
        .pricing-scope .card-title {
          font-size: 22px;
          color: var(--ink-dark);
          margin-bottom: 8px;
        }
        .pricing-scope .card-desc {
          font-size: 13.5px;
          color: #5A5D62;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .pricing-scope .price-box {
          margin-bottom: 20px;
          padding: 16px 0;
          border-top: 1px dashed var(--line-paper);
          border-bottom: 1px dashed var(--line-paper);
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .pricing-scope .price-val {
          font-family: var(--font-oswald), sans-serif;
          font-size: 38px;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }
        .pricing-scope .price-unit {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
          text-transform: uppercase;
        }
        .pricing-scope .feature-list {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pricing-scope .feature-item {
          font-size: 13px;
          color: #4A4D52;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pricing-scope .feature-item span {
          color: var(--accent);
          font-weight: 700;
        }

        /* ===== FULL MATRIX RATE TABLE ===== */
        .pricing-scope .table-section {
          padding: 80px 0;
          background: var(--paper-dim);
          border-top: 1px solid var(--line-paper);
          border-bottom: 1px solid var(--line-paper);
        }
        .pricing-scope .table-wrapper {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow-x: auto;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.06);
        }
        .pricing-scope table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }
        .pricing-scope th {
          background: var(--bg);
          color: var(--paper);
          font-family: var(--font-oswald), sans-serif;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 16px 20px;
          border-bottom: 2px solid var(--accent);
        }
        .pricing-scope td {
          padding: 14px 20px;
          border-bottom: 1px solid var(--line-paper);
          color: #3A3D42;
        }
        .pricing-scope tr:nth-child(even) {
          background: #F9F7F2;
        }
        .pricing-scope tr:hover {
          background: #FFF3F3;
        }
        .pricing-scope .price-num {
          font-family: var(--font-jetbrains), monospace;
          font-weight: 700;
          color: var(--ink-dark);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 990px) {
          .pricing-scope .hero-grid { grid-template-columns: 1fr; }
          .pricing-scope .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 650px) {
          .pricing-scope .pricing-hero h1 { font-size: 32px; }
          .pricing-scope .pricing-grid { grid-template-columns: 1fr; }
          .pricing-scope .category-banner { flex-direction: column; align-items: flex-start; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb">
        <div className="wrap">
          <nav>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Pricing & Rate Card</span>
          </nav>
        </div>
      </div>

      {/* ===== HERO HEADER ===== */}
      <section className="pricing-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="eyebrow">Official Rate Card · 100% Flat Pricing</div>
              <h1>Doorstep Two Wheeler Service Charges</h1>
              <p>
                No surprise bills or hidden mechanics fees. Inspect exact labor charges for commuter motorcycles, performance tourers, scooters, and electric EVs across Delhi-NCR.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="#rate-card" className="btn btn-primary">
                  View Full Rate Card ↓
                </Link>
                <Link href="/book" className="btn" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--paper)', border: '1px solid var(--line)' }}>
                  Book Doorstep Mechanic →
                </Link>
              </div>
            </div>

            <div className="ticket">
              <div className="ticket-header">
                <span>FIXWHEEL RATE ASSURANCE</span>
                <span style={{ color: '#22c55e' }}>✓ NO HIDDEN FEES</span>
              </div>
              <div className="ticket-price-main">Starting ₹99</div>
              <p style={{ fontSize: '13px', color: '#5A5D62', marginBottom: '16px' }}>
                Flat rates based on your bike&apos;s exact engine capacity (CC) or EV battery specs.
              </p>
              <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: 'var(--ink-dark)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>• 15-Day FixWheel Labor Warranty</div>
                <div>• Sealed Genuine OEM Spare Parts & Oils</div>
                <div>• Verified Mechanics Delivered in 45 Mins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER TABS ===== */}
      <section className="tabs-section">
        <div className="wrap">
          <div className="tabs-bar">
            {PRICING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="tab-badge">{cat.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING GRID SECTION ===== */}
      <section id="rate-card" className="pricing-grid-section">
        <div className="wrap">
          
          <div className="category-banner">
            <div>
              <h3>Rates for {currentCategory.name}</h3>
              <p>{currentCategory.subtitle}</p>
            </div>
            <span className="mono" style={{ fontSize: '12px', background: 'var(--accent)', color: '#17181A', padding: '4px 12px', borderRadius: '4px', fontWeight: 700 }}>
              {displayServices.length} Services Available
            </span>
          </div>

          <div style={{ height: '32px' }} />

          <div className="pricing-grid">
            {displayServices.map((service) => {
              const rawPrice = getDisplayPrice(service);
              const isNumeric = typeof rawPrice === "number";
              const formattedPrice = isNumeric ? `₹${rawPrice}` : rawPrice;

              return (
                <div key={service.id} className={`price-card ${service.popular ? "popular-card" : ""}`}>
                  {service.popular && <span className="popular-stamp">Most Booked</span>}
                  
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-desc">{service.description}</p>

                  <div className="price-box">
                    <div className="price-val">{formattedPrice}</div>
                    {isNumeric && <span className="price-unit">/ flat rate</span>}
                  </div>

                  <div className="feature-list">
                    {service.features.map((feat, idx) => (
                      <div className="feature-item" key={idx}>
                        <span>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/book?service=${service.id}&category=${activeTab}`}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    Book @ {formattedPrice} →
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===== FULL COMPARISON MATRIX TABLE ===== */}
      <section className="table-section">
        <div className="wrap">
          <div style={{ textTransform: 'uppercase', marginBottom: '32px' }}>
            <div className="eyebrow">Full Transparency Matrix</div>
            <h2 style={{ fontSize: '32px', color: 'var(--ink-dark)' }}>Complete Doorstep Rate Sheet</h2>
            <p style={{ color: '#5A5D62', fontSize: '15px' }}>Side-by-side breakdown of all service labor charges across engine capacities.</p>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>0 - 249 cc</th>
                  <th>250 - 399 cc</th>
                  <th>400 - 599 cc</th>
                  <th>600 cc & Above</th>
                  <th>Electric EV</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_PRICING_LIST.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 600, color: 'var(--ink-dark)' }}>{item.name}</td>
                    <td className="price-num">
                      {typeof item.prices.cc0_249 === "number" ? `₹${item.prices.cc0_249}` : item.prices.cc0_249}
                    </td>
                    <td className="price-num">
                      {typeof item.prices.cc250_399 === "number" ? `₹${item.prices.cc250_399}` : item.prices.cc250_399}
                    </td>
                    <td className="price-num">
                      {typeof item.prices.cc400_599 === "number" ? `₹${item.prices.cc400_599}` : item.prices.cc400_599}
                    </td>
                    <td className="price-num">
                      {typeof item.prices.cc600_above === "number" ? `₹${item.prices.cc600_above}` : item.prices.cc600_above}
                    </td>
                    <td className="price-num" style={{ color: 'var(--accent)' }}>
                      {item.prices.electric !== undefined ? `₹${item.prices.electric}` : "N/A"}
                    </td>
                    <td>
                      <Link
                        href={`/book?service=${item.id}`}
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--accent)',
                          textTransform: 'uppercase'
                        }}
                      >
                        Book Now →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" style={{ padding: '90px 0', background: 'var(--bg)', color: 'var(--paper)', textAlign: 'center', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <h2 style={{ fontSize: '38px', color: 'var(--paper)', marginBottom: '16px' }}>Ready to Schedule Your Doorstep Service?</h2>
          <p style={{ color: '#A7A9AC', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Get a verified mobile mechanic at your home or office in Delhi, Gurgaon, Noida, Ghaziabad, or Faridabad. Flat rates, zero traveling fee, 15-day warranty.
          </p>
          <Link href="/book" className="btn btn-primary">
            Book Your Service Now →
          </Link>
        </div>
      </section>

    </div>
  );
}
