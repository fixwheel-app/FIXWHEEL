import { Request, Response } from 'express';
import { db } from '../lib/db';
import { sendQueryNotification } from '../lib/notifications';
import { QueryInput } from '../middleware/validateQuery';

export const createQuery = async (req: Request<{}, {}, QueryInput>, res: Response): Promise<void> => {
  try {
    const queryData = req.body;
    const formattedPhone = "+91" + queryData.phone;

    // Save query to Supabase database
    const newQuery = await db.query.create({
      data: {
        name: queryData.name,
        phone: formattedPhone,
        email: queryData.email,
        message: queryData.message,
        status: "pending"
      }
    });

    // Send email notification (non-blocking so email issues won't fail query submission)
    (async () => {
      try {
        await sendQueryNotification({
          name: queryData.name,
          phone: formattedPhone,
          email: queryData.email,
          message: queryData.message
        });
      } catch (emailError) {
        console.error('[Query Email] Failed to send notification email:', emailError);
      }
    })();

    res.status(201).json({
      success: true,
      queryId: newQuery.id,
      message: "Query stored successfully and sent to support team"
    });

  } catch (error) {
    console.error("Query handling error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process query. Please try again later.",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

