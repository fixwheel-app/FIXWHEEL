import BookingForm from '@/components/BookingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Mechanic — FixWheel Doorstep Bike Service",
  description: "Book your doorstep bike service in minutes. Fill in your details, pick a time slot, and a verified mechanic comes to you. Serving Delhi NCR.",
};
export default function BookingPage() {
  return (
    <div className="min-h-screen py-10 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-8 md:mb-12 pt-8 md:pt-0">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 md:mb-4">Book Your Repair</h1>
          <p className="text-gray-600 text-sm md:text-base">Provide your details and we'll secure your doorstep repair slot.</p>
        </div>

        <BookingForm />

      </div>
    </div>
  );
}
