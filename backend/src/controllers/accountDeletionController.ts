import { Request, Response } from 'express';
import { z } from 'zod';
import { db } from '../lib/db';

const accountDeleteSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  reason: z.string().min(5, 'Reason must be at least 5 characters long'),
});

export const requestAccountDeletion = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = accountDeleteSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: parsed.error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
      return;
    }

    const { email, reason } = parsed.data;

    // Save to database
    const deletionRequest = await db.accountDelete.create({
      data: {
        email,
        reason,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Account deletion request submitted successfully.',
      id: deletionRequest.id,
    });

  } catch (error) {
    console.error('Account deletion submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit account deletion request',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
