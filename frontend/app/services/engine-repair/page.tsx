import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  ClipboardCheck,
  Cog,
  Gauge,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import HowSectionActions from "@/components/HowSectionActions";
import PaymentTrustRow from "@/components/PaymentTrustRow";
import TwoWheelerQueryCard from "@/components/TwoWheelerQueryCard";
import { getServicePricing } from "@/lib/pricingData";
import { completePageMetadata } from "@/lib/seoMetadata";

const canonical = "https://www.fixwheel.app/services/engine-repair";
const title = "Bike Engine Repair & Overhaul Service | FixWheel";
const description =
  "Compare half and full bike engine overhaul services with doorstep diagnosis, transparent quotes, workshop rebuilding and approved parts across Delhi NCR.";

const halfEngine = getServicePricing("engine-half");
const fullEngine = getServicePricing("engine-full");

const formatPrice = (price: number | string) =>
  typeof price === "number" ? `₹${price.toLocaleString("en-IN")}` : price;

const faqs = [
  {
    q: "What is the difference between a half and full engine overhaul?",
    a: "A half overhaul focuses on the top end: cylinder head, valves, piston rings, gaskets and related compression problems. A full overhaul also opens the lower engine to inspect the crankshaft, connecting rod, bearings, gearbox, clutch and crankcase components.",
  },
  {
    q: "How do I know which engine service my bike needs?",
    a: "Symptoms alone are not enough to select an overhaul. The mechanic checks compression, oil condition, smoke, noise, leakage and running behaviour before recommending a half overhaul, full overhaul or a smaller repair.",
  },
  {
    q: "Can a motorcycle engine overhaul be completed at my doorstep?",
    a: "Initial diagnosis and eligible minor repairs can begin at your location. An overhaul that requires engine removal, machining, controlled cleaning or precision assembly is completed through the workshop process.",
  },
  {
    q: "Are engine parts included in the displayed starting price?",
    a: "The displayed amounts are package starting prices for the listed engine-capacity tier. The final quote depends on inspection, machining needs and approved replacement parts. Nothing additional should be fitted without your approval.",
  },
  {
    q: "How long does an engine rebuild take?",
    a: "The timeline depends on the diagnosis, parts availability, machining and the work approved. The team confirms the expected turnaround after inspection rather than promising the same duration for every engine.",
  },
  {
    q: "What warranty applies to the engine work?",
    a: "The current package specifies a 30-day engine warranty for half-overhaul workmanship and a 60-day workmanship warranty for a full overhaul. The final job card confirms the work and applicable terms.",
  },
  {
    q: "Will you recommend a full overhaul for every noisy engine?",
    a: "No. Tappet clearance, timing-chain tension, clutch wear, ignition faults, fuel-system problems or low oil can create similar symptoms. The purpose of diagnosis is to avoid unnecessary dismantling.",
  },
];

export const metadata: Metadata = completePageMetadata({
  title,
  description,
  keywords: [
    "bike engine repair",
    "bike engine overhaul",
    "half engine overhaul",
    "full engine overhaul",
    "motorcycle engine rebuild",
    "bike engine mechanic near me",
  ],
  alternates: { canonical },
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: "Bike engine repair and overhaul service",
      url: canonical,
      serviceType: "Motorcycle engine diagnosis, repair and overhaul",
      provider: { "@id": "https://www.fixwheel.app/#organization" },
      areaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"].map(
        (name) => ({ "@type": "City", name }),
      ),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixwheel.app/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.fixwheel.app/services" },
        { "@type": "ListItem", position: 3, name: "Engine Repair & Overhaul", item: canonical },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

const symptoms = [
  "White or blue exhaust smoke",
  "Heavy oil consumption or oil-fouled spark plug",
  "Low compression, weak pickup or difficult starting",
  "Metallic knocking, rumbling or lower-engine noise",
  "Gear-selection trouble or clutch slip with internal noise",
  "Engine seizure, metal particles in oil or repeated leakage",
];

const process = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Book an inspection",
    text: "Choose a convenient slot and share your bike model, engine capacity, location and the problem you are facing.",
  },
  {
    icon: Gauge,
    step: "02",
    title: "Mechanic checks the engine",
    text: "A mechanic inspects the bike and checks the engine condition to identify the repair that is actually required.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Confirm the work and price",
    text: "We explain the recommended half or full engine work and its cost. Repair begins only after you approve the quote.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Repair, test and pay",
    text: "The approved work is completed and the engine is tested before handover. Check the finished work, then pay.",
  },
];

