import Image from "next/image";
import Link from "next/link";

const vehicles = [
  { name: "Bike", description: "Repair & servicing", href: "/bike", image: "bike" },
  { name: "EV", description: "Electric scooters", href: "/electric-vehicle", image: "ev" },
  { name: "Scooty", description: "Gearless scooters", href: "/scooty-repair", image: "scooty" },
  { name: "Sports Bike", description: "Performance rides", href: "/sports-bike-service", image: "sports" },
  { name: "Cruiser / Bullet", description: "Classic motorcycles", href: "/cruiser-bike-service", image: "cruiser" },
  { name: "Premium Bike", description: "Premium motorcycles", href: "/premium-bike-service", image: "premium" },
];

export default function VehiclesWeService() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50 py-10 md:py-16"
      style={{ padding: "clamp(48px, 6vw, 72px) 0" }}
    >
      <div
        className="max-w-7xl"
        style={{
          margin: "0 auto",
          maxWidth: "1280px",
          padding: "0 clamp(16px, 3vw, 32px)",
          width: "100%",
        }}
      >
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent" style={{ marginBottom: "12px" }}>Choose your ride</p>
          <h2 className="font-oswald text-4xl font-bold uppercase leading-none text-slate-900 md:text-6xl">
            Vehicles we <span className="text-accent">service</span>
          </h2>
          <p className="text-base text-slate-600 md:text-xl" style={{ marginTop: "16px" }}>Everyday rides to weekend favourites. Find the right care for your two-wheeler.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {vehicles.map((vehicle) => (
            <Link key={vehicle.name} href={vehicle.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
              <div className="relative aspect-[4/2.65] overflow-hidden bg-slate-100">
                <Image src={`/images/vehicles/${vehicle.image}.png`} alt={`${vehicle.name} service`} fill sizes="(max-width: 768px) 50vw, 220px" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div style={{ padding: "clamp(16px, 1.5vw, 20px)" }}>
                <h3 className="text-base font-black text-slate-950 md:text-lg">{vehicle.name}</h3>
                <p className="text-xs text-slate-500 md:text-sm" style={{ marginTop: "4px" }}>{vehicle.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-accent md:text-sm" style={{ marginTop: "16px" }}>Explore service <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
