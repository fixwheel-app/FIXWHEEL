"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { getPublicStatsForCity, DEFAULT_PUBLIC_STATS, PublicStatRecord } from '@/lib/publicStats';
import { getPageVariables, PageVariables, DEFAULT_PAGE_VARIABLES } from '@/lib/pageVariables';

export default function HeroSection() {
  const [stats, setStats] = useState<PublicStatRecord>(DEFAULT_PUBLIC_STATS.global);
  const [pageVars, setPageVars] = useState<PageVariables>(DEFAULT_PAGE_VARIABLES);

  useEffect(() => {
    getPublicStatsForCity('global').then(setStats);
    getPageVariables('global', 'global').then(setPageVars);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-accent font-medium mb-8"
          >
            <WrenchIcon className="w-4 h-4" />
            <span>Delhi's #1 Doorstep Bike Repair</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-6"
          >
            <span className="text-accent">MECHANIC</span> AT YOUR DOOR <br className="hidden md:block"/> NO GARAGE. NO WAITING.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Expert bike repairs at your doorstep. No hassle, no waiting, no hidden charges.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transform hover:-translate-y-1"
            >
              BOOK NOW
            </Link>
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold text-lg transition-all"
            >
              View Repair Packages
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-text-secondary border-t border-white/5 pt-8"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-status-success" />
              <span>{pageVars.bikesServicedText} Repairs Done</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span>{stats.average_rating} Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>30-Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>100% Transparent Pricing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}
