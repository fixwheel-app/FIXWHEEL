import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Wrench } from 'lucide-react';
// Navbar and Footer imported to meet requirements (rendered globally by layout)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Bike Brake Repair at Doorstep | FixWheel",
  description: "Get expert bike brake repair Delhi. Professional doorstep disc pad and drum shoe replacement by certified mechanics in Delhi NCR.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/brake-repair",
  },
  openGraph: {
    title: "Bike Brake Repair at Doorstep | FixWheel",
    description: "Get expert bike brake repair Delhi. Professional doorstep disc pad and drum shoe replacement by certified mechanics in Delhi NCR.",
    url: "https://www.fixwheel.app/services/brake-repair",
    siteName: "FixWheel",
    type: "website",
    images: [
      {
        url: "https://www.fixwheel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BrakeRepairPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation link back to services */}
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-red-500 font-bold uppercase tracking-wider text-xs transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section / Title */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-xs mb-6">
            <Wrench className="w-4 h-4" />
            <span>Safety Systems</span>
          </span>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Bike Brake Repair Service in Delhi NCR
          </h1>
          <div className="w-20 h-1.5 bg-accent mb-8" />
        </div>

        {/* Description & Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              Faulty brakes are a significant safety hazard. FixWheel provides doorstep bike brake repair Delhi services, ensuring your motorcycle or scooter retains full stopping power in all weather and traffic conditions.
            </p>
            <p>
              Our mechanics carry high-performance brake pads, shoes, and hydraulic fluids. We perform a complete servicing of calipers, clean rotors, inspect cables, and bleed lines to eliminate any sponginess in the levers.
            </p>
            <p>
              Regular checkups on your brakes protect your discs and drums from premature wear, saving you money in the long run.
            </p>
          </div>

          {/* Quick Info Panel */}
          <div className="bg-[#1f2631] border border-white/5 rounded-3xl p-6 h-fit space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">Service Details</h3>
            <div className="space-y-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Availability</span>
                <span className="text-sm font-bold text-white">Delhi NCR (Delhi, Noida, Gurgaon, Ghaziabad, Faridabad)</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Service Location</span>
                <span className="text-sm font-bold text-white">Doorstep (Home or Office)</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400">Warranty</span>
                <span className="text-sm font-bold text-white">15 Days Warranty on Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-black shadow-2xl relative overflow-hidden mb-12">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-8 text-black border-b border-gray-100 pb-4">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Front and rear brake pad/shoe replacement</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Brake disc caliper deep cleaning and pin lubrication</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Brake fluid level check and top-up or system flushing</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Brake cable adjustment and lubrication for smooth travel</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Inspection of disc rotors for warping, wear, and scoring</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-700">Post-service brake efficiency test under load</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#1f2631] border border-white/5 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Get Your Two-Wheeler Fixed?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Book our doorstep service package in Delhi NCR. Get experienced mechanics at your home or office.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-black tracking-widest uppercase text-sm md:text-base transition-all shadow-[0_4px_20px_rgba(230,43,43,0.3)] hover:scale-[1.02]"
          >
            BOOK NOW
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
