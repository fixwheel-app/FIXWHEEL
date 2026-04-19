"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowLeft, Zap, Wrench } from 'lucide-react';
import { BIKE_DATA, BikeBrand, BikeModel } from '@/lib/bikes';
import { REPAIR_PACKAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<BikeModel | null>(null);

  const resetFromStep = (newStep: 1 | 2 | 3 | 4) => {
    setStep(newStep);
    if (newStep <= 1) setSelectedType('');
    if (newStep <= 2) setSelectedBrand('');
    if (newStep <= 3) setSelectedModel(null);
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setStep(2);
  };

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    setStep(3);
  };

  const handleModelSelect = (model: BikeModel) => {
    setSelectedModel(model);
    setStep(4);
  };

  // Get current brands based on type
  const availableBrands = selectedType ? BIKE_DATA[selectedType as keyof typeof BIKE_DATA] : [];
  
  // Get current models based on brand
  const currentBrandObj = availableBrands?.find((b: BikeBrand) => b.name === selectedBrand);
  const availableModels = currentBrandObj ? currentBrandObj.models : [];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-8 md:pb-16 text-black font-sans overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1800px]">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">Service Selection</h2>
          <h1 className="text-2xl md:text-5xl font-black uppercase mb-3 md:mb-4">
            Find The <span className="text-accent">Right Package</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg pt-1 md:pt-2">
            Tell us what you ride, and we'll show you exactly how we can keep it running like new.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-10 md:mb-20 max-w-3xl mx-auto relative px-2 md:px-4">
          {/* Background track */}
          <div className="absolute left-4 right-4 top-5 h-1 bg-gray-200 -z-10"></div>
          {/* Active fill */}
          <div 
            className="absolute left-4 top-5 h-1 bg-accent -z-10 transition-all duration-500"
            style={{ width: `calc(${((step - 1) / 3) * 100}%)` }}
          ></div>
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 bg-white",
                step >= i ? "border-accent text-accent shadow-[0_0_15px_rgba(230,43,43,0.4)]" : "border-gray-300 text-gray-400",
                step > i && "bg-accent text-white"
              )}>
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
              <span className={cn(
                "text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center w-14 sm:w-20 leading-tight",
                step >= i ? "text-black" : "text-gray-400"
              )}>
                {i === 1 ? 'Type' : i === 2 ? 'Brand' : i === 3 ? 'Model' : 'Package'}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className={cn(
          "bg-gray-50 border border-black/5 rounded-3xl min-h-[400px] relative backdrop-blur-sm transition-all overflow-hidden",
          step === 4 ? "p-0 md:p-8 border-none bg-transparent md:bg-gray-50 md:border-black/5" : "p-8"
        )}>
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Bike Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8"
              >
                <button
                  onClick={() => handleTypeSelect('Electric Motorbike')}
                  className="bg-white border-2 border-black/5 hover:border-accent p-6 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-6 group transition-all duration-300 shadow-md hover:shadow-xl rounded-2xl"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Zap className="w-7 h-7 md:w-10 md:h-10 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black uppercase text-center tracking-wide">Electric Motorbike</h3>
                </button>

                <button
                  onClick={() => handleTypeSelect('Non-Electric Motorbike')}
                  className="bg-white border-2 border-black/5 hover:border-accent p-6 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-6 group transition-all duration-300 shadow-md hover:shadow-xl rounded-2xl"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Wrench className="w-7 h-7 md:w-10 md:h-10 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black uppercase text-center tracking-wide">Petrol / Combust Motorbike</h3>
                </button>
              </motion.div>
            )}

            {/* STEP 2: Brand Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={() => resetFromStep(1)} className="text-gray-500 hover:text-black flex items-center gap-1 font-bold text-sm tracking-wider uppercase">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h3 className="text-xl font-bold uppercase">Select Brand</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {availableBrands?.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand.name)}
                      className="bg-white border border-black/5 hover:border-accent rounded-xl p-4 md:p-6 text-center font-bold uppercase tracking-wider text-sm transition-colors shadow-sm cursor-pointer"
                     >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Model Selection */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={() => resetFromStep(2)} className="text-gray-500 hover:text-black flex items-center gap-1 font-bold text-sm tracking-wider uppercase">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h3 className="text-xl font-bold uppercase">{selectedBrand} <span className="text-gray-400">/ Select Model</span></h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {availableModels?.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => handleModelSelect(model)}
                      className="flex items-center justify-between rounded-xl bg-white border-l-4 border-transparent hover:border-accent border-y border-r border-black/5 p-4 md:p-6 text-left font-bold uppercase tracking-wider text-sm transition-all group shadow-sm cursor-pointer"
                    >
                      {model.name}
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Repair Packages */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
                  <div className="flex items-center gap-4">
                    <button onClick={() => resetFromStep(3)} className="text-gray-500 hover:text-black flex items-center gap-1 font-bold text-sm tracking-wider uppercase bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <div>
                      <h3 className="text-xl font-bold uppercase">Select Package</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm w-full md:w-auto">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      {selectedType === 'Electric Motorbike' ? <Zap className="w-4 h-4 text-accent" /> : <Wrench className="w-4 h-4 text-accent" />}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Your Bike</p>
                      <p className="font-bold text-black text-sm">{selectedBrand} {selectedModel?.name}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 w-full pb-4">
                  {REPAIR_PACKAGES.map((pkg) => (
                    <div key={pkg.id} className="flex">
                      <ServiceCard 
                        packageData={pkg} 
                        bikeType={selectedType}
                        bikeBrand={selectedBrand}
                        bikeModel={selectedModel?.name}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
