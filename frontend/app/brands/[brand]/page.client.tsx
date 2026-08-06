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
  const [selectedCcTab, setSelectedCcTab] = useState<"0-249" | "250-399" | "400-599" | "600+">("0-249");
  const [showFullMatrix, setShowFullMatrix] = useState(false);

  if (!brandData) return null;

  const CC_PRICING_DATA: { name: string; desc: string; time: string; prices: Record<"0-249" | "250-399" | "400-599" | "600+", string> }[] = [
    { name: "General Service", desc: "Comprehensive 21-point check, brake adjust, spark plug clean, air filter check, chain lube & dry wash.", time: "2 Hours", prices: { "0-249": "₹550", "250-399": "₹850", "400-599": "₹1,100", "600+": "₹1,500" } },
    { name: "Service with Engine Oil", desc: "Full 21-point periodic service with fresh OEM synthetic engine oil change and oil filter replacement.", time: "2 Hours", prices: { "0-249": "₹999", "250-399": "₹1,999", "400-599": "₹2,990", "600+": "₹3,999" } },
    { name: "Jump Start", desc: "Doorstep emergency battery jump start with heavy-duty battery booster for dead or drained batteries.", time: "30 Mins", prices: { "0-249": "₹399", "250-399": "₹399", "400-599": "₹499", "600+": "₹499" } },
    { name: "Puncture Repair", desc: "On-site tubeless or tube puncture repair at your home, office, or stranded roadside location.", time: "30 Mins", prices: { "0-249": "₹399", "250-399": "₹399", "400-599": "₹550", "600+": "₹550" } },
    { name: "Running Repair", desc: "On-site fix for clutch cable, accelerator cable, bulb fitting, mirror tightening, or lever adjustment.", time: "30 Mins", prices: { "0-249": "₹399", "250-399": "₹399", "400-599": "₹499", "600+": "₹499" } },
    { name: "Carburetor Cleaning", desc: "Ultrasonic cleaning of carburetor jets, float bowl flushing, and air-fuel idle mixture tuning.", time: "45 Mins", prices: { "0-249": "₹199", "250-399": "₹199", "400-599": "₹399", "600+": "₹399" } },
    { name: "Inspection with OBD Scanner", desc: "Advanced ECU error code reading, DTC clearing, sensor voltage check & check engine light reset for BS6 bikes.", time: "30 Mins", prices: { "0-249": "₹199", "250-399": "₹249", "400-599": "₹399", "600+": "₹399" } },
    { name: "Battery Replacement", desc: "Doorstep installation of new sealed battery, terminal cleaning, and anti-corrosion greasing.", time: "30 Mins", prices: { "0-249": "₹99", "250-399": "₹99", "400-599": "₹149", "600+": "₹149" } },
    { name: "Disc Replacement", desc: "Brake pad / rotor fitting, caliper pin greasing, hydraulic line air bleeding & squeal removal.", time: "45 Mins", prices: { "0-249": "₹199", "250-399": "₹249", "400-599": "₹299", "600+": "₹299" } },
    { name: "Chain Sprocket Replacement", desc: "Front & rear sprocket fitment, new O-ring drive chain installation, wheel & swingarm alignment.", time: "1 Hour", prices: { "0-249": "₹299", "250-399": "₹299", "400-599": "₹450", "600+": "₹450" } },
    { name: "Pick and Drop Charge", desc: "GPS-tracked insured flatbed pickup from your location to certified workshop and return delivery.", time: "Same Day", prices: { "0-249": "₹199", "250-399": "₹199", "400-599": "₹299", "600+": "₹299" } },
    { name: "Engine Half Overhaul", desc: "Top-end engine repair including piston ring replacement, valve grinding, cylinder hone, and head gaskets.", time: "24 Hours", prices: { "0-249": "₹4,500", "250-399": "₹10,000", "400-599": "Inspection", "600+": "Inspection" } },
    { name: "Engine Full Overhaul", desc: "Complete crankcase rebuild including crankshaft bearing replacement, connecting rod, gearbox & clutch overhaul.", time: "24 Hours", prices: { "0-249": "₹7,999", "250-399": "₹18,000", "400-599": "Inspection", "600+": "Inspection" } }
  ];

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

  const defaultFaqs = [
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

  const brandFaqs = (brandData.faqs && brandData.faqs.length > 0) ? brandData.faqs : defaultFaqs;

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
          padding: 52px 0 44px;
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
        .brand-detail-scope .hero-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 40px;
          align-items: center;
        }
        .brand-detail-scope .hero-inner {
          max-width: 720px;
        }
        .brand-detail-scope .hero h1 { font-size: 48px; margin: 0 0 16px; color: var(--hero-text); }
        .brand-detail-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .brand-detail-scope .hero p.lead { font-size: 15.5px; color: var(--hero-ink-dim); margin-bottom: 24px; line-height: 1.6; }
        .brand-detail-scope .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 28px; }

        .brand-detail-scope .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .brand-detail-scope .hero-stat {
          font-family: var(--font-jetbrains), monospace;
        }
        .brand-detail-scope .hero-stat b {
          display: block;
          font-size: 18px;
          color: #FFFFFF;
        }
        .brand-detail-scope .hero-stat span {
          font-size: 10.5px;
          color: #A7A9AC;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ===== HERO SNAPSHOT CARD (WHITE PAPER TICKET THEME) ===== */
        .brand-detail-scope .hero-snapshot-card {
          background: #FDFBF7;
          color: #17181A;
          border-radius: 6px;
          padding: 24px 26px 20px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .brand-detail-scope .hero-snapshot-card::before,
        .brand-detail-scope .hero-snapshot-card::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: var(--hero-bg);
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .brand-detail-scope .hero-snapshot-card::before { left: -11px; }
        .brand-detail-scope .hero-snapshot-card::after { right: -11px; }

        .brand-detail-scope .hero-snapshot-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }
        .brand-detail-scope .hero-snapshot-title {
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          color: #17181A;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .brand-detail-scope .hero-snapshot-title span {
          display: block;
          font-size: 10px;
          color: #7a7364;
          letter-spacing: 0.1em;
          margin-top: 2px;
          font-weight: 400;
        }
        .brand-detail-scope .hero-snapshot-badge {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--stamp);
          color: #3a2c00;
          padding: 5px 10px;
          border-radius: 20px;
          font-weight: 700;
          transform: rotate(2deg);
        }
        .brand-detail-scope .hero-snapshot-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
          margin-bottom: 16px;
        }
        .brand-detail-scope .hero-snapshot-item.full-width {
          grid-column: span 2;
        }
        .brand-detail-scope .hero-snapshot-label {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8a836f;
          margin-bottom: 3px;
        }
        .brand-detail-scope .hero-snapshot-val {
          font-size: 13.5px;
          font-weight: 600;
          color: #17181A;
          line-height: 1.35;
        }
        .brand-detail-scope .hero-snapshot-val.highlight {
          color: var(--accent);
          font-weight: 700;
        }
        .brand-detail-scope .hero-snapshot-foot {
          border-top: 1px dashed #D8CFB8;
          padding-top: 14px;
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
          padding: 18px 16px;
          text-align: center;
        }
        .brand-detail-scope .trust-item b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 3px;
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
          padding: 44px 0;
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

        /* ===== FAQ ACCORDION SECTION (LOCALITY STYLE) ===== */
        .brand-detail-scope .faq-section {
          padding: 88px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--line-paper);
          border-bottom: 1px solid var(--line-paper);
        }
        .brand-detail-scope .faq-list {
          display: flex;
          flex-direction: column;
        }
        .brand-detail-scope .faq-item {
          border-bottom: 1px solid var(--line-paper);
          background: transparent;
          border-radius: 0;
        }
        .brand-detail-scope .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          cursor: pointer;
          font-size: 16px;
          color: var(--ink-dark);
          font-weight: 500;
        }
        .brand-detail-scope .faq-q .plus {
          font-family: var(--font-jetbrains), monospace;
          color: var(--accent);
          font-size: 18px;
          transition: transform 0.2s ease;
        }
        .brand-detail-scope .faq-item.open .plus {
          transform: rotate(45deg);
        }
        .brand-detail-scope .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease;
        }
        .brand-detail-scope .faq-item.open .faq-a {
          max-height: 300px;
        }
        .brand-detail-scope .faq-a p {
          padding-bottom: 22px;
          color: #475569;
          font-size: 14.5px;
          max-width: 760px;
          line-height: 1.6;
        }

        /* ===== PARTNER CTA ===== */
        .brand-detail-scope .partner {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .brand-detail-scope .partner ul {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .brand-detail-scope .partner li {
          font-size: 14.5px;
          color: var(--ink-dark);
          display: flex;
          gap: 10px;
          list-style: none;
        }
        .brand-detail-scope .partner li::before {
          content: "—";
          color: var(--accent);
        }
        .brand-detail-scope .partner-box {
          background: #0F172A;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 34px;
          border-radius: 6px;
        }

        /* ===== CONTACT & ROADSIDE ASSISTANCE ===== */
        .brand-detail-scope .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .brand-detail-scope .contact-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-top: 20px;
        }
        .brand-detail-scope .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .brand-detail-scope .contact-item .ic {
          width: 38px;
          height: 38px;
          border: 1px solid var(--line-paper);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: var(--accent);
          flex-shrink: 0;
        }
        .brand-detail-scope .contact-item b {
          display: block;
          color: var(--ink-dark);
          font-size: 15px;
          margin-bottom: 2px;
        }
        .brand-detail-scope .contact-item span {
          color: #64748B;
          font-size: 13.5px;
        }

        /* ===== KEYWORDS & FOOTPRINT ===== */
        .brand-detail-scope .keywords-section {
          padding: 40px 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--line-paper);
        }
        .brand-detail-scope .keywords-title {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 14px;
        }
        .brand-detail-scope .tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .brand-detail-scope .tag-pill {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          padding: 5px 12px;
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          border-radius: 20px;
          color: var(--ink-dim);
        }

        .brand-detail-scope .locations-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }
        .brand-detail-scope .location-link {
          padding: 10px 12px;
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

        /* ===== CC PRICING SECTION ===== */
        .brand-detail-scope .cc-pricing-section {
          padding: 80px 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--line-paper);
        }
        .brand-detail-scope .cc-tabs-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }
        .brand-detail-scope .cc-tab-btn {
          background: var(--bg-soft);
          border: 1px solid var(--line-paper);
          border-radius: 6px;
          padding: 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .brand-detail-scope .cc-tab-btn.active {
          background: #0F172A;
          border-color: #0F172A;
          color: #FFFFFF;
        }
        .brand-detail-scope .cc-tab-btn b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 15px;
          margin-bottom: 4px;
        }
        .brand-detail-scope .cc-tab-btn.active b {
          color: var(--accent);
        }
        .brand-detail-scope .cc-tab-btn span {
          font-size: 11px;
          color: var(--ink-dim);
          display: block;
          line-height: 1.3;
        }
        .brand-detail-scope .cc-tab-btn.active span {
          color: #94A3B8;
        }

        .brand-detail-scope .cc-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .brand-detail-scope .cc-price-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 6px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .brand-detail-scope .cc-price-card:hover {
          border-color: var(--accent);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        }
        .brand-detail-scope .cc-price-card-head {
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
        }
        .brand-detail-scope .cc-price-card h3 {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 6px;
        }
        .brand-detail-scope .cc-price-card p {
          font-size: 13px;
          color: #475569;
          line-height: 1.5;
        }
        .brand-detail-scope .cc-price-card-foot {
          border-top: 1px solid var(--line-paper);
          padding-top: 16px;
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand-detail-scope .cc-price-amount {
          font-family: var(--font-jetbrains), monospace;
          font-size: 24px;
          font-weight: 800;
          color: var(--accent);
        }
        .brand-detail-scope .cc-price-time {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748B;
          background: var(--bg-soft);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid var(--line-paper);
          flex-shrink: 0;
        }

        /* FULL MATRIX TABLE */
        .brand-detail-scope .matrix-table-wrap {
          overflow-x: auto;
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 6px;
          margin-top: 24px;
        }
        .brand-detail-scope .matrix-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13.5px;
        }
        .brand-detail-scope .matrix-table th {
          background: #0F172A;
          color: #FFFFFF;
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 14px 18px;
        }
        .brand-detail-scope .matrix-table th.highlight-col {
          color: var(--accent);
        }
        .brand-detail-scope .matrix-table td {
          padding: 14px 18px;
          border-bottom: 1px solid var(--line-paper);
          color: var(--ink-dark);
        }
        .brand-detail-scope .matrix-table tr:last-child td {
          border-bottom: none;
        }
        .brand-detail-scope .matrix-table tr:hover td {
          background: #F8FAFC;
        }
        .brand-detail-scope .matrix-table .price-val {
          font-family: var(--font-jetbrains), monospace;
          font-weight: 700;
          color: var(--accent);
        }

        /* ===== FINAL CTA ===== */
        .brand-detail-scope .final-cta {
          text-align: center;
          padding: 56px 0;
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
          <div className="hero-grid">
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
                  <b>WITHIN 45 MINS</b>
                  <span>Doorstep arrival</span>
                </div>
                <div className="hero-stat">
                  <b>4.7 ★</b>
                  <span>Customer rating</span>
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

            {/* BRAND HERO SNAPSHOT CARD (WHITE PAPER TICKET THEME) */}
            <div className="hero-snapshot-card">
              <div className="hero-snapshot-header">
                <div className="hero-snapshot-title">
                  FW-{brandData.name.substring(0, 3).toUpperCase()}-2026
                  <span>BRAND SERVICE SNAPSHOT</span>
                </div>
                <div className="hero-snapshot-badge">
                  {brandData.name} SPECIALIST ✓
                </div>
              </div>

              <div className="hero-snapshot-grid">
                <div className="hero-snapshot-item">
                  <span className="hero-snapshot-label">Starting Price</span>
                  <div className="hero-snapshot-val highlight">₹199 Onwards</div>
                </div>
                <div className="hero-snapshot-item">
                  <span className="hero-snapshot-label">Arrival Guarantee</span>
                  <div className="hero-snapshot-val">Within 45 Mins</div>
                </div>
                <div className="hero-snapshot-item full-width">
                  <span className="hero-snapshot-label">Engine Oil Spec</span>
                  <div className="hero-snapshot-val">{brandData.additionalInfo.engineOil}</div>
                </div>
                <div className="hero-snapshot-item">
                  <span className="hero-snapshot-label">Service Warranty</span>
                  <div className="hero-snapshot-val">{brandData.additionalInfo.warranty}</div>
                </div>
                <div className="hero-snapshot-item">
                  <span className="hero-snapshot-label">Supported Models</span>
                  <div className="hero-snapshot-val highlight">{allModels.length} Models</div>
                </div>
              </div>

              <div className="hero-snapshot-foot">
                <Link href={`/book/${brandSlug}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Book {brandData.name} Service →
                </Link>
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

      {/* ===== CC-BASED SERVICE PRICING TABLE SECTION ===== */}
      <section className="cc-pricing-section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "32px" }}>
            <div className="eyebrow">Transparent Pricing</div>
            <h2>{brandData.name} Doorstep Service Rates by Engine CC</h2>
            <p style={{ color: "#475569", marginTop: "8px", fontSize: "15.5px" }}>
              Upfront, fixed pricing for all {brandData.name} motorcycles & scooters based on engine displacement. Select your bike's CC category to view exact rates.
            </p>
          </div>

          {/* CC Category Selector Tabs */}
          <div className="cc-tabs-row">
            <button
              className={cn("cc-tab-btn", selectedCcTab === "0-249" && "active")}
              onClick={() => setSelectedCcTab("0-249")}
            >
              <b>0 – 249 CC</b>
              <span>Commuter Bikes & Scooters</span>
            </button>
            <button
              className={cn("cc-tab-btn", selectedCcTab === "250-399" && "active")}
              onClick={() => setSelectedCcTab("250-399")}
            >
              <b>250 – 399 CC</b>
              <span>Performance & Quarter-Liter</span>
            </button>
            <button
              className={cn("cc-tab-btn", selectedCcTab === "400-599" && "active")}
              onClick={() => setSelectedCcTab("400-599")}
            >
              <b>400 – 599 CC</b>
              <span>Middleweight Motorcycles</span>
            </button>
            <button
              className={cn("cc-tab-btn", selectedCcTab === "600+" && "active")}
              onClick={() => setSelectedCcTab("600+")}
            >
              <b>600 CC & Above</b>
              <span>Superbikes & Heavy Cruisers</span>
            </button>
          </div>

          {/* Service Cards Grid for Selected CC */}
          <div className="cc-pricing-grid">
            {CC_PRICING_DATA.map((srv, idx) => {
              const priceVal = srv.prices[selectedCcTab];
              return (
                <div className="cc-price-card" key={idx}>
                  <div>
                    <div className="cc-price-card-head">
                      <h3>{srv.name}</h3>
                      <span className="cc-price-time">⏱ {srv.time}</span>
                    </div>
                    <p>{srv.desc}</p>
                  </div>
                  <div className="cc-price-card-foot">
                    <div>
                      <span className="mono" style={{ fontSize: "10px", color: "#64748B", display: "block", textTransform: "uppercase" }}>Fixed Rate</span>
                      <span className="cc-price-amount">{priceVal}</span>
                    </div>
                    <Link
                      href={`/book/${brandSlug}`}
                      className="btn btn-primary"
                      style={{ padding: "8px 16px", fontSize: "11px" }}
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toggle Full Matrix View */}
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              onClick={() => setShowFullMatrix(!showFullMatrix)}
              className="btn btn-outline"
              style={{ color: "var(--ink-dark)", borderColor: "var(--line-paper)" }}
            >
              {showFullMatrix ? "Hide Full CC Comparison Matrix ▲" : "View Full CC Comparison Matrix Table ▼"}
            </button>
          </div>

          {/* Side-by-side Full Matrix Table */}
          {showFullMatrix && (
            <div className="matrix-table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th className={cn(selectedCcTab === "0-249" && "highlight-col")}>0–249 CC</th>
                    <th className={cn(selectedCcTab === "250-399" && "highlight-col")}>250–399 CC</th>
                    <th className={cn(selectedCcTab === "400-599" && "highlight-col")}>400–599 CC</th>
                    <th className={cn(selectedCcTab === "600+" && "highlight-col")}>600 CC+</th>
                    <th>Est. Time</th>
                  </tr>
                </thead>
                <tbody>
                  {CC_PRICING_DATA.map((srv, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{srv.name}</td>
                      <td className="price-val">{srv.prices["0-249"]}</td>
                      <td className="price-val">{srv.prices["250-399"]}</td>
                      <td className="price-val">{srv.prices["400-599"]}</td>
                      <td className="price-val">{srv.prices["600+"]}</td>
                      <td className="mono" style={{ fontSize: "12px", color: "#64748B" }}>{srv.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ===== BECOME A PARTNER SECTION ===== */}
      <section className="section-alt" style={{ borderTop: "1px solid var(--line-paper)", borderBottom: "1px solid var(--line-paper)", padding: "88px 0" }}>
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>Are you a bike mechanic?</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>
              Join our team of mechanics servicing {brandData.name} and all major two-wheeler brands across Delhi NCR. Work on your own schedule, get more customers, and grow your income.
            </p>
            <ul>
              <li>Flexible working hours</li>
              <li>Easy booking management</li>
              <li>Receive service requests from customers in your area</li>
            </ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "#FFFFFF", marginBottom: "12px" }}>
              Become a partner
            </h3>
            <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "22px" }}>
              Sign up in a few minutes and start getting service requests in your area.
            </p>
            <Link href="/partner" className="btn btn-primary">
              Become a Partner →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BRAND FAQ SECTION (LOCALITY THEME) ===== */}
      <section id="faq" className="faq-section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <div className="eyebrow">FAQS</div>
            <h2>Common questions about {brandData.name} doorstep service</h2>
          </div>
          <div className="faq-list">
            {brandFaqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx];
              return (
                <div key={idx} className={cn("faq-item", isOpen && "open")}>
                  <div className="faq-q" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <span className="plus">+</span>
                  </div>
                  <div className="faq-a">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LOCATION FOOTPRINT ===== */}
      <section className="keywords-section">
        <div className="wrap">
          <h3 className="keywords-title">
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

      {/* ===== CONTACT & ROADSIDE ASSISTANCE SECTION ===== */}
      <section id="contact" className="section-alt" style={{ borderTop: "1px solid var(--line-paper)", borderBottom: "1px solid var(--line-paper)", padding: "88px 0" }}>
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>Contact us</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "10px" }}>Have a question about {brandData.name} service? We are available from 8 AM to 8 PM.</p>
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
            <h3 style={{ fontSize: "22px", color: "var(--ink-dark)", marginTop: "10px" }}>
              {brandData.name.toUpperCase()} ROADSIDE ASSISTANCE
            </h3>
            <p style={{ color: "#475569", fontSize: "14px" }}>
              Stranded on the road or have a breakdown with your {brandData.name}? A mechanic will come to your location with tools to fix your bike or scooter on the spot.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "10px" }}>
              <Link href={`/book/${brandSlug}`} className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "12px" }}>
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
