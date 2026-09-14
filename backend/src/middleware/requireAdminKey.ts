import { timingSafeEqual } from 'crypto';
import { Request, Response, NextFunction } from 'express';

const keysMatch = (providedKey: string, expectedKey: string): boolean => {
  const providedBuffer = Buffer.from(providedKey, 'utf8');
  const expectedBuffer = Buffer.from(expectedKey, 'utf8');

  return providedBuffer.length === expectedBuffer.length
    && timingSafeEqual(providedBuffer, expectedBuffer);
};

export const requireAdminKey = (req: Request, res: Response, next: NextFunction): void => {
  const expectedKey = process.env.ADMIN_SECRET_KEY;

  if (!expectedKey || !expectedKey.trim()) {
    res.status(500).json({ error: 'Admin authentication is unavailable' });
    return;
  }

  const providedKey = req.get('x-admin-key');

  if (!providedKey || !keysMatch(providedKey, expectedKey)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  next();
};
