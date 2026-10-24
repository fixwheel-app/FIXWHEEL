"use client";

import { useState, useEffect } from "react";
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from "@/lib/publicStats";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BRAND_DETAILS, BrandDetailData } from "@/lib/brandDetails";
import { BIKE_DATA } from "@/lib/bikes";
import { Phone, Wrench, ArrowRight, MapPin, Check, Star } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import TwoWheelerQueryCard from "@/components/TwoWheelerQueryCard";
import HeroBookingAction from "@/components/HeroBookingAction";
import { ELECTRIC_SERVICE_OPTIONS, findElectricBrandByReference } from "@/lib/electricServices";
import { HONDA_MODEL_FAMILIES, HONDA_MODEL_SECTIONS } from "@/lib/hondaModelFamilies";
import { HERO_MODEL_FAMILIES, HERO_MODEL_SECTIONS } from "@/lib/heroModelFamilies";
import { BAJAJ_MODEL_FAMILIES, BAJAJ_MODEL_SECTIONS } from "@/lib/bajajModelFamilies";
import { ROYAL_ENFIELD_MODEL_FAMILIES, ROYAL_ENFIELD_MODEL_SECTIONS } from "@/lib/royalEnfieldModelFamilies";
import { YAMAHA_MODEL_FAMILIES, YAMAHA_MODEL_SECTIONS } from "@/lib/yamahaModelFamilies";
import { KTM_MODEL_FAMILIES, KTM_MODEL_SECTIONS } from "@/lib/ktmModelFamilies";
import { SUZUKI_MODEL_FAMILIES, SUZUKI_MODEL_SECTIONS } from "@/lib/suzukiModelFamilies";
import { OLA_MODEL_FAMILIES, OLA_MODEL_SECTIONS } from "@/lib/olaModelFamilies";
import { ATHER_MODEL_FAMILIES, ATHER_MODEL_SECTIONS } from "@/lib/atherModelFamilies";
import { JAWA_MODEL_FAMILIES, JAWA_MODEL_SECTIONS } from "@/lib/jawaModelFamilies";
import { YEZDI_MODEL_FAMILIES, YEZDI_MODEL_SECTIONS } from "@/lib/yezdiModelFamilies";
import { APRILIA_MODEL_FAMILIES, APRILIA_MODEL_SECTIONS } from "@/lib/apriliaModelFamilies";
import { VESPA_MODEL_FAMILIES, VESPA_MODEL_SECTIONS } from "@/lib/vespaModelFamilies";
import { HARLEY_DAVIDSON_MODEL_FAMILIES, HARLEY_DAVIDSON_MODEL_SECTIONS } from "@/lib/harleyDavidsonModelFamilies";
import { KAWASAKI_MODEL_FAMILIES, KAWASAKI_MODEL_SECTIONS } from "@/lib/kawasakiModelFamilies";
import { BMW_MODEL_FAMILIES, BMW_MODEL_SECTIONS } from "@/lib/bmwModelFamilies";
import { TVS_MODEL_FAMILIES, TVS_MODEL_SECTIONS } from "@/lib/tvsModelFamilies";
import { getBrandCityFaqs } from "@/lib/brandCityFaqs";

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

const CITY_HERO_DESCS: Record<string, (brand: string) => string> = {
  gurgaon: (brand) =>
    `Looking for trusted doorstep ${brand} bike service in Gurgaon? FixWheel dispatches certified mobile mechanics directly to your home, gated society parking, or corporate office across DLF Phases, Cyber City, Sohna Road, and Palam Vihar in 45 minutes with 100% genuine parts.`,
  delhi: (brand) =>
    `Need a verified ${brand} mechanic near you in Delhi? FixWheel provides professional doorstep ${brand} two-wheeler service & emergency repair across South Delhi, West Delhi, Dwarka, Rohini, and Central Delhi. Transparent upfront pricing, zero visiting fees, and a 15-day labor warranty.`,
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
  cityName: string;
  localities: string[];
  otherCities: Array<{ slug: string; name: string }>;
}

