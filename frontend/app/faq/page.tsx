"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does FixWheel provide?",
    answer: "FixWheel provides doorstep bike repair, maintenance, and servicing. Our services include routine servicing, oil changes, engine repairs, tyre replacements, brake repairs, battery replacements, washing, and emergency roadside assistance."
  },
  {
    question: "How does FixWheel work?",
    answer: "Book a service online or via WhatsApp. We assign a certified mechanic near you who arrives at your doorstep with the right tools and genuine parts to service your bike on the spot."
  },
  {
    question: "Are the prices fixed or negotiable?",
    answer: "Our prices are transparent and fixed. We inform you of the cost before the service starts, so you pay zero hidden fees."
  },
  {
    question: "Do you provide doorstep service?",
    answer: "Yes. We perform all repairs and servicing at your location, home, or office, so you save time and avoid garage visits."
  },
  {
    question: "How long does the service take?",
    answer: "Most routine servicing and repairs take 30 to 50 minutes. If a major repair requires more time, your mechanic will explain the timeline upfront."
  },
  {
    question: "How do I know the mechanic is verified?",
    answer: "Yes. Every FixWheel mechanic is background-checked and trained on two-wheeler repair. You can rate your mechanic after every service, and we follow up on any complaint."
  },
  {
    question: "What if I am not satisfied with the service?",
    answer: "If you have an issue with the service, contact us within 15 days. We'll send a mechanic back at no extra charge to fix it."
  },
  {
    question: "How can I book a service?",
    answer: "Book online through our website or send us a message on WhatsApp. The booking process takes under a minute."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept UPI, cards, net banking, and cash. Payment is collected after the service is completed."
  },
  {
    question: "Do you provide emergency/breakdown service?",
    answer: "Yes. We provide 24/7 emergency roadside assistance and breakdown support across Delhi and Gurugram."
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes. We use genuine or OEM-grade manufacturer parts. If a part needs replacing, we confirm the cost with you before proceeding."
  }
];

const FAQItemComponent = ({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-4 md:py-6 flex items-center justify-between text-left group transition-all duration-300"
      >
        <span className={`text-base md:text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-black group-hover:text-accent'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent border-accent text-white' : 'border-gray-200 text-gray-400 group-hover:border-accent group-hover:text-accent'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-600 text-lg leading-relaxed max-w-4xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gray-50 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-xs mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-7xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Frequently Asked <span className="text-accent underline decoration-accent/20 underline-offset-8">Questions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-xl text-gray-600 font-medium"
            >
              Common questions about our services, pricing, coverage, and how a booking works.
            </motion.p>
          </div>
        </div>
        
        {/* Slanted Bottom decoration */}
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* FAQ Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] p-4 md:p-12">
              {faqs.map((faq, index) => (
                <FAQItemComponent
                  key={index}
                  item={faq}
                  isOpen={openIndex === index}
                  toggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
            
            {/* Contact CTA */}
            <div className="mt-12 md:mt-24 text-center">
              <h3 className="text-xl md:text-3xl font-black text-black uppercase mb-6 md:mb-8">Still have questions?</h3>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  href="https://wa.me/918745945682" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-black transition-all group"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-3 bg-white border-2 border-black/10 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:border-black transition-all group"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Numbers Grid */}
      <section className="py-12 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Book a Repair", icon: Phone, color: "bg-orange-500" },
              { label: "Partner Support", icon: Phone, color: "bg-accent" },
              { label: "Spare Parts", icon: Phone, color: "bg-black" }
            ].map((box, i) => (
              <div key={i} className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                <div className={`${box.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <box.icon className="w-6 h-6" />
                </div>
                <h4 className="text-black font-bold uppercase tracking-tight text-lg mb-2">{box.label}</h4>
                <p className="text-accent font-black text-xl">+91 87459 45682</p>
                <p className="text-gray-500 text-sm mt-4 uppercase font-bold tracking-widest leading-none">Available 24/7</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
