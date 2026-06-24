import type { Metadata } from 'next';
import ServicesClient from './page.client';

import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Bike Service Packages — FixWheel Delhi NCR",
  description: "Choose from 5 doorstep bike service packages based on your bike's CC. Engine check, brakes, chain, wash and more included.",
  alternates: {
    canonical: "https://www.fixwheel.app/services",
  },
  openGraph: {
    title: "Bike Service Packages — FixWheel Delhi NCR",
    description: "Choose from 5 doorstep bike service packages based on your bike's CC. Engine check, brakes, chain, wash and more included.",
    url: "https://www.fixwheel.app/services",
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

export default function ServicesPage() {
  const staticServices = [
    {
      name: "Electric Scooter Repair",
      desc: "Doorstep maintenance, battery checkups, and electrical repairs for electric scooters.",
      link: "/services/electric-scooter-repair"
    },
    {
      name: "Scooty Repair",
      desc: "Doorstep servicing, belt replacements, and engine tuning for gearless scooties.",
      link: "/services/scooty-repair"
    },
    {
      name: "Sports Bike Service",
      desc: "Performance tuning, premium oil changes, and diagnostics for sports motorcycles.",
      link: "/services/sports-bike-service"
    },
    {
      name: "Royal Enfield / Bullet Service",
      desc: "Classic bike maintenance, clutch adjustments, and genuine spares for Royal Enfield.",
      link: "/services/royal-enfield-service"
    },
    {
      name: "Commuter Bike Service",
      desc: "Reliable general servicing and oil change packages for daily commuter bikes.",
      link: "/services/commuter-bike-service"
    },
    {
      name: "Premium Bike Service",
      desc: "Advanced diagnostics, brake service, and detailing for high-end superbikes.",
      link: "/services/premium-bike-service"
    }
  ];

  return (
    <div className="services-page-wrapper bg-[#111111] text-white min-h-screen font-sans">
      {/* 1. Choose Your Vehicle Booking Wizard on Top */}
      <ServicesClient />

      {/* 2. Static Services List below */}
      <div className="container mx-auto px-4 max-w-6xl pb-24">
        {/* Divider */}
        <div className="relative flex py-5 items-center mb-12">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
            Our Services
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-6 md:p-8 text-black shadow-2xl relative overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-3 leading-tight">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5 mt-auto">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-red-600 font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