export default function EngineRepairPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="border-b border-white/10 bg-[#111214] py-3">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Engine Repair & Overhaul" },
            ]}
          />
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#17181a] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(230,43,43,.16) 0 2px, transparent 2px 16px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[.16em] text-red-400">
              <Wrench className="h-4 w-4" /> Engine diagnosis & overhaul
            </span>
            <h1 className="max-w-4xl font-oswald text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Bike Engine Repair &amp; Overhaul
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              One page for half-engine and full-engine service. Start with diagnosis, understand which engine section needs work, approve a clear quote, and use the workshop rebuild process only when inspection supports it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-[#e62b2b] px-7 font-mono text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-600"
              >
                Book engine diagnosis →
              </Link>
              <a
                href="tel:+918745945682"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/25 bg-white/5 px-7 font-mono text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Call a mechanic
              </a>
            </div>
            <PaymentTrustRow className="mt-5 justify-start font-mono uppercase tracking-[0.08em]" />
          </div>

          <TwoWheelerQueryCard />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#e62b2b]">
              Compare the repair scope
            </p>
            <h2 className="mt-3 font-oswald text-3xl font-black uppercase sm:text-4xl">
              Half engine or full engine overhaul?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Both packages remain available with their approved pricing. They now live on one page so you can compare the affected components before booking.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article id="half-engine" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-[#e62b2b]">Top-end repair</span>
                    <h3 className="mt-2 font-oswald text-3xl font-black uppercase">Half engine overhaul</h3>
                  </div>
                  <Cog className="h-9 w-9 shrink-0 text-[#e62b2b]" />
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  Used when inspection confirms wear in the cylinder head, valves, piston rings, bore, gaskets or related compression surfaces while the lower engine remains serviceable.
                </p>
              </div>
              <div className="grid gap-6 p-6 sm:p-8">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Typically includes</p>
                  <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                    {halfEngine.features.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-[#e62b2b]" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-950 p-5 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">Package pricing</p>
                  <dl className="mt-4 grid gap-3 text-sm">
                    <div className="flex justify-between gap-4"><dt>0–249cc</dt><dd className="font-bold">From {formatPrice(halfEngine.prices.cc0_249)}</dd></div>
                    <div className="flex justify-between gap-4"><dt>250–399cc</dt><dd className="font-bold">From {formatPrice(halfEngine.prices.cc250_399)}</dd></div>
                    <div className="flex justify-between gap-4"><dt>400cc and above</dt><dd className="font-bold">{formatPrice(halfEngine.prices.cc400_599)}</dd></div>
                    <div className="border-t border-white/10 pt-3 text-slate-300"><dt>Warranty</dt><dd className="mt-1 font-bold text-white">30-day engine warranty</dd></div>
                  </dl>
                </div>
                <Link href="/book" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#e62b2b] px-5 font-mono text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-600">
                  Book half-engine inspection →
                </Link>
              </div>
            </article>

            <article id="full-engine" className="scroll-mt-28 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-[0_16px_40px_rgba(230,43,43,.08)]">
              <div className="border-b border-red-100 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-[#e62b2b]">Complete rebuild</span>
                    <h3 className="mt-2 font-oswald text-3xl font-black uppercase">Full engine overhaul</h3>
                  </div>
                  <Wrench className="h-9 w-9 shrink-0 text-[#e62b2b]" />
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  Used when confirmed damage extends into the crankcase, crankshaft, connecting rod, main bearings, gearbox, clutch or multiple engine sealing surfaces.
                </p>
              </div>
              <div className="grid gap-6 p-6 sm:p-8">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Typically includes</p>
                  <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                    {fullEngine.features.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-[#e62b2b]" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-950 p-5 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">Package pricing</p>
                  <dl className="mt-4 grid gap-3 text-sm">
                    <div className="flex justify-between gap-4"><dt>0–249cc</dt><dd className="font-bold">From {formatPrice(fullEngine.prices.cc0_249)}</dd></div>
                    <div className="flex justify-between gap-4"><dt>250–399cc</dt><dd className="font-bold">From {formatPrice(fullEngine.prices.cc250_399)}</dd></div>
                    <div className="flex justify-between gap-4"><dt>400cc and above</dt><dd className="font-bold">{formatPrice(fullEngine.prices.cc400_599)}</dd></div>
                    <div className="border-t border-white/10 pt-3 text-slate-300"><dt>Warranty</dt><dd className="mt-1 font-bold text-white">60-day workmanship warranty</dd></div>
                  </dl>
                </div>
                <Link href="/book" className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 font-mono text-xs font-black uppercase tracking-wider text-white transition hover:bg-slate-800">
                  Book full-engine inspection →
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <p><strong>Inspection decides the final scope.</strong> Starting prices do not include every possible part or machining operation. Review the diagnosis and approve the itemised quote before dismantling begins.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#e62b2b]">Common warning signs</p>
            <h2 className="mt-3 font-oswald text-3xl font-black uppercase sm:text-4xl">When to request an engine inspection</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Stop riding if the engine is overheating, losing oil quickly, making a severe metallic knock or showing signs of seizure. Continuing can increase internal damage.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {symptoms.map((symptom, index) => (
              <div key={symptom} className="flex min-h-24 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="font-mono text-sm font-black text-[#e62b2b]">0{index + 1}</span>
                <p className="font-semibold leading-6 text-slate-800">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#e62b2b]">How the service works</p>
            <h2 className="mt-3 font-oswald text-3xl font-black uppercase text-slate-950 sm:text-4xl">Book to repair in four clear steps</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">The engine is inspected first, the work and price are confirmed with you, and only the approved repair is carried out.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, step, title: processTitle, text }) => (
              <article key={step} className="flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-md bg-[#e62b2b] px-2 font-mono text-sm font-black text-white">{step}</span>
                  <Icon className="h-6 w-6 text-[#e62b2b]" />
                </div>
                <h3 className="mt-7 font-oswald text-xl font-bold uppercase text-slate-950">{processTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <HowSectionActions />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#e62b2b]">Engine repair questions</p>
            <h2 className="mt-3 font-oswald text-3xl font-black uppercase sm:text-4xl">Know before you approve the work</h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                  <span>{faq.q}</span>
                  <span className="font-mono text-xl text-[#e62b2b] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-[#e62b2b] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-oswald text-3xl font-black uppercase sm:text-4xl">Start with an engine diagnosis</h2>
            <p className="mt-3 max-w-2xl text-red-50">Share the bike model, engine capacity, smoke or noise symptoms, oil condition and whether the motorcycle still starts.</p>
          </div>
          <Link href="/book" className="inline-flex min-h-14 items-center justify-center rounded-md bg-white px-7 font-mono text-sm font-black uppercase tracking-wider text-[#b91c1c] transition hover:bg-red-50">
            Book now →
          </Link>
        </div>
      </section>
    </div>
  );
}
