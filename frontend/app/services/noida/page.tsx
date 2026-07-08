import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
// Imported as required by the specifications, root layout handles global rendering.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bike Repair at Home in Noida | FixWheel",
  description: "Doorstep bike repair in Noida. Verified mechanics at your home across Sector 18, 62, 63, Greater Noida & all Noida areas. Starting ₹499.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/noida",
  },
};

export default function NoidaServicesPage() {
  const whyChoosePoints = [
    {
      title: "Verified Mechanics",
      desc: "Every technician on our platform goes through background checks and skills training, ensuring your ride is in expert hands."
    },
    {
      title: "Transparent Upfront Pricing",
      desc: "Receive exact price quotes before work begins. No hidden margins, no surprise fees, and absolute honesty."
    },
    {
      title: "45-Minute Rapid Response",
      desc: "Once booked, our nearest mobile mechanic is dispatched to reach your home or office location within 45 minutes."
    },
    {
      title: "Convenient Doorstep Service",
      desc: "Servicing done at your residential parking, office basement, or the roadside. No pushing your bike to local garages."
    }
  ];

  const services = [
    {
      name: "Basic Service",
      desc: "Brake adjustment, chain lubrication, air filter check, spark plug cleaning, and general electric checkups.",
      link: "/services/basic-service"
    },
    {
      name: "Engine Oil Change",
      desc: "Draining old oil, engine flushing, refilling with fresh OEM-grade oil, and chain lubrication.",
      link: "/services/oil-change"
    },
    {
      name: "Engine Repair",
      desc: "Complete engine fault diagnostics, half or full engine repairs, and tuning by verified experts.",
      link: "/services/engine-repair"
    },
    {
      name: "Tyre Replacement",
      desc: "Emergency flat tyre repairs, punctures, or complete replacement with warranty-backed tyres on the spot.",
      link: "/services/tyre-replacement"
    },
    {
      name: "Brake Repair",
      desc: "Replacing worn-out brake pads/shoes, cable adjustments, and clutch tuning for seamless braking.",
      link: "/services/brake-repair"
    },
    {
      name: "Battery Replacement",
      desc: "On-site battery health diagnostics, jump-starts, and replacement with long-life warranty batteries.",
      link: "/services/battery-replacement"
    },
    {
      name: "General Washing",
      desc: "Detailed pressure washing, cleaning, detailing, and polish finish at your convenience.",
      link: "/services/general-washing"
    },
    {
      name: "Comprehensive Service",
      desc: "Full top-to-bottom bike maintenance service package covering all mechanical and electrical parts.",
      link: "/services/comprehensive-service"
    }
  ];

  const areas = [
    "Sector 18", "Sector 22", "Sector 27", "Sector 29", "Sector 37",
    "Sector 44", "Sector 50", "Sector 51", "Sector 52", "Sector 55",
    "Sector 56", "Sector 62", "Sector 63", "Sector 75", "Sector 76",
    "Sector 77", "Sector 78", "Sector 100", "Sector 104", "Sector 110",
    "Sector 120", "Sector 125", "Sector 126", "Sector 128", "Sector 132",
    "Sector 135", "Sector 137", "Sector 143", "Sector 150",
    "Greater Noida West", "Knowledge Park", "Alpha 1", "Alpha 2",
    "Omega", "Chi Phi", "Techzone 4", "Noida Extension"
  ];

  const faqs = [
    {
      q: "Do you offer doorstep bike repair in Noida?",
      a: "Yes, we cover all major Noida sectors and Greater Noida areas for doorstep bike servicing."
    },
    {
      q: "Is bike service at home available in Greater Noida?",
      a: "Yes, we cover Greater Noida West, Knowledge Park, Alpha sectors and Noida Extension."
    },
    {
      q: "How much does bike repair at home cost in Noida?",
      a: "Bike repair at home in Noida starts from ₹499 depending on bike model and service type."
    },
    {
      q: "Can I book an emergency bike mechanic in Noida?",
      a: "Yes, emergency roadside assistance is available 24/7 across all Noida sectors."
    }
  ];

  return (
    <div className="bg-[#151b24] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[#1f2631]/40 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-[10px]">
              <span>Delhi NCR Doorstep Repair</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Doorstep Bike Repair Service in <span className="text-accent">Noida</span>
            </h1>
            <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4 max-w-3xl">
              <p>
                Keeping your two-wheeler in prime condition shouldn't require long drives to crowded garages. FixWheel provides specialized doorstep bike repair services across Noida and Greater Noida. We bring verified, professional mechanics directly to your home or office space, armed with genuine spare parts and high-end tools to handle any servicing or breakdown issue on site.
              </p>
              <p>
                Whether you reside in Sector 18, Sector 62, Sector 150, or are located in Greater Noida West, our mechanics cover all Noida sectors. We work on a wide variety of models, from high-mileage commuter scooters to premium sports bikes, providing absolute transparency with upfront quotes and a 15-day labour warranty.
              </p>
              <p>
                Say goodbye to weekend garage trips and get your bike serviced while you relax at home. Simply book online or call us, and our mechanic will reach you in under an hour to resolve all your two-wheeler issues.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/book"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-accent/20"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#151b24] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Why FixWheel</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Why Choose Us in Noida</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoosePoints.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-[#1f2631]/80 border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="font-bold text-white uppercase text-sm tracking-wide">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 bg-[#1f2631]/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Services Catalog</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Our Doorstep Offerings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div key={idx} className="bg-[#1f2631] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/35 transition-all">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide leading-tight">{item.name}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-5 mt-auto border-t border-white/5">
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-red-400 font-bold uppercase tracking-wider text-[10px]"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section className="py-16 bg-[#151b24] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Coverage Map</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Areas We Cover in Noida</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {areas.map((area, idx) => (
              <span 
                key={idx} 
                className="bg-[#1f2631]/80 border border-white/5 text-text-secondary font-bold uppercase tracking-wider text-[11px] px-3.5 py-2 rounded-lg"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1f2631]/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Help Center</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#151b24]/40 border border-white/5 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold text-sm md:text-base uppercase tracking-wider cursor-pointer list-none select-none text-white">
                  <span>{faq.q}</span>
                  <span className="text-accent group-open:rotate-45 transition-transform duration-200 text-lg shrink-0 ml-4 font-mono">+</span>
                </summary>
                <p className="text-text-secondary text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-t from-[#151b24] to-[#1f2631]/30 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Ready to book your doorstep service?
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto">
            Get your scooter or motorcycle repaired by certified experts without leaving your office or home parking space.
          </p>
          <div className="pt-2">
            <Link 
              href="/book"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-accent/20"
            >
              <span>Book Your Service Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
