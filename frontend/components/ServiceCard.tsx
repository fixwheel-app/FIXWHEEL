"use client";

import { useState } from 'react';
import { CheckCircle2, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { RepairPackage } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  packageData: RepairPackage;
  bikeType?: string;
  bikeBrand?: string;
  bikeModel?: string;
}

export default function ServiceCard({ packageData, bikeType, bikeBrand, bikeModel }: ServiceCardProps) {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Parse fields
  const { name, tagline, ccRange, accentColor, isPopular, includes, additionalCost } = packageData;

  const handleBookNow = () => {
    localStorage.setItem("selectedPackage", JSON.stringify({
      packageName: name,
      id: packageData.id,
      ccRange: ccRange,
      accentColor: accentColor,
      bikeType: bikeType,
      bikeModel: bikeModel ? `${bikeBrand} ${bikeModel}` : undefined
    }));
    router.push('/services');
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-3xl border flex flex-col h-full relative overflow-hidden transition-all duration-300 w-full flex-1 max-w-sm mx-auto",
        isPopular ? "border-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : "border-gray-200 shadow-sm hover:shadow-md"
      )}
      style={{ borderColor: isPopular ? accentColor : undefined }}
    >
      {/* Top Accent Bar */}
      <div className="h-2 w-full shrink-0" style={{ backgroundColor: accentColor }}></div>
      
      {isPopular && (
        <div 
          className="absolute top-4 right-4 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-10"
          style={{ backgroundColor: accentColor }}
        >
          Most Popular
        </div>
      )}

      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="mb-6 shrink-0">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg mb-4">
            {ccRange}
          </span>
          <h3 className="text-2xl font-bold text-black leading-tight mb-2 pr-12 md:pr-0">{name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{tagline}</p>
        </div>

        {/* Services List - Desktop shows all, Mobile collapsible */}
        <div className="flex-grow flex flex-col">
          <div 
            className={cn(
              "overflow-hidden flex-grow",
              !isExpanded ? "max-h-[160px] md:max-h-[2000px] relative" : "max-h-[2000px] mb-6 md:mb-0"
            )}
            style={{ transition: 'max-height 0.2s ease' }}
          >
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden pointer-events-none" />
            )}
            
            {additionalCost && additionalCost.length > 0 && (
              <div className="pt-6 mt-6 border-t border-dashed border-gray-300">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">At Additional Cost</p>
                <ul className="space-y-3">
                  {additionalCost.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                      <Plus className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button 
            disabled={isAnimating}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setIsExpanded(!isExpanded);
              setTimeout(() => setIsAnimating(false), 200);
            }}
            className="md:hidden shrink-0 w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExpanded ? (
              <>See Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>See More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 shrink-0">
          <button 
            onClick={handleBookNow}
            className="w-full py-4 rounded-xl text-white font-bold tracking-wide transition-all hover:opacity-90 active:scale-95 shadow-sm"
            style={{ backgroundColor: accentColor }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
