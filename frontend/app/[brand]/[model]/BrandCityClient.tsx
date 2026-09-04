"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BRAND_DETAILS, BrandDetailData } from "@/lib/brandDetails";
import { BIKE_DATA } from "@/lib/bikes";
import { Phone, Wrench, ShieldCheck, ArrowRight, MapPin, Check, Star } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

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

const CITY_NAME_MAP: Record<string, string> = {
  gurgaon: "Gurgaon",
  delhi: "Delhi",
  noida: "Noida",
  faridabad: "Faridabad",
  ghaziabad: "Ghaziabad",
};

const CITY_LOCALITIES_MAP: Record<string, string[]> = {
  gurgaon: [
    "DLF Phase 1–5",
    "Cyber City",
    "Golf Course Road",
    "Sohna Road",
    "Palam Vihar",
    "Udyog Vihar",
    "Sector 14 & 15",
    "Sector 56 & 57",
    "Badshahpur",
    "Manesar",
  ],
  delhi: [
    "Dwarka",
    "Vasant Kunj",
    "Rohini",
    "Saket & Hauz Khas",
    "Lajpat Nagar",
    "Janakpuri",
    "Pitampura",
    "Karol Bagh",
    "Mayur Vihar",
    "Connaught Place",
  ],
  noida: [
    "Sector 18 & 27",
    "Sector 62 & 63",
    "Sector 50 & 51",
    "Sector 75–78",
    "Sector 137 & Expressway",
    "Sector 120",
    "Greater Noida West",
  ],
  ghaziabad: [
    "Indirapuram",
    "Vaishali",
    "Kaushambi",
    "Vasundhara",
    "Raj Nagar & Extension",
    "Crossings Republik",
    "Vijay Nagar",
  ],
  faridabad: [
    "NIT Faridabad (1–5)",
    "Sector 15 & 16",
    "Sector 21",
    "Sector 37",
    "Sector 85–89",
    "Greater Faridabad",
    "Ballabgarh stretch",
  ],
};

const CITY_HERO_DESCS: Record<string, (brand: string) => string> = {
  gurgaon: (brand) =>
    `Looking for trusted doorstep ${brand} bike service in Gurgaon? FixWheel dispatches certified mobile mechanics directly to your home, gated society parking, or corporate office across DLF Phases, Cyber City, Sohna Road, and Palam Vihar in 45 minutes with 100% genuine parts.`,
  delhi: (brand) =>
    `Need a verified ${brand} mechanic near you in Delhi? FixWheel provides professional doorstep ${brand} two-wheeler service & emergency repair across South Delhi, West Delhi, Dwarka, Rohini, and Central Delhi. Flat upfront pricing, zero visiting fees, and a 15-day labor warranty.`,
  noida: (brand) =>
    `Get expert doorstep ${brand} bike repair and periodic service in Noida. Our certified mechanics arrive at your home or office parking in Sector 18, Sector 62, Sector 137, or Greater Noida West with portable diagnostic equipment and genuine replacement spares.`,
  ghaziabad: (brand) =>
    `Reliable doorstep ${brand} two-wheeler service and breakdown repair in Ghaziabad. Certified mechanics serving Indirapuram, Vaishali, Vasundhara, and Raj Nagar Extension with 45-minute arrival time, transparent part pricing, and 15-day labor warranty.`,
  faridabad: (brand) =>
    `On-demand doorstep ${brand} bike service and scooter repair in Faridabad. FixWheel sends background-checked mechanics to NIT Faridabad, Sector 15, Sector 21, and Greater Faridabad for oil changes, brake repairs, battery replacements, and full tune-ups.`,
};

interface BrandCityClientProps {
  brandSlug: string;
  citySlug: string;
}

