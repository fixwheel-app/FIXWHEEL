"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { ChevronDown } from "lucide-react";

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

const brands = [
  {
    name: "Honda",
    models: ["Activa", "Shine", "Unicorn", "Dio", "SP125", "Hornet 2.0", "CB350"],
    description:
      "India's most popular two-wheeler brand. From the legendary Activa to the sporty CB350 — we service every Honda model at your doorstep with genuine OEM parts.",
    icon: "https://www.google.com/s2/favicons?domain=honda2wheelersindia.com&sz=64",
    tag: "MOST SERVICED",
  },
  {
    name: "Hero",
    models: ["Splendor", "HF Deluxe", "Passion", "Glamour", "Xtreme 160R", "Xpulse 200"],
    description:
      "The world's largest two-wheeler manufacturer. Hero's commuter bikes dominate Indian roads, and our mechanics know every nut and bolt across the entire lineup.",
    icon: "https://www.google.com/s2/favicons?domain=heromotocorp.com&sz=64",
    tag: "COMMUTER KING",
  },
  {
    name: "Bajaj",
    models: ["Pulsar", "Platina", "CT100", "Dominar 400", "Avenger", "NS200"],
    description:
      "From the street-smart Pulsar series to the highway-cruising Dominar — Bajaj bikes demand precision servicing, and our verified mechanics deliver exactly that.",
    icon: "https://www.google.com/s2/favicons?domain=bajajauto.com&sz=64",
    tag: "PERFORMANCE",
  },
  {
    name: "TVS",
    models: ["Jupiter", "Apache RTR", "Ntorq", "XL100", "Raider", "Star City"],
    description:
      "TVS builds everything from the peppy Ntorq to the race-bred Apache RTR. Our doorstep technicians handle routine service, engine work, and electrical diagnostics for all TVS models.",
    icon: "https://www.google.com/s2/favicons?domain=tvsmotor.com&sz=64",
    tag: "VERSATILE",
  },
  {
    name: "Royal Enfield",
    models: ["Classic 350", "Bullet 350", "Meteor 350", "Hunter 350", "Himalayan", "Continental GT"],
    description:
      "The thumping heartbeat of Indian motorcycling. Royal Enfield's single-cylinder engines need specialist care — our mechanics are trained specifically for RE servicing.",
    icon: "https://www.google.com/s2/favicons?domain=royalenfield.com&sz=64",
    tag: "ICONIC",
  },
  {
    name: "Yamaha",
    models: ["FZ", "R15", "MT15", "Ray ZR", "Fascino", "FZS"],
    description:
      "Japanese engineering, refined performance. From the track-focused R15 to the elegant Fascino scooter — we service Yamaha's complete India portfolio.",
    icon: "https://www.google.com/s2/favicons?domain=yamaha-motor-india.com&sz=64",
    tag: "PRECISION",
  },
  {
    name: "Suzuki",
    models: ["Access 125", "Gixxer", "Burgman", "Avenis", "Intruder"],
    description:
      "Suzuki's reliability-first philosophy means fewer breakdowns, but when service is due — our mechanics use OEM-spec parts and follow Suzuki's maintenance schedule.",
    icon: "https://www.google.com/s2/favicons?domain=suzukimotorcycle.co.in&sz=64",
    tag: "RELIABLE",
  },
  {
    name: "KTM",
    models: ["Duke 200", "Duke 390", "RC 200", "RC 390", "Adventure 250", "Adventure 390"],
    description:
      "High-performance Austrian engineering meets Indian roads. KTM's liquid-cooled engines and advanced electronics require trained hands — that's exactly what we send.",
    icon: "https://www.google.com/s2/favicons?domain=ktm.com&sz=64",
    tag: "HIGH PERFORMANCE",
  },
  {
    name: "Ola Electric",
    models: ["S1 Pro", "S1 Air", "S1 X"],
    description:
      "India's EV revolution leader. Our technicians are trained in EV-specific diagnostics, battery health checks, motor servicing, and software-related troubleshooting for all Ola models.",
    icon: "https://www.google.com/s2/favicons?domain=olaelectric.com&sz=64",
    tag: "EV",
  },
  {
    name: "Ather",
    models: ["Ather 450X", "Ather 450S", "Ather Rizta"],
    description:
      "Premium electric scooters with connected dashboards and fast-charging. Our EV-certified mechanics handle brake service, suspension, tyre changes, and general maintenance.",
    icon: "https://www.google.com/s2/favicons?domain=atherenergy.com&sz=64",
    tag: "EV PREMIUM",
  },
  {
    name: "Jawa",
    models: ["Jawa 42", "Perak", "Jawa 350", "42 Bobber"],
    description:
      "Modern retro legends powered by liquid-cooled DOHC engines. We provide specialized doorstep service for Jawa motorcycles using genuine lubricants and parts.",
    icon: "https://www.google.com/s2/favicons?domain=jawamotorcycles.com&sz=64",
    tag: "RETRO CLASSIC",
  },
  {
    name: "Yezdi",
    models: ["Roadster", "Scrambler", "Adventure"],
    description:
      "Built for rugged roads and off-beat trails. Our mechanics carry dedicated tools for Yezdi's 334cc DOHC platform, handling chain lube, coolant checks, and full servicing.",
    icon: "https://www.google.com/s2/favicons?domain=yezdi.com&sz=64",
    tag: "ADVENTURE",
  },
  {
    name: "Aprilia",
    models: ["SR 160", "SXR 160", "Storm 125", "RS 457"],
    description:
      "Italian racing DNA in every throttle twist. From high-RPM CVT scooter tuning to disc brake pad replacements — we keep your Aprilia running sharp.",
    icon: "https://www.google.com/s2/favicons?domain=apriliaindia.com&sz=64",
    tag: "RACING DNA",
  },
  {
    name: "Vespa",
    models: ["VXL 125", "SXL 150", "ZX 125", "Urban Club"],
    description:
      "Iconic steel monocoque design and timeless Italian style. We handle your Vespa with white-glove care — CVT variator cleaning, oil change, and full inspection.",
    icon: "https://www.google.com/s2/favicons?domain=vespa.in&sz=64",
    tag: "ITALIAN STYLE",
  },
  {
    name: "Harley-Davidson",
    models: ["X440", "Iron 883", "Forty-Eight", "Street 750"],
    description:
      "Heavy-duty cruisers demanding high-torque fasteners and premium V-twin synthetic oils. Our mechanics handle periodic service and brake checks right in your driveway.",
    icon: "https://www.google.com/s2/favicons?domain=harley-davidson.com&sz=64",
    tag: "CRUISER",
  },
  {
    name: "Kawasaki",
    models: ["Ninja 300", "Ninja 400", "Z650", "Versys 650"],
    description:
      "High-revving multi-cylinder sportbikes and streetfighters. We use double-ester synthetic oils, perform laser chain alignments, and radiator cooling checks at doorstep.",
    icon: "https://www.google.com/s2/favicons?domain=kawasaki-india.com&sz=64",
    tag: "SUPERBIKE",
  },
];

