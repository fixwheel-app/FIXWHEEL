import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Scooty & Gearless Scooter Repair at Home | FixWheel",
  description: "Doorstep scooty repair Delhi NCR. CVT clutch roller cleaning, belt drive replacement, oil change for Activa, Jupiter, Access, Dio, Ntorq.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/scooty-repair",
  },
};

export default function ScootyRepairPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="bg-[#17181A] text-white pt-24 pb-16 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-mono font-bold uppercase tracking-wider text-xs transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>
          </div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-mono font-bold uppercase tracking-widest text-xs mb-6">
            <Wrench className="w-4 h-4" />
            <span>Scooter & CVT Specialist</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6 text-white">
            Scooty & Gearless Scooter Repair in Delhi NCR
          </h1>
          <div className="w-20 h-1.5 bg-[#e62b2b]" />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Scooters like Honda Activa, TVS Jupiter, Suzuki Access, and TVS Ntorq are Delhi NCR's daily workhorses. Starting trouble or vibration on acceleration usually stems from CVT clutch buildup or worn rollers.
              </p>
              <p>
                FixWheel doorstep mechanics clean variator assemblies, replace drive belts, tune carburetors/FI units, and adjust brakes directly at your home or office parking.
              </p>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 h-fit space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-3">Service Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Availability</span>
                  <span className="text-sm font-bold text-slate-900">Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad)</span>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Location</span>
                  <span className="text-sm font-bold text-slate-900">Doorstep (Home or Office)</span>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Warranty</span>
                  <span className="text-sm font-bold text-slate-900">15 Days Labor Warranty</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 md:p-10 text-slate-900 relative overflow-hidden mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-8 text-slate-900 border-b border-slate-200 pb-4">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">CVT variator roller cleaning & belt wear check</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">Clutch shoe degreasing to eliminate takeoff shudder</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">Engine oil swap & air filter cleaning</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">Spark plug clean & brake cable lubrication</span>
              </div>
            </div>
          </div>

          <div className="text-center bg-[#17181A] text-white rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Book Doorstep Scooty Repair
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Get an expert scooter mechanic at your home or office parking.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 bg-[#e62b2b] hover:bg-red-600 text-white px-10 py-4 rounded-md font-mono font-bold tracking-wider uppercase text-sm md:text-base transition-all shadow-[0_4px_20px_rgba(230,43,43,0.3)] hover:scale-[1.02]"
            >
              BOOK SCOOTY REPAIR
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
