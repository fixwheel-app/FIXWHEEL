import Link from "next/link";
import { getBrandLogo } from "@/lib/brandLogos";

const popularBrands = ["Honda", "Hero", "TVS", "Bajaj", "Royal Enfield", "Yamaha", "Suzuki", "Ola Electric"];

export default function PopularBrands({ cityName }: { cityName?: string }) {
  return (
    <>
      <div className="brand-row">
        {popularBrands.map((brand) => (
          <div className="brand-chip" key={brand}>
            <img src={getBrandLogo(brand)} alt={`${brand} logo`} className="object-contain" />
            {brand}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "22px" }}>
        <Link href="/brands" className="btn" style={{ border: "1px solid var(--accent)", color: "var(--accent)", background: "transparent" }}>
          View more brands →
        </Link>
        {cityName && <span className="sr-only"> serving {cityName}</span>}
      </div>
    </>
  );
}
