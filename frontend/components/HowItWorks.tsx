"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PackageSearchIcon className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
      title: "Choose Your Repair Package",
      desc: "Select from our Basic, Standard, or Premium service options tailored for your bike's needs."
    },
    {
      num: "02",
      icon: <CalendarCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
      title: "Book Online in 60 Seconds",
      desc: "Fill out a simple form with your details, bike info, and preferred time slot."
    },
    {
      num: "03",
      icon: <HomeIcon className="w-6 h-6 md:w-8 md:h-8 text-accent" />,
      title: "Mechanic Arrives at Your Door",
      desc: "Our certified expert arrives at your location equipped with all tools to fix your bike."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-surface/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Repair in 3 Simple Steps</h2>
          <p className="text-text-secondary text-sm md:text-lg">No more lugging your broken bike to the shop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting Line — desktop only */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-white/10 z-0">
            <div className="absolute top-0 left-0 h-full bg-accent/50 w-full animate-pulse"></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-4 md:p-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary border border-white/10 flex items-center justify-center mb-4 md:mb-6 shadow-xl relative group">
                <div className="absolute -inset-0.5 bg-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative">
                  {step.icon}
                </div>
                <div className="absolute -bottom-4 -right-4 text-4xl font-black text-white/5 select-none">
                  {step.num}
                </div>
              </div>
              <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageSearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/><path d="M11 8v6"/><path d="M8 11h6"/>
    </svg>
  );
}

function CalendarCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/>
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
