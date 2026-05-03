"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const brandsRow1 = [
  { id: 'royal-enfield', name: 'Royal Enfield', logo: 'https://logo.clearbit.com/royalenfield.com', price: '₹999', color: 'group-hover:text-[#D92B27]', border: 'group-hover:border-[#D92B27]' },
  { id: 'honda', name: 'Honda', logo: 'https://logo.clearbit.com/honda.com', price: '₹699', color: 'group-hover:text-[#E40521]', border: 'group-hover:border-[#E40521]' },
  { id: 'yamaha', name: 'Yamaha', logo: 'https://logo.clearbit.com/yamaha-motor.com', price: '₹799', color: 'group-hover:text-[#003399]', border: 'group-hover:border-[#003399]' },
  { id: 'suzuki', name: 'Suzuki', logo: 'https://logo.clearbit.com/suzuki.com', price: '₹699', color: 'group-hover:text-[#002C6A]', border: 'group-hover:border-[#002C6A]' },
  { id: 'ktm', name: 'KTM', logo: 'https://logo.clearbit.com/ktm.com', price: '₹1299', color: 'group-hover:text-[#FF6600]', border: 'group-hover:border-[#FF6600]' },
  { id: 'bajaj', name: 'Bajaj', logo: 'https://logo.clearbit.com/bajajauto.com', price: '₹599', color: 'group-hover:text-[#0055A5]', border: 'group-hover:border-[#0055A5]' },
];

const brandsRow2 = [
  { id: 'tvs', name: 'TVS', logo: 'https://logo.clearbit.com/tvsmotor.com', price: '₹599', color: 'group-hover:text-[#ED1C24]', border: 'group-hover:border-[#ED1C24]' },
  { id: 'hero', name: 'Hero', logo: 'https://logo.clearbit.com/heromotocorp.com', price: '₹499', color: 'group-hover:text-[#ED1C24]', border: 'group-hover:border-[#ED1C24]' },
  { id: 'vespa', name: 'Vespa', logo: 'https://logo.clearbit.com/vespa.com', price: '₹1499', color: 'group-hover:text-[#008A5E]', border: 'group-hover:border-[#008A5E]' },
  { id: 'aprilia', name: 'Aprilia', logo: 'https://logo.clearbit.com/aprilia.com', price: '₹1499', color: 'group-hover:text-[#E31837]', border: 'group-hover:border-[#E31837]' },
  { id: 'bmw', name: 'BMW Motorrad', logo: 'https://logo.clearbit.com/bmw-motorrad.com', price: '₹2499', color: 'group-hover:text-[#0066B1]', border: 'group-hover:border-[#0066B1]' },
  { id: 'ducati', name: 'Ducati', logo: 'https://logo.clearbit.com/ducati.com', price: '₹2999', color: 'group-hover:text-[#CC0000]', border: 'group-hover:border-[#CC0000]' },
];

export default function BrandsMarquee() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandClick = (id: string) => {
    setSelectedBrand(prev => prev === id ? null : id);
  };

  const activeBrandData = [...brandsRow1, ...brandsRow2].find(b => b.id === selectedBrand);

  const BrandCard = ({ brand }: { brand: any }) => {
    const isSelected = selectedBrand === brand.id;
    return (
      <button
        onClick={() => handleBrandClick(brand.id)}
        className={cn(
          "relative flex-shrink-0 w-48 md:w-64 h-24 md:h-28 rounded-xl flex items-center justify-center gap-3 md:gap-4 border-2 bg-white transition-all duration-300 group cursor-pointer overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 px-4",
          isSelected 
            ? "border-accent text-accent shadow-md scale-[1.02]" 
            : `border-gray-100 text-gray-400 grayscale hover:grayscale-0 ${brand.border} ${brand.color}`
        )}
      >
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 shrink-0"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <span className="font-black uppercase tracking-wider text-sm md:text-lg transition-all duration-300 text-left leading-tight">
          {brand.name}
        </span>
      </button>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-4">
          Expert Care for <span className="text-accent">Every Major Make</span>
        </h2>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
          Whether you ride a daily commuter or a premium superbike, our certified technicians bring the exact tools, genuine parts, and expertise required for your specific manufacturer.
        </p>
      </div>

      <div className="relative group/marquee">
        {/* Row 1 - Left to Right */}
        <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-6 w-[300%] md:w-[150%] animate-marquee-left group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
          {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, idx) => (
            <BrandCard key={`${brand.id}-${idx}`} brand={brand} />
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex space-x-4 md:space-x-6 w-[300%] md:w-[150%] -translate-x-[20%] animate-marquee-right group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
          {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, idx) => (
            <BrandCard key={`${brand.id}-${idx}`} brand={brand} />
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Dynamic Drawer */}
      <AnimatePresence>
        {selectedBrand && activeBrandData && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-4xl mx-auto mt-8 px-4"
          >
            <div className="bg-[#0d1117] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-accent shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-6 z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mb-1">
                    {activeBrandData.name} Service
                  </h3>
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-gray-400 text-xs md:text-sm font-medium">Starting from</span>
                    <span className="text-accent font-black text-lg md:text-xl">{activeBrandData.price}</span>
                  </div>
                </div>
              </div>

              <div className="z-10 w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider text-center md:text-right hidden sm:block">
                  🔥 420+ Serviced
                </p>
                <Link
                  href={`/booking`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(230,43,43,0.3)] hover:shadow-[0_0_30px_rgba(230,43,43,0.5)]"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
