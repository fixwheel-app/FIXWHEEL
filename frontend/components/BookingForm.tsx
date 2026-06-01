"use client";

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Lock, AlertCircle, CheckCircle2, MapPin, Sunrise, Sun, Sunset, Clock, Check } from 'lucide-react';
import { submitBooking } from '@/lib/api';
import { NON_ELECTRIC_SERVICES, ELECTRIC_SERVICES } from '@/lib/constants';
import LoadingSpinner from './LoadingSpinner';
import { PackageType } from '@/types';
import { cn } from '@/lib/utils';

// Zod Schema matching the backend requirements
const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must not exceed 50 characters"),
  phone: z.string().length(10, "10 digit number required").regex(/^\d+$/, "Numbers only"),
  address: z.string().min(15, "Address must be at least 15 characters"),
  city: z.enum(["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"]),
  bookingDate: z.string().min(1, "Booking date is required"),
  bikeType: z.enum(["Electric Motorbike", "Non-Electric Motorbike", "Scooter"]),
  bikeModel: z.string().min(3, "Model must be at least 3 characters"),
  issueDescription: z.string().max(300, "Max 300 characters").optional(),
  preferredSlot: z.enum([
    "8:00 AM - 9:00 AM", 
    "9:00 AM - 10:00 AM", 
    "10:00 AM - 11:00 AM", 
    "11:00 AM - 12:00 PM", 
    "12:00 PM - 1:00 PM", 
    "1:00 PM - 2:00 PM", 
    "2:00 PM - 3:00 PM", 
    "3:00 PM - 4:00 PM", 
    "4:00 PM - 5:00 PM", 
    "5:00 PM - 6:00 PM", 
    "6:00 PM - 7:00 PM", 
    "7:00 PM - 8:00 PM"
  ]),
  package: z.enum(["General Service", "General Service with engine oil", "Puncture", "Running Repair", "Engine Half", "Engine full", "Jump start"])
});

export type BookingSchemaType = z.infer<typeof bookingSchema>;

const SLOT_METADATA: Record<string, { period: 'morning' | 'afternoon' | 'evening', timeOnly: string }> = {
  "8:00 AM - 9:00 AM": { period: 'morning', timeOnly: "8:00 - 9:00 AM" },
  "9:00 AM - 10:00 AM": { period: 'morning', timeOnly: "9:00 - 10:00 AM" },
  "10:00 AM - 11:00 AM": { period: 'morning', timeOnly: "10:00 - 11:00 AM" },
  "11:00 AM - 12:00 PM": { period: 'morning', timeOnly: "11:00 AM - 12:00 PM" },
  "12:00 PM - 1:00 PM": { period: 'afternoon', timeOnly: "12:00 - 1:00 PM" },
  "1:00 PM - 2:00 PM": { period: 'afternoon', timeOnly: "1:00 - 2:00 PM" },
  "2:00 PM - 3:00 PM": { period: 'afternoon', timeOnly: "2:00 - 3:00 PM" },
  "3:00 PM - 4:00 PM": { period: 'afternoon', timeOnly: "3:00 - 4:00 PM" },
  "4:00 PM - 5:00 PM": { period: 'evening', timeOnly: "4:00 - 5:00 PM" },
  "5:00 PM - 6:00 PM": { period: 'evening', timeOnly: "5:00 - 6:00 PM" },
  "6:00 PM - 7:00 PM": { period: 'evening', timeOnly: "6:00 - 7:00 PM" },
  "7:00 PM - 8:00 PM": { period: 'evening', timeOnly: "7:00 - 8:00 PM" },
};

const PERIOD_STYLES: Record<string, { bg: string, text: string, border: string, iconBg: string }> = {
  morning: {
    bg: "from-amber-50/20 to-white/10",
    text: "text-amber-700",
    border: "border-amber-100",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/40"
  },
  afternoon: {
    bg: "from-yellow-50/20 to-white/10",
    text: "text-yellow-700",
    border: "border-yellow-100",
    iconBg: "bg-yellow-50 text-yellow-600 border-yellow-200/30"
  },
  evening: {
    bg: "from-rose-50/20 to-white/10",
    text: "text-rose-700",
    border: "border-rose-100",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200/40"
  }
};

function BookingFormInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize defaults from query params
  const initialPackage = (searchParams.get('package') as PackageType) || "General Service";
  const initialType = searchParams.get('type') || "Non-Electric Motorbike";
  const initialModel = searchParams.get('bike') || searchParams.get('model') || "";
  const initialPrice = searchParams.get('price') || "0";
  
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackage);
  const [price, setPrice] = useState<string>(initialPrice);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  const pkgData = [...NON_ELECTRIC_SERVICES, ...ELECTRIC_SERVICES].find(p => p.id === selectedPackageId);
  const includesList = pkgData?.includes || [
    "Full service specific to selected category.",
    "Transparent pricing.",
    "Doorstep assistance."
  ];

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue, getValues } = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
    defaultValues: {
      package: selectedPackageId as PackageType,
      bikeType: initialType as BookingSchemaType["bikeType"],
      bikeModel: initialModel,
      preferredSlot: "8:00 AM - 9:00 AM",
      city: "Delhi",
      bookingDate: new Date().toISOString().split('T')[0]
    }
  });

  const issueDescVal = watch("issueDescription") || "";
  const bookingDate = watch("bookingDate");
  const selectedSlot = watch("preferredSlot");
  const selectedCity = watch("city");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const ALL_SLOTS = [
      { label: "8:00 AM - 9:00 AM", startHour: 8 },
      { label: "9:00 AM - 10:00 AM", startHour: 9 },
      { label: "10:00 AM - 11:00 AM", startHour: 10 },
      { label: "11:00 AM - 12:00 PM", startHour: 11 },
      { label: "12:00 PM - 1:00 PM", startHour: 12 },
      { label: "1:00 PM - 2:00 PM", startHour: 13 },
      { label: "2:00 PM - 3:00 PM", startHour: 14 },
      { label: "3:00 PM - 4:00 PM", startHour: 15 },
      { label: "4:00 PM - 5:00 PM", startHour: 16 },
      { label: "5:00 PM - 6:00 PM", startHour: 17 },
      { label: "6:00 PM - 7:00 PM", startHour: 18 },
      { label: "7:00 PM - 8:00 PM", startHour: 19 }
    ];

    let filteredSlots = [];
    if (bookingDate === today) {
      const currentHour = new Date().getHours();
      filteredSlots = ALL_SLOTS.filter(slot => slot.startHour > currentHour).map(s => s.label);
    } else {
      filteredSlots = ALL_SLOTS.map(s => s.label);
    }
    
    setAvailableSlots(filteredSlots);
    
    const currentSlot = getValues("preferredSlot");
    if (filteredSlots.length > 0 && !filteredSlots.includes(currentSlot)) {
      setValue("preferredSlot", filteredSlots[0] as any, { shouldValidate: true });
    } else if (filteredSlots.length === 0) {
      setValue("preferredSlot", "" as any, { shouldValidate: true });
    }
  }, [bookingDate, setValue, getValues]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("selectedPackage");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.packageName && !searchParams.get('package')) {
          setSelectedPackageId(parsed.packageName);
          setValue("package", parsed.packageName as PackageType);
        }
        if (parsed.bikeType && !searchParams.get('type')) {
          setValue("bikeType", parsed.bikeType);
        }
        if (parsed.bikeModel && !searchParams.get('bike') && !searchParams.get('model')) {
          setValue("bikeModel", parsed.bikeModel);
        }
      }
    } catch(e) {}
  }, [setValue, searchParams]);

  const onSubmit = async (data: BookingSchemaType) => {
    setIsSubmitting(true);
    setErrorToast(null);

    const response = await submitBooking(data);
    
    if (response.success && response.bookingId) {
      // Store in localStorage for confirmation page
      localStorage.setItem('latestBooking', JSON.stringify({
        ...data,
        bookingRef: response.bookingId,
        price: price
      }));
      router.push('/confirmation');
    } else {
      setErrorToast(response.error || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full min-w-0">
      
      {/* Form Section */}
      <div className="flex-1 min-w-0 bg-gray-50 border border-black/5 rounded-2xl p-6 md:p-8">
        
        {/* Selected Package Badge */}
        <div className="flex justify-between items-center bg-white rounded-xl p-4 mb-8 border-2 border-gray-200 shadow-sm transition-colors">
          <div>
            <p className="text-gray-600 text-sm">Selected Service</p>
            <p className="font-semibold text-black text-lg">{selectedPackageId}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Estimated Price</p>
            <p className="font-bold text-accent text-xl">₹{price}</p>
          </div>
        </div>

        {errorToast && (
          <div className="mb-6 p-4 bg-status-error/10 border border-status-error/30 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-status-error shrink-0 mt-0.5" />
            <p className="text-sm text-status-error leading-relaxed">{errorToast}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Section: Vehicle Details */}
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2 text-lg">Vehicle Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bike Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bike Type *</label>
                <select 
                  {...register("bikeType")}
                  className="w-full bg-white border border-gray-200 text-black rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer appearance-none"
                >
                  <option value="Non-Electric Motorbike">Non-Electric Motorbike</option>
                  <option value="Electric Motorbike">Electric Motorbike</option>
                  <option value="Scooter">Scooter</option>
                </select>
              </div>

              {/* Bike Model */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bike Model *</label>
                <input 
                  {...register("bikeModel")}
                  placeholder="Hero Sprint 26T"
                  className={cn(
                    "w-full bg-white border text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all",
                    errors.bikeModel ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                  )}
                />
                {errors.bikeModel && <p className="text-status-error text-xs mt-1">{errors.bikeModel.message}</p>}
              </div>
            </div>
          </div>

          {/* Section: Contact Details */}
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2 text-lg">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                  <input 
                    {...register("customerName")}
                    placeholder="Rahul Sharma"
                    className={cn(
                      "w-full bg-white border text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all",
                      errors.customerName ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                    )}
                  />
                  {!errors.customerName && watch("customerName")?.length >= 2 && (
                    <CheckCircle2 className="w-5 h-5 text-status-success absolute right-3 top-3.5" />
                  )}
                </div>
                {errors.customerName && <p className="text-status-error text-xs mt-1">{errors.customerName.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 text-gray-600 rounded-l-xl">
                    +91
                  </span>
                  <input 
                    {...register("phone")}
                    placeholder="9876543210"
                    maxLength={10}
                    className={cn(
                      "w-full bg-white border text-black rounded-r-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all",
                      errors.phone ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                    )}
                  />
                </div>
                {errors.phone && <p className="text-status-error text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* City */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <label className="block text-sm font-semibold text-gray-800">Select City *</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                {[
                  { id: "Delhi", name: "Delhi", region: "Delhi NCR" },
                  { id: "Gurgaon", name: "Gurgaon", region: "Haryana" },
                  { id: "Noida", name: "Noida", region: "UP" },
                  { id: "Faridabad", name: "Faridabad", region: "Haryana" },
                  { id: "Ghaziabad", name: "Ghaziabad", region: "UP" }
                ].map((city) => {
                  const isSelected = selectedCity === city.id;
                  return (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => setValue("city", city.id as any, { shouldValidate: true })}
                      className={cn(
                        "relative flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group overflow-hidden bg-white cursor-pointer",
                        isSelected 
                          ? "border-accent bg-gradient-to-br from-accent/[0.04] to-accent/[0.01] text-accent ring-2 ring-accent/15" 
                          : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                      )}
                    >
                      <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 mb-2.5 shrink-0",
                        isSelected ? "bg-accent text-white scale-110 shadow-sm shadow-accent/20" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200/80"
                      )}>
                        <MapPin className="w-5 h-5 shrink-0" />
                      </div>
                      <span className={cn("text-sm font-bold tracking-tight leading-tight", isSelected ? "text-accent" : "text-gray-900")}>
                        {city.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium mt-1">
                        {city.region}
                      </span>
                      {isSelected && (
                        <div className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full bg-accent text-white shadow-sm">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" {...register("city")} value={selectedCity} />
              {errors.city && <p className="text-status-error text-xs mt-1">{errors.city.message}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
              <textarea 
                {...register("address")}
                placeholder="House No, Street, Area"
                rows={3}
                className={cn(
                  "w-full bg-white border text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all resize-none",
                  errors.address ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                )}
              />
              {errors.address && <p className="text-status-error text-xs mt-1">{errors.address.message}</p>}
            </div>
          </div>

          {/* Section: Service Preferences */}
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-2 text-lg">Service Preferences</h3>
            
            {/* Issue Description */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="block text-sm font-medium text-gray-700">Issue Description (Optional)</label>
                <span className="text-xs text-gray-500">{issueDescVal.length}/300</span>
              </div>
              <textarea 
                {...register("issueDescription")}
                placeholder="Describe what's wrong with your bike... e.g. gears slipping, brakes squeaking"
                rows={3}
                maxLength={300}
                className={cn(
                  "w-full bg-white border text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all resize-none",
                  errors.issueDescription ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                )}
              />
            </div>

            <div className="space-y-6">
              {/* Booking Date */}
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">Booking Date *</label>
                <input 
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...register("bookingDate")}
                  className={cn(
                    "w-full bg-white border text-black rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all",
                    errors.bookingDate ? "border-status-error focus:ring-status-error" : "border-gray-200 focus:border-accent focus:ring-accent"
                  )}
                />
                {errors.bookingDate && <p className="text-status-error text-xs mt-1">{errors.bookingDate.message}</p>}
              </div>

              {/* Preferred Slot */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <label className="block text-sm font-medium text-gray-700">Preferred Time Slot *</label>
                </div>

                {availableSlots.length > 0 ? (
                  <div className="space-y-5">
                    {[
                      { id: 'morning', name: 'Morning', icon: Sunrise, time: '8:00 AM - 12:00 PM' },
                      { id: 'afternoon', name: 'Afternoon', icon: Sun, time: '12:00 PM - 4:00 PM' },
                      { id: 'evening', name: 'Evening', icon: Sunset, time: '4:00 PM - 8:00 PM' }
                    ].map((period) => {
                      const periodSlots = availableSlots.filter(
                        (slot) => SLOT_METADATA[slot]?.period === period.id
                      );

                      if (periodSlots.length === 0) return null;

                      const PeriodIcon = period.icon;
                      const styles = PERIOD_STYLES[period.id] || {
                        bg: "from-gray-50/50 to-white/10",
                        text: "text-gray-700",
                        border: "border-gray-150",
                        iconBg: "bg-gray-50 text-gray-500 border-gray-200/50"
                      };

                      return (
                        <div 
                          key={period.id} 
                          className={cn(
                            "border rounded-2xl p-4 md:p-5 transition-all duration-300 bg-gradient-to-br shadow-sm hover:shadow-md",
                            styles.border,
                            styles.bg
                          )}
                        >
                          <div className="flex items-center gap-3 mb-4 border-b pb-3 border-gray-100">
                            <div className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-lg border shadow-xs shrink-0",
                              styles.iconBg
                            )}>
                              <PeriodIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className={cn("text-xs font-bold uppercase tracking-wider leading-none", styles.text)}>
                                {period.name}
                              </p>
                              <p className="text-[10px] text-gray-400 font-semibold mt-1">
                                {period.time}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                            {periodSlots.map((slot) => {
                              const isSelected = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setValue("preferredSlot", slot as any, { shouldValidate: true })}
                                  className={cn(
                                    "relative py-3 px-4 rounded-xl border text-center transition-all duration-300 text-xs font-semibold group flex flex-col justify-center items-center gap-0.5 cursor-pointer bg-white",
                                    isSelected
                                      ? "border-accent bg-gradient-to-br from-accent/[0.04] to-accent/[0.01] text-accent ring-2 ring-accent/15"
                                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50 hover:-translate-y-0.5 shadow-xs"
                                  )}
                                >
                                  <span className={cn("text-xs font-bold", isSelected ? "text-accent" : "text-gray-800 group-hover:text-gray-900")}>
                                    {SLOT_METADATA[slot]?.timeOnly || slot}
                                  </span>
                                  {isSelected && (
                                    <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-accent" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full bg-red-50/50 border border-status-error/20 text-status-error rounded-xl px-4 py-4 text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">No slots available for today</p>
                      <p className="text-xs text-gray-500 mt-0.5">Please select a different date to book your repair.</p>
                    </div>
                  </div>
                )}
                
                <input type="hidden" {...register("preferredSlot")} value={selectedSlot} />
                {availableSlots.length > 0 && errors.preferredSlot && (
                  <p className="text-status-error text-xs mt-1">{errors.preferredSlot.message}</p>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !isValid}
            className="w-full flex justify-center items-center py-3 md:py-4 bg-accent hover:bg-accent-hover disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold text-base md:text-lg rounded-xl transition-all shadow-[0_4px_14px_rgba(249,115,22,0.4)] disabled:shadow-none"
          >
            {isSubmitting ? <LoadingSpinner className="text-white" /> : "Confirm Booking"}
          </button>
        </form>

      </div>

      {/* Summary Card */}
      <div className="lg:w-80 xl:w-96 shrink-0">
        <div className="lg:sticky lg:top-24 bg-gray-50 border border-black/5 rounded-2xl p-4 md:p-8 shadow-md overflow-hidden">
          <h3 className="text-base md:text-xl font-bold text-black mb-4 md:mb-6">Order Summary</h3>
          
          <div className="flex justify-between items-start mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200 gap-3">
            <div className="min-w-0">
              <p className="text-gray-600 text-sm mb-1 break-words">{selectedPackageId}</p>
              <p className="text-accent text-sm">Estimated Price</p>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-black shrink-0">₹{price}</p>
          </div>

          <p className="font-semibold text-black mb-3 md:mb-4 text-sm md:text-base">What's included:</p>
          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {includesList.map((item, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3 text-gray-700 text-sm">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-status-success shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-black/5 text-gray-600 text-xs rounded-xl p-3 md:p-4 flex items-start gap-2 md:gap-3 shadow-sm">
            <Lock className="w-4 h-4 shrink-0 text-gray-400 mt-0.5" />
            <p>Your connection is secure. You will not be charged now. Payment is securely processed after the repair is completed.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="flex justify-center p-12"><LoadingSpinner size={32} /></div>}>
      <BookingFormInner />
    </Suspense>
  );
}
