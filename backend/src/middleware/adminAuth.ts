import { Request, Response, NextFunction } from 'express';

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const adminSecret = process.env.ADMIN_KEY || process.env.NEXT_PUBLIC_ADMIN_KEY;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== adminSecret) {
    return res.status(403).json({ success: false, error: 'Forbidden: Invalid token' });
  }

  next();
};
