"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Wrench, Clock, Star, MapPin, 
  CheckCircle2, Compass, HelpCircle, ArrowRight, UserCheck 
} from 'lucide-react';
import Link from 'next/link';

export default function AboutClient() {
  const whyDifferent = [
    {
      num: "01",
      title: "Verified mechanics",
      desc: "Background-checked, not random gig hires."
    },
    {
      num: "02",
      title: "Transparent pricing",
      desc: "Quoted before any work starts."
    },
    {
      num: "03",
      title: "Fast response",
      desc: "Our mechanic reaches your location within 30 minutes."
    }
  ];

  const standards = [
    {
      icon: "🔍",
      title: "Verified ID",
      desc: "We perform background and document checks before onboarding any mechanic."
    },
    {
      icon: "🧰",
      title: "Standard kit",
      desc: "Mechanics carry the tools needed to complete most repairs in a single visit."
    },
    {
      icon: "⭐",
      title: "Rated after every job",
      desc: "You rate your mechanic once the work is done. We review feedback to keep our service quality high."
    }
  ];

  const ticketServices = [
    "Engine servicing",
    "Oil & filter change",
    "Battery checks",
    "Tyre repair",
    "Brake & clutch",
    "Periodic maintenance",
    "Emergency roadside"
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* 🔴 HERO SECTION */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-[10px] mb-6"
            >
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>About FixWheel</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              We Bring The <span className="text-accent underline decoration-accent/20 underline-offset-8">Garage</span> To You
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              FixWheel started with one idea — fixing a bike shouldn't mean losing half your day to it. Today, verified mechanics reach doorsteps across Delhi NCR — equipped for most repairs in a single visit.
            </motion.p>
          </div>
        </div>
        
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* 🔴 OUR STORY & WHAT WE DO SECTION */}
      <section className="py-12 md:py-24 bg-white" id="story">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">How it started</span>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight">
                  A flat tyre, a missed meeting, and a better idea
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-lg">
                <p>
                  FixWheel started with a problem most riders know: pushing a broken-down bike to the nearest mechanic, waiting around a garage, and hoping the bill matched what was actually wrong.
                </p>
                <p>
                  We built FixWheel to flip that: instead of you going to the mechanic, the mechanic comes to you — fully equipped, transparent on pricing, and fast.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">What we do</span>
                <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Doorstep bike service, done properly
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Every mechanic on our platform is verified and equipped to diagnose and fix the job in a single visit, wherever possible.
                </p>
              </div>
            </div>

            {/* Signature Job Ticket representation */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, rotate: 0, y: 15 }}
                whileInView={{ opacity: 1, rotate: -1.2, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="w-full max-w-[380px] bg-white border border-gray-200 rounded-lg shadow-2xl p-6 relative overflow-hidden"
              >
                {/* Perforation detail on ticket sides */}
                <div className="absolute top-0 bottom-0 left-0 w-1 border-r border-dashed border-gray-300" />
                <div className="absolute top-0 bottom-0 right-0 w-1 border-l border-dashed border-gray-300" />
                
                <div className="flex justify-between items-start pb-4 border-b-2 border-dashed border-gray-200 mb-6">
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 tracking-wider">JOB ORDER</p>
                    <p className="text-sm font-mono font-bold text-gray-800">#FW-10472</p>
                  </div>
                  <span className="text-[10px] font-mono font-black text-green-600 border-2 border-green-600 px-2 py-0.5 rounded rotate-6 shadow-sm">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3.5">
                  {ticketServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center text-xs pb-2.5 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-500 font-medium">{service}</span>
                      <span className="text-green-600 font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Covered
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 WHY DIFFERENT SECTION */}
      <section className="py-12 md:py-24 bg-gray-50 border-t border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Why FixWheel</span>
            <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight mt-2">
              No garage visit. No guesswork on price.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyDifferent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-accent/15 transition-all duration-300 group"
              >
                <span className="text-3xl font-black text-accent/20 group-hover:text-accent font-mono block mb-4 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-lg font-black text-black uppercase mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔴 NUMBERS STRIP */}
      <section className="py-16 bg-[#151b24] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Where we stand today</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mt-1">By The Numbers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-b border-white/10 pb-10">
            {[
              { val: "500+", lbl: "Bikes serviced" },
              { val: "40+", lbl: "Verified mechanics" },
              { val: "4.7★", lbl: "Avg. rating" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-accent tracking-tighter block font-mono">
                  {stat.val}
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-secondary block">
                  {stat.lbl}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary block mb-3">
              Cities Covered
            </span>
            <span className="text-xl md:text-3xl font-black tracking-tight text-accent font-mono">
              Delhi &nbsp;·&nbsp; Gurugram
            </span>
          </div>
        </div>
      </section>

      {/* 🔴 MECHANICS VETTING & STANDARDS SECTION */}
      <section className="py-12 md:py-24 bg-white" id="mechanics">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
            {/* Vetting checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Who shows up at your door</span>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight">
                  Trained, verified, and accountable
                </h2>
              </div>
              
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Every FixWheel mechanic goes through identity verification and a skills check before joining the platform.
              </p>

              <ul className="space-y-3.5">
                {[
                  "We verify identity before onboarding",
                  "We test mechanical skills on real repair scenarios",
                  "Mechanics carry standard tools and genuine parts",
                  "We track and rate every job to ensure quality"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm md:text-base font-semibold text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards grid */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-5">
              {standards.map((card, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/15 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-3xl shrink-0 p-2.5 bg-white border border-gray-100 rounded-xl shadow-inner">
                    {card.icon}
                  </span>
                  <div>
                    <h4 className="text-black font-black text-base uppercase tracking-tight mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 ROADMAP SECTION */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#151b24] text-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/5"
          >
            {/* Background design */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(135deg,rgba(230,43,43,0.5)_0_2px,transparent_2px_14px)]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
                What's next
              </span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                From bikes to every two-wheeler need across NCR
              </h2>
              <p className="text-text-secondary text-sm md:text-lg leading-relaxed">
                We're expanding coverage across more localities and adding EV-specific servicing. The goal stays the same: fix whatever's wrong with your bike, without you going anywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔴 FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-gray-50 text-center border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-4">
            Got a bike that needs fixing?
          </h2>
          <p className="text-gray-600 text-sm md:text-lg font-medium mb-8">
             Skip the garage. Book a verified mechanic to your doorstep.
          </p>
          <Link 
            href="/book" 
            className="inline-flex items-center gap-3 bg-accent hover:bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_15px_30px_rgba(230,43,43,0.25)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] active:scale-98"
          >
             <span>Book Your Service</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
