"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar, MapPin, Bike, Check, Smartphone, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GooglePlayIcon } from '@/components/GooglePlayIcon';

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${day} ${months[monthIndex]} ${year}`;
  }
  return dateStr;
};

const formatPackageTitle = (packageName: unknown) => {
  if (typeof packageName !== 'string') return '';

  const title = packageName.trim();
  if (!title || /(?:repair|service)$/i.test(title)) return title;

  return `${title} Repair`;
};

const formatPrice = (price: unknown) => {
  if (!price) return null;

  const value = String(price).trim();
  if (!value || /^(?:undefined|null|nan)$/i.test(value)) return null;

  return value.replace(/^₹\s*/, '');
};

export default function ConfirmationPage() {
  const [bookingData, setBookingData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('latestBooking');
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!bookingData) return null;

  const packageTitle = formatPackageTitle(bookingData.package);
  const displayPrice = formatPrice(bookingData.price);

  return (
    <div className="min-h-screen py-8 md:py-10 flex items-start justify-center bg-white">
      <div className="max-w-3xl w-full px-4 sm:px-6 pt-8 md:pt-0">

        {/* Top Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-status-success/20 text-status-success rounded-full mb-4 md:mb-6"
          >
            <CheckCircle2 className="w-7 h-7 md:w-10 md:h-10" />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">Booking Confirmed! 🎉</h1>
          <p className="text-gray-600 text-sm md:text-lg">
            Our mechanic will contact you shortly
          </p>
        </div>

        {/* Track booking in the app */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#111820] shadow-sm"
          aria-labelledby="track-order-title"
        >
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 id="track-order-title" className="text-lg font-bold text-white sm:text-xl">
                  Track your order in the FixWheel app
                </h2>
                <p className="mt-1 max-w-md text-sm leading-6 text-slate-300">
                  Download the app to follow your booking and receive service updates.
                </p>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.fixwheel.customer&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-5 text-[#111820] transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
              aria-label="Download the FixWheel app from Google Play"
            >
              <GooglePlayIcon className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium">GET IT ON</span>
                <span className="block text-sm font-bold">Google Play</span>
              </span>
            </a>
          </div>

          <div className="flex items-start gap-2 border-t border-white/10 bg-white/5 px-5 py-3 text-xs leading-5 text-slate-300 sm:px-6">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <p>Update your mobile number in your app profile to track your orders.</p>
          </div>
        </motion.section>

        {/* Booking Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 border border-black/5 rounded-3xl p-6 md:p-8 shadow-md mb-8 relative overflow-hidden"
        >


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8 border-b border-gray-200 pb-4 md:pb-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Booking Reference ID</p>
              <p className="text-xl md:text-3xl font-mono font-bold text-black">{bookingData.bookingRef}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Call Support</p>
              <p className="text-lg md:text-2xl font-mono font-bold text-black">
                <a href="tel:8745945682" className="hover:underline">8745945682</a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-gray-200 pb-8">
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">Customer</p>
                <p className="text-black font-medium">{bookingData.customerName}</p>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                  <Phone className="w-3 h-3" />
                  <span>+91 {bookingData.phone}</span>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">Address</p>
                <div className="flex items-start gap-2 text-black">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span className="text-sm">{bookingData.address}</span>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">Time Slot</p>
                <div className="flex items-center gap-2 text-black">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-medium">
                    {bookingData.bookingDate ? `${formatDate(bookingData.bookingDate)} | ` : ''}
                    {bookingData.preferredSlot}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">Package Selected</p>
                <p className="text-black font-bold text-lg">{packageTitle}</p>
                {displayPrice && <p className="text-accent font-medium mt-1">₹{displayPrice}</p>}
              </div>

              <div>
                <p className="text-gray-600 text-xs mb-1 uppercase tracking-wider">Bike Details</p>
                <div className="flex items-center gap-2 text-black mb-1">
                  <Bike className="w-4 h-4 text-gray-500" />
                  <span>{bookingData.bikeType} - {bookingData.bikeModel}</span>
                </div>
                {bookingData.issueDescription &&
                 bookingData.issueDescription.trim().toLowerCase() !== "for testing purpose" &&
                 bookingData.issueDescription.trim().toLowerCase() !== "testing" && (
                  <p className="text-sm text-gray-700 bg-gray-100 p-3 rounded-lg mt-2 italic">
                    "{bookingData.issueDescription}"
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div>
            <h4 className="text-black font-semibold mb-4 text-center">What Happens Next?</h4>
            <div className="flex flex-col md:flex-row gap-4 justify-between relative px-2">

              <div className="hidden md:block absolute top-4 left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>

              {[
                { title: "Booking received" },
                { title: "Confirmation Call" },
                { title: "Mechanic arrives" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-row md:flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-center font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3 rounded-xl border border-gray-300 text-black font-medium hover:bg-gray-100 transition-colors text-center"
          >
            Book Another Repair
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 rounded-xl text-gray-600 font-medium hover:text-black transition-colors text-center"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
