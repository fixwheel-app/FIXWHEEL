"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ArrowRight, ShieldCheck, Wrench, Clock,
  MapPin, Phone, Mail, Award, CheckCircle2, ChevronDown,
  Calendar, Star, Smartphone
} from 'lucide-react';
import { getServicePricing, type ServicePriceId } from '@/lib/pricingData';
import BrandsMarquee from '@/components/BrandsMarquee';
import HomeCoverageSection from '@/components/HomeCoverageSection';
import { GooglePlayIcon } from '@/components/GooglePlayIcon';
import { submitQuery } from '@/lib/api';
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from '@/lib/publicStats';

export default function Home() {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity('global').then(setStats);
  }, []);

  const features = [
    { icon: <CheckCircle2 className="w-8 h-8" />, label: "Pay After Service" },
    { icon: <ShieldCheck className="w-8 h-8" />, label: "15 Days Service Warranty" },
    { icon: <Award className="w-8 h-8" />, label: "Price Approval Before Repair" },
    { icon: <CheckCircle2 className="w-8 h-8" />, label: "Verified Mechanics" },
  ];

  const steps = [
    { num: "01", icon: <Smartphone className="w-5 h-5" />, title: "Book Your Service", desc: "Select your bike, required service, location, date and preferred time." },
    { num: "02", icon: <ShieldCheck className="w-5 h-5" />, title: "Mechanic Assigned", desc: "FixWheel confirms your booking and assigns a verified mechanic near your location." },
    { num: "03", icon: <Wrench className="w-5 h-5" />, title: "Doorstep Service", desc: "The mechanic arrives with the required tools, inspects your vehicle and completes the approved work." },
    { num: "04", icon: <CheckCircle2 className="w-5 h-5" />, title: "Review & Pay", desc: "Check the completed service and pay only after the job is finished." },
  ];

  const homeServices: { name: string; href: string; priceId: ServicePriceId; note: string }[] = [
    { name: "Basic Service", href: "/services/basic-service", priceId: "basic-service", note: "General service" },
    { name: "Engine Oil Change", href: "/services/oil-change", priceId: "service-engine-oil", note: "Service with engine oil" },
    { name: "Engine Repair", href: "/services/engine-repair", priceId: "engine-half", note: "Engine half overhaul" },
    { name: "Brake Repair", href: "/services/brake-repair", priceId: "disc-replacement", note: "Disc replacement labor" },
    { name: "Battery Replacement", href: "/services/battery-replacement", priceId: "battery-replacement", note: "Labor only; battery charged separately" },
    { name: "Tyre Replacement/Repair", href: "/services/puncture", priceId: "puncture", note: "Puncture repair; replacement quoted separately" },
  ];

  // ── FAQ data (from the site FAQ page) ─────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Query Form State
  const [queryForm, setQueryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmittingQuery, setIsSubmittingQuery] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);
  const [querySuccess, setQuerySuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQueryForm(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuery(true);
    setQueryError(null);
    setQuerySuccess(false);
    setValidationErrors({});

    // Client-side validation
    const errors: Record<string, string> = {};
    if (!queryForm.name.trim()) {
      errors.name = 'Name is required';
    } else if (queryForm.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!queryForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(queryForm.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!queryForm.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(queryForm.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!queryForm.message.trim()) {
      errors.message = 'Problem or query is required';
    } else if (queryForm.message.length < 10) {
      errors.message = 'Problem or query must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmittingQuery(false);
      return;
    }

    try {
      const response = await submitQuery(queryForm);
      if (response.success) {
        setQuerySuccess(true);
        setQueryForm({ name: '', phone: '', email: '', message: '' });
      } else {
        setQueryError(response.error || 'Failed to submit query. Please try again.');
        if (response.details && Array.isArray(response.details)) {
          const apiErrors: Record<string, string> = {};
          response.details.forEach((err: any) => {
            if (err.path && err.path[0]) {
              apiErrors[err.path[0]] = err.message;
            }
          });
          setValidationErrors(apiErrors);
        }
      }
    } catch (err) {
      setQueryError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmittingQuery(false);
    }
  };

  const faqs = [
    { q: "What services does FixWheel provide?",
      a: "FixWheel provides doorstep bike repair, maintenance, and servicing. Our services include routine servicing, oil changes, engine repairs, tyre replacements, brake repairs, battery replacements, washing, and emergency roadside assistance." },
    { q: "Are the prices fixed or are there additional charges?",
      a: "Our prices are transparent and estimated based on the selected service. If any additional repair or spare part is required, the mechanic will inform you of the cost and get your approval before proceeding. There are no hidden charges." },
    { q: "How do I know the mechanic is verified?",
      a: "Yes. Every FixWheel mechanic is background-checked and trained on two-wheeler repair. You can rate your mechanic after every service, and we follow up on any complaint." },
    { q: "What if I have an issue with the service?",
      a: "If you have an issue with the service, contact us within 15 days. We'll send a mechanic back at no extra charge to fix it." },
    { q: "How can I book a service?",
      a: "Book online through our website or send us a message on WhatsApp. The booking process takes under a minute." },
    { q: "Do you provide emergency / breakdown service?",
      a: "Yes. We provide 24/7 emergency roadside assistance and breakdown support in Delhi and Gurugram." },
    { q: "Do you use genuine spare parts?",
      a: "Yes. We use only genuine and certified manufacturer parts to ensure the safety and performance of your bike." },
  ];

  // ── Contact form state removed ─────────────────────────────────────────────

  const reviews = [
    { name: "Deepak M.", city: "Delhi", vehicle: "Bajaj Pulsar", rating: 5, text: "Got my Pulsar serviced at my office parking in Janakpuri. Oil change done in 45 minutes. Price was exactly what they quoted." },
    { name: "Sneha K.", city: "Delhi", vehicle: "Honda Activa", rating: 4, text: "Battery died on my Activa in Vasant Kunj. The mechanic tested it and replaced the battery on the spot with transparent billing." },
    { name: "Vikram Singh", city: "Gurgaon", vehicle: "Royal Enfield", rating: 5, text: "Used them for my Royal Enfield. Genuine parts used and the engine feels noticeably smoother now." },
    { name: "Vikram S.", city: "Noida", vehicle: "Royal Enfield Bullet", rating: 5, text: "My Royal Enfield Bullet broke down near Sector 62. The mechanic cleaned the carburetor on the spot and got it started." },
    { name: "Pallavi G.", city: "Noida", vehicle: "TVS Jupiter", rating: 5, text: "Got my TVS Jupiter serviced at home in Greater Noida West. Polite technician, pre-confirmed pricing, and no pushy upselling." },
    { name: "Rohit S.", city: "Faridabad", vehicle: "Bajaj Pulsar", rating: 5, text: "My Pulsar broke down near Bata Chowk. The roadside mechanic changed the clutch cable and got me moving again." },
    { name: "Garima S.", city: "Ghaziabad", vehicle: "Scooty", rating: 5, text: "My Scooty had a flat tyre near GT Road. The mechanic reached quickly, repaired the puncture, and got me moving again." },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* ── IMMERSIVE HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative md:min-h-[100vh] flex flex-col justify-start md:justify-center bg-[#050505] overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0">
        
        {/* Z-0: Base Background (Already #050505) */}

        {/* Z-10: Cinematic Lighting (Pulsing Glow) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 md:top-1/2 left-[70%] md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-accent/40 via-accent/5 to-transparent blur-[80px] md:blur-[120px] z-10 pointer-events-none"
        />

        {/* Z-20: The Bike Image (Floating & Immersive) */}
        <div className="absolute bottom-[-5%] md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-[-30%] md:right-[-5%] w-[160%] md:w-[75%] h-[65%] md:h-[90%] z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 1, scale: 1, x: 0 }}
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
                alt="Motorcycle"
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
        <div className="relative z-40 container mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col">
          <div className="max-w-[100%] md:max-w-[65%] lg:max-w-[60%]">


            {/* Headlines */}
            <h1 
              className="text-[3rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-black uppercase tracking-tighter leading-[0.85] mb-3 md:mb-5 flex flex-col"
            >
              <span className="bg-gradient-to-b from-[#ff4d4d] to-[#e40521] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(230,43,43,0.3)] relative z-10">Mechanic</span>
              <span className="text-white relative z-10">At Your Doorstep</span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 mt-2 md:mt-3 tracking-tight font-extrabold">In 45 minutes.</span>
            </h1>

            {/* Subtext */}
            <p 
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg font-medium leading-relaxed mb-6 md:mb-8"
            >
              Certified mechanics come to you. We service your bike on the spot — no garage visit, no hidden fees.
            </p>

            {/* CTA & Trust Group */}
            <div 
              className="flex flex-col items-start gap-4 md:gap-5"
            >
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/book"
                  className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2.5 bg-accent hover:bg-[#ff1a1a] text-white px-7 py-3.5 md:py-4 rounded-md font-black tracking-widest uppercase text-xs md:text-base transition-all duration-300 shadow-[0_0_20px_rgba(230,43,43,0.3)] hover:shadow-[0_0_40px_rgba(230,43,43,0.6)] hover:scale-[1.02]"
                >
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  
                  <Calendar className="relative z-10 w-4 h-4 md:w-5 md:h-5" />
                  <span className="relative z-10">BOOK NOW</span>
                  <ArrowRight className="relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <a
                  href="https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-accent px-6 py-3.5 md:py-4 rounded-md font-black tracking-widest uppercase text-xs md:text-base transition-all duration-300 hover:scale-[1.02]"
                >
                  <GooglePlayIcon className="relative z-10 w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span className="relative z-10">GET THE APP</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/5 w-full sm:w-auto justify-center sm:justify-start">
                <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-300">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="font-bold text-white">{stats.average_rating}/5</span>
                  <span className="inline"><span className="font-bold text-white">{stats.bikes_serviced}+</span> total vehicles serviced</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40 opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-white font-semibold hidden md:block">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </section>



      {/* ── FEATURES + QUOTE ─────────────────────────────────────────────── */}
      <section className="py-5 md:py-8 container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-4 gap-1 sm:gap-3 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex min-w-0 cursor-pointer flex-col items-center text-center"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-2 border-accent flex items-center justify-center mb-2 md:mb-3 transition-all duration-300 group-hover:bg-accent">
                <div className="absolute -inset-2 rounded-full border border-accent/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="relative z-10 text-accent scale-[0.65] sm:scale-75 md:scale-100 transition-colors duration-300 group-hover:text-white">{feature.icon}</div>
              </div>
              <p className="font-black uppercase tracking-tight text-[8px] leading-[1.15] sm:text-[10px] md:text-xs md:tracking-wide max-w-[145px]">{feature.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <BrandsMarquee />

      <section id="home-services" className="py-10 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-center mb-4">Services at Your Doorstep</h2>
          <p className="text-gray-500 text-center mb-8">Starting rates for 0–249cc bikes. Final pricing depends on your service and engine CC.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {homeServices.map((service) => (
              <Link key={service.priceId} href={service.href} className="group flex min-h-[154px] flex-col rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:p-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#17191d] p-1.5">
                    <Image src="/logo.png" alt="FixWheel" width={48} height={48} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="min-w-0 text-lg font-black leading-tight text-[#111820]">{service.name}</h3>
                </div>
                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <p className="shrink-0 whitespace-nowrap text-sm font-black leading-tight text-accent sm:text-base">Starts from ₹{getServicePricing(service.priceId).prices.cc0_249.toLocaleString('en-IN')}</p>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-black text-[#111820] transition-colors group-hover:text-accent">View Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          🟠  OUR PROCESS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="overflow-hidden bg-[#f5f6f8] py-12 text-[#111820] md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-3 text-sm font-bold text-accent">How your service moves</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Your booking, step by step</h2>
            <p className="text-sm text-slate-500 md:text-base">Four clear checkpoints from selecting a service to approving the completed job.</p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-6 left-1/2 top-6 w-0.5 -translate-x-1/2 bg-accent/35" />
            <div className="space-y-6 md:space-y-12">
              {steps.map((step, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <article key={step.num} className="relative grid grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] items-center gap-2 md:min-h-[190px] md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:gap-6">
                    <div className="relative z-10 col-start-2 row-start-1 mx-auto flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#f5f6f8] bg-accent text-xs font-black text-white shadow-[0_0_0_1px_rgba(230,43,43,0.25)] md:h-12 md:w-12 md:text-base">
                      {idx + 1}
                    </div>
                    <div className={`min-w-0 row-start-1 rounded-xl border-l-4 border-accent bg-[#111820] p-3 text-white shadow-[0_10px_24px_rgba(17,24,32,0.12)] md:p-7 ${isLeft ? 'col-start-1' : 'col-start-3'}`}>
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 text-accent md:mb-4 md:h-10 md:w-10">
                        {step.icon}
                      </div>
                      <h3 className="mb-2 break-words text-sm font-black leading-5 md:text-xl md:leading-7">{step.title}</h3>
                      <p className="break-words text-xs leading-5 text-slate-300 md:text-base md:leading-7">{step.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HomeCoverageSection />

      {/* ════════════════════════════════════════════════════════════════════
          🟠  CUSTOMER REVIEWS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0F172A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Real Feedback</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mb-3">What Riders Say</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">Reviews from verified riders who've used FixWheel.</p>
          </div>

          {/* Grid Layout for Desktop, Horizontal Scroll for Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] md:w-auto snap-center shrink-0 p-6 rounded-[12px] border border-white/10 bg-[#1E293B] text-white flex flex-col justify-between h-full whitespace-normal"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="font-bold text-[15px] uppercase tracking-wide">{review.name}</div>
                    <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-md">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold">{review.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-300">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2.5 py-1"><MapPin className="w-3 h-3 text-accent" />{review.city}</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2.5 py-1"><Wrench className="w-3 h-3 text-accent" />{review.vehicle}</span>
                  </div>
                  <p className="text-[14px] leading-relaxed opacity-90">"{review.text}"</p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Verified Rider</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          🟠  BECOME A PARTNER BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-gray-50 border border-gray-100 rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 relative overflow-hidden">
            {/* Left accent strip inside the card */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />
            
            {/* Text */}
            <div className="flex-1 pl-2 md:pl-4">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Join Our Network</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight mb-4">Are You a Bike Mechanic?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join the FixWheel mechanic network to get bookings in your area. Set your own schedule and manage jobs through our platform.
              </p>
              <ul className="space-y-2.5">
                {["Flexible working hours", "Easy booking management", "Get more customers in your area"].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 pl-2 lg:pl-0">
              <Link
                href="/partner"
                className="inline-flex items-center gap-3 bg-accent hover:bg-red-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-sm md:text-base transition-all shadow-[0_0_20px_rgba(230,43,43,0.3)] hover:shadow-[0_0_35px_rgba(230,43,43,0.5)] hover:scale-[1.02] active:scale-[0.98]"
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
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Common questions about bookings, service, and pricing</p>
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
      <section id="contact" className="py-8 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6 md:mb-10">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Contact</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight mb-3">Contact Us</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Call or email us. We respond within 2 hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.35fr] gap-4 md:gap-6 lg:items-stretch">
            {/* Contact details */}
            <div className="grid grid-cols-2 gap-3 lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:gap-4">
              {[
                { icon: <Phone className="w-5 h-5 text-accent" />, label: "Phone",         value: "+91 87459 45682",     note: "Call us between 8AM and 8PM" },
                { icon: <Mail  className="w-5 h-5 text-accent" />, label: "Email",         value: "support@fixwheel.app", note: "We reply within 2 hours" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex min-w-0 items-start gap-2.5 bg-white border border-gray-100 rounded-xl p-3 md:p-5 shadow-sm lg:items-center"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-black font-bold text-[11px] break-words sm:text-sm md:text-base">{item.value}</p>
                    <p className="hidden sm:block text-gray-500 text-xs mt-0.5">{item.note}</p>
                  </div>
                </motion.div>
              ))}


            </div>
          <div id="query-form" className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm relative overflow-hidden">
            <h3 className="text-base md:text-lg font-black uppercase mb-1.5 md:mb-2">Report a Problem / Query</h3>
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Have an issue with a booking, repair, or want to ask something? Let us know below.</p>
            {/* Left accent strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

            {querySuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 md:py-12"
              >
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 mb-3">Query Submitted!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Your message has been sent to our support team at <span className="font-bold text-slate-800">support@fixwheel.app</span>. We respond within 2 hours during business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setQuerySuccess(false)}
                  className="bg-accent hover:bg-red-600 text-white font-black uppercase tracking-widest px-6 py-3 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(230,43,43,0.2)]"
                >
                  Send Another Query
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleQuerySubmit} className="space-y-3 md:space-y-4">
                {queryError && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    {queryError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="query-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="query-name"
                      name="name"
                      value={queryForm.name}
                      onChange={handleQueryChange}
                      placeholder="Your name"
                      disabled={isSubmittingQuery}
                      className={`w-full bg-gray-50 border ${validationErrors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-accent/20 focus:border-accent'} rounded-lg px-3.5 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-4 transition-all`}
                    />
                    {validationErrors.name && (
                      <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.name}</p>
                    )}
                  </div>

                  {/* Phone number field */}
                  <div>
                    <label htmlFor="query-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-bold">+91</span>
                      <input
                        type="tel"
                        id="query-phone"
                        name="phone"
                        value={queryForm.phone}
                        onChange={handleQueryChange}
                        placeholder="10-digit number"
                        disabled={isSubmittingQuery}
                        maxLength={10}
                        className={`w-full bg-gray-50 border ${validationErrors.phone ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-accent/20 focus:border-accent'} rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-4 transition-all`}
                      />
                    </div>
                    {validationErrors.phone && (
                      <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 md:items-start">
                  {/* Email field */}
                  <div>
                    <label htmlFor="query-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="query-email"
                      name="email"
                      value={queryForm.email}
                      onChange={handleQueryChange}
                      placeholder="example@gmail.com"
                      disabled={isSubmittingQuery}
                      className={`w-full bg-gray-50 border ${validationErrors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-accent/20 focus:border-accent'} rounded-lg px-3.5 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-4 transition-all`}
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.email}</p>
                    )}
                  </div>

                  {/* Query message field */}
                  <div>
                    <label htmlFor="query-message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Problem or Query
                    </label>
                    <textarea
                      id="query-message"
                      name="message"
                      value={queryForm.message}
                      onChange={handleQueryChange}
                      placeholder="Describe the issue or question..."
                      disabled={isSubmittingQuery}
                      rows={2}
                      className={`w-full bg-gray-50 border ${validationErrors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-accent/20 focus:border-accent'} rounded-lg px-3.5 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-4 transition-all resize-none`}
                    />
                    {validationErrors.message && (
                      <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-0">
                  <button
                    type="submit"
                    disabled={isSubmittingQuery}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-red-600 text-white font-black uppercase tracking-widest px-6 py-2.5 md:px-7 md:py-3 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(230,43,43,0.3)] hover:shadow-[0_0_35px_rgba(230,43,43,0.5)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmittingQuery ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Query
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          </div>
        </div>
      </section>


    </main>
  );
}
