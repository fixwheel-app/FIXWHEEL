"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CityServicesGrid from "@/components/CityServicesGrid";
import TwoWheelerQueryCard from "@/components/TwoWheelerQueryCard";
import VehiclesWeService from "@/components/VehiclesWeService";
import PaymentTrustRow from "@/components/PaymentTrustRow";
import PopularBrands from "@/components/PopularBrands";
import CitySwitcher from "@/components/CitySwitcher";
import HowSectionActions from "@/components/HowSectionActions";
import type { PageVariables } from "@/lib/pageVariables";
import type { PublicStatRecord } from "@/lib/publicStats";

export interface CityArea {
  name: string;
  slug: string;
}

export interface CityTextCard {
  title: string;
  text: string;
}

export interface CityReview {
  text: string;
  author: string;
  stars?: string;
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityBrand {
  name: string;
  domain: string;
}

export interface CityPageConfig {
  cityName: string;
  citySlug: string;
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    lead: string;
    bookingLabel: string;
    arrivalTime: string | "page-variable";
    ratingSource: "page-variable" | "public-stats";
    serviceArea: string;
    ticketId: string;
    ticketRows: Array<{ label: string; value: string }>;
    totalPaid: string;
    ticketRegion: string;
  };
  coverage: {
    heading?: string;
    description: string;
    areas: CityArea[];
    expansionLabel: string;
    expansionStyle?: "outline" | "filled";
  };
  why: {
    heading: string;
    description: string;
    cards: CityTextCard[];
  };
  servicesHeading?: string;
  servicesDescription?: string;
  vehicles?: {
    heading: string;
    description: string;
    types: string[];
    brandsHeading: string;
    brands: CityBrand[];
  };
  howHeading?: string;
  how: CityTextCard[];
  reviews: {
    heading: string;
    rating: string;
    items: CityReview[];
  };
  partner: {
    heading: string;
    description: string;
    registrationText: string;
    benefits?: string[];
  };
  faqs: CityFaq[];
  roadside: {
    heading: string;
    description: string;
    badgeColor?: string;
  };
  contact?: {
    heading: string;
    description: string;
    callNote: string;
  };
  cityLinks?: Array<{ href: string; label: string }>;
  finalCta: {
    heading: string;
    description: string;
  };
}

export interface CityPageSectionsProps {
  config: CityPageConfig;
  pageVars: PageVariables;
  stats: PublicStatRecord;
  openFaqs: Record<number, boolean>;
  toggleFaq: (idx: number) => void;
}

const brands = [
  { name: "Honda", domain: "honda.com" },
  { name: "Hero", domain: "heromotocorp.com" },
  { name: "Bajaj", domain: "bajajauto.com" },
  { name: "TVS", domain: "tvsmotor.com" },
  { name: "Royal Enfield", domain: "royalenfield.com" },
  { name: "Yamaha", domain: "yamahamotorsports.com" },
  { name: "Suzuki", domain: "suzukicycles.com" },
  { name: "KTM", domain: "ktm.com" },
  { name: "Ola Electric", domain: "olaelectric.com" },
  { name: "Ather", domain: "atherenergy.com" },
  { name: "Vespa", domain: "vespa.com" },
  { name: "Jawa", domain: "jawa.in" },
  { name: "Aprilia", domain: "aprilia.com" },
  { name: "Harley-Davidson", domain: "harley-davidson.com" },
  { name: "Kawasaki", domain: "kawasakimotorcycle.com" },
  { name: "Benelli", domain: "benelli.com" },
];

