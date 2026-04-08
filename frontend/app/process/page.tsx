"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32 pb-12 md:pb-24 text-black font-sans">
      <section className="relative overflow-hidden">
        {/* Background Decal */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h3 className="text-accent font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">How It Works</h3>
            <h2 className="text-2xl md:text-5xl font-black uppercase mb-3 md:mb-4">Our <span className="text-accent">Simple Process</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
              Experience a seamless, trustworthy, and professional doorstep bike repair service tailored for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
            {/* Connecting Line for Desktop — sits at the vertical centre of the 80px circles (top-10 = 40px) */}
            <div className="hidden md:block absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-gray-200 z-0"></div>

            {[
              { num: '01', title: 'Select Your Bike', desc: 'Pick your precise model to personalize the service.'},
              { num: '02', title: 'Choose Package', desc: 'View features and straightforward pricing.'},
              { num: '03', title: 'Book Service', desc: 'Fill in your details and confirm the slot.'},
              { num: '04', title: 'Doorstep Service', desc: 'Our mechanic arrives directly at your location.'},
              { num: '05', title: 'Job Complete', desc: 'Your bike is perfectly serviced and ready.'}
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-50 border-4 border-white flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  <span className="text-lg md:text-2xl font-black text-black group-hover:text-white">{step.num}</span>
                </div>
                <h4 className="text-sm md:text-lg font-bold uppercase mb-2 md:mb-3 text-black leading-tight">{step.title}</h4>
                <p className="text-gray-600 text-xs font-medium px-2 leading-relaxed">{step.desc}</p>
                
                {/* Mobile visual connector (hidden on desktop) */}
                {idx < 4 && (
                  <div className="md:hidden mt-8 w-1 h-12 bg-gray-200"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 text-center">
            <Link href="/services" className="inline-block bg-accent px-6 py-3 md:px-10 md:py-4 font-black text-white text-sm md:text-base uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(230,43,43,0.3)]">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
