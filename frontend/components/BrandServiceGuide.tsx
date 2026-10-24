import Link from "next/link";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN";

const COMPARISON_ROWS = [
  {
    label: "Travel and waiting",
    fixwheel: "A mechanic comes to you, usually within 45 minutes",
    garage: "You ride or arrange towing, then wait at the workshop",
  },
  {
    label: "Breakdowns",
    fixwheel: "Roadside assistance available from ₹399",
    garage: "The vehicle usually needs to reach the garage first",
  },
  {
    label: "Pricing",
    fixwheel: "The quote is shown and approved before work begins",
    garage: "The estimate is normally prepared at the workshop",
  },
  {
    label: "Service visibility",
    fixwheel: "See the inspection and approved work at your location",
    garage: "The vehicle may stay at the workshop during service",
  },
  {
    label: "Best for",
    fixwheel: "Paid service, repairs, breakdowns and saving a trip",
    garage: "Workshop jobs that need fixed equipment or major dismantling",
  },
] as const;

const BOOKING_STEPS = [
  {
    step: "Step 1",
    title: "Pick a service",
    description: "Choose your model, the service and a convenient time slot.",
  },
  {
    step: "Step 2",
    title: "Mechanic assigned",
    description: "A verified mechanic near you is confirmed and heads over.",
  },
  {
    step: "Step 3",
    title: "Repaired on site",
    description: "Inspection, quote, your approval, and then the work begins.",
  },
  {
    step: "Step 4",
    title: "Pay and rate",
    description: "Pay by UPI, card or cash after service, then rate the mechanic.",
  },
] as const;

const CITY_LINKS = [
  { name: "Delhi", slug: "delhi" },
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Noida", slug: "noida" },
  { name: "Faridabad", slug: "faridabad" },
  { name: "Ghaziabad", slug: "ghaziabad" },
] as const;

interface BrandServiceGuideProps {
  brandName: string;
  brandSlug: string;
  familyName?: string;
}

