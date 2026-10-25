"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Compass, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { DEFAULT_PUBLIC_STATS, getPublicStatsForCity, PublicStatRecord } from "@/lib/publicStats";

const whyDifferent = [
  { num: "01", title: "Pay after service", desc: "Check the finished work, then pay. Nothing upfront." },
  { num: "02", title: "Price approved first", desc: "You agree the price before any repair begins." },
  { num: "03", title: "Verified mechanics", desc: "Identity, background and skills checks before anyone joins." },
  { num: "04", title: "Arrival in 45 minutes", desc: "The nearest mechanic is dispatched to you, aiming for 45 minutes." },
  { num: "05", title: "15-day service warranty", desc: "Every service is backed by a 15-day warranty." },
  { num: "06", title: "Genuine parts", desc: "Tools and genuine parts on board, for most repairs in one visit." },
];

const bookingSteps = [
  { title: "Book", desc: "Pick your vehicle, service, location and time, on the website, app or WhatsApp." },
  { title: "Mechanic assigned", desc: "We confirm and assign a verified mechanic near you." },
  { title: "Doorstep service", desc: "They inspect your vehicle and complete the work you approved." },
  { title: "Review and pay", desc: "Check the work, take a test ride, then pay." },
];

const services = [
  ["Running repair", "from ₹399"],
  ["Puncture repair", "from ₹399"],
  ["Jump start", "from ₹399"],
  ["Roadside assistance", "from ₹399"],
  ["Pick and drop", "from ₹199"],
  ["Electric scooter service", "from ₹799"],
];

const principles = [
  { title: "Our vision", desc: "A future where no rider loses a day to a repair, and trusted doorstep service is the normal way to look after a two-wheeler across Delhi NCR and beyond." },
  { title: "Our mission", desc: "To save riders' time with verified mechanics, clear pricing and fast service at their doorstep, and to be accountable for every job." },
  { title: "Our values", desc: "We believe in clear pricing, so you know the cost before work starts and pay only when it is done. We earn trust by sending verified mechanics, respect your time with quick arrival, and take responsibility for every job." },
];

const cities = [
  ["Delhi", "/delhi"], ["Gurugram", "/gurgaon"], ["Noida", "/noida"],
  ["Ghaziabad", "/ghaziabad"], ["Faridabad", "/faridabad"],
];

const team = [
  { initials: "ZK", name: "Zakir Khan", role: "CEO", desc: "Leads FixWheel. His uncle has run a garage since 2002.", linkedin: "https://www.linkedin.com/in/zakir-khan-97964a245/" },
  { initials: "MB", name: "Md Bilal", role: "Lead marketing", desc: "Around six years in marketing, and also markets XUV Garage.", linkedin: "https://www.linkedin.com/in/md-bilal31/" },
  { initials: "AR", name: "Arzoo", role: "Lead sales", desc: "Previously with Ride n Repair." },
  { initials: "KR", name: "Krishna", role: "Web developer", desc: "Builds this website." },
  { initials: "JA", name: "Jauhar", role: "App developer", desc: "Builds the FixWheel app." },
];

const sectionHeading = "text-3xl md:text-5xl font-black uppercase tracking-tight text-black";

