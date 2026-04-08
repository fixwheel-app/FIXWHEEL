import { Request, Response } from 'express';
import { db } from '../lib/db';
import { sendBookingNotification } from '../lib/notifications';
import { BookingInput } from '../middleware/validateBooking';

const getPriceForPackage = (pkg: string): number => {
  switch (pkg) {
    case 'Basic': return 499;
    case 'Standard': return 899;
    case 'Premium': return 1499;
    default: return 899;
  }
};

const generateBookingRef = (): string => {
  const randomDigits = Math.floor(1000 + Math.random() * 9000); // 4 random digits
  return `SPX-${randomDigits}`;
};

export const createBooking = async (req: Request<{}, {}, BookingInput>, res: Response): Promise<void> => {
  try {
    const bookingData = req.body;
    const price = getPriceForPackage(bookingData.package);
    
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
        bikeType: bookingData.bikeType,
        bikeModel: bookingData.bikeModel,
        issueDescription: bookingData.issueDescription || null,
        preferredSlot: bookingData.preferredSlot,
        package: bookingData.package,
        price,
        status: "pending"
      }
    });

    // Send email notification (non-blocking)
    sendBookingNotification({
      bookingRef: newBooking.bookingRef,
      customerName: newBooking.customerName,
      phone: newBooking.phone,
      address: newBooking.address,
      bikeType: newBooking.bikeType,
      bikeModel: newBooking.bikeModel,
      issueDescription: newBooking.issueDescription,
      package: newBooking.package,
      price: newBooking.price,
      preferredSlot: newBooking.preferredSlot,
    });

    res.status(201).json({
      success: true,
      bookingId: newBooking.bookingRef,
      message: "Booking confirmed"
    });

  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to create booking",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
