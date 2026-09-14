import { Request, Response } from 'express';
import { db } from '../lib/db';
import { sendBookingNotification } from '../lib/notifications';
import { BookingInput } from '../middleware/validateBooking';
import { BookingPricingError, calculateBookingPrice, verifyQuotedPrice } from '../lib/bookingPricing';

const generateBookingRef = (): string => {
  const chars = '0123456789ABCDEF';
  let hex = '';
  for (let i = 0; i < 8; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return `FW-${hex}`;
};

export const createBooking = async (req: Request<{}, {}, BookingInput>, res: Response): Promise<void> => {
  try {
    const bookingData = req.body;
    const price = calculateBookingPrice({
      serviceId: bookingData.serviceId,
      packageName: bookingData.package,
      bikeType: bookingData.bikeType,
      ccRange: bookingData.ccRange,
    });
    verifyQuotedPrice(bookingData.price, price);
    
    // Ensure unique booking ref
    let bookingRef = generateBookingRef();
    let isUnique = false;
    
    while (!isUnique) {
      const existing = await db.booking.findUnique({ where: { bookingRef } });
      if (existing) {
        bookingRef = generateBookingRef();
      } else {
        isUnique = true;
      }
    }

    // Save to database
    const newBooking = await db.booking.create({
      data: {
        bookingRef,
        customerName: bookingData.customerName,
        phone: "+91" + bookingData.phone, // Prepend India country code as per requirements (exact 10 digits provided)
        address: bookingData.address,
        city: bookingData.city,
        bookingDate: bookingData.bookingDate,
        bikeType: bookingData.bikeType,
        bikeModel: bookingData.bikeModel,
        issueDescription: bookingData.issueDescription || null,
        preferredSlot: bookingData.preferredSlot,
        package: bookingData.package,
        price,
        status: "pending",
        source: "website"
      }
    });

    // Send email notification (non-blocking — respond to user instantly)
    (async () => {
      try {
        console.log('[Booking Email] Attempting to send for:', newBooking.bookingRef);
        console.log('[Booking Email] RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'SET' : 'MISSING');
        console.log('[Booking Email] OWNER_EMAIL:', process.env.OWNER_EMAIL || 'MISSING');
        await sendBookingNotification({
          bookingRef: newBooking.bookingRef,
          customerName: newBooking.customerName,
          phone: newBooking.phone,
          address: newBooking.address,
          city: newBooking.city,
          bookingDate: newBooking.bookingDate,
          bikeType: newBooking.bikeType,
          bikeModel: newBooking.bikeModel,
          issueDescription: newBooking.issueDescription,
          package: newBooking.package,
          price: newBooking.price,
          preferredSlot: newBooking.preferredSlot,
        });
        console.log('[Booking Email] Sent successfully.');
      } catch (emailError) {
        console.error('[Booking Email] Failed:', emailError);
      }
    })();

    res.status(201).json({
      success: true,
      bookingId: newBooking.bookingRef,
      price,
      message: "Booking confirmed"
    });

  } catch (error) {
    if (error instanceof BookingPricingError) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
      return;
    }

    console.error("Booking creation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to create booking",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