export default function BrandServiceGuide({ brandName, brandSlug, familyName }: BrandServiceGuideProps) {
  const subjectName = familyName ? `${brandName} ${familyName}` : brandName;

  return (
    <section className="brand-service-guide" aria-label={`${subjectName} service guide`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-service-guide {
          background: #f8fafc;
          color: #0f172a;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }
        .brand-service-guide * { box-sizing: border-box; }
        .brand-service-guide .guide-shell {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 72px 0;
        }
        .brand-service-guide .guide-block + .guide-block {
          margin-top: 64px;
          padding-top: 64px;
          border-top: 1px solid #e2e8f0;
        }
        .brand-service-guide h2 {
          margin: 0;
          color: #0f172a;
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.08;
          letter-spacing: .01em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .brand-service-guide .guide-intro {
          max-width: 760px;
          margin: 12px 0 0;
          color: #475569;
          font-size: 16px;
          line-height: 1.6;
        }
        .brand-service-guide .comparison-scroll {
          margin-top: 32px;
          overflow-x: auto;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #ffffff;
        }
        .brand-service-guide table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
          text-align: left;
          font-size: 15px;
          line-height: 1.5;
        }
        .brand-service-guide th,
        .brand-service-guide td {
          padding: 18px 20px;
          border-bottom: 1px solid #e2e8f0;
          vertical-align: top;
        }
        .brand-service-guide thead th {
          background: #0f172a;
          color: #ffffff;
          font-family: var(--font-jetbrains), 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
        }
        .brand-service-guide thead th:nth-child(2) { background: #e62b2b; }
        .brand-service-guide tbody th {
          width: 26%;
          color: #0f172a;
          font-weight: 700;
        }
        .brand-service-guide tbody td { color: #334155; }
        .brand-service-guide tbody td:nth-child(2) { background: #fff7f7; }
        .brand-service-guide tbody tr:last-child th,
        .brand-service-guide tbody tr:last-child td { border-bottom: 0; }
        .brand-service-guide .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          margin-top: 34px;
        }
        .brand-service-guide .step-item {
          padding-top: 18px;
          border-top: 3px solid #e62b2b;
        }
        .brand-service-guide .step-label {
          display: block;
          margin-bottom: 6px;
          color: #e62b2b;
          font-family: var(--font-jetbrains), 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .brand-service-guide .step-item h3 {
          margin: 0;
          color: #0f172a;
          font-family: var(--font-oswald), 'Oswald', sans-serif;
          font-size: 19px;
          line-height: 1.25;
          letter-spacing: .01em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .brand-service-guide .step-item p {
          margin: 10px 0 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.55;
        }
        .brand-service-guide .guide-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }
        .brand-service-guide .guide-action {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          padding: 13px 24px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          background: #ffffff;
          color: #0f172a;
          font-family: var(--font-jetbrains), 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color .18s ease, border-color .18s ease, color .18s ease, transform .18s ease;
        }
        .brand-service-guide .guide-action:hover {
          border-color: #e62b2b;
          color: #e62b2b;
          transform: translateY(-2px);
        }
        .brand-service-guide .guide-action:focus-visible,
        .brand-service-guide .city-link:focus-visible {
          outline: 3px solid rgba(230,43,43,.35);
          outline-offset: 4px;
        }
        .brand-service-guide .guide-action.primary {
          border-color: #e62b2b;
          background: #e62b2b;
          color: #ffffff;
        }
        .brand-service-guide .guide-action.primary:hover {
          border-color: #ff5252;
          background: #ff5252;
          color: #ffffff;
        }
        .brand-service-guide .city-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px 28px;
          margin-top: 28px;
        }
        .brand-service-guide .city-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 11px 16px;
          border: 1px solid #334155;
          border-radius: 6px;
          background: #0f172a;
          color: #ffffff;
          font-family: var(--font-jetbrains), 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
        }
        .brand-service-guide .city-link:hover {
          border-color: #e62b2b;
          background: #e62b2b;
          transform: translateY(-2px);
        }
        @media (max-width: 820px) {
          .brand-service-guide .guide-shell {
            width: min(100% - 32px, 1180px);
            padding: 56px 0;
          }
          .brand-service-guide .guide-block + .guide-block {
            margin-top: 48px;
            padding-top: 48px;
          }
          .brand-service-guide .steps-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 520px) {
          .brand-service-guide h2 { font-size: 29px; }
          .brand-service-guide .guide-intro { font-size: 16px; }
          .brand-service-guide .steps-grid { grid-template-columns: 1fr; gap: 26px; }
          .brand-service-guide .guide-actions { flex-direction: column; }
          .brand-service-guide .guide-action { width: 100%; }
          .brand-service-guide .city-links { flex-direction: column; gap: 16px; }
        }
      ` }} />

      <div className="guide-shell">
        <div className="guide-block">
          <h2>{subjectName} service near me: FixWheel or a local garage?</h2>
          <p className="guide-intro">Compare the practical differences and choose the option that suits the work your two-wheeler needs.</p>

          <div className="comparison-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">What to compare</th>
                  <th scope="col">FixWheel at your doorstep</th>
                  <th scope="col">Local garage</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.fixwheel}</td>
                    <td>{row.garage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="guide-block">
          <h2>How to book a {subjectName} mechanic</h2>
          <p className="guide-intro">Booking takes about a minute in the FixWheel app or on the website.</p>

          <div className="steps-grid">
            {BOOKING_STEPS.map((item) => (
              <div className="step-item" key={item.step}>
                <span className="step-label">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="guide-actions">
            <Link href={`/book#${brandSlug}`} className="guide-action primary">Book now</Link>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="guide-action">Get the app for 10% off</a>
          </div>
        </div>

        <div className="guide-block">
          <h2>{subjectName} service near me in Delhi NCR</h2>
          <p className="guide-intro">Choose your city to view local service coverage, supported areas and doorstep booking options.</p>
          <nav className="city-links" aria-label={`${brandName} service cities`}>
            {CITY_LINKS.map((city) => (
              <Link key={city.slug} href={`/${city.slug}/${brandSlug}`} className="city-link">
                {brandName} service in {city.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
