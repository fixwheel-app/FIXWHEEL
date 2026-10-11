"use client";

import { useState } from "react";
import Link from "next/link";

const problems = [
  { label: "Won’t start", note: "We’ll check the battery, starter, spark and fuel supply before sharing the repair quote." },
  { label: "Needs routine service", note: "We’ll inspect the oil, filters, brakes, chain and essential controls for your vehicle." },
  { label: "Weak or noisy brakes", note: "We’ll inspect the pads or shoes, cable, fluid and braking surfaces before repair." },
  { label: "Flat tyre or air loss", note: "We’ll check the tyre, valve and tube or tubeless puncture at your location." },
  { label: "Battery or electrical issue", note: "We’ll test voltage, charging, terminals, fuses and the affected electrical circuit." },
  { label: "Something else", note: "Tell us what you noticed. A mechanic will inspect it and share the price before work begins." },
];

export default function TwoWheelerQueryCard({ locationName }: { locationName?: string }) {
  const [selected, setSelected] = useState(0);
  const suffix = locationName ? ` in ${locationName}` : "";

  return (
    <div role="region" className="rounded-2xl bg-white text-slate-950 shadow-2xl" style={{ padding: "clamp(20px, 3vw, 28px)" }} aria-labelledby="two-wheeler-query-heading">
      <h2 id="two-wheeler-query-heading" className="text-2xl font-black tracking-tight sm:text-3xl" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "-0.025em", lineHeight: 1.15, textTransform: "none" }}>What does your two-wheeler need?</h2>
      <p className="text-sm text-slate-600 sm:text-base" style={{ marginTop: "4px" }}>Select a problem for the next step{suffix}.</p>
      <div className="grid" style={{ gap: "8px", marginTop: "20px" }} role="radiogroup" aria-label="Select a two-wheeler problem">
        {problems.map((problem, index) => {
          const active = selected === index;
          return (
            <button key={problem.label} type="button" role="radio" aria-checked={active} onClick={() => setSelected(index)} style={{ borderRadius: "12px", padding: "12px 16px" }} className={`flex w-full items-center justify-between border text-left text-sm font-bold transition sm:text-base ${active ? "border-accent bg-red-50 text-slate-950" : "border-slate-200 bg-white text-slate-900 hover:border-slate-400"}`}>
              <span>{problem.label}</span>
              <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${active ? "border-accent" : "border-slate-300"}`} aria-hidden="true">
                {active && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
              </span>
            </button>
          );
        })}
      </div>
      <div className="border-l-4 border-accent bg-slate-50 text-sm leading-6 text-slate-700" style={{ marginTop: "16px", padding: "16px" }}>
        <strong className="block text-slate-950">What we’ll check</strong>
        {problems[selected].note}
      </div>
      <Link href="/book" style={{ borderRadius: "8px", color: "#fff", marginTop: "16px", padding: "16px 20px", textDecoration: "none" }} className="flex w-full items-center justify-center bg-accent text-sm font-black text-white transition hover:bg-red-600 sm:text-base">
        Book doorstep service
      </Link>
    </div>
  );
}
