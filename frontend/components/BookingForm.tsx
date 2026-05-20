"use client";

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
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
  preferredSlot: z.enum(["8:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "12:00 PM - 2:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM", "6:00 PM - 8:00 PM"]),
  package: z.enum(["Service", "Service with engine oil", "Puncture", "Running Repair", "Engine Half", "Engine full", "Jump start"])
});

export type BookingSchemaType = z.infer<typeof bookingSchema>;

function BookingFormInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize defaults from query params
  const initialPackage = (searchParams.get('package') as PackageType) || "Service";
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

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
    defaultValues: {
      package: selectedPackageId as PackageType,
      bikeType: initialType as BookingSchemaType["bikeType"],
      bikeModel: initialModel,
      preferredSlot: "8:00 AM - 10:00 AM",
      city: "Delhi",
      bookingDate: new Date().toISOString().split('T')[0]
    }
  });

  const issueDescVal = watch("issueDescription") || "";

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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
              <select 
                {...register("city")}
                className="w-full bg-white border border-gray-200 text-black rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer appearance-none"
              >
                <option value="Delhi">Delhi</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Ghaziabad">Ghaziabad</option>
              </select>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Booking Date */}
              <div>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot *</label>
                <select 
                  {...register("preferredSlot")}
                  className="w-full bg-white border border-gray-200 text-black rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer appearance-none"
                >
                  <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                  <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                  <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
                </select>
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
