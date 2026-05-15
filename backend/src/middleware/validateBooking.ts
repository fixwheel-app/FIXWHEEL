import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must not exceed 50 characters"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits").regex(/^\d+$/, "Phone must contain only numbers"),
  address: z.string().min(15, "Address must be at least 15 characters"),
  bikeType: z.enum(["Electric Motorbike", "Non-Electric Motorbike", "Scooter"]),
  bikeModel: z.string().min(3, "Bike model must be at least 3 characters"),
  issueDescription: z.string().max(300, "Description must be under 300 characters").optional(),
  preferredSlot: z.enum(["8:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "12:00 PM - 2:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM", "6:00 PM - 8:00 PM"]),
  package: z.enum(["Service", "Service with engine oil", "Puncture", "Running Repair", "Engine Half", "Engine full", "Jump start"])
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const validateBooking = (req: Request, res: Response, next: NextFunction): void => {
  try {
    req.body = bookingSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
       res.status(400).json({
        success: false,
        error: "Validation failed",
        details: error.errors
      });
      return;
    }
    
    res.status(500).json({
      success: false,
      error: "Internal server error during validation"
    });
  }
};
