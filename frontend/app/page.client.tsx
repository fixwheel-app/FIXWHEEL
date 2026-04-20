"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ShieldCheck, Wrench, Clock,
  MapPin, Phone, Mail, Award, CheckCircle2, ChevronDown
} from 'lucide-react';

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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] md:h-[100vh] md:min-h-[700px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/bike-bg.png"
            alt="Triumph Motorcycle"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent z-10 w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-7xl h-full py-10 md:pb-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm md:text-base text-accent font-medium mb-8">
              <Wrench className="w-4 h-4" />
              <span>Delhi's #1 Doorstep Bike Repair</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase text-black tracking-tighter mb-4 md:mb-6 leading-tight break-words">
              Your Bike <span className="text-accent drop-shadow-[0_0_15px_rgba(230,43,43,0.3)]">Broken?</span><br /> We Come to You.
            </h1>

            <p className="text-sm md:text-xl text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Expert bike repairs at your doorstep. No hassle, no waiting, no hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-16">
              <Link
                href="/services"
                className="bg-accent border-2 border-accent text-white px-6 py-3 md:px-10 md:py-4 text-sm md:text-base font-black tracking-widest uppercase hover:bg-transparent hover:text-black transition-all shadow-[0_0_20px_rgba(230,43,43,0.3)]"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-3 text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wider border-t border-black/10 pt-6 md:pt-8 mt-2 md:mt-4">
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" /><span>500+ Repairs</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-accent" /><span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" /><span>30-Min Response</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-[2px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0,0_100%)] z-20" />
      </section>

      {/* ── PROMOS ───────────────────────────────────────────────────────── */}
      <section className="relative z-30 -mt-8 md:-mt-20 container mx-auto px-4 mb-12 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 border-l-4 border-accent relative overflow-hidden group shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            <h3 className="text-xl sm:text-2xl font-black relative z-10 w-full sm:w-2/3 uppercase leading-tight">20% off with any new product in expart shop.</h3>
            <div className="w-16 h-16 shrink-0 rounded-full bg-accent flex items-center justify-center font-black text-xl z-10 text-white shadow-md relative">20%</div>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-black relative overflow-hidden group shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <h3 className="text-xl sm:text-2xl font-black relative z-10 w-full sm:w-2/3 uppercase leading-tight">30% Off with all services</h3>
            <div className="w-16 h-16 shrink-0 rounded-full bg-black flex items-center justify-center font-black text-xl z-10 text-white shadow-md relative">30%</div>
          </div>
        </div>
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

        {/* Quote block */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gray-50 p-6 md:p-12 border-l-4 md:border-l-8 border-accent relative shadow-xl">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]" />
          <div className="flex-1">
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] mb-4 text-xs">Best Bike Repair Services Shop</p>
            <h2 className="text-2xl md:text-5xl font-black uppercase leading-tight mb-4 md:mb-6">
              It's true some men take <span className="text-accent">good care of a bike</span> others treat it like one of <span className="text-accent">the family.</span>
            </h2>

          </div>
          <div className="flex-1 text-gray-600 space-y-3 md:space-y-4 text-sm leading-relaxed md:border-l border-black/10 md:pl-8 border-t md:border-t-0 pt-4 md:pt-0">
            <p>We've created a seamless pipeline to handle all of your connections literally on-time, and a killer price. We treat your two-wheelers with the utmost care, like family.</p>
            <p>Our experts understand that it's not just about spending hours. While others boast to drive like other cars, that is not for you. It isn't really about racing either. It's sort of about avoiding them and riding with comfort.</p>
            <Link href="/booking" className="inline-block bg-transparent border border-black/20 px-6 py-2 text-black font-bold uppercase text-xs hover:border-accent hover:text-accent transition-colors mt-4">
              Get Appointment
            </Link>
          </div>
        </div>
      </section>

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
                { icon: <Clock  className="w-5 h-5 text-accent" />, label: "Working Hours", value: "Monday to Sunday",   note: "8:00 AM — 8:00 PM, every day" },
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

              <div className="flex flex-wrap gap-3 pt-4 justify-center sm:justify-start">
                <a href="https://wa.me/918745945682" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                  WhatsApp
                </a>
                <a href="https://www.instagram.com/fixwheel11?igsh=MTRqeHB0dnRhYWZqaQ==" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573309963156" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/fixwheel-app/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                  LinkedIn
                </a>
              </div>
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
