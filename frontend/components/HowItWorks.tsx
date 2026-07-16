"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Settings, Smartphone, Clock, ShieldCheck, 
  UserCheck, MapPin, Wrench, CheckCircle2, 
  Flag, IndianRupee, ArrowRight, Truck, ThumbsUp
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Smartphone className="w-8 h-8 text-[#FF6B00]" />,
      title: "Book Online",
      desc: "Choose your service package and fill in your details in under 60 seconds.",
      tag: "Takes 60 sec",
      tagIcon: <Clock className="w-3.5 h-3.5" />,
      bgImage: "bike",
      bgIcon: null
    },
    {
      num: "02",
      icon: <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />,
      title: "Instant Confirmation",
      desc: "We confirm your booking within 45 minutes and lock in your preferred time slot.",
      tag: "Within 45 min",
      tagIcon: <Clock className="w-3.5 h-3.5" />,
      bgImage: null,
      bgIcon: <Clock className="w-48 h-48 text-gray-100 absolute -right-10 -bottom-10 opacity-50 pointer-events-none" />
    },
    {
      num: "03",
      icon: <UserCheck className="w-8 h-8 text-[#FF6B00]" />,
      title: "Mechanic Assigned",
      desc: "A certified mechanic is assigned to your booking based on your location.",
      tag: "Nearby expert",
      tagIcon: <MapPin className="w-3.5 h-3.5" />,
      bgImage: null,
      bgIcon: <MapPin className="w-48 h-48 text-gray-100 absolute -right-10 -bottom-10 opacity-50 pointer-events-none" />
    },
    {
      num: "04",
      icon: <MapPin className="w-8 h-8 text-[#FF6B00]" />,
      title: "Mechanic Arrives",
      desc: "Your mechanic arrives at your doorstep with all required tools and equipment.",
      tag: "On time, every time",
      tagIcon: <Clock className="w-3.5 h-3.5" />,
      bgImage: null,
      bgIcon: <Truck className="w-48 h-48 text-gray-100 absolute -right-10 -bottom-10 opacity-50 pointer-events-none" />
    },
    {
      num: "05",
      icon: <Wrench className="w-8 h-8 text-[#FF6B00]" />,
      title: "Repair Done",
      desc: "Your bike is serviced on the spot. You can watch the entire process if you want.",
      tag: "Quality assured",
      tagIcon: <ShieldCheck className="w-3.5 h-3.5" />,
      bgImage: "bike",
      bgIcon: null
    },
    {
      num: "06",
      icon: <CheckCircle2 className="w-8 h-8 text-[#FF6B00]" />,
      title: "Ride Away",
      desc: "Your bike is ready. Pay only after the service is completed to your satisfaction.",
      tag: "100% satisfaction",
      tagIcon: <CheckCircle2 className="w-3.5 h-3.5" />,
      bgImage: "bike",
      bgIcon: null
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative background grid/gear (optional subtle details) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-xs md:text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            <Settings className="w-4 h-4" />
            <span>How It Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-4 tracking-tight uppercase">
            HOW <span className="text-[#FF6B00]">WE WORK</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium">
            From booking to repair — here's exactly what happens
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-orange-200 md:-translate-x-1/2 z-0 hidden sm:block" />

          <div className="flex flex-col gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center w-full relative ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-white border-2 border-[#FF6B00] rounded-full flex items-center justify-center sm:-translate-x-1/2 z-20 shadow-[0_0_0_6px_white] hidden sm:flex">
                    <span className="text-[#FF6B00] font-bold text-lg">{step.num}</span>
                  </div>

                  {/* Card */}
                  <div className={`w-full sm:w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(255,107,0,0.1)] transition-all duration-300 ml-16 sm:ml-0`}>
                    
                    {/* Background Visuals */}
                    {step.bgIcon}
                    {step.bgImage === "bike" && (
                      <div className="absolute -right-16 -bottom-12 w-64 h-64 opacity-[0.15] pointer-events-none transform group-hover:scale-105 transition-transform duration-500">
                        <Image src="/bike-bg.png" alt="Bike" fill className="object-contain" />
                      </div>
                    )}

                    <div className="relative z-10 flex flex-col items-start text-left">
                      <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5 border border-orange-100">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-[90%]">
                        {step.desc}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[#FF6B00] text-xs font-semibold px-3 py-1.5 rounded-md border border-[#FF6B00]/20 bg-[#FF6B00]/5">
                        {step.tagIcon}
                        <span>{step.tag}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* End Flag */}
          <div className="absolute left-6 md:left-1/2 -bottom-10 w-10 h-10 flex items-center justify-center sm:-translate-x-1/2 z-20 hidden sm:flex">
            <Flag className="w-6 h-6 text-[#FF6B00]" />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative flex flex-col md:flex-row items-center"
        >
          {/* Left Bike Image */}
          <div className="w-full md:w-1/3 h-48 md:h-full relative bg-gray-50 flex-shrink-0">
            <Image 
              src="/bike-bg.png" 
              alt="Fast Bike Service" 
              fill 
              className="object-cover md:object-contain object-center scale-110 md:scale-125 origin-right"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex-1 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10 bg-white md:bg-transparent">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-2 tracking-tight">
                Fast. Reliable. Hassle-free.
              </h3>
              <p className="text-gray-500 font-medium">
                Book in less than a minute and we'll take care of the rest.
              </p>
            </div>
            <Link
              href="/booking"
              className="group flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-[0_10px_20px_rgba(255,107,0,0.2)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.4)] hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
            >
              Book Your Service Now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-y-6 gap-x-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <ShieldCheck className="w-5 h-5 text-[#0F172A]" />
            Certified Mechanics
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <Clock className="w-5 h-5 text-[#0F172A]" />
            On-time Guarantee
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <IndianRupee className="w-5 h-5 text-[#0F172A]" />
            Transparent Pricing
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <ThumbsUp className="w-5 h-5 text-[#0F172A]" />
            Satisfaction Guaranteed
          </div>
        </div>

      </div>
    </section>
  );
}