export default function BrandCityClient({
  brandSlug,
  citySlug,
  cityName,
  localities,
  otherCities,
}: BrandCityClientProps) {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS[citySlug.toLowerCase()] || DEFAULT_PUBLIC_STATS.global);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  useEffect(() => {
    getPublicStatsForCity(citySlug.toLowerCase()).then(setStats);
  }, [citySlug]);

  const bKey = brandSlug.toLowerCase();
  const electricCatalogBrand = findElectricBrandByReference(bKey);
  const storedBrandData = BRAND_DETAILS[bKey];
  const usesSharedElectricTemplate = Boolean(
    storedBrandData && electricCatalogBrand && storedBrandData.name !== electricCatalogBrand.name
  );
  const brandData: BrandDetailData = storedBrandData ? (usesSharedElectricTemplate ? {
    ...storedBrandData,
    name: electricCatalogBrand!.name,
    tagline: `Specialist Doorstep EV Service for ${electricCatalogBrand!.name}`,
    description: `${electricCatalogBrand!.name} electric two-wheelers receive dedicated BMS, charging, motor, brake, tyre, and accessible wiring checks at your doorstep.`,
    additionalInfo: {
      engineOil: "Not Applicable — Electric Drivetrain Inspection",
      warranty: "15-Day EV Diagnostic and Labor Warranty",
      parts: `Genuine ${electricCatalogBrand!.name} Compatible Components`,
      avgTime: "Within 45 Mins Doorstep Arrival",
    },
    keyBenefits: [
      { title: "EV Diagnostic Check", desc: "BMS status, dashboard warnings, auxiliary voltage, accessible wiring, and charging-port condition are checked for supported models." },
      { title: "Motor & Controller Inspection", desc: "Throttle response, motor behavior, and accessible controller connections are inspected based on the reported fault." },
      { title: "EV Brake & Tyre Care", desc: "Disc pads, regenerative-brake response, tyre pressure, valves, and punctures are handled with EV-specific care." },
    ],
    reviews: [],
    seoKeywords: [],
    faqs: [],
  } : {
    ...storedBrandData,
    name: electricCatalogBrand?.name || storedBrandData.name,
  }) : {
    name: electricCatalogBrand?.name || brandSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
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
      { title: "Transparent Pricing", desc: "No hidden charges or unexpected garage add-ons. Upfront labor and part billing." },
    ],
    reviews: [],
    seoKeywords: [],
    faqs: [],
  };

  const brandName = brandData.name;
  const electricBrandObj = electricCatalogBrand || findElectricBrandByReference(brandName);
  const isElectricBrand = Boolean(electricBrandObj);

  // Models list from BIKE_DATA
  let brandObj = electricBrandObj || BIKE_DATA["Non-Electric Motorbike"].find(
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

  const isHondaBrand = bKey === "honda";
  const isHeroBrand = bKey === "hero";
  const isBajajBrand = bKey === "bajaj";
  const isRoyalEnfieldBrand = bKey === "royal-enfield";
  const isYamahaBrand = bKey === "yamaha";
  const isKtmBrand = bKey === "ktm";
  const isSuzukiBrand = bKey === "suzuki";
  const isOlaBrand = bKey === "ola-electric";
  const isAtherBrand = bKey === "ather";
  const isJawaBrand = bKey === "jawa";
  const isYezdiBrand = bKey === "yezdi";
  const isApriliaBrand = bKey === "aprilia";
  const isVespaBrand = bKey === "vespa";
  const isHarleyDavidsonBrand = bKey === "harley-davidson";
  const isKawasakiBrand = bKey === "kawasaki";
  const isBmwBrand = bKey === "bmw";
  const isTvsBrand = bKey === "tvs";
  const isFamilyBrand = isHondaBrand || isHeroBrand || isBajajBrand || isRoyalEnfieldBrand || isYamahaBrand || isKtmBrand || isSuzukiBrand || isOlaBrand || isAtherBrand || isJawaBrand || isYezdiBrand || isApriliaBrand || isVespaBrand || isHarleyDavidsonBrand || isKawasakiBrand || isBmwBrand || isTvsBrand;
  const familySections = isHondaBrand
    ? HONDA_MODEL_SECTIONS
    : isHeroBrand
      ? HERO_MODEL_SECTIONS
      : isBajajBrand
        ? BAJAJ_MODEL_SECTIONS
        : isRoyalEnfieldBrand
          ? ROYAL_ENFIELD_MODEL_SECTIONS
          : isYamahaBrand
            ? YAMAHA_MODEL_SECTIONS
            : isKtmBrand
              ? KTM_MODEL_SECTIONS
              : isSuzukiBrand
                ? SUZUKI_MODEL_SECTIONS
                : isOlaBrand
                  ? OLA_MODEL_SECTIONS
                  : isAtherBrand
                    ? ATHER_MODEL_SECTIONS
                    : isJawaBrand
                      ? JAWA_MODEL_SECTIONS
                      : isYezdiBrand
                        ? YEZDI_MODEL_SECTIONS
                        : isApriliaBrand
                          ? APRILIA_MODEL_SECTIONS
                          : isVespaBrand
                            ? VESPA_MODEL_SECTIONS
                            : isHarleyDavidsonBrand
                              ? HARLEY_DAVIDSON_MODEL_SECTIONS
                              : isKawasakiBrand
                                ? KAWASAKI_MODEL_SECTIONS
                                : isBmwBrand
                                  ? BMW_MODEL_SECTIONS
                                  : TVS_MODEL_SECTIONS;
  const modelFamilies = isHondaBrand
    ? HONDA_MODEL_FAMILIES
    : isHeroBrand
      ? HERO_MODEL_FAMILIES
      : isBajajBrand
        ? BAJAJ_MODEL_FAMILIES
        : isRoyalEnfieldBrand
          ? ROYAL_ENFIELD_MODEL_FAMILIES
          : isYamahaBrand
            ? YAMAHA_MODEL_FAMILIES
            : isKtmBrand
              ? KTM_MODEL_FAMILIES
              : isSuzukiBrand
                ? SUZUKI_MODEL_FAMILIES
                : isOlaBrand
                  ? OLA_MODEL_FAMILIES
                  : isAtherBrand
                    ? ATHER_MODEL_FAMILIES
                    : isJawaBrand
                      ? JAWA_MODEL_FAMILIES
                      : isYezdiBrand
                        ? YEZDI_MODEL_FAMILIES
                        : isApriliaBrand
                          ? APRILIA_MODEL_FAMILIES
                          : isVespaBrand
                            ? VESPA_MODEL_FAMILIES
                            : isHarleyDavidsonBrand
                              ? HARLEY_DAVIDSON_MODEL_FAMILIES
                              : isKawasakiBrand
                                ? KAWASAKI_MODEL_FAMILIES
                                : isBmwBrand
                                  ? BMW_MODEL_FAMILIES
                                  : TVS_MODEL_FAMILIES;
  const allModels = isFamilyBrand
    ? modelFamilies.map((family) => family.name)
    : brandObj ? brandObj.models.map((m) => m.name) : [];
  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const heroDesc = isElectricBrand
    ? `Get specialist doorstep ${brandName} EV service in ${cityName}. FixWheel provides BMS checks, auxiliary battery support, charging and motor diagnostics, brake service, tyre repair, and minor electrical work with transparent pricing.`
    : (CITY_HERO_DESCS[citySlug.toLowerCase()] || CITY_HERO_DESCS.gurgaon)(brandName);

  const cityFaqs = getBrandCityFaqs(
    brandName,
    cityName,
    localities,
    isElectricBrand,
    brandData.additionalInfo.parts,
    brandData.additionalInfo.engineOil,
  );

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
        .brand-city-scope .hero-ctas { display: flex; align-items: flex-start; gap: 14px; flex-wrap: wrap; margin-bottom: 0; }

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
        .brand-city-scope .family-category + .family-category {
          margin-top: 38px; padding-top: 34px; border-top: 1px solid var(--line-paper);
        }
        .brand-city-scope .family-category-head {
          display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 16px;
        }
        .brand-city-scope .family-category-title { display: flex; align-items: center; gap: 12px; }
        .brand-city-scope .family-category-title h3 {
          font-family: var(--font-oswald), sans-serif; font-size: 25px; color: var(--ink-dark); text-transform: uppercase;
        }
        .brand-city-scope .family-category-count {
          display: inline-flex; align-items: center; justify-content: center; min-width: 34px; height: 26px;
          padding: 0 9px; border-radius: 999px; background: var(--accent); color: #fff;
          font: 700 11px var(--font-jetbrains), monospace;
        }
        .brand-city-scope .family-category-copy { color: var(--ink-dim); font-size: 13px; text-align: right; }
        .brand-city-scope .more-models-callout {
          margin-top: 34px; padding: 22px 24px; display: flex; align-items: center; justify-content: space-between;
          gap: 28px; background: var(--ink-dark); border-left: 4px solid var(--accent); border-radius: 4px;
        }
        .brand-city-scope .more-models-message { display: flex; align-items: center; gap: 18px; min-width: 0; }
        .brand-city-scope .more-models-mark {
          width: 42px; height: 42px; flex: 0 0 42px; display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%; background: var(--accent); color: #fff; font: 700 25px/1 var(--font-jetbrains), monospace;
        }
        .brand-city-scope .more-models-copy h3 {
          margin: 0 0 4px; color: #fff; font-family: var(--font-oswald), sans-serif; font-size: 21px;
        }
        .brand-city-scope .more-models-copy p { margin: 0; color: #cbd5e1; font-size: 13px; }
        .brand-city-scope .more-models-cta {
          flex: 0 0 auto; padding: 12px 18px; border-radius: 3px; background: var(--accent); color: #fff;
          font: 700 12px var(--font-jetbrains), monospace; text-transform: uppercase;
        }

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
          .brand-city-scope .family-category-head { align-items: flex-start; flex-direction: column; gap: 6px; }
          .brand-city-scope .family-category-copy { text-align: left; }
          .brand-city-scope .more-models-callout { align-items: stretch; flex-direction: column; }
          .brand-city-scope .more-models-cta { text-align: center; }
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
              { label: cityName, href: `/${citySlug}` },
              { label: "Brands", href: "/brands" },
              { label: brandName, href: `/${bKey}` },
              { label: `${brandName} Service` },
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
              <HeroBookingAction>
                <Link href={`/book#${bKey}`} className="btn btn-primary">
                  Book {brandName} Service →
                </Link>
              </HeroBookingAction>
              <a href="tel:+918745945682" className="btn btn-dark" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                <Phone className="w-4 h-4" />
                Call Mechanic
              </a>
            </div>
          </div>

          <TwoWheelerQueryCard electric={isElectricBrand} />
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
              <b>{stats.average_rating || "4.7"} ★</b>
              <span>Customer Rating</span>
            </div>
            <div className="trust-item">
              <b>{stats.bikes_serviced}+</b>
              <span>Total Vehicles Serviced</span>
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
              <div className="eyebrow">{isFamilyBrand ? `${brandName} Model Families` : `${brandName} Models`} in {cityName}</div>
              <h2>{brandName} Bikes & Scooters Serviced at Doorstep in {cityName}</h2>
              <p>
                {isElectricBrand
                  ? `We provide EV diagnostics, charging and motor checks, brake service, tyre repair, and minor electrical support for all ${brandName} models across ${cityName}:`
                  : `We provide routine servicing, oil changes, engine tuning, and emergency repair for ${brandName} models across ${cityName}:`}
              </p>
            </div>
            {isFamilyBrand ? (
              <>
                {familySections.map((categorySection) => (
                  <div className="family-category" key={categorySection.category}>
                    <div className="family-category-head">
                      <div className="family-category-title">
                        <h3>{categorySection.category}</h3>
                        <span className="family-category-count">{categorySection.families.length}</span>
                      </div>
                      <p className="family-category-copy">
                        {categorySection.category === "Bike" && `${brandName} commuter, performance, adventure, and touring bikes`}
                        {categorySection.category === "Scooter" && `${brandName} petrol scooters and their generations`}
                        {categorySection.category === "EV" && `${brandName} electric scooters and motorcycles`}
                      </p>
                    </div>
                    <div className="models-grid">
                      {categorySection.families.map((family) => {
                        const booksDirectly = "bookingOnly" in family && family.bookingOnly;
                        return (
                          <Link
                            key={`${categorySection.category}-${family.slug}`}
                            href={booksDirectly ? `/book#${bKey}` : `/${bKey}/${family.slug}`}
                            className="model-card"
                          >
                            <div className="name">{family.name}</div>
                            <div className="go">{booksDirectly ? "Book service →" : "Explore models →"}</div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div id="more-models" className="more-models-callout">
                  <div className="more-models-message">
                    <span className="more-models-mark" aria-hidden="true">+</span>
                    <div className="more-models-copy">
                      <h3>We service other {brandName} models too</h3>
                      <p>If your {brandName} isn&apos;t listed above, share your model and repair needs when you book.</p>
                    </div>
                  </div>
                  <Link href={`/book#${bKey}`} className="more-models-cta">Book {brandName} service</Link>
                </div>
              </>
            ) : (
              <div className="models-grid">
                {allModels.map((model) => (
                  <Link key={model} href={`/book#${bKey}`} className="model-card">
                    <div className="name">{model}</div>
                    <div className="go">Book service →</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== POPULAR SERVICES RATES ===== */}
      <section style={{ background: "#F8FAFC" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Service Catalog</div>
            <h2>Doorstep {brandName} Service Charges in {cityName}</h2>
            <p>Transparent pricing with zero hidden fees. Pick your service and book a verified mechanic to your door:</p>
          </div>
          <div className="services-grid">
            {(isElectricBrand
              ? ELECTRIC_SERVICE_OPTIONS.map((service) => ({
                  name: service.name,
                  description: `${service.description} Available at your doorstep in ${cityName}.`,
                  price: service.price,
                }))
              : [
                  { name: "Service with Engine Oil", description: `Complete oil drain, OEM-spec fresh engine oil refilled, spark plug clean & chain lube in ${cityName}.`, price: 999 },
                  { name: "Basic Bike Service", description: `21-point checkup, brake adjust, spark plug clean, air filter check & electrical system check in ${cityName}.`, price: 550 },
                  { name: "Doorstep Puncture Repair", description: `Flat tyre tubeless & tube puncture repair on the spot at your home, office or roadside in ${cityName}.`, price: 399 },
                  { name: "Brake Disc & Pad Repair", description: `Brake pad replacement, disc rotor inspection, drum shoe swap & cable calibration in ${cityName}.`, price: 199 },
                  { name: "Battery Replacement", description: `On-site battery diagnostics, testing, jump-start & new warranty battery installation in ${cityName}.`, price: 99 },
                  { name: "Running Repair", description: `Quick breakdown repair, clutch cable adjustment & accelerator cable replacement in ${cityName}.`, price: 399 },
                ]
            ).map((service) => (
              <div className="service-card" key={service.name}>
                <div><h3>{service.name}</h3><p>{service.description}</p></div>
                <div className="price">₹{Math.max(service.price, 399).toLocaleString("en-IN")} <span>starting from</span></div>
              </div>
            ))}
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
              {otherCities.map((city) => (
                <Link key={city.slug} href={`/${city.slug}/${bKey}`}>
                  {brandName} in {city.name}
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
