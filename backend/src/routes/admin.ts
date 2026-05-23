import { Router, Request, Response } from 'express';
import { db as prisma } from '../lib/db';

const router = Router();

router.use((req: Request, res: Response, next) => {
  const adminKey = req.headers["x-admin-key"];
  if (adminKey !== process.env.ADMIN_SECRET_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

router.get("/bookings", async (req: Request, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

router.get("/stats", async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [total, todayCount, pending, completed] = await Promise.all([
      prisma.booking.count(),
      prisma.booking.count({ where: { createdAt: { gte: today } } }),
      prisma.booking.count({ where: { status: "pending" } }),
      prisma.booking.count({ where: { status: "completed" } }),
    ]);
    res.json({ total, today: todayCount, pending, completed });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

router.get("/partners", async (req: Request, res: Response) => {
  try {
    const partners = await prisma.partner.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch partners" });
  }
});

router.patch("/bookings/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const booking = await prisma.booking.update({
      where: { bookingRef: id },
      data: { status }
    });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Failed to update booking status" });
  }
});

router.patch("/partner-status/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const partner = await prisma.partner.update({
      where: { id },
      data: { status }
    });
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: "Failed to update partner status" });
  }
});

export default router;
