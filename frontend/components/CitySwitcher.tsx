import Link from "next/link";

const cities = [
  { href: "/gurgaon", label: "Gurgaon" },
  { href: "/delhi", label: "Delhi" },
  { href: "/noida", label: "Noida" },
  { href: "/ghaziabad", label: "Ghaziabad" },
  { href: "/faridabad", label: "Faridabad" },
];

export default function CitySwitcher({ currentCity }: { currentCity?: string }) {
  return (
    <section className="city-switcher-section" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "56px 0" }}>
      <div className="wrap">
        <div style={{ background: "#0F172A", borderRadius: "16px", boxShadow: "0 18px 35px -24px rgba(15,23,42,.65)", padding: "28px clamp(20px, 4vw, 32px)" }}>
          <h2 style={{ color: "#CBD5E1", fontFamily: "var(--font-jetbrains), monospace", fontSize: "12px", fontWeight: 700, letterSpacing: ".13em", marginBottom: "20px", textAlign: "left", textTransform: "uppercase" }}>
            Explore doorstep two-wheeler service by city
          </h2>
          <nav aria-label="Service cities" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
            {cities.map((city) => {
              const active = city.label.toLowerCase() === currentCity?.toLowerCase();
              return (
                <Link
                  key={city.href}
                  href={city.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    background: active ? "#EF3333" : "#1E293B",
                    border: `1px solid ${active ? "#EF3333" : "#334155"}`,
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "12px 16px",
                    textAlign: "center",
                    transition: "background .18s ease, border-color .18s ease",
                  }}
                >
                  {city.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