export default function BrandsClientPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const mainBrandFaqs = [
    {
      q: "Which two-wheeler brands do FixWheel doorstep mechanics service in Delhi NCR?",
      a: "We service all major two-wheeler brands in India including Honda, Hero, Bajaj, TVS, Royal Enfield, Yamaha, Suzuki, KTM, Ola Electric, Ather Energy, Vespa, Jawa, Yezdi, Triumph, Kawasaki, Harley-Davidson, BMW Motorrad, Benelli, and Revolt.",
    },
    {
      q: "Do your mechanics bring genuine OEM spare parts for my specific bike brand?",
      a: "Yes, 100%! We strictly use factory-genuine OEM spare parts, manufacturer-recommended engine oil grades (e.g. HMSI for Honda, Liquid Gun for Royal Enfield, Yamalube for Yamaha, ECSTAR for Suzuki, Motul 7100 for KTM/Triumph), and genuine filters.",
    },
    {
      q: "How does doorstep bike servicing work for different two-wheeler models?",
      a: "Select your two-wheeler brand and model during online booking or via phone. A certified mobile technician arrives at your home or office parking within 45 minutes equipped with specialized tools for your exact bike model.",
    },
    {
      q: "Is there any price difference when servicing a premium or electric two-wheeler at home?",
      a: "Our doorstep service packages start at just ₹199 across all commuter, scooter, and performance models. Standard labor charges and transparent OEM spare parts pricing apply without any hidden fees.",
    },
    {
      q: "What warranty is provided on doorstep brand repairs and component replacements?",
      a: "FixWheel provides a 15-day labor & diagnostic quality guarantee on all services across every brand, alongside official manufacturer warranties on any replaced components.",
    },
  ];

  const filteredBrands = brands.filter((brand) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      brand.name.toLowerCase().includes(query) ||
      brand.tag.toLowerCase().includes(query) ||
      brand.description.toLowerCase().includes(query) ||
      brand.models.some((model) => model.toLowerCase().includes(query))
    );
  });

  return (
    <div className={`brands-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .brands-scope {
          --bg:#FFFFFF;
          --bg-soft:#F8FAFC;
          --paper:#FFFFFF;
          --paper-dim:#F8FAFC;
          --ink:#1E293B;
          --ink-dim:#64748B;
          --ink-dark:#0F172A;
          --accent:#e62b2b;
          --accent-dim:#d32f2f;
          --stamp:#D8430F;
          --steel:#5C7A93;
          --line:rgba(0,0,0,0.08);
          --line-paper:#E2E8F0;
          --radius:4px;

          --hero-bg:#17181A;
          --hero-text:#FFFFFF;
          --hero-ink-dim:#A7A9AC;

          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        .brands-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .brands-scope img { max-width: 100%; display: block; }
        .brands-scope a { color: inherit; text-decoration: none; }
        .brands-scope ul { list-style: none; }
        .brands-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .brands-scope h1, .brands-scope h2, .brands-scope h3, .brands-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .brands-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .brands-scope .eyebrow {
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
        .brands-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .brands-scope .btn {
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
        .brands-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .brands-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .brands-scope .btn-ghost { border-color: rgba(255,255,255,0.2); color: var(--hero-text); }
        .brands-scope .btn-ghost:hover { border-color: var(--hero-text); }
        .brands-scope .btn-dark { background: var(--ink-dark); color: #FFFFFF; }
        .brands-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }
        .brands-scope .hover-white:hover { color: var(--ink) !important; }

        /* BREADCRUMB */
        .brands-scope .breadcrumb {
          padding: 20px 0;
          background: var(--hero-bg);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .brands-scope .breadcrumb nav {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--hero-ink-dim);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .brands-scope .breadcrumb a { color: var(--hero-ink-dim); transition: color .15s ease; }
        .brands-scope .breadcrumb a:hover { color: var(--accent); }
        .brands-scope .breadcrumb .sep { color: rgba(255,255,255,0.2); }
        .brands-scope .breadcrumb .current { color: var(--hero-text); }

        /* HERO */
        .brands-scope .hero {
          position: relative;
          padding: 110px 0 64px;
          background: var(--hero-bg);
          color: var(--hero-text);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .brands-scope .hero::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .brands-scope .hero-inner {
          position: relative; z-index: 1;
          max-width: 800px;
        }
        .brands-scope .hero h1 { font-size: 60px; margin: 0 0 16px; color: var(--hero-text); }
        .brands-scope .hero h1 em { font-style: normal; color: var(--accent); }
        .brands-scope .hero p.lead { font-size: 16px; color: var(--hero-ink-dim); max-width: 580px; }

        /* TRUST STRIP */
        .brands-scope .trust-strip {
          border-bottom: 1px solid var(--line);
          background: var(--bg-soft);
        }
        .brands-scope .trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line);
        }
        .brands-scope .trust-item {
          background: var(--bg-soft);
          padding: 28px 24px;
          text-align: center;
        }
        .brands-scope .trust-item b {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 22px;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .brands-scope .trust-item span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* SECTION GENERIC */
        .brands-scope section { padding: 88px 0; border-bottom: 1px solid var(--line); }
        .brands-scope .section-head { max-width: 640px; margin-bottom: 48px; }
        .brands-scope .section-head h2 { font-size: 34px; color: var(--ink); }
        .brands-scope .section-head p { color: var(--ink-dim); margin-top: 14px; font-size: 15.5px; }
        .brands-scope .section-alt { background: var(--bg); }

        /* BRAND GRID */
        .brands-scope .brand-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .brands-scope .brand-card {
          background: var(--paper);
          border: 1px solid var(--line);
          padding: 28px 26px 24px;
          border-radius: 4px;
          transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .brands-scope .brand-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.04);
        }
        .brands-scope .brand-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .brands-scope .brand-card-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brands-scope .brand-card-logo img {
          width: 32px; height: 32px; object-fit: contain; border-radius: 4px;
        }
        .brands-scope .brand-card-logo h3 {
          font-size: 20px; color: var(--ink-dark); margin: 0;
        }
        .brands-scope .brand-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          font-weight: 700;
          color: var(--accent);
          background: rgba(230,43,43,0.08);
          padding: 3px 8px;
          border-radius: 3px;
          letter-spacing: 0.05em;
        }
        .brands-scope .brand-desc {
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .brands-scope .brand-models-label {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink-dim);
          margin-bottom: 8px;
          display: block;
        }
        .brands-scope .brand-models {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .brands-scope .brand-model-pill {
          font-size: 11.5px;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          padding: 3px 8px;
          border-radius: 3px;
          color: var(--ink);
        }
        .brands-scope .brand-card-cta {
          border-top: 1px solid var(--line);
          padding-top: 14px;
          margin-top: auto;
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
        }
        .brands-scope .brand-card-cta a:hover { text-decoration: underline; }

        .brands-scope .count-strip {
          margin-top: 40px;
          padding: 16px 24px;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 14px;
          color: var(--ink-dim);
        }

        .brands-scope .search-container {
          position: relative;
          margin-bottom: 32px;
        }
        .brands-scope .search-input {
          width: 100%;
          padding: 14px 44px;
          background: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: 4px;
          font-size: 14px;
          color: var(--ink-dark);
          transition: border-color 0.15s ease;
        }
        .brands-scope .search-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .brands-scope .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ink-dim);
          pointer-events: none;
        }
        .brands-scope .search-clear {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ink-dim);
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          padding: 4px;
        }
        .brands-scope .search-clear:hover { color: var(--accent); }

        /* BRAND FAQS */
        .brands-scope .faq-section {
          padding: 80px 0;
          background: var(--bg-soft);
          border-bottom: 1px solid var(--line);
        }
        .brands-scope .faq-wrap {
          max-width: 860px;
          margin: 0 auto;
        }
        .brands-scope .faq-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .brands-scope .faq-head h2 {
          font-size: 34px;
          color: var(--ink-dark);
        }
        .brands-scope .faq-head p {
          color: var(--ink-dim);
          font-size: 15px;
          margin-top: 12px;
        }
        .brands-scope .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .brands-scope .faq-card {
          background: #FFFFFF;
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
        }
        .brands-scope .faq-btn {
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
        .brands-scope .faq-body {
          padding: 0 24px 22px;
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.65;
          border-top: 1px solid rgba(0,0,0,0.04);
          padding-top: 16px;
        }

        /* FINAL CTA */
        .brands-scope .final-cta {
          text-align: center; padding: 90px 0;
          background: linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
        }
        .brands-scope .final-cta h2 { font-size: 38px; color: var(--ink); max-width: 700px; margin: 0 auto 16px;}
        .brands-scope .final-cta p { color: var(--ink-dim); margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto;}

        /* RESPONSIVE */
        @media (max-width: 900px){
          .brands-scope .hero h1 { font-size: 38px; }
          .brands-scope .brand-grid { grid-template-columns: repeat(2, 1fr); }
          .brands-scope .trust-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width:560px){
          .brands-scope .brand-grid { grid-template-columns: 1fr; }
          .brands-scope .trust-inner { grid-template-columns: 1fr; }
          .brands-scope .hero { padding-top: 70px; }
          .brands-scope .count-strip { flex-direction: column; text-align: center; }
        }

        @media (prefers-reduced-motion: reduce){
          .brands-scope * { transition:none !important; scroll-behavior:auto !important; }
        }
      ` }} />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="wrap">
          <nav>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Brands</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="eyebrow">All Two-Wheeler Brands · Doorstep Service</div>
            <h1>Doorstep Bike Repair &<br />Scooter Service <em>For All Brands</em></h1>
            <p className="lead">From Honda Activas to Royal Enfield Bullets, Ola scooters to Kawasaki Ninjas — FixWheel's verified mechanics service all major two-wheeler brands at your home, office, or roadside. One booking, any brand, guaranteed quality.</p>
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary">Book a Mechanic Now →</Link>
              <a href="#brands" className="btn btn-ghost">Explore All Brands</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <b>16+</b>
            <span>Brands Serviced</span>
          </div>
          <div className="trust-item">
            <b>45 min</b>
            <span>Within 45 Mins Arrival</span>
          </div>
          <div className="trust-item">
            <b>4.7★</b>
            <span>Customer Rating</span>
          </div>
          <div className="trust-item">
            <b>15 Days</b>
            <span>Labor Warranty</span>
          </div>
        </div>
      </div>

      {/* BRAND GRID */}
      <section id="brands" className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">All Brands</div>
            <h2>Two-Wheeler Brands We Service</h2>
            <p>Our mechanics are trained across every major Indian and international two-wheeler brand. Select any brand below to explore models we cover. Find doorstep bike repair service and scooter mechanics for any model.</p>
          </div>

          {/* SEARCH BAR */}
          <div className="search-container">
            <span className="search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by brand or model (e.g. Activa, Pulsar, Ola)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="search-clear">
                Clear
              </button>
            )}
          </div>

          {filteredBrands.length === 0 ? (
            <div className="no-results">
              <h3>No Brands Found</h3>
              <p>We couldn't find any brands or models matching "{searchQuery}". Try searching for something else like "Honda", "Pulsar", "EV", etc.</p>
              <button onClick={() => setSearchQuery("")} className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "11px" }}>
                Clear Search
              </button>
            </div>
          ) : (
            <div className="brand-grid">
              {filteredBrands.map((brand, idx) => (
                <div className="brand-card" key={idx}>
                  <div className="brand-card-top">
                    <div className="brand-card-logo">
                      <img src={brand.icon} alt={`${brand.name} logo`} />
                      <h3>{brand.name}</h3>
                    </div>
                    <span className="brand-tag">{brand.tag}</span>
                  </div>
                  <p className="brand-desc">{brand.description}</p>
                  <span className="brand-models-label">Popular Models</span>
                  <div className="brand-models">
                    {brand.models.map((model, mIdx) => (
                      <span className="brand-model-pill" key={mIdx}>{model}</span>
                    ))}
                  </div>
                  <div className="brand-card-cta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <Link href={`/book#${brand.name.toLowerCase().replace(/ /g, "-")}`}>Book {brand.name} Service →</Link>
                    <Link href={`/brands/${brand.name.toLowerCase().replace(/ /g, "-")}`} style={{ color: 'var(--ink-dim)', fontSize: '11px', transition: 'color 0.15s' }} className="hover-white">Models & Info →</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="count-strip">
            <p>Showing <b>{filteredBrands.length}</b> of <b>{brands.length} brands</b> · <b>80+ models</b> — all serviced at your doorstep</p>
            <Link href="/book" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "11px" }}>Book Now →</Link>
          </div>
        </div>
      </section>

      {/* BRAND FAQS */}
      <section className="faq-section">
        <div className="wrap faq-wrap">
          <div className="section-head faq-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>FAQ</div>
            <h2>Frequently Asked Questions — Two-Wheeler Brands</h2>
            <p>Everything you need to know about our doorstep bike and scooter servicing across all major brands in Delhi NCR.</p>
          </div>

          <div className="faq-list">
            {mainBrandFaqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <div className="faq-btn" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaqs[idx] ? "rotate-180" : ""}`} />
                </div>
                {openFaqs[idx] && (
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Ready to book?</div>
          <h2>Your Brand, Our Expertise.<br />Serviced at Your Door.</h2>
          <p>Verified mechanic at your home or office. Any brand, any model. OEM parts. 15-day warranty. Starting ₹199.</p>
          <Link href="/book" className="btn btn-dark">Book Your Bike Service →</Link>
        </div>
      </section>
    </div>
  );
}
