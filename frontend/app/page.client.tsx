"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ShieldCheck, Wrench, Clock,
  MapPin, Phone, Mail, Award, CheckCircle2, ChevronDown,
  Calendar, Star
} from 'lucide-react';
import BrandsMarquee from '@/components/BrandsMarquee';

export default function Home() {
  const features = [
    { icon: <Award className="w-8 h-8" />, label: "Trained Technicians" },
    { icon: <ShieldCheck className="w-8 h-8" />, label: "Work Guranted" },
    { icon: <CheckCircle2 className="w-8 h-8" />, label: "Experienced" },
  ];

  const steps = [
    { num: 1, icon: <Step1Icon />, title: "Book Online",           desc: "Choose your service package and fill in your details in under 60 seconds." },
    { num: 2, icon: <Step2Icon />, title: "Instant Confirmation",  desc: "We confirm your booking within 30 minutes and lock in your preferred time slot." },
    { num: 3, icon: <Step3Icon />, title: "Mechanic Assigned",    desc: "A certified mechanic is assigned to your booking based on your location." },
    { num: 4, icon: <Step4Icon />, title: "Mechanic Arrives",      desc: "Your mechanic arrives at your doorstep with all required tools and equipment." },
    { num: 5, icon: <Step5Icon />, title: "Repair Done",           desc: "Your bike is serviced on the spot. You can watch the entire process if you want." },
    { num: 6, icon: <Step6Icon />, title: "Ride Away",             desc: "Your bike is ready. Pay only after the service is completed to your satisfaction." },
  ];

  // ── FAQ data (from the site FAQ page) ─────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What services does FixWheel provide?",
      a: "FixWheel provides complete bike and car repair, maintenance, and servicing. This includes oil change, general service, engine repair, washing, and doorstep pickup & delivery." },
    { q: "How does FixWheel work?",
      a: "You simply book a service online or via WhatsApp. Our team picks up your vehicle, gets it serviced from verified garages, and delivers it back to you." },
    { q: "Are the prices fixed or negotiable?",
      a: "We provide transparent and competitive pricing. You will be informed about the cost before the service starts — no hidden charges." },
    { q: "Do you provide doorstep service?",
      a: "Yes, low-cost pickup and drop service so you don't have to visit the garage." },
    { q: "How long does the service take?",
      a: "Most services are completed within the same day. For major repairs, it may take longer, and we will keep you updated." },
    { q: "Are your mechanics trusted?",
      a: "Yes, we work only with verified and experienced mechanics to ensure high-quality service." },
    { q: "What if I am not satisfied with the service?",
      a: "Customer satisfaction is our priority. If you face any issue, we will resolve it or arrange a re-service if required." },
    { q: "How can I book a service?",
      a: "You can book directly on our website or contact us on WhatsApp for quick booking." },
    { q: "What payment methods are available?",
      a: "We accept UPI, cash, and online payments for your convenience." },
    { q: "Do you provide emergency / breakdown service?",
      a: "Yes, we provide emergency support in selected areas. Contact us for immediate assistance." },
    { q: "Do you use genuine spare parts?",
      a: "Yes, we use genuine and high-quality spare parts to ensure safety and performance." },
  ];

  // ── Contact form state removed ─────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-white text-black">

      {/* ── IMMERSIVE HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-center bg-[#050505] overflow-hidden pt-20 md:pt-0">
        
        {/* Z-0: Base Background (Already #050505) */}

        {/* Z-10: Cinematic Lighting (Pulsing Glow) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[70%] md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-accent/40 via-accent/5 to-transparent blur-[80px] md:blur-[120px] z-10 pointer-events-none"
        />

        {/* Z-20: The Bike Image (Floating & Immersive) */}
        <div className="absolute top-[45%] md:top-1/2 -translate-y-1/2 right-[-30%] md:right-[-5%] w-[160%] md:w-[75%] h-[60%] md:h-[90%] z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 1.15, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full relative will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/bike-bg.png"
                alt="Premium Superbike"
                fill
                className="object-contain object-center md:object-right"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Z-30: The Fade Mask (Ensures text readability over the bike) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent w-full md:w-[70%] z-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent h-full md:hidden z-30 pointer-events-none" />

        {/* Z-40: The Content */}
        <div className="relative z-40 container mx-auto px-4 md:px-8 lg:px-12 w-full h-full flex flex-col justify-center">
          <div className="max-w-[100%] md:max-w-[65%] lg:max-w-[60%] pt-10 md:pt-0">
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-gray-300 text-xs md:text-sm font-bold tracking-widest uppercase">Delhi's #1 Doorstep Bike Repair</span>
            </motion.div>

            {/* Headlines */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[3.5rem] sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-4 md:mb-6 flex flex-col"
            >
              <span className="text-accent drop-shadow-[0_0_30px_rgba(230,43,43,0.5)] relative z-10">Mechanic</span>
              <span className="text-white relative z-10">At Your Door</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 mt-3 md:mt-4 tracking-tight font-extrabold">No Garage. No Waiting.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-gray-400 text-sm sm:text-base md:text-xl max-w-lg font-medium leading-relaxed mb-8 md:mb-12"
            >
              Expert bike repairs at your doorstep. No hassle, no waiting, no hidden charges.
            </motion.p>

            {/* CTA & Trust Group */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col items-start gap-5 md:gap-6"
            >
              <Link
                href="/booking"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-accent hover:bg-[#ff1a1a] text-white px-8 py-4 md:py-5 rounded-md font-black tracking-widest uppercase text-sm md:text-lg transition-all duration-300 shadow-[0_0_20px_rgba(230,43,43,0.3)] hover:shadow-[0_0_40px_rgba(230,43,43,0.6)] hover:scale-[1.03]"
              >
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                Book Bike Service
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>

              {/* Trust Indicators */}
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/5 w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-300">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-white">4.8/5</span>
                  <span className="inline">Trusted by 1200+ riders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Bar (Desktop/Tablet) - Z-40 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl hidden md:flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 z-40 shadow-2xl"
        >
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors shrink-0 shadow-inner">
              <CheckCircle2 className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="text-white font-bold tracking-wider uppercase text-sm">500+ Repairs</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors shrink-0 shadow-inner">
              <span className="text-accent font-bold text-xl group-hover:scale-110 transition-transform">₹</span>
            </div>
            <div>
              <p className="text-white font-bold tracking-wider uppercase text-sm">Transparent Pricing</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors shrink-0 shadow-inner">
              <Clock className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="text-white font-bold tracking-wider uppercase text-sm">30-Min Response</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40 opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-white font-semibold hidden md:block">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </section>



      {/* ── FEATURES + QUOTE ─────────────────────────────────────────────── */}
      <section className="py-8 md:py-16 container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24 mb-16 md:mb-32">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-accent flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:bg-accent relative">
                <div className="absolute -inset-2 border border-accent/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="text-accent group-hover:text-white transition-colors duration-300 z-10">{feature.icon}</div>
              </div>
              <p className="font-bold uppercase tracking-wider text-xs md:text-sm text-center max-w-[90px] md:max-w-[100px]">{feature.label}</p>
            </motion.div>
          ))}
        </div>


      </section>

      <BrandsMarquee />

      {/* ════════════════════════════════════════════════════════════════════
          🟠  OUR PROCESS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="py-10 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">How It Works</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0F172A] tracking-tight mb-3">How We Work</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">From booking to repair — here's exactly what happens</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F97316] to-[#EF4444] md:-translate-x-px" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className={`relative flex items-start gap-6 md:gap-0 md:mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-[45%] bg-[#1E293B] border-l-[3px] border-l-[#F97316] rounded-[12px] p-6 shadow-md hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="mb-4 flex">{step.icon}</div>
                      <h3 className="font-bold text-[16px] text-white mb-2">{step.title}</h3>
                      <p className="text-[#94A3B8] text-[14px] leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Circle number on the line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#F97316] flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0 z-10 transition-transform duration-300 hover:scale-110">
                      {step.num}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          🟠  BECOME A PARTNER BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="border-l-4 border-accent pl-6 md:pl-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">🔧 Join Our Network</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mb-4">Are You a Bike Mechanic?</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                Join the FixWheel mechanic network and get a steady stream of customers at your doorstep. Work on your own schedule, earn more, and grow your business with us.
              </p>
              <ul className="space-y-2.5">
                {["Flexible working hours", "Guaranteed customer flow", "Weekly payments", "Free training and support"].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                href="/partner"
                className="inline-flex items-center gap-3 bg-accent hover:bg-red-600 text-white font-black uppercase tracking-widest px-8 py-4 text-sm md:text-base transition-all shadow-[0_0_30px_rgba(230,43,43,0.4)] hover:shadow-[0_0_40px_rgba(230,43,43,0.6)]"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          🟠  FAQ
      ════════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-10 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">❓ Support</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Everything you need to know about FixWheel</p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-7 py-4 md:py-5 gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className={`font-bold text-sm md:text-base uppercase tracking-tight transition-colors ${openFaq === idx ? 'text-accent' : 'text-black'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-accent border-accent text-white' : 'border-gray-200 text-gray-400'}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-7 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          🟠  CONTACT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-10 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">📞 Contact</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight mb-3">Get in Touch</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Have a question or need help? We are here for you</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5 text-accent" />, label: "Phone",         value: "+91 87459 45682",     note: "Call us between 8AM and 8PM" },
                { icon: <Mail  className="w-5 h-5 text-accent" />, label: "Email",         value: "support@fixwheel.app", note: "We reply within 2 hours" },
                { icon: <MapPin className="w-5 h-5 text-accent" />, label: "Location",     value: "Delhi NCR, India",    note: "Serving all major areas" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 md:p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-black font-bold text-sm md:text-base">{item.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>
                  </div>
                </motion.div>
              ))}


            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

function Step1Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function Step2Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Step3Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="m20.61 14.39-1.92 1.92a2 2 0 1 0 2.82 2.82l1.92-1.92a2 2 0 0 0-2.82-2.82Z" />
      <path d="m14 11 3.54 3.54" />
    </svg>
  );
}

function Step4Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Step5Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function Step6Icon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 14 4-4" />
      <path d="M3.34 16.998a10 10 0 1 1 17.32 0" />
    </svg>
  );
}