export default function BrandCityClient({ brandSlug, citySlug }: BrandCityClientProps) {
  const cityName = CITY_NAME_MAP[citySlug.toLowerCase()] || citySlug;
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS[citySlug.toLowerCase()] || DEFAULT_PUBLIC_STATS.global);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  useEffect(() => {
    getPublicStatsForCity(citySlug.toLowerCase()).then(setStats);
  }, [citySlug]);

  const bKey = brandSlug.toLowerCase();
  const brandData: BrandDetailData = BRAND_DETAILS[bKey] || {
    name: brandSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tagline: `Professional Doorstep Service for ${brandSlug}`,
    description: `Get doorstep bike service and repair for all ${brandSlug} two-wheeler models in ${cityName}.`,
    additionalInfo: {
      engineOil: "OEM Specification Multi-Grade Engine Oil",
      warranty: "15-Day Quality Assurance Warranty",
      parts: "100% Genuine OEM Spare Parts & Cables",
      avgTime: "Within 45 Mins Doorstep Arrival",
    },
    keyBenefits: [
      { title: "Doorstep Mechanic Arrival", desc: `Mobile mechanic dispatches to your parking location in ${cityName} in 45 minutes.` },
      { title: "Genuine Spares Guarantee", desc: "We use 100% genuine manufacturer parts, checked and fitted right in front of you." },
      { title: "Flat Transparent Pricing", desc: "No hidden charges or unexpected garage add-ons. Upfront labor and part billing." },
    ],
    reviews: [],
    seoKeywords: [],
    faqs: [],
  };

  const brandName = brandData.name;

  // Models list from BIKE_DATA
  let brandObj = BIKE_DATA["Non-Electric Motorbike"].find(
    (b) => b.name.toLowerCase() === brandName.toLowerCase()
  );
  if (!brandObj) {
    brandObj = BIKE_DATA["Electric Motorbike"].find(
      (b) => b.name.toLowerCase() === brandName.toLowerCase()
    );
  }
  if (!brandObj) {
    if (brandName.toLowerCase().includes("ola")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find((b) => b.id === "ola");
    } else if (brandName.toLowerCase().includes("ather")) {
      brandObj = BIKE_DATA["Electric Motorbike"].find((b) => b.id === "ather");
    }
  }

  const allModels = brandObj ? brandObj.models.map((m) => m.name) : [];
  const localities = CITY_LOCALITIES_MAP[citySlug.toLowerCase()] || [];

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const heroDesc = (CITY_HERO_DESCS[citySlug.toLowerCase()] || CITY_HERO_DESCS.gurgaon)(brandName);

  const cityFaqs = [
    {
      q: `How long does doorstep ${brandName} service take in ${cityName}?`,
      a: `Routine periodic servicing and minor repairs for ${brandName} two-wheelers take 35 to 50 minutes at your home or office parking in ${cityName}. Our mobile mechanic arrives fully equipped within 45 minutes.`,
    },
    {
      q: `Are 100% genuine ${brandName} spare parts used for doorstep repairs in ${cityName}?`,
      a: `Yes! We use sealed genuine OEM spare parts (${brandData.additionalInfo.parts}). All replaced parts are inspected and handed over to you after servicing in ${cityName}.`,
    },
    {
      q: `What engine oil grade is used for ${brandName} bikes & scooters in ${cityName}?`,
      a: `We use recommended ${brandName} specification oil (${brandData.additionalInfo.engineOil}) or high-grade Motul / Yamalube synthetic blends in sealed bottles, replaced right in front of you.`,
    },
    {
      q: `Is there a warranty on ${brandName} doorstep service in ${cityName}?`,
      a: `Yes, FixWheel provides a 15-day labor & diagnostic warranty on all ${brandName} doorstep repairs in ${cityName}, plus manufacturer warranties on replaced components.`,
    },
    {
      q: `Which areas in ${cityName} do your ${brandName} mobile mechanics cover?`,
      a: `We cover all major sectors, residential societies, and commercial hubs in ${cityName} (${localities.slice(0, 4).join(", ")} and surrounding areas).`,
    },
  ];

  const cityReviews = [
    {
      name: `Rohan Sharma`,
      vehicle: `${brandName} Two-Wheeler`,
      rating: 5,
      location: `${cityName}`,
      comment: `Got my ${brandName} serviced at my doorstep in ${cityName}. The mechanic was on time, very thorough, and used genuine oil. Highly recommended!`,
    },
    {
      name: `Pooja Verma`,
      vehicle: `${brandName} Scooter`,
      rating: 5,
      location: `${cityName}`,
      comment: `Extremely convenient service in ${cityName}. No pushing the scooter to local workshops. Fixed the starting trouble in 40 minutes.`,
    },
    {
      name: `Amit Patel`,
      vehicle: `${brandName} Motorcycle`,
      rating: 5,
      location: `${cityName}`,
      comment: `Transparent pricing and professional mechanic. Done right in my society parking in ${cityName}. Will book again for regular servicing.`,
    },
  ];

  const otherCities = Object.keys(CITY_NAME_MAP).filter((c) => c !== citySlug.toLowerCase());

  return (
    <div className={`brand-city-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .brand-city-scope {
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
        .brand-city-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .brand-city-scope img { max-width: 100%; display: block; }
        .brand-city-scope a { color: inherit; text-decoration: none; }
        .brand-city-scope ul { list-style: none; }
        .brand-city-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .brand-city-scope h1, .brand-city-scope h2, .brand-city-scope h3, .brand-city-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .brand-city-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .brand-city-scope .eyebrow {
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
        .brand-city-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .brand-city-scope .btn {
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
        .brand-city-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .brand-city-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .brand-city-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .brand-city-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== HERO ===== */
        .brand-city-scope .hero {
          position: relative;
          padding: 52px 0 44px;
          background: var(--hero-bg);
          color: var(--hero-text);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .brand-city-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background:
            repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px),
            radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.12), transparent 70%);
          pointer-events: none;
        }
        .brand-city-scope .hero-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }
        .brand-city-scope .hero h1 { font-size: 42px; margin: 0 0 16px; color: var(--hero-text); }
        .brand-city-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .brand-city-scope .hero p.lead { font-size: 15.5px; color: var(--hero-ink-dim); margin-bottom: 24px; line-height: 1.6; }
        .brand-city-scope .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 0; }

        /* ===== HERO SNAPSHOT CARD ===== */
        .brand-city-scope .hero-snapshot-card {
          background: #FDFBF7;
          color: #17181A;
          border-radius: 6px;
          padding: 24px 26px 20px;
          position: relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .brand-city-scope .hero-snapshot-card::before,
        .brand-city-scope .hero-snapshot-card::after {
          content: "";
          position: absolute;
          width: 22px; height: 22px;
          background: var(--hero-bg);
          border-radius: 50%;
          top: 50%; transform: translateY(-50%);
        }
        .brand-city-scope .hero-snapshot-card::before { left: -11px; }
        .brand-city-scope .hero-snapshot-card::after { right: -11px; }
        .brand-city-scope .hero-snapshot-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          border-bottom: 1px dashed #D8CFB8; padding-bottom: 14px; margin-bottom: 16px;
        }
        .brand-city-scope .hero-snapshot-title {
          font-family: var(--font-jetbrains), monospace; font-size: 13px; color: #17181A; font-weight: 700;
        }
        .brand-city-scope .hero-snapshot-title span {
          display: block; font-size: 10px; color: #7a7364; letter-spacing: 0.1em; margin-top: 2px; font-weight: 400;
        }
        .brand-city-scope .hero-snapshot-badge {
          font-family: var(--font-jetbrains), monospace; font-size: 10px; letter-spacing: 0.08em;
          text-transform: uppercase; background: var(--stamp); color: #3a2c00; padding: 5px 10px; border-radius: 20px; font-weight: 700;
        }
        .brand-city-scope .hero-snapshot-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; margin-bottom: 16px;
        }
        .brand-city-scope .hero-snapshot-label {
          display: block; font-family: var(--font-jetbrains), monospace; font-size: 10px;
          text-transform: uppercase; letter-spacing: 0.08em; color: #8a836f; margin-bottom: 3px;
        }
        .brand-city-scope .hero-snapshot-val {
          font-size: 13.5px; font-weight: 600; color: #17181A;
        }
        .brand-city-scope .hero-snapshot-val.highlight { color: var(--accent); font-weight: 700; }

        /* ===== TRUST STRIP ===== */
        .brand-city-scope .trust-strip {
          border-bottom: 1px solid var(--line-paper); background: var(--bg-soft);
        }
        .brand-city-scope .trust-inner {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line-paper);
        }
        .brand-city-scope .trust-item {
          background: #FFFFFF; padding: 22px 18px; text-align: center;
        }
        .brand-city-scope .trust-item b {
          display: block; font-family: var(--font-jetbrains), monospace; font-size: 22px; color: var(--ink-dark); margin-bottom: 3px;
        }
        .brand-city-scope .trust-item span {
          font-family: var(--font-jetbrains), monospace; font-size: 11px; color: var(--ink-dim); letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ===== CONTENT SECTIONS ===== */
        .brand-city-scope section { padding: 64px 0; border-bottom: 1px solid var(--line-paper); }
        .brand-city-scope .section-head { max-width: 680px; margin-bottom: 36px; }
        .brand-city-scope .section-head h2 { font-size: 28px; color: var(--ink-dark); }
        .brand-city-scope .section-head p { color: #475569; margin-top: 10px; font-size: 15px; }

        /* models grid */
        .brand-city-scope .models-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
        }
        .brand-city-scope .model-card {
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 18px 20px; border-radius: 4px;
          display: flex; flex-direction: column; justify-content: space-between; transition: border-color 0.15s, transform 0.15s;
        }
        .brand-city-scope .model-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .brand-city-scope .model-card .name { font-family: var(--font-jetbrains), monospace; font-weight: 700; font-size: 14px; color: var(--ink-dark); margin-bottom: 8px; }
        .brand-city-scope .model-card .go { font-family: var(--font-jetbrains), monospace; font-size: 11.5px; color: var(--accent); font-weight: 700; }

        /* services rates grid */
        .brand-city-scope .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .brand-city-scope .service-card {
          background: #FFFFFF; border: 1px solid var(--line-paper); padding: 22px; border-radius: 4px;
          display: flex; flex-direction: column; justify-content: space-between; transition: border-color 0.15s;
        }
        .brand-city-scope .service-card:hover { border-color: var(--accent); }
        .brand-city-scope .service-card h3 { font-size: 16px; color: var(--ink-dark); margin-bottom: 6px; text-transform: none; }
        .brand-city-scope .service-card p { font-size: 13px; color: #475569; margin-bottom: 14px; min-height: 38px; }
        .brand-city-scope .service-card .price { font-family: var(--font-jetbrains), monospace; font-size: 14px; font-weight: 700; color: var(--accent); }
        .brand-city-scope .service-card .price span { font-size: 11px; font-weight: 400; color: #64748B; }

        /* localities tags */
        .brand-city-scope .localities-board {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;
        }
        .brand-city-scope .loc-tag {
          font-family: var(--font-jetbrains), monospace; font-size: 12px; background: #FFFFFF; border: 1px solid var(--line-paper);
          padding: 8px 14px; border-radius: 20px; color: var(--ink-dark); display: flex; align-items: center; gap: 6px;
        }
        .brand-city-scope .loc-tag .pin { color: var(--accent); font-size: 10px; }

        /* reviews */
        .brand-city-scope .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .brand-city-scope .review-card { background: #FFFFFF; border: 1px solid var(--line-paper); padding: 22px; border-radius: 4px; }
        .brand-city-scope .review-card .stars { color: #F59E0B; margin-bottom: 10px; font-size: 13px; }
        .brand-city-scope .review-card p { font-size: 13.5px; color: #475569; margin-bottom: 14px; font-style: italic; }
        .brand-city-scope .review-card .who { font-family: var(--font-jetbrains), monospace; font-size: 11px; color: #64748B; text-transform: uppercase; }

        /* faqs */
        .brand-city-scope .faq-item { border-bottom: 1px solid var(--line-paper); }
        .brand-city-scope .faq-q {
          display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; font-size: 15.5px; color: var(--ink-dark); font-weight: 500;
        }
        .brand-city-scope .faq-q .plus { font-family: var(--font-jetbrains), monospace; color: var(--accent); font-size: 18px; transition: transform .2s ease; }
        .brand-city-scope .faq-item.open .plus { transform: rotate(45deg); }
        .brand-city-scope .faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .brand-city-scope .faq-item.open .faq-a { max-height: 250px; }
        .brand-city-scope .faq-a p { padding-bottom: 20px; color: #475569; font-size: 14px; max-width: 760px; }

        /* silo */
        .brand-city-scope .silo { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .brand-city-scope .silo a {
          font-family: var(--font-jetbrains), monospace; font-size: 12px; border: 1px solid var(--line-paper);
          padding: 9px 16px; border-radius: 30px; color: var(--ink-dark); background: #FFFFFF; transition: border-color .15s ease, color .15s ease;
        }
        .brand-city-scope .silo a:hover { border-color: var(--accent); color: var(--accent); }
        .brand-city-scope .silo a.active { border-color: var(--accent); color: var(--accent); font-weight: 700; }

        @media (max-width: 900px) {
          .brand-city-scope .hero-grid { grid-template-columns: 1fr; }
          .brand-city-scope .hero h1 { font-size: 32px; }
          .brand-city-scope .models-grid { grid-template-columns: repeat(2, 1fr); }
          .brand-city-scope .services-grid { grid-template-columns: 1fr; }
          .brand-city-scope .reviews-grid { grid-template-columns: 1fr; }
          .brand-city-scope .trust-inner { grid-template-columns: repeat(2, 1fr); }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Brands", href: "/brands" },
              { label: brandName, href: `/${bKey}` },
              { label: `${brandName} Service in ${cityName}` },
            ]}
          />
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">{brandName} Bike Repair Service · {cityName}</div>
            <h1>Doorstep <em>{brandName}</em> Bike Service in {cityName}</h1>
            <p className="lead">{heroDesc}</p>
            <div className="hero-ctas">
              <Link href={`/book#${bKey}`} className="btn btn-primary">
                Book {brandName} Service →
              </Link>
              <a href="tel:+918745945682" className="btn btn-dark" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                <Phone className="w-4 h-4" />
                Call Mechanic
              </a>
            </div>
          </div>

          <div className="hero-snapshot-card">
            <div className="hero-snapshot-header">
              <div className="hero-snapshot-title">
                {brandName.toUpperCase()} DISPATCH TICKET
                <span>{cityName.toUpperCase()} · NCR</span>
              </div>
              <div className="hero-snapshot-badge">DISPATCH READY</div>
            </div>
            <div className="hero-snapshot-grid">
              <div>
                <span className="hero-snapshot-label">STARTING PRICE</span>
                <span className="hero-snapshot-val highlight">₹199</span>
              </div>
              <div>
                <span className="hero-snapshot-label">ARRIVAL TIME</span>
                <span className="hero-snapshot-val">45 Minutes</span>
              </div>
              <div>
                <span className="hero-snapshot-label">LOCATION</span>
                <span className="hero-snapshot-val">{cityName} (Home/Office)</span>
              </div>
              <div>
                <span className="hero-snapshot-label">WARRANTY</span>
                <span className="hero-snapshot-val">15 Days Labor</span>
              </div>
            </div>
            <div style={{ background: "#F1F5F9", border: "1px solid #E2E8F0", padding: "10px", borderRadius: "4px", fontSize: "12px", color: "#475569", display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>100% Genuine {brandName} OEM Spare Parts Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <div className="trust-strip">
        <div className="wrap">
          <div className="trust-inner">
            <div className="trust-item">
              <b>45 MIN</b>
              <span>Arrival in {cityName}</span>
            </div>
            <div className="trust-item">
              <b>{stats.average_rating || "4.8"} ★</b>
              <span>Customer Rating</span>
            </div>
            <div className="trust-item">
              <b>{stats.bikes_serviced || "10,000"}+</b>
              <span>Vehicles Serviced</span>
            </div>
            <div className="trust-item">
              <b>15 DAYS</b>
              <span>Labor Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SERVICED MODELS IN CITY ===== */}
      {allModels.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">{brandName} Models in {cityName}</div>
              <h2>{brandName} Bikes & Scooters Serviced at Doorstep in {cityName}</h2>
              <p>We provide routine servicing, oil changes, engine tuning, and emergency repair for all {brandName} models across {cityName}:</p>
            </div>
            <div className="models-grid">
              {allModels.map((model) => {
                const mSlug = model.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                return (
                  <Link key={model} href={`/${bKey}/${mSlug}`} className="model-card">
                    <div className="name">{model}</div>
                    <div className="go">View model service →</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== POPULAR SERVICES RATES ===== */}
      <section style={{ background: "#F8FAFC" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Service Catalog</div>
            <h2>Doorstep {brandName} Service Charges in {cityName}</h2>
            <p>Flat, honest rates with zero hidden fees. Pick your service and book a verified mechanic to your door:</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div>
                <h3>Service with Engine Oil</h3>
                <p>Complete oil drain, OEM-spec fresh engine oil refilled, spark plug clean & chain lube in {cityName}.</p>
              </div>
              <div className="price">₹999 <span>starting from</span></div>
            </div>
            <div className="service-card">
              <div>
                <h3>Basic Bike Service</h3>
                <p>21-point checkup, brake adjust, spark plug clean, air filter check & electrical system check in {cityName}.</p>
              </div>
              <div className="price">₹499 <span>starting from</span></div>
            </div>
            <div className="service-card">
              <div>
                <h3>Doorstep Puncture Repair</h3>
                <p>Flat tyre tubeless & tube puncture repair on the spot at your home, office or roadside in {cityName}.</p>
              </div>
              <div className="price">₹399 <span>starting from</span></div>
            </div>
            <div className="service-card">
              <div>
                <h3>Brake Disc & Pad Repair</h3>
                <p>Brake pad replacement, disc rotor inspection, drum shoe swap & cable calibration in {cityName}.</p>
              </div>
              <div className="price">₹199 <span>starting from</span></div>
            </div>
            <div className="service-card">
              <div>
                <h3>Battery Replacement</h3>
                <p>On-site battery diagnostics, testing, jump-start & new warranty battery installation in {cityName}.</p>
              </div>
              <div className="price">₹99 <span>starting from</span></div>
            </div>
            <div className="service-card">
              <div>
                <h3>Running Repair</h3>
                <p>Quick breakdown repair, clutch cable adjustment & accelerator cable replacement in {cityName}.</p>
              </div>
              <div className="price">₹399 <span>starting from</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCALITY COVERAGE IN CITY ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Local Coverage</div>
            <h2>Where We Service {brandName} Two-Wheelers in {cityName}</h2>
            <p>Our mobile mechanics cover all major sectors, apartment complexes, and office parks across {cityName}:</p>
          </div>
          <div className="localities-board">
            {localities.map((loc, idx) => (
              <div key={idx} className="loc-tag">
                <span className="pin">📍</span>
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS IN CITY ===== */}
      <section style={{ background: "#F8FAFC" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Customer Reviews</div>
            <h2>What {brandName} Owners in {cityName} Say</h2>
          </div>
          <div className="reviews-grid">
            {cityReviews.map((rev, idx) => (
              <div key={idx} className="review-card">
                <div className="stars">★★★★★</div>
                <p>"{rev.comment}"</p>
                <div className="who">{rev.name} — {rev.vehicle} ({rev.location})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQS IN CITY ===== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">FAQs — {cityName}</div>
            <h2>Frequently Asked Questions About {brandName} Servicing in {cityName}</h2>
          </div>
          <div className="faq-list">
            {cityFaqs.map((faq, idx) => (
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

          <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line-paper)" }}>
            <div className="mono" style={{ fontSize: "12px", color: "var(--ink-dim)", marginBottom: "12px" }}>
              SERVICING {brandName.toUpperCase()} IN OTHER CITIES:
            </div>
            <div className="silo">
              <Link href={`/${bKey}`} className="active">{brandName} Main Hub</Link>
              {otherCities.map((c) => (
                <Link key={c} href={`/${bKey}/${c}`}>
                  {brandName} in {CITY_NAME_MAP[c]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{ background: "#17181A", color: "#FFFFFF", borderBottom: "none" }}>
        <div className="wrap" style={{ textAlign: "center", padding: "40px 0" }}>
          <h2>Get Your {brandName} Serviced at Doorstep in {cityName}</h2>
          <p style={{ color: "#A7A9AC", margin: "12px 0 28px" }}>Certified mechanics. 45-minute arrival time. 15-day labor warranty.</p>
          <Link href={`/book#${bKey}`} className="btn btn-primary">
            Book {brandName} Service in {cityName} →
          </Link>
        </div>
      </section>
    </div>
  );
}
