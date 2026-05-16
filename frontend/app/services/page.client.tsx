"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Wrench } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { NON_ELECTRIC_SERVICES, ELECTRIC_SERVICES, CCRANGES, CCRange } from '@/lib/constants';
import { BIKE_DATA } from '@/lib/bikes';
import { cn } from '@/lib/utils';
import { PackageType } from '@/types';

export default function ServicesWizard() {
  const router = useRouter();

  // Selections
  const [fuelType, setFuelType] = useState<'Non-Electric Motorbike' | 'Electric Motorbike'>('Non-Electric Motorbike');
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  
  // Non-Electric specific
  const [ccRange, setCcRange] = useState<CCRange | null>(null);
  
  // UI States
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  const currentBrands = BIKE_DATA[fuelType] || [];
  const selectedBrandObj = currentBrands.find(b => b.name === brand);
  const currentModels = selectedBrandObj ? selectedBrandObj.models.map(m => m.name) : [];

  return (
    <div className="min-h-screen bg-[#111111] pt-24 pb-16 text-white font-sans">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Choose Your Vehicle
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 w-full">
          
          {/* Fuel Type */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                setFuelType('Non-Electric Motorbike');
                setBrand('');
                setModel('');
              }}
              className={cn(
                "flex-1 py-3 px-6 rounded-full font-bold tracking-widest uppercase transition-all",
                fuelType === 'Non-Electric Motorbike'
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(230,43,43,0.4)]"
                  : "border border-white/20 text-white opacity-60 hover:bg-white/5"
              )}
            >
              NON-ELECTRIC
            </button>
            <button
              onClick={() => {
                setFuelType('Electric Motorbike');
                setBrand('');
                setModel('');
                setCcRange(null);
              }}
              className={cn(
                "flex-1 py-3 px-6 rounded-full font-bold tracking-widest uppercase transition-all",
                fuelType === 'Electric Motorbike'
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(230,43,43,0.4)]"
                  : "border border-white/20 text-white opacity-60 hover:bg-white/5"
              )}
            >
              ELECTRIC
            </button>
          </div>

          {/* Brand Dropdown */}
          <div className="relative z-30">
            <button
              onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
              className="w-full bg-transparent border border-white/30 hover:border-white/60 text-white px-6 py-4 rounded-full flex items-center justify-between font-bold tracking-widest uppercase transition-colors"
            >
              <span className={brand ? "text-white" : "text-gray-400"}>
                {brand || "BRAND"}
              </span>
              <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", isBrandDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isBrandDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto custom-scrollbar"
                >
                  {currentBrands.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setBrand(b.name);
                        setModel('');
                        setIsBrandDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-6 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 uppercase tracking-wider font-bold text-sm",
                        brand === b.name ? "text-accent" : "text-gray-300"
                      )}
                    >
                      {b.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Model Dropdown */}
          <div className="relative z-20">
            <button
              onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              disabled={!brand}
              className="w-full bg-transparent border border-white/30 hover:border-white/60 disabled:opacity-50 disabled:hover:border-white/30 text-white px-6 py-4 rounded-full flex items-center justify-between font-bold tracking-widest uppercase transition-colors"
            >
              <span className={model ? "text-white" : "text-gray-400"}>
                {model || "MODEL"}
              </span>
              <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", isModelDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isModelDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto custom-scrollbar"
                >
                  {currentModels.map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setModel(m);
                        setIsModelDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-6 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 uppercase tracking-wider font-bold text-sm",
                        model === m ? "text-accent" : "text-gray-300"
                      )}
                    >
                      {m}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CC Range Selection for Non-Electric */}
          {fuelType === 'Non-Electric Motorbike' && (
            <div className="mt-4">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4 text-center md:text-left">Select CC Range</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {CCRANGES.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => {
                      setCcRange(range.value);
                    }}
                    className={cn(
                      "py-4 px-2 rounded-full border text-center font-bold tracking-widest uppercase transition-all text-xs",
                      ccRange === range.value
                        ? "bg-accent/10 border-accent text-white shadow-[0_0_15px_rgba(230,43,43,0.3)]"
                        : "border-white/20 text-gray-400 hover:border-white/40 hover:text-gray-200 bg-transparent"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Selection */}
          {(fuelType === 'Electric Motorbike' || ccRange) && (
            <div className="mt-8 flex flex-col gap-8 pb-8">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center md:text-left">Available Services</p>
              
              {(fuelType === 'Electric Motorbike' 
                ? ELECTRIC_SERVICES 
                : NON_ELECTRIC_SERVICES.filter(srv => ccRange && srv.prices[ccRange] !== null)
              ).map((srv) => {
                const price = fuelType === 'Electric Motorbike' ? (srv as any).price : (ccRange ? (srv as any).prices[ccRange] : null);
                const includesList = srv.includes || ["Doorstep assistance", "Transparent Pricing"];
                
                return (
                  <div key={srv.id} className="bg-white rounded-[2rem] p-6 md:p-8 text-black shadow-2xl relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 mb-8">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-100 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center shadow-inner p-2 text-center">
                         <img src="/logo.png" alt="FixWheel Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain mb-1 transform -rotate-12" />
                         <span className="font-black text-[10px] md:text-[11px] tracking-tighter text-black uppercase leading-tight">
                           <span className="text-accent">Fix</span>Wheel
                         </span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-3">{srv.name}</h2>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
                          <span>• Available at Doorstep</span>
                          <span>• 15 Days Warranty</span>
                        </div>
                        <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-gray-800 border border-gray-200">
                          ⏱ 24 HOURS
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                      {includesList.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-6 gap-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl md:text-4xl font-black text-black">₹{price}</span>
                      </div>
                      <div className="w-full md:w-auto flex flex-col items-end gap-2">
                        <button
                          onClick={() => {
                            if (!brand || !model || price === null) return;
                            const bikeStr = `${brand} ${model}`.trim();
                            const query = new URLSearchParams({
                              package: srv.id,
                              bike: bikeStr,
                              type: fuelType,
                              price: price.toString()
                            }).toString();
                            router.push(`/booking?${query}`);
                          }}
                          disabled={!brand || !model}
                          className="w-full md:w-auto px-12 py-4 bg-accent hover:bg-accent-hover disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white rounded-full font-black tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(230,43,43,0.3)] disabled:shadow-none"
                        >
                          CHECKOUT
                        </button>
                        {(!brand || !model) && (
                          <p className="text-xs text-status-error font-bold uppercase tracking-wider text-center md:text-right w-full">Select Brand & Model first</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
