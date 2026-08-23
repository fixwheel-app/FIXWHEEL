import type { Metadata } from "next";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bike Service & Repair Rates | Transparent Doorstep Pricing | FixWheel",
  description: "View upfront, flat-rate pricing for doorstep bike service, engine oil change, brake repairs, and roadside assistance across Delhi NCR.",
  alternates: {
    canonical: "https://www.fixwheel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#111214] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 font-mono text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            FLAT TRANSPARENT RATES
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Doorstep Bike Service Rates
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            No hidden costs or roadside mechanic surprises. Upfront pricing for all commuter bikes, scooters, and performance motorcycles across Delhi, Gurgaon, Noida, Ghaziabad & Faridabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#17181A] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-white">General Service</h3>
            <p className="text-slate-400 text-sm mb-4">21-point checkup, brake adjust, chain clean, spark plug clean & air filter inspection.</p>
            <div className="text-2xl font-bold text-red-500 mb-4">₹499 <span className="text-xs text-slate-400 font-normal">+ parts if needed</span></div>
            <Link href="/book" className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md uppercase text-xs font-mono tracking-wider">
              Book General Service →
            </Link>
          </div>

          <div className="bg-[#17181A] border border-red-500/40 rounded-xl p-6 relative shadow-lg shadow-red-500/10">
            <span className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">MOST POPULAR</span>
            <h3 className="text-xl font-bold mb-2 text-white">Service + Engine Oil</h3>
            <p className="text-slate-400 text-sm mb-4">21-point periodic service with fresh OEM synthetic engine oil change & filter replacement.</p>
            <div className="text-2xl font-bold text-red-500 mb-4">₹899 <span className="text-xs text-slate-400 font-normal">inclusive of oil</span></div>
            <Link href="/book" className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md uppercase text-xs font-mono tracking-wider">
              Book Full Service →
            </Link>
          </div>

          <div className="bg-[#17181A] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-white">Roadside Assistance</h3>
            <p className="text-slate-400 text-sm mb-4">Emergency jump-start, cable replacement, puncture repair & breakdown assistance.</p>
            <div className="text-2xl font-bold text-red-500 mb-4">₹399 <span className="text-xs text-slate-400 font-normal">flat visit fee</span></div>
            <Link href="/book" className="inline-block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-md uppercase text-xs font-mono tracking-wider">
              Request Breakdown Help →
            </Link>
          </div>
        </div>

        <div className="text-center bg-[#17181A] border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-2 text-white">Ready to book a verified mechanic to your doorstep?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">45-minute arrival guarantee, 100% genuine OEM parts, and a 15-day labor warranty on all repairs.</p>
          <Link href="/book" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md uppercase text-sm font-mono tracking-wider">
            Book Doorstep Service Now →
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
