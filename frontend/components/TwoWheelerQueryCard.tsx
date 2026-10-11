"use client";

import { useState } from "react";
import Link from "next/link";

const symptoms = [
  { value: "starting", label: "Won’t start" },
  { value: "vibration", label: "Jerks or vibrates" },
  { value: "pickup", label: "Poor pickup or mileage" },
  { value: "brakes", label: "Weak or noisy brakes" },
  { value: "tyre", label: "Flat tyre or air loss" },
  { value: "other", label: "Something else" },
];

const tips: Record<string, [string, string]> = {
  starting: [
    "Likely a weak battery, fouled spark plug or loose starter relay.",
    "We carry a multimeter, jump-starter, spare plugs and batteries.",
  ],
  vibration: [
    "Usually clutch dust, worn variator rollers or glazed clutch shoes in the CVT.",
    "We clean and resurface the CVT parts on the spot.",
  ],
  pickup: [
    "Often a dirty air filter, worn belt or clogged CVT.",
    "A tune-up with CVT and air filter cleaning usually restores it.",
  ],
  brakes: [
    "Worn pads or shoes, or loose cables, are the usual causes.",
    "We adjust or replace them and lubricate the cables.",
  ],
  tyre: [
    "Tubeless punctures can be repaired right where you are.",
    "We also check tyre pressure and the valve.",
  ],
  other: [
    "Not sure what’s wrong? That’s fine.",
    "Book a ₹199 diagnosis and the mechanic will explain what he finds before any work.",
  ],
};

export default function TwoWheelerQueryCard() {
  const [selected, setSelected] = useState("");

  return (
    <section aria-labelledby="scooty-problem-heading" className="rounded-2xl bg-white text-slate-950" style={{ boxShadow: "0 20px 40px rgba(0,0,0,.35)", padding: "20px" }}>
      <h2 id="scooty-problem-heading" style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "22px", fontWeight: 700, lineHeight: 1.2, textTransform: "none" }}>What is your scooty doing?</h2>
      <p className="text-slate-700" style={{ fontSize: "14px", margin: "4px 0 12px" }}>Select a problem for the next step.</p>
      <fieldset className="grid" style={{ border: 0, gap: "6px", margin: 0, padding: 0 }}>
        <legend style={{ height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", clip: "rect(0, 0, 0, 0)" }}>Choose your scooter’s symptom</legend>
        {symptoms.map((symptom) => (
          <label key={symptom.value} className="relative block cursor-pointer">
            <input type="radio" name="scooty-symptom" value={symptom.value} checked={selected === symptom.value} onChange={() => setSelected(symptom.value)} className="sr-only" />
            <span className={`flex min-h-11 items-center justify-between gap-3 border text-left text-sm font-semibold text-slate-950 transition ${selected === symptom.value ? "border-accent bg-red-50" : "border-slate-200 bg-white hover:border-red-300"}`} style={{ borderRadius: "8px", padding: "8px 12px" }}>
              <span>{symptom.label}</span>
              <span className={`h-4 w-4 flex-shrink-0 rounded-full border ${selected === symptom.value ? "border-accent bg-accent shadow-[inset_0_0_0_3px_#fef2f2]" : "border-slate-300"}`} aria-hidden="true" />
            </span>
          </label>
        ))}
      </fieldset>
      <div aria-live="polite" aria-atomic="true">
        {selected && (
          <div className="border-l-[3px] border-accent bg-slate-50 text-sm leading-6 text-slate-700" style={{ borderRadius: "0 8px 8px 0", marginTop: "12px", padding: "10px 12px" }}>
            <strong className="block text-slate-950">{tips[selected][0]}</strong>
            {tips[selected][1]}
          </div>
        )}
      </div>
      <Link href="/book" style={{ borderRadius: "6px", color: "#fff", marginTop: "12px", padding: "14px 24px", textDecoration: "none" }} className="flex w-full items-center justify-center bg-accent text-sm font-bold text-white transition hover:bg-red-600">
        Book scooter repair
      </Link>
    </section>
  );
}
