import { Request, Response } from 'express';
import { sendQueryNotification } from '../lib/notifications';
import { QueryInput } from '../middleware/validateQuery';

export const createQuery = async (req: Request<{}, {}, QueryInput>, res: Response): Promise<void> => {
  try {
    const queryData = req.body;

    // Send email notification (asynchronous, but we wait for it to report any errors)
    await sendQueryNotification({
      name: queryData.name,
      phone: "+91" + queryData.phone, // Format phone with country code
      email: queryData.email,
      message: queryData.message
    });

    res.status(200).json({
      success: true,
      message: "Query sent successfully to support team"
    });

  } catch (error) {
    console.error("Query handling error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send query. Please try again later.",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
