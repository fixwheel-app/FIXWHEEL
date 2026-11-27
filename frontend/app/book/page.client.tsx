"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { NON_ELECTRIC_SERVICES, ELECTRIC_SERVICES, CCRANGES, CCRange } from '@/lib/constants';
import { BIKE_DATA } from '@/lib/bikes';
import { getRecommendedCcRange } from '@/lib/vehicleCcRanges';
import { cn } from '@/lib/utils';
import { PackageType } from '@/types';
import { GooglePlayIcon } from '@/components/GooglePlayIcon';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN';
const OTHER_MODEL_OPTION = 'Other Model';

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
  const matchingOptions = options.filter((option) => option.toLowerCase().includes(normalizedQuery));
  const fallbackOption = label === 'Brand'
    ? options.find((option) => option.toLowerCase().startsWith('other brand'))
    : options.find((option) => option.toLowerCase() === OTHER_MODEL_OPTION.toLowerCase());
  const isFallbackResult = Boolean(normalizedQuery && matchingOptions.length === 0 && fallbackOption);
  const filteredOptions = isFallbackResult && fallbackOption ? [fallbackOption] : matchingOptions;

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
      <div className="mb-2">
        <label htmlFor={id} className="block text-sm font-bold text-white">
          {label}
        </label>
      </div>
      <div className={cn(
        "group flex min-h-14 items-center overflow-hidden rounded-lg border bg-[#181818] transition-[border-color,box-shadow]",
        isOpen ? "border-accent shadow-[0_0_0_3px_rgba(230,43,43,0.16)]" : "border-white/20 hover:border-white/40",
        disabled && "cursor-not-allowed opacity-45"
      )}>
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
          className="min-w-0 flex-1 bg-transparent px-4 py-4 text-base font-semibold text-white caret-accent outline-none placeholder:font-medium placeholder:text-gray-500"
        />
        <button
          type="button"
          disabled={disabled}
          aria-label={isOpen ? `Close ${label.toLowerCase()} list` : `Open ${label.toLowerCase()} list`}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setIsOpen((open) => !open)}
          className="flex min-h-14 w-14 shrink-0 items-center justify-center border-l border-white/10 text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent disabled:cursor-not-allowed"
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="mt-2 overflow-hidden rounded-lg border border-white/15 bg-[#1a1a1a] shadow-[0_16px_36px_rgba(0,0,0,0.38)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs text-gray-400">
              <span>{isFallbackResult ? "No exact match — try this option" : normalizedQuery ? "Matching options" : `All ${label.toLowerCase()}s`}</span>
              <span className="tabular-nums">{filteredOptions.length}</span>
            </div>
            <div id={listboxId} role="listbox" aria-label={label} className="max-h-60 overflow-y-auto p-1.5 custom-scrollbar">
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
                    "flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold transition-colors",
                    activeIndex === index ? "bg-white/[0.08] text-white" : "text-gray-300 hover:bg-white/[0.06] hover:text-white",
                    value === option && "bg-accent/10 text-accent"
                  )}
                >
                  <span className="min-w-0">
                    <span className="block">{option}</span>
                    {isFallbackResult && option === fallbackOption && (
                      <span className="mt-0.5 block text-xs font-medium text-gray-400">
                        Select this and enter the exact {label.toLowerCase()} at checkout.
                      </span>
                    )}
                  </span>
                  {value === option && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              )) : (
                <div className="px-4 py-5 text-sm text-gray-400">
                  No options are available right now.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-2 text-xs leading-5 text-gray-400">
        {disabled ? "Choose a brand to unlock its models." : "Type a name or use the arrow to browse the full list."}
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
  const [recommendedCcRange, setRecommendedCcRange] = useState<CCRange | null>(null);
  const [ccSelectionSource, setCcSelectionSource] = useState<'automatic' | 'manual' | null>(null);
  
  const catalogBrands = BIKE_DATA[fuelType] || [];
  const currentBrands = brand && !catalogBrands.some((candidate) => candidate.name === brand)
    ? [{ id: brand.toLowerCase().replace(/\s+/g, '-'), name: brand, models: model ? [{ id: model.toLowerCase().replace(/\s+/g, '-'), name: model }] : [] }, ...catalogBrands]
    : catalogBrands;
  const selectedBrandObj = currentBrands.find(b => b.name === brand);
  const catalogModels = selectedBrandObj ? selectedBrandObj.models.map(m => m.name) : [];
  const modelsWithFallback = catalogModels.includes(OTHER_MODEL_OPTION)
    ? catalogModels
    : [...catalogModels, OTHER_MODEL_OPTION];
  const currentModels = model && !modelsWithFallback.includes(model) ? [model, ...modelsWithFallback] : modelsWithFallback;
  const selectedCcLabel = CCRANGES.find((range) => range.value === ccRange)?.label;
  const recommendedCcLabel = CCRANGES.find((range) => range.value === recommendedCcRange)?.label;

  const resetCcSelection = () => {
    setCcRange(null);
    setRecommendedCcRange(null);
    setCcSelectionSource(null);
  };

  const selectModel = (selectedModel: string) => {
    setModel(selectedModel);

    const selectedModelObj = selectedBrandObj?.models.find((candidate) => candidate.name === selectedModel);
    const recommendation = selectedBrandObj && selectedModelObj
      ? getRecommendedCcRange(selectedBrandObj.id, selectedModelObj.id)
      : null;

    setRecommendedCcRange(recommendation);
    setCcRange(recommendation);
    setCcSelectionSource(recommendation ? 'automatic' : null);
  };

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
                resetCcSelection();
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
                resetCcSelection();
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
            <div>
              <SearchableSelect
                id="vehicle-brand"
                label="Brand"
                placeholder="Select brand"
                value={brand}
                options={currentBrands.map((candidate) => candidate.name)}
                onSelect={(selectedBrand) => {
                  setBrand(selectedBrand);
                  setModel('');
                  resetCcSelection();
                }}
              />
            </div>

            <div>
              <SearchableSelect
                id="vehicle-model"
                label="Model"
                placeholder="Select model"
                value={model}
                options={currentModels}
                disabled={!brand}
                onSelect={selectModel}
              />
            </div>
          </div>

          {/* CC Range Selection for Non-Electric */}
          {fuelType === 'Non-Electric Motorbike' && (
            <div className="mt-4" aria-labelledby="engine-cc-range-heading">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <p id="engine-cc-range-heading" className="text-sm font-bold uppercase tracking-widest text-gray-300">
                  Engine CC Range
                </p>
                {ccSelectionSource === 'manual' && (
                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-300">
                    Manually changed
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {CCRANGES.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => {
                      setCcRange(range.value);
                      setCcSelectionSource('manual');
                    }}
                    aria-pressed={ccRange === range.value}
                    className={cn(
                      "relative min-h-16 rounded-xl border px-3 py-3 text-center text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      ccRange === range.value
                        ? "border-accent bg-accent/10 text-white shadow-[0_0_15px_rgba(230,43,43,0.3)]"
                        : "border-white/20 text-gray-400 hover:border-white/40 hover:text-gray-200 bg-transparent"
                    )}
                  >
                    <span className="block">{range.label}</span>
                    {recommendedCcRange === range.value && (
                      <span className={cn(
                        "mt-1 block text-[9px] tracking-[0.16em]",
                        ccRange === range.value ? "text-red-200" : "text-gray-500"
                      )}>
                        Recommended
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 min-h-12 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-gray-300" aria-live="polite">
                {!model && (
                  <p>Select a model and we’ll choose its usual engine range automatically.</p>
                )}
                {model && ccSelectionSource === 'automatic' && selectedCcLabel && (
                  <p>
                    <span className="font-bold text-white">{selectedCcLabel}</span> selected for {model}. If your variant differs, choose another range above.
                  </p>
                )}
                {model && ccSelectionSource === 'manual' && (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p>
                      Using your selected range{selectedCcLabel ? `: ${selectedCcLabel}` : ''}.
                      {recommendedCcLabel ? ` The usual range for ${model} is ${recommendedCcLabel}.` : ''}
                    </p>
                    {recommendedCcRange && ccRange !== recommendedCcRange && (
                      <button
                        type="button"
                        onClick={() => {
                          setCcRange(recommendedCcRange);
                          setCcSelectionSource('automatic');
                        }}
                        className="shrink-0 font-bold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        Use recommended
                      </button>
                    )}
                  </div>
                )}
                {model && !ccRange && (
                  <p>
                    This model’s engine range needs confirmation. Select the correct range above to see accurate services and prices.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Services Selection */}
          {(fuelType === 'Electric Motorbike' || ccRange) && (
            <div className="mt-8 flex flex-col gap-5 pb-8">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center md:text-left">Available Services</p>
              
              {(fuelType === 'Electric Motorbike' 
                ? ELECTRIC_SERVICES.filter(srv => srv.price >= 399)
                : NON_ELECTRIC_SERVICES.filter(srv => {
                    const price = ccRange ? srv.prices[ccRange] : null;
                    return typeof price === 'number' && price >= 399;
                  })
              ).map((srv) => {
                const price = fuelType === 'Electric Motorbike' ? (srv as any).price : (ccRange ? (srv as any).prices[ccRange] : null);
                
                return (
                  <article key={srv.id} className="overflow-hidden rounded-2xl bg-white text-black shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                    <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-[5.5rem_minmax(0,1fr)_12rem] md:items-center md:gap-6 md:p-7">
                      <div className="flex items-start gap-4 md:block">
                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#f5f5f5] p-2 text-center md:h-[5.5rem] md:w-[5.5rem]">
                          <img src="/logo.png" alt="" className="mb-1 h-8 w-8 object-contain md:h-10 md:w-10" />
                          <span className="text-[9px] font-black uppercase leading-none tracking-tight text-black md:text-[10px]">
                            <span className="text-accent">Fix</span>Wheel
                          </span>
                        </div>
                        <div className="min-w-0 md:hidden">
                          <h2 className="text-xl font-black uppercase leading-tight tracking-wide">
                            {'displayName' in srv && srv.displayName ? srv.displayName : srv.name}
                          </h2>
                          <div className="mt-2 flex items-baseline gap-2 tabular-nums">
                            <span className="text-2xl font-black text-black">₹{price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h2 className="hidden text-2xl font-black uppercase leading-tight tracking-wide md:block">
                          {'displayName' in srv && srv.displayName ? srv.displayName : srv.name}
                        </h2>
                        {'cardQuestion' in srv && srv.cardQuestion && (
                          <p className="mt-3 text-sm font-black uppercase tracking-wide text-gray-900">
                            {srv.cardQuestion}
                          </p>
                        )}
                        {'cardDescription' in srv && srv.cardDescription && (
                          <p className="mt-1 max-w-2xl text-sm font-semibold leading-6 text-gray-600">
                            {srv.cardDescription}
                          </p>
                        )}
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wide text-gray-700">
                          <span className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-gray-100 px-3">
                            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                            {srv.estimatedTime}
                          </span>
                          <span className="inline-flex min-h-9 items-center rounded-lg bg-gray-100 px-3">
                            Doorstep service
                          </span>
                          {srv.id !== 'Diagnosis' && (
                            <span className="inline-flex min-h-9 items-center rounded-lg bg-gray-100 px-3">
                              15 days warranty
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                        <div className="hidden items-baseline justify-end gap-2 tabular-nums md:flex">
                          <span className="text-3xl font-black text-black">₹{price}</span>
                        </div>
                        <p className="mb-3 hidden text-right text-[10px] font-bold uppercase tracking-widest text-gray-500 md:block">
                          Service price
                        </p>
                        <div className="flex flex-col gap-2">
                          <button
                              onClick={() => {
                                if (!brand || !model || price === null) return;
                                const bikeStr = `${brand} ${model}`.trim();
                                const query = new URLSearchParams({
                                  package: srv.id,
                                  serviceId: srv.pricingId,
                                  bike: bikeStr,
                                  brand,
                                  model,
                                  type: fuelType,
                                  price: price.toString()
                                });
                                if (ccRange) query.set('ccRange', ccRange);
                                router.push(`/book/checkout?${query}`);
                              }}
                              disabled={!brand || !model}
                              className="min-h-12 w-full rounded-xl bg-accent px-5 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[0_8px_22px_rgba(230,43,43,0.25)] transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
                            >
                              BOOK SERVICE
                            </button>
                            {(!brand || !model) && (
                              <p className="text-center text-[10px] font-bold uppercase leading-tight tracking-wider text-status-error">Select Brand & Model first</p>
                            )}
                        </div>
                      </div>
                    </div>
                  </article>
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
