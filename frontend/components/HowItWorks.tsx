"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <ListMenuIcon />,
      title: "Choose Your Repair Package",
      desc: "Select from our Basic, Standard, or Premium service options tailored for your bike's needs."
    },
    {
      num: "02",
      icon: <CalendarClockIcon />,
      title: "Book Online in 60 Seconds",
      desc: "Fill out a simple form with your details, bike info, and preferred time slot."
    },
    {
      num: "03",
      icon: <LocationHomeIcon />,
      title: "Mechanic Arrives at Your Door",
      desc: "Our certified expert arrives at your location equipped with all tools to fix your bike."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">How It Works</span>
          <h2 className="text-2xl md:text-4xl font-black text-[#0F172A] mb-3 md:mb-4 uppercase">Repair in 3 Simple Steps</h2>
          <p className="text-gray-500 text-sm md:text-lg">No more lugging your broken bike to the shop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-8 bg-white border border-[#E2E8F0] border-t-[3px] border-t-[#F97316] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out group"
            >
              <div className="mb-6 relative z-10 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              
              <div className="absolute -bottom-2 -right-2 text-[80px] font-black text-[#F97316] opacity-[0.08] select-none leading-none z-0">
                {step.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListMenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );
}

function CalendarClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><circle cx="12" cy="16" r="3"></circle><path d="M12 14.5v1.5l1 1"></path>
    </svg>
  );
}

function LocationHomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}
