"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, User, Phone, MapPin, Car, Wrench, Camera, CreditCard,
  CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Upload, X, ChevronDown, Star
} from 'lucide-react';
import { submitPartner } from '@/lib/api';
import { supabase } from '@/lib/supabase';

// ----- Types -----
type VehicleType = 'Bike' | 'Car';

interface PartnerFormData {
  garageName: string;
  ownerName: string;
  mobileNumber: string;
  city: string;
  address: string;
  vehicleType: VehicleType | '';
  servicesOffered: string[];
  garagePhotos: File[];
  licensePhoto: File | null;
}

// ----- Constants -----
const BIKE_SERVICES = [
  'General Service',
  'Engine Work',
  'Wiring',
  'Punchure',
  'Sport Bike',
  'EV Specialist'
];

const CAR_SERVICES = [
  'Car Services',
  'Denting & painting',
  'AC repair',
  'Batteries',
  'Tyres & Wheel Care',
  'Windshield & lights'
];

const STEPS = [
  { id: 1, title: 'Garage Info', icon: Building2 },
  { id: 2, title: 'Services', icon: Wrench },
  { id: 3, title: 'Documents', icon: Camera },
];

// ----- Helpers -----
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

function FileUploadZone({
  label,
  accept,
  multiple,
  files,
  onFilesChange,
  maxFiles,
  icon: Icon,
  hint,
}: {
  label: string;
  accept: string;
  multiple?: boolean;
  files: File[];
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  icon: React.ElementType;
  hint?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const arr = Array.from(incoming);
    const merged = [...files, ...arr].slice(0, maxFiles ?? 99);
    onFilesChange(merged);
  };

  const removeFile = (idx: number) => {
    onFilesChange(files.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 group",
          isDragging
            ? "border-accent bg-accent/10 scale-[1.01]"
            : "border-gray-200 bg-gray-50 hover:border-accent/60 hover:bg-red-50"
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="flex flex-col items-center gap-3 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-gray-700 font-medium text-sm">Drop files here or <span className="text-accent underline underline-offset-2">browse</span></p>
            {hint && <p className="text-gray-500 text-xs mt-1">{hint}</p>}
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {files.map((file, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                <p className="text-xs text-white truncate">{file.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InputField({
  label,
  icon: Icon,
  error,
  required,
  children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
        <Icon className="w-4 h-4 text-accent" />
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

// ----- Main Page -----
export default function PartnerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({});

  const [formData, setFormData] = useState<PartnerFormData>({
    garageName: '',
    ownerName: '',
    mobileNumber: '',
    city: '',
    address: '',
    vehicleType: '',
    servicesOffered: [],
    garagePhotos: [],
    licensePhoto: null,
  });

  const set = <K extends keyof PartnerFormData>(key: K, value: PartnerFormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  const toggleService = (svc: string) => {
    const current = formData.servicesOffered;
    if (current.includes(svc)) {
      set('servicesOffered', current.filter(s => s !== svc));
    } else {
      set('servicesOffered', [...current, svc]);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: typeof errors = {};
    if (step === 1) {
      if (!formData.garageName.trim()) newErrors.garageName = 'Garage name is required';
      if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required';
      if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      else if (formData.address.trim().length < 10) newErrors.address = 'Address must be at least 10 characters long';
      if (!formData.vehicleType) newErrors.vehicleType = 'Please select a vehicle type';
    }
    if (step === 2) {
      if (formData.servicesOffered.length === 0) newErrors.servicesOffered = 'Select at least one service';
    }
    if (step === 3) {
      if (formData.garagePhotos.length < 2) newErrors.garagePhotos = 'Upload at least 2 garage photos';
      if (!formData.licensePhoto) newErrors.licensePhoto = 'Driving license photo is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(s => Math.min(s + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(s => Math.max(s - 1, 1));
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // 1. Upload Garage Photos
      const garagePhotoUrls: string[] = [];
      for (const file of formData.garagePhotos) {
        const fileName = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
          .from('partner-uploads')
          .upload(`garages/${fileName}`, file);
        
        if (error) throw new Error(`Garage photo upload failed: ${error.message}`);
        
        const { data: { publicUrl } } = supabase.storage
          .from('partner-uploads')
          .getPublicUrl(`garages/${fileName}`);
        
        garagePhotoUrls.push(publicUrl);
      }

      // 2. Upload License Photo
      let licensePhotoUrl = '';
      if (formData.licensePhoto) {
        const fileName = `${Date.now()}-${formData.licensePhoto.name}`;
        const { data, error } = await supabase.storage
          .from('partner-uploads')
          .upload(`licenses/${fileName}`, formData.licensePhoto);
        
        if (error) throw new Error(`License photo upload failed: ${error.message}`);
        
        const { data: { publicUrl } } = supabase.storage
          .from('partner-uploads')
          .getPublicUrl(`licenses/${fileName}`);
        
        licensePhotoUrl = publicUrl;
      }

      // 3. Submit Data to Backend
      const response = await submitPartner({
        garageName: formData.garageName,
        ownerName: formData.ownerName,
        phone: formData.mobileNumber,
        city: formData.city,
        address: formData.address,
        vehicleType: formData.vehicleType as any,
        servicesOffered: formData.servicesOffered,
        garagePhotos: garagePhotoUrls,
        licensePhoto: licensePhotoUrl,
      });

      if (response.success) {
        setSubmitted(true);
      } else {
        setSubmitError(response.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err instanceof Error ? err.message : 'Unable to reach the server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="text-center max-w-lg text-black"
        >
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 ring-4 ring-accent/30">
            <CheckCircle2 className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-4xl font-black text-black uppercase mb-4">You're In!</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Welcome to the <span className="text-accent font-bold">FixWheel</span> partner network, <span className="text-black font-semibold">{formData.ownerName}</span>!
            Our team will review your application for <span className="text-black font-semibold">{formData.garageName}</span> and get back to you within <span className="text-accent font-bold">24–48 hours</span> on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[`${formData.garagePhotos.length} Photos Uploaded`, `${formData.servicesOffered.length} Services`, formData.vehicleType + ' Specialist'].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-black text-sm rounded-full font-medium border border-gray-200">
                ✓ {tag}
              </span>
            ))}
          </div>
          <a href="/" className="inline-block mt-10 bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors">
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-white pt-8 pb-16 border-b border-black/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-5 py-2 rounded-full text-accent font-bold text-sm uppercase tracking-widest mb-6"
          >
            <Star className="w-4 h-4" />
            Partner With Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-6xl font-black text-black uppercase leading-tight mb-4 tracking-tighter"
          >
            Grow Your Garage with <span className="text-accent">FixWheel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
          >
            Join our trusted network of garages. Get more customers, manage bookings effortlessly, and grow your business with zero upfront cost.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            {['Free to Join', 'More Customers', 'Instant Payouts', '24/7 Support'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Area */}
      <section className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">

        {/* Step Indicators */}
        <div className="flex items-center justify-center mb-8 md:mb-12 gap-0">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isDone = currentStep > step.id;
            return (
              <div key={step.id} className="flex items-center">
                <div className={cn(
                  "flex flex-col items-center gap-2 transition-all duration-300 cursor-default",
                  isActive || isDone ? "opacity-100" : "opacity-40"
                )}>
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isDone
                      ? "bg-accent border-accent"
                      : isActive
                        ? "bg-accent/20 border-accent"
                        : "bg-gray-100 border-gray-300"
                  )}>
                    {isDone
                      ? <CheckCircle2 className="w-6 h-6 text-white" />
                      : <Icon className={cn("w-5 h-5", isActive ? "text-accent" : "text-gray-400")} />
                    }
                  </div>
                  <p className={cn("text-xs font-bold uppercase tracking-wider", isActive ? "text-accent" : isDone ? "text-black" : "text-gray-400")}>
                    {step.title}
                  </p>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={cn("w-12 sm:w-20 md:w-28 h-0.5 mx-1 md:mx-2 mb-6 transition-colors", currentStep > step.id ? "bg-accent" : "bg-gray-200")} />
                )}
              </div>
            );
          })}
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-gray-50 border border-black/5 rounded-2xl p-4 md:p-10 shadow-xl"
        >

          {/* ---- STEP 1: Garage Info ---- */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="mb-2">
                <h2 className="text-2xl font-black text-black uppercase">Garage Information</h2>
                <p className="text-gray-500 text-sm mt-1">Tell us about your workshop</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField label="Garage Name" icon={Building2} error={errors.garageName} required>
                  <input
                    id="garage-name"
                    value={formData.garageName}
                    onChange={e => set('garageName', e.target.value)}
                    placeholder="e.g. Kumar Auto Works"
                    className={cn(
                      "w-full bg-white border text-black rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm",
                      errors.garageName ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent focus:ring-accent/20"
                    )}
                  />
                </InputField>

                <InputField label="Owner Name" icon={User} error={errors.ownerName} required>
                  <input
                    id="owner-name"
                    value={formData.ownerName}
                    onChange={e => set('ownerName', e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className={cn(
                      "w-full bg-white border text-black rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm",
                      errors.ownerName ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent focus:ring-accent/20"
                    )}
                  />
                </InputField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField label="City" icon={MapPin} error={errors.city} required>
                  <input
                    id="city"
                    value={formData.city}
                    onChange={e => set('city', e.target.value)}
                    placeholder="e.g. New Delhi"
                    className={cn(
                      "w-full bg-white border text-black rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm",
                      errors.city ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent focus:ring-accent/20"
                    )}
                  />
                </InputField>

                <InputField label="Mobile Number" icon={Phone} error={errors.mobileNumber} required>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-600 text-sm font-semibold">
                      +91
                    </span>
                    <input
                      id="mobile-number"
                      value={formData.mobileNumber}
                      onChange={e => set('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="9876543210"
                      className={cn(
                        "w-full bg-white border rounded-r-xl px-4 py-3.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm",
                        errors.mobileNumber ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent focus:ring-accent/20"
                      )}
                    />
                  </div>
                </InputField>
              </div>

              <InputField label="Garage Address" icon={MapPin} error={errors.address} required>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={e => set('address', e.target.value)}
                  placeholder="Enter your complete garage address (e.g. Shop 12, Main Market, Sector 15)"
                  rows={2}
                  className={cn(
                    "w-full bg-white border text-black rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm resize-none",
                    errors.address ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent focus:ring-accent/20"
                  )}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Provide a complete, accurate address for customers to locate your garage easily.
                </p>
              </InputField>

              <InputField label="Vehicles You Service" icon={Car} error={errors.vehicleType} required>
                <div className="grid grid-cols-2 gap-3">
                  {(['Bike', 'Car'] as VehicleType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      id={`vehicle-type-${type.toLowerCase()}`}
                      onClick={() => {
                        if (formData.vehicleType !== type) {
                          setFormData(prev => ({ ...prev, vehicleType: type, servicesOffered: [] }));
                          setErrors(prev => ({ ...prev, vehicleType: undefined }));
                        }
                      }}
                      className={cn(
                        "py-3.5 px-4 rounded-xl border-2 font-bold text-sm uppercase tracking-wider transition-all duration-200",
                        formData.vehicleType === type
                          ? "bg-accent border-accent text-white shadow-[0_0_20px_rgba(230,43,43,0.25)]"
                          : "bg-white border-gray-200 text-gray-600 hover:border-accent/50 hover:text-accent"
                      )}
                    >
                      {type === 'Bike' ? '🏍' : type === 'Car' ? '🚗' : '⚙️'} {type}
                    </button>
                  ))}
                </div>
              </InputField>
            </div>
          )}

          {/* ---- STEP 2: Services ---- */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="mb-2">
                <h2 className="text-2xl font-black text-black uppercase">Services Offered</h2>
                <p className="text-gray-500 text-sm mt-1">Select all services your garage provides</p>
              </div>

              {errors.servicesOffered && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errors.servicesOffered}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(formData.vehicleType === 'Car' ? CAR_SERVICES : BIKE_SERVICES).map((svc) => {
                  const isSelected = formData.servicesOffered.includes(svc);
                  return (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => toggleService(svc)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-200 group",
                        isSelected
                          ? "bg-accent/10 border-accent/60 text-black"
                          : "bg-white border-gray-200 text-gray-600 hover:border-accent/40 hover:text-black"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-all",
                        isSelected ? "bg-accent border-accent" : "border-gray-300 group-hover:border-accent/50"
                      )}>
                        {isSelected && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm font-medium">{svc}</span>
                    </button>
                  );
                })}
              </div>

              {formData.servicesOffered.length > 0 && (
                <div className="bg-accent/10 border border-accent/25 rounded-xl p-4">
                  <p className="text-accent font-bold text-sm mb-2">{formData.servicesOffered.length} service{formData.servicesOffered.length > 1 ? 's' : ''} selected</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.servicesOffered.map(svc => (
                      <span key={svc} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium border border-accent/30">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---- STEP 3: Documents ---- */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="mb-2">
                <h2 className="text-2xl font-black text-black uppercase">Documents &amp; Photos</h2>
                <p className="text-gray-500 text-sm mt-1">Upload clear photos so customers can trust your garage</p>
              </div>

              <FileUploadZone
                label="Garage Photos (min. 2, max. 5)"
                accept="image/*"
                multiple
                files={formData.garagePhotos}
                onFilesChange={files => set('garagePhotos', files.slice(0, 5))}
                maxFiles={5}
                icon={Camera}
                hint="JPG, PNG or WEBP · Up to 5MB each · Min. 2 required"
              />
              {errors.garagePhotos && (
                <p className="flex items-center gap-1 text-xs text-red-400 -mt-4">
                  <AlertCircle className="w-3 h-3" /> {errors.garagePhotos}
                </p>
              )}

              <div className="border-t border-black/10" />

              <FileUploadZone
                label="Driving License Photo"
                accept="image/*"
                multiple={false}
                files={formData.licensePhoto ? [formData.licensePhoto] : []}
                onFilesChange={files => set('licensePhoto', files[0] ?? null)}
                maxFiles={1}
                icon={CreditCard}
                hint="Clear photo of your driving license · JPG or PNG"
              />
              {errors.licensePhoto && (
                <p className="flex items-center gap-1 text-xs text-red-400 -mt-4">
                  <AlertCircle className="w-3 h-3" /> {errors.licensePhoto}
                </p>
              )}

              {/* Review Summary */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                <p className="text-black font-bold text-sm uppercase tracking-wide">Application Summary</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ['Garage', formData.garageName],
                    ['Owner', formData.ownerName],
                    ['WhatsApp', `+91 ${formData.mobileNumber}`],
                    ['City', formData.city],
                    ['Address', formData.address],
                    ['Vehicles', formData.vehicleType],
                    ['Services', `${formData.servicesOffered.length} selected`],
                  ].map(([key, val]) => (
                    <div key={key}>
                      <span className="text-gray-500">{key}: </span>
                      <span className="text-black font-medium">{val || '–'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {submitError && (
            <div className="mt-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{submitError}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 pt-6 border-t border-black/10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-500 hover:text-black font-semibold text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : <div />}

            {currentStep < 3 ? (
              <button
                type="button"
                id="partner-form-next"
                onClick={handleNext}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-wider px-6 py-3 md:px-8 md:py-3.5 text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)] hover:shadow-[0_4px_28px_rgba(230,43,43,0.5)] active:scale-95 w-full sm:w-auto"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                id="partner-form-submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider px-6 py-3 md:px-8 md:py-3.5 text-sm transition-all shadow-[0_4px_20px_rgba(230,43,43,0.35)] active:scale-95 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-gray-50 border-t border-black/10 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-black text-black uppercase text-center mb-10 tracking-tight">
            Why Join the <span className="text-accent">FixWheel</span> Network?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: '📈', title: '3x More Bookings', desc: 'Reach customers actively searching for your services nearby.' },
              { icon: '📲', title: 'WhatsApp Integration', desc: 'Manage bookings and updates right from WhatsApp.' },
              { icon: '🛡️', title: 'Verified Badge', desc: 'Get a FixWheel Verified badge that builds instant trust.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-black/5 rounded-xl p-6 text-center hover:border-accent/30 transition-colors group shadow-sm"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <h4 className="text-black font-bold text-sm uppercase tracking-wide mb-2">{card.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