export default function CityPageSections({ config, pageVars, stats, openFaqs, toggleFaq }: CityPageSectionsProps) {
  const [showAllAreas, setShowAllAreas] = useState(false);
  const arrivalTime = config.hero.arrivalTime === "page-variable" ? pageVars.avgTime : config.hero.arrivalTime;
  const rating = config.hero.ratingSource === "page-variable" ? pageVars.averageRating : stats.average_rating;
  const partnerBenefits = config.partner.benefits || [
    "Set your own working hours",
    "Manage bookings from your phone",
    "Receive service requests from nearby customers",
  ];
  const visibleAreas = showAllAreas ? config.coverage.areas : config.coverage.areas.slice(0, 10);

  return (
    <>
      <div style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: config.cityName }]} />
        </div>
      </div>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">{config.hero.eyebrow}</div>
            <h1>{config.hero.title}<br /><em>{config.hero.emphasis}</em></h1>
            <p className="lead">{config.hero.lead}</p>
            <div className="w-full sm:w-fit" style={{ maxWidth: "100%", marginBottom: "40px" }}>
              <div className="hero-ctas" style={{ marginBottom: 0 }}>
                <Link href="/book" className="btn btn-primary">{config.hero.bookingLabel}</Link>
                <a href="#how" className="btn btn-ghost">See how it works</a>
              </div>
              <PaymentTrustRow className="mt-3" />
            </div>
            <div className="stat-row">
              <div className="stat"><b>{arrivalTime}</b><span>Arrival time</span></div>
              <div className="stat"><b>{pageVars.bikesServicedText}</b><span>Total vehicles serviced</span></div>
              <div className="stat"><b>{rating}★</b><span>Customer rating</span></div>
              <div className="stat"><b>{config.hero.serviceArea}</b><span>Service area</span></div>
            </div>
          </div>
          <TwoWheelerQueryCard />
        </div>
      </section>

      <VehiclesWeService citySlug={config.citySlug} />

      <section id="areas" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>{config.coverage.heading || `Where we operate in ${config.cityName}`}</h2>
            <p>{config.coverage.description}</p>
          </div>
          <div className="area-grid">
            {visibleAreas.map((area, idx) => (
              <Link key={idx} href={`/${config.citySlug}/${area.slug}`} className="area-tag">📍 {area.name}</Link>
            ))}
            {showAllAreas && (
              <span className="area-tag" style={{ backgroundColor: "var(--accent)", color: "#FFFFFF", borderColor: "var(--accent)" }}>
                Across all {config.cityName}
              </span>
            )}
          </div>
          {config.coverage.areas.length > 10 && (
            <div style={{ marginTop: "22px" }}>
              <button
                type="button"
                className="area-tag"
                aria-expanded={showAllAreas}
                onClick={() => setShowAllAreas((value) => !value)}
                style={showAllAreas
                  ? { borderColor: "var(--accent)", color: "var(--accent)", cursor: "pointer" }
                  : config.coverage.expansionStyle === "filled"
                    ? { backgroundColor: "var(--accent)", color: "#FFFFFF", borderColor: "var(--accent)", cursor: "pointer" }
                    : { borderColor: "var(--accent)", color: "var(--accent)", cursor: "pointer" }}
              >
                {showAllAreas ? "View less" : "View more"}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>{config.howHeading || "Book to fixed — 4 simple steps"}</h2>
          </div>
          <div className="steps">
            {config.how.map((step, idx) => (
              <div className="step" key={step.title}>
                <span className="n">{String(idx + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <HowSectionActions />
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Services & pricing</div>
            <h2>{config.servicesHeading || `Two Wheeler Service & Repair in ${config.cityName}`}</h2>
            {config.servicesDescription && <p>{config.servicesDescription}</p>}
          </div>
          <CityServicesGrid cityName={config.cityName} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "24px" }}>
            <div className="eyebrow">We service all major brands</div>
            <h2 style={{ fontSize: "26px" }}>{config.vehicles?.brandsHeading || `Any brand, any model — ${config.cityName} doorstep`}</h2>
          </div>
          <PopularBrands cityName={config.cityName} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>{config.reviews.heading}</h2>
            <p style={{ marginTop: "10px" }}><b style={{ color: "var(--accent)", fontSize: "18px" }}>{config.reviews.rating}</b> average customer rating</p>
          </div>
          <div className="review-grid">
            {config.reviews.items.map((review) => (
              <div className="review" key={review.author}>
                <div className="stars">{review.stars || "★★★★★"}</div>
                <p>"{review.text}"</p>
                <div className="who">{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap partner">
          <div>
            <div className="eyebrow">Join our network</div>
            <h2>{config.partner.heading}</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "14px", maxWidth: "480px" }}>{config.partner.description}</p>
            <ul>{partnerBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </div>
          <div className="partner-box">
            <h3 style={{ fontSize: "20px", textTransform: "none", letterSpacing: 0, color: "var(--paper)", marginBottom: "12px" }}>Become a partner</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "22px" }}>{config.partner.registrationText}</p>
            <Link href="/partner" className="btn btn-primary">Become a Partner →</Link>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow">FAQs</div><h2>Common questions about two-wheeler repair in {config.cityName}</h2></div>
          <div className="faq-list">
            {config.faqs.map((faq, idx) => (
              <div className={`faq-item ${openFaqs[idx] ? "open" : ""}`} key={faq.question}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>{faq.question}<span className="plus">+</span></div>
                <div className="faq-a"><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-alt">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>{config.contact?.heading || "Get in touch"}</h2>
            <p style={{ color: "var(--ink-dim)", marginTop: "10px" }}>{config.contact?.description || "Call or email us. We respond within 2 hours during business hours (8 AM – 10 PM)."}</p>
            <div className="contact-list">
              <div className="contact-item"><div className="ic">☎</div><div><b>+91 87459 45682</b><span>{config.contact?.callNote || "Call us between 8 AM and 10 PM"}</span></div></div>
              <div className="contact-item"><div className="ic">✉</div><div><b>support@fixwheel.app</b><span>We reply within 2 hours</span></div></div>
              <div className="contact-item"><div className="ic">💬</div><div><b>Chat on WhatsApp</b><span>Fastest way to book</span></div></div>
            </div>
          </div>
          <div className="sos-highlight-box" style={{ background: "rgba(230, 43, 43, 0.05)", border: "1px solid var(--accent)", padding: "30px", borderRadius: "4px", display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", right: "20px", background: "var(--accent)", color: config.roadside.badgeColor || "#17181A", fontSize: "10px", fontFamily: "var(--font-jetbrains)", fontWeight: 700, padding: "4px 10px", textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: "2px" }}>24/7 EMERGENCY</div>
            <h3 style={{ fontSize: "22px", color: "var(--ink-dark)", marginTop: "10px" }}>{config.roadside.heading}</h3>
            <p style={{ color: "#475569", fontSize: "14px" }}>{config.roadside.description}</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "10px" }}>
              <Link href="/book" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "12px" }}>Request Roadside Assistance →</Link>
              <a href="tel:+918745945682" className="btn" style={{ padding: "10px 20px", fontSize: "12px", border: "1px solid #0F172A", color: "#0F172A", background: "transparent" }}>Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h2>{config.finalCta.heading}</h2>
          <p>{config.finalCta.description}</p>
          <Link href="/book" className="btn btn-dark">Book Your Two-Wheeler Service →</Link>
        </div>
      </section>
      <CitySwitcher currentCity={config.cityName} />
    </>
  );
}
