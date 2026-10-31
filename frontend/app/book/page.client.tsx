"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { NON_ELECTRIC_SERVICES, ELECTRIC_SERVICES, CCRANGES, CCRange } from '@/lib/constants';
import { BIKE_DATA } from '@/lib/bikes';
import { cn } from '@/lib/utils';
import { PackageType } from '@/types';
import { GooglePlayIcon } from '@/components/GooglePlayIcon';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN';

const APP_QUICK_SERVICES = [
  {
    name: 'Battery replacement',
    detail: 'Battery fitting labour and terminal care',
  },
  {
    name: 'Carburetor cleaning',
    detail: 'Jet cleaning and idle tuning',
  },
  {
    name: 'OBD scanner inspection',
    detail: 'ECU fault-code and sensor scan',
  },
  {
    name: 'Brake disc replacement',
    detail: 'Brake pad or rotor fitting labour',
  },
  {
    name: 'Chain & sprocket replacement',
    detail: 'Drive-kit fitting and wheel alignment',
  },
  {
    name: 'Pick & drop service',
    detail: 'Workshop pickup and return transport',
  },
] as const;

type SearchableSelectProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
};

function SearchableSelect({ id, label, placeholder, value, options, disabled = false, onSelect }: SearchableSelectProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listboxId = `${id}-listbox`;
  const normalizedQuery = query === value ? "" : query.trim().toLowerCase();
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(normalizedQuery));

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    setActiveIndex(filteredOptions.length ? 0 : -1);
  }, [query, options.length]);

  const chooseOption = (option: string) => {
    setQuery(option);
    onSelect(option);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) => Math.min(index + 1, filteredOptions.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && isOpen && activeIndex >= 0 && filteredOptions[activeIndex]) {
      event.preventDefault();
      chooseOption(filteredOptions[activeIndex]);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
      setQuery(value);
    }
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-white">
        {label}
      </label>
      <div className={cn(
        "flex min-h-14 items-center rounded-xl border bg-[#181818] transition-colors",
        isOpen ? "border-accent ring-2 ring-accent/20" : "border-white/25 hover:border-white/45",
        disabled && "cursor-not-allowed opacity-45"
      )}>
        <Search className="ml-4 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
        <input
          id={id}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
          autoComplete="off"
          disabled={disabled}
          value={query}
          placeholder={placeholder}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            window.setTimeout(() => {
              setIsOpen(false);
              setQuery(value);
            }, 100);
          }}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          className="min-w-0 flex-1 bg-transparent px-3 py-4 text-base font-semibold text-white outline-none placeholder:text-gray-500"
        />
        <button
          type="button"
          disabled={disabled}
          aria-label={isOpen ? `Close ${label.toLowerCase()} list` : `Open ${label.toLowerCase()} list`}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setIsOpen((open) => !open)}
          className="mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed"
        >
          <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-full z-40 mt-2 overflow-hidden rounded-xl border border-white/15 bg-[#1a1a1a] shadow-[0_18px_44px_rgba(0,0,0,0.45)]"
          >
            <div id={listboxId} role="listbox" aria-label={label} className="max-h-64 overflow-y-auto p-2 custom-scrollbar">
              {filteredOptions.length ? filteredOptions.map((option, index) => (
                <button
                  id={`${id}-option-${index}`}
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={value === option}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => chooseOption(option)}
                  className={cn(
                    "flex min-h-11 w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors",
                    activeIndex === index ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white",
                    value === option && "text-accent"
                  )}
                >
                  <span>{option}</span>
                  {value === option && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              )) : (
                <div className="px-4 py-5 text-sm text-gray-400">
                  No match found. Try a different spelling.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-2 text-xs text-gray-400">
        {disabled ? "Select a brand first to search its models." : "Type to search, or open the list to browse."}
      </p>
    </div>
  );
}

export default function BookClient() {
  const router = useRouter();

  // Selections
  const [fuelType, setFuelType] = useState<'Non-Electric Motorbike' | 'Electric Motorbike'>('Non-Electric Motorbike');
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  
  // Non-Electric specific
  const [ccRange, setCcRange] = useState<CCRange | null>(null);
  
  const catalogBrands = BIKE_DATA[fuelType] || [];
  const currentBrands = brand && !catalogBrands.some((candidate) => candidate.name === brand)
    ? [{ id: brand.toLowerCase().replace(/\s+/g, '-'), name: brand, models: model ? [{ id: model.toLowerCase().replace(/\s+/g, '-'), name: model }] : [] }, ...catalogBrands]
    : catalogBrands;
  const selectedBrandObj = currentBrands.find(b => b.name === brand);
  const catalogModels = selectedBrandObj ? selectedBrandObj.models.map(m => m.name) : [];
  const currentModels = model && !catalogModels.includes(model) ? [model, ...catalogModels] : catalogModels;

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

          <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
            <div className="relative z-20">
              <SearchableSelect
                id="vehicle-brand"
                label="Brand"
                placeholder="Select brand"
                value={brand}
                options={currentBrands.map((candidate) => candidate.name)}
                onSelect={(selectedBrand) => {
                  setBrand(selectedBrand);
                  setModel('');
                }}
              />
            </div>

            <div className="relative z-10">
              <SearchableSelect
                id="vehicle-model"
                label="Model"
                placeholder="Select model"
                value={model}
                options={currentModels}
                disabled={!brand}
                onSelect={setModel}
              />
            </div>
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
                ? ELECTRIC_SERVICES.filter(srv => srv.price >= 399)
                : NON_ELECTRIC_SERVICES.filter(srv => {
                    const price = ccRange ? srv.prices[ccRange] : null;
                    return typeof price === 'number' && price >= 399;
                  })
              ).map((srv) => {
                const price = fuelType === 'Electric Motorbike' ? (srv as any).price : (ccRange ? (srv as any).prices[ccRange] : null);
                let originalPrice: number | null = null;

                if (price !== null) {
                  if (srv.id === 'Engine Half') {
                    originalPrice = price + 1000;
                  } else if (srv.id === 'Engine full') {
                    originalPrice = price + 2000;
                  } else if (price >= 1000) {
                    originalPrice = Math.round(price * 1.15 / 50) * 50;
                  } else {
                    originalPrice = price + 100;
                  }
                }
                
                return (
                  <div key={srv.id} className="bg-white rounded-[2rem] p-6 md:p-8 text-black shadow-2xl relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 mb-8">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-100 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center shadow-inner p-2 text-center">
                         <img src="/logo.png" alt="FixWheel Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain mb-1" />
                         <span className="font-black text-[10px] md:text-[11px] tracking-tighter text-black uppercase leading-tight">
                           <span className="text-accent">Fix</span>Wheel
                         </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">{'displayName' in srv && srv.displayName ? srv.displayName : srv.name}</h2>
                          <div className="flex items-baseline gap-2 md:gap-3 shrink-0">
                            {originalPrice !== null && (
                              <span className="text-sm sm:text-base md:text-lg line-through text-gray-400 font-bold">₹{originalPrice}</span>
                            )}
                            <span className="text-2xl sm:text-3xl font-black text-black">₹{price}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
                          <span>• Available at Doorstep</span>
                          <span>• 15 Days Warranty</span>
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="inline-block bg-gray-100 px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest text-gray-800 border border-gray-200 whitespace-nowrap">
                            ⏱ {srv.estimatedTime}
                          </div>
                          <div className="flex flex-col items-end gap-2 min-w-0">
                            <button
                              onClick={() => {
                                if (!brand || !model || price === null) return;
                                const bikeStr = `${brand} ${model}`.trim();
                                const query = new URLSearchParams({
                                  package: srv.id,
                                  serviceId: srv.pricingId,
                                  bike: bikeStr,
                                  type: fuelType,
                                  price: price.toString()
                                });
                                if (ccRange) query.set('ccRange', ccRange);
                                router.push(`/book/checkout?${query}`);
                              }}
                              disabled={!brand || !model}
                              className="whitespace-nowrap px-4 sm:px-8 md:px-10 py-3 bg-accent hover:bg-accent-hover disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white text-[11px] sm:text-sm rounded-full font-black tracking-wider sm:tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(230,43,43,0.3)] disabled:shadow-none"
                            >
                              BOOK SERVICE
                            </button>
                            {(!brand || !model) && (
                              <p className="max-w-[12rem] text-[10px] sm:text-xs leading-tight text-status-error font-bold uppercase tracking-wider text-right">Select Brand & Model first</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <section
            className="relative left-1/2 mt-10 w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-[#1a1a1a] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            aria-labelledby="more-services-heading"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div>
                  <h2 id="more-services-heading" className="max-w-md text-3xl font-black leading-tight text-white sm:text-4xl">
                    Quick services are available in the FixWheel app
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
                    Book these additional jobs from your phone, choose your vehicle, and confirm the service details before checkout.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-accent px-5 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <GooglePlayIcon className="h-5 w-5 shrink-0" />
                    <span>Get app · 10% off</span>
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-4">
                  <h3 className="text-lg font-black text-white sm:text-xl">More services you can book in the app</h3>
                  <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-accent">6 services</span>
                </div>
                <ul className="grid sm:grid-cols-2" aria-label="Quick services available in the FixWheel app">
                  {APP_QUICK_SERVICES.map((service) => (
                    <li
                      key={service.name}
                      className="border-b border-white/10 py-4 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
                    >
                      <span className="font-bold leading-5 text-white">{service.name}</span>
                      <p className="mt-1 text-xs leading-5 text-gray-400">{service.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-5 text-gray-400">
                  Choose your vehicle in the app to check availability and confirm the service details before booking.
                </p>
              </div>
            </div>
          </section>

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