export default function AboutClient() {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global);

  useEffect(() => {
    getPublicStatsForCity("global").then(setStats);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative overflow-hidden bg-gray-50 pb-20 pt-20 md:pb-28 md:pt-32">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-accent">
              <Compass className="h-3.5 w-3.5" /> About FixWheel
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-black sm:text-5xl md:text-7xl">
              We bring the <span className="text-accent">garage</span> to you
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-gray-600 md:text-xl">
              FixWheel sends verified mechanics to your home, office or roadside across Delhi NCR. We fix bikes, scooties and electric scooters on the spot, with the price approved before work starts and payment only after the job is done.
            </motion.p>
          </div>
        </div>
      </section>

      <section id="why-fixwheel" className="border-y border-gray-200/60 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Why FixWheel</span>
            <h2 className={`${sectionHeading} mt-2`}>What makes FixWheel different</h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {whyDifferent.map((item) => (
              <article key={item.num} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/20 hover:bg-white hover:shadow-xl md:p-8">
                <span className="mb-4 block font-mono text-3xl font-black text-accent/25 transition-colors group-hover:text-accent">{item.num}</span>
                <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-story" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Where it began</span>
              <h2 className={`${sectionHeading} mt-2`}>Our story</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-gray-600 md:text-xl">
              <p>Zakir Khan&apos;s uncle opened a garage in 2002, and it has been running ever since. Zakir, now FixWheel&apos;s CEO, grew up knowing it as part of the family.</p>
              <p>A garage shows you both sides of a repair: the mechanic&apos;s skill, and the rider&apos;s wait. You push a broken-down bike to the nearest mechanic, wait around, and hope the bill matches what was wrong. One repair can take half a day.</p>
              <p className="border-l-4 border-accent pl-5 font-black text-black">So we flipped it: instead of you going to the mechanic, the mechanic comes to you.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Four simple steps</span>
          <h2 className={`${sectionHeading} mt-2`}>How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <article key={step.title} className="border-t-4 border-accent bg-gray-50 p-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">Step {index + 1}</span>
                <h3 className="mt-5 text-xl font-black uppercase tracking-tight text-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-black">Book now <ArrowRight className="h-4 w-4" /></Link>
            <a href="https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:border-accent hover:text-accent">Get the app for 10% off</a>
          </div>
        </div></div>
      </section>

      <section id="services" className="border-y border-gray-200/60 bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Doorstep support</span>
            <h2 className={`${sectionHeading} mt-2`}>What we service</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">Bikes, scooties and electric scooters, from everyday commuters to sports, cruiser and premium motorcycles. We work on Royal Enfield, Honda, Yamaha, Suzuki, KTM, Bajaj, TVS, Hero and more.</p>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">Everyday repairs start from ₹399, and pick and drop from ₹199. Starting rates are for bikes up to 249cc; your final price depends on the vehicle and work, and is always confirmed first. The app gets you 10% off.</p>
            <div className="mt-6 flex gap-6 text-sm font-black uppercase tracking-wider">
              <Link href="/services" className="border-b-2 border-accent pb-1 hover:text-accent">All services</Link>
              <Link href="/pricing" className="border-b-2 border-accent pb-1 hover:text-accent">Pricing</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 shadow-sm md:px-8">
            {services.map(([name, price]) => (
              <div key={name} className="flex items-center justify-between gap-4 border-b border-gray-100 py-5 last:border-0">
                <span className="flex items-center gap-3 font-bold text-black"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />{name}</span>
                <span className="whitespace-nowrap font-mono text-sm font-black text-accent">{price}</span>
              </div>
            ))}
          </div>
        </div></div>
      </section>

      <section id="vision" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">What guides us</span>
          <h2 className={`${sectionHeading} mt-2`}>Vision, mission and values</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-100 border-t-4 border-t-accent bg-gray-50 p-7 md:p-8">
                <h3 className="text-xl font-black uppercase tracking-tight text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">{item.desc}</p>
              </article>
            ))}
          </div>
        </div></div>
      </section>

      <section id="today" className="relative overflow-hidden bg-[#151b24] py-16 text-white md:py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
        <div className="container relative z-10 mx-auto px-4"><div className="mx-auto max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Where we stand</span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white md:text-5xl">FixWheel today</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 border-b border-white/10 pb-10 lg:grid-cols-4">
            {[[`${stats.bikes_serviced}+`, "Vehicles serviced"], [`${stats.total_partners}+`, "Verified mechanics"], [`${stats.average_rating}★`, "Customer rating"], ["5", "Cities covered"]].map(([value, label]) => (
              <div key={label} className="border-t-2 border-accent pt-4">
                <strong className="block font-mono text-3xl font-black text-white md:text-5xl">{value}</strong>
                <span className="mt-2 block text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-text-secondary md:text-base">
            We serve{" "}{cities.map(([name, href], index) => <span key={name}><Link href={href} className="font-bold text-white underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent">{name}</Link>{index < cities.length - 1 ? ", " : " "}</span>)}and are adding more localities and electric scooter servicing.
          </p>
        </div></div>
      </section>

      <section id="team" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="mx-auto max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">The people behind the service</span>
          <h2 className={`${sectionHeading} mt-2`}>The team</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((person, index) => (
              <article key={person.name} className={`rounded-2xl bg-white p-6 shadow-sm ${index < 2 ? "border-2 border-[#151b24]" : "border border-gray-200"}`}>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent font-mono text-sm font-black text-white">{person.initials}</div>
                <h3 className="mt-5 text-lg font-black uppercase tracking-tight text-black">{person.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{person.desc}</p>
                {person.linkedin && <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-b-2 border-accent text-xs font-black uppercase tracking-wider text-black hover:text-accent">LinkedIn</a>}
              </article>
            ))}
          </div>
        </div></div>
      </section>

      <section id="contact" className="bg-[#151b24] py-16 text-white md:py-24">
        <div className="container mx-auto px-4"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Contact us</span>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white md:text-5xl">Talk to the FixWheel team</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">Questions, suggestions, or a story about your last breakdown? We read every message.</p>
            <p className="mt-5 text-sm text-text-secondary">Are you a mechanic or garage owner? <Link href="/partner" className="font-bold text-accent underline underline-offset-4">Join our network</Link>, free of joining fees.</p>
          </div>
          <div className="grid gap-3">
            <a href="https://wa.me/918745945682?text=Hi!%20I%20want%20to%20book%20a%20bike%20service%20with%20FixWheel." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-accent hover:bg-white/10">
              <MessageCircle className="h-6 w-6 shrink-0 text-accent" /><span><strong className="block text-sm font-black uppercase tracking-wider text-white">WhatsApp</strong><small className="text-text-secondary">Get an estimate and book</small></span><ArrowRight className="ml-auto h-4 w-4 text-accent transition group-hover:translate-x-1" />
            </a>
            <a href="tel:+918745945682" className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-accent hover:bg-white/10">
              <Phone className="h-6 w-6 shrink-0 text-accent" /><span><strong className="block text-sm font-black uppercase tracking-wider text-white">+91 87459 45682</strong><small className="text-text-secondary">Daily, 8 AM to 10 PM</small></span><ArrowRight className="ml-auto h-4 w-4 text-accent transition group-hover:translate-x-1" />
            </a>
            <a href="mailto:support@fixwheel.app" className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-accent hover:bg-white/10">
              <Mail className="h-6 w-6 shrink-0 text-accent" /><span><strong className="block text-sm font-black uppercase tracking-wider text-white">support@fixwheel.app</strong><small className="text-text-secondary">We reply within 2 hours</small></span><ArrowRight className="ml-auto h-4 w-4 text-accent transition group-hover:translate-x-1" />
            </a>
          </div>
        </div></div>
      </section>
    </main>
  );
}
