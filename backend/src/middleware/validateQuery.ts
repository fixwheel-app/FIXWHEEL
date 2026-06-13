import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const querySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must not exceed 50 characters"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits").regex(/^\d+$/, "Phone must contain only numbers"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Query must be at least 10 characters").max(1000, "Query must not exceed 1000 characters")
});

export type QueryInput = z.infer<typeof querySchema>;

export const validateQuery = (req: Request, res: Response, next: NextFunction): void => {
  try {
    req.body = querySchema.parse(req.body);
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
