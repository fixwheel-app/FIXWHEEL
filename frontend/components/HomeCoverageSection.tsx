"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
} from "lucide-react";

type CitySlug = "gurgaon" | "delhi" | "noida" | "ghaziabad" | "faridabad";

interface CoverageCity {
  slug: CitySlug;
  name: string;
  shortName: string;
  tabLabel: string;
  badge: string;
  areas: string[];
}

type AvailabilityResult =
  | { kind: "available"; pincode: string; city: CoverageCity }
  | { kind: "unavailable"; pincode: string }
  | { kind: "error" }
  | null;

const COVERAGE_CITIES: CoverageCity[] = [
  {
    slug: "gurgaon",
    name: "Gurgaon / Gurugram",
    shortName: "Gurgaon",
    tabLabel: "Gurgaon / Gurugram",
    badge: "100% Coverage",
    areas: [
      "DLF Phase 1–5",
      "Golf Course Road",
      "Sushant Lok",
      "Palam Vihar",
      "Sohna Road",
      "Cyber City",
      "Udyog Vihar",
      "Dwarka Expressway",
      "Sector 14, 15, 17, 56",
      "+ All Gurgaon Sectors",
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    shortName: "Delhi",
    tabLabel: "Delhi",
    badge: "South & West Focus",
    areas: [
      "Dwarka (All Sectors)",
      "Vasant Kunj",
      "Kapashera",
      "Mahipalpur",
      "Bijwasan",
      "Janakpuri",
      "Samalka",
      "Uttam Nagar",
      "Hari Nagar",
      "Rohini",
      "+ Nearby Localities",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    shortName: "Noida",
    tabLabel: "Noida",
    badge: "Full Doorstep Coverage",
    areas: [
      "Sector 18",
      "Sector 62",
      "Sector 50",
      "Sector 75–78",
      "Sector 137",
      "Sector 150",
      "Greater Noida West",
      "Knowledge Park",
      "Noida Extension",
      "+ All Noida Sectors",
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    shortName: "Ghaziabad",
    tabLabel: "Ghaziabad",
    badge: "Full Doorstep Coverage",
    areas: [
      "Indirapuram",
      "Vaishali",
      "Kaushambi",
      "Vasundhara",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Govindpuram",
      "Vijay Nagar",
      "NH-24",
      "+ All Ghaziabad Areas",
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    shortName: "Faridabad",
    tabLabel: "Faridabad",
    badge: "Full Doorstep Coverage",
    areas: [
      "NIT Faridabad",
      "Sector 15",
      "Sector 16",
      "Sector 21",
      "Sector 37",
      "Sector 14",
      "Sector 7",
      "Greater Faridabad",
      "Ballabhgarh",
      "+ All Faridabad Sectors",
    ],
  },
];

function findCityForPincode(pincode: string): CoverageCity | undefined {
  const value = Number(pincode);
  let slug: CitySlug | undefined;

  if (value >= 110001 && value <= 110096) slug = "delhi";
  else if (value >= 122001 && value <= 122505) slug = "gurgaon";
  else if (value >= 201301 && value <= 201318) slug = "noida";
  else if ((value >= 201001 && value <= 201019) || value === 201204 || value === 201206) slug = "ghaziabad";
  else if (value >= 121001 && value <= 121010) slug = "faridabad";

  return COVERAGE_CITIES.find((city) => city.slug === slug);
}

export default function HomeCoverageSection() {
  const [activeSlug, setActiveSlug] = useState<CitySlug>("gurgaon");
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<AvailabilityResult>(null);

  const activeCity = useMemo(
    () => COVERAGE_CITIES.find((city) => city.slug === activeSlug) ?? COVERAGE_CITIES[0],
    [activeSlug]
  );

  function handlePincodeChange(value: string) {
    setPincode(value.replace(/\D/g, "").slice(0, 6));
    if (result) setResult(null);
  }

  function handleAvailabilityCheck(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^\d{6}$/.test(pincode)) {
      setResult({ kind: "error" });
      return;
    }

    const city = findCityForPincode(pincode);
    if (!city) {
      setResult({ kind: "unavailable", pincode });
      return;
    }

    setActiveSlug(city.slug);
    setResult({ kind: "available", pincode, city });
  }

  return (
    <section id="home-coverage" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8">
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            Coverage
          </span>
          <h2 className="max-w-3xl text-3xl font-black uppercase tracking-tight text-[#0F172A] md:text-5xl">
            Service Areas Across Delhi NCR
          </h2>
          <p className="mt-4 text-sm text-slate-500 md:text-lg">
            Doorstep bike mechanics ready for instant dispatch across major cities.
          </p>
        </div>

        <form onSubmit={handleAvailabilityCheck} className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <label htmlFor="coverage-pincode" className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
            Check Service Availability by Pincode
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent" />
              <input
                id="coverage-pincode"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pincode}
                onChange={(event) => handlePincodeChange(event.target.value)}
                placeholder="Enter your 6-digit pincode (e.g. 122001, 110016)"
                className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
              />
            </div>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#e62b2b] px-6 text-sm font-bold text-white transition hover:bg-[#c92222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <Search className="h-4 w-4" />
              Check Availability
            </button>
          </div>
        </form>

        {result?.kind === "error" && (
          <div role="alert" className="mb-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold">Please enter a valid 6-digit Indian pincode</p>
          </div>
        )}

        {result?.kind === "available" && (
          <div role="status" className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
              <div className="min-w-0">
                <h3 className="font-bold text-emerald-950">
                  FixWheel is Available at your location in {result.city.name}! (Pincode: {result.pincode})
                </h3>
                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  Verified two-wheeler mechanics are stationed nearby. Average arrival time: 30–45 minutes.
                </p>
                <Link href="/book" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800">
                  Book Doorstep Mechanic Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {result?.kind === "unavailable" && (
          <div role="status" className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6 text-amber-950">
                  FixWheel has not launched in pincode {result.pincode} yet. Currently, our doorstep mechanics serve all sectors across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad.
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a href="#home-covered-cities" className="inline-flex items-center justify-center rounded-lg border border-amber-300 bg-white px-4 py-2.5 text-sm font-bold text-amber-950 transition hover:bg-amber-100">
                    Explore Covered Cities
                  </a>
                  <a href="https://wa.me/918745945682?text=Hi!%20I%20want%20to%20check%20FixWheel%20service%20availability%20in%20my%20area." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-amber-800">
                    Need Help? WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="home-covered-cities" className="scroll-mt-28">
          <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
            Book Doorstep Service by City
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {COVERAGE_CITIES.map((city) => {
              const isActive = city.slug === activeSlug;
              return (
                <button
                  key={city.slug}
                  type="button"
                  onClick={() => setActiveSlug(city.slug)}
                  aria-pressed={isActive}
                  className={`rounded-lg border px-3 py-3 text-center font-mono text-xs font-bold transition-all ${
                    isActive
                      ? "border-[#e62b2b] bg-[#e62b2b] text-white shadow-md"
                      : "border-slate-800 bg-slate-900 text-white hover:border-slate-700 hover:text-red-400"
                  }`}
                >
                  {city.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded border border-red-200 bg-red-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-red-600">
              {activeCity.name}
            </span>
            <span className="font-mono text-xs text-slate-500">{activeCity.badge}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {activeCity.areas.map((area) => (
              <div key={area} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-xs font-medium text-slate-800 md:text-sm">
                <span aria-hidden="true" className="text-lg leading-none text-accent">•</span>
                <span>{area}</span>
              </div>
            ))}
            <Link href={`/${activeCity.slug}`} className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3 text-xs font-bold text-[#e62b2b] transition-colors hover:border-red-400 hover:bg-red-50 md:text-sm">
              View {activeCity.shortName} Page <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:flex-row md:p-6">
            <div>
              <h4 className="text-sm font-bold text-slate-900 md:text-base">
                Looking for full doorstep coverage in {activeCity.name}?
              </h4>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">
                View dedicated service pricing, certified mechanics, and instant doorstep booking for {activeCity.shortName}.
              </p>
            </div>
            <Link href={`/${activeCity.slug}`} className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#e62b2b] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#c92222] sm:w-auto">
              View {activeCity.shortName} Page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
