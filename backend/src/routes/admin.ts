import { Router, Request, Response } from 'express';
import { db } from '../lib/db';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();

// Protect all admin routes
router.use(adminAuth);

// GET /api/admin/stats
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [total, todayCount, pending, completed] = await Promise.all([
      db.booking.count(),
      db.booking.count({ where: { createdAt: { gte: today } } }),
      db.booking.count({ where: { status: 'pending' } }),
      db.booking.count({ where: { status: 'done' } })
    ]);

    res.json({
      success: true,
      data: {
        total,
        today: todayCount,
        pending,
        completed
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch stats' });
  }
});

// GET /api/admin/bookings
router.get('/bookings', async (req: Request, res: Response) => {
  try {
    const bookings = await db.booking.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    // map data to frontend format
    const mapped = bookings.map(b => ({
      id: b.id,
      name: b.customerName,
      phone: b.phone,
      address: b.address,
      bikeModel: `${b.bikeType} - ${b.bikeModel}`,
      servicePackage: b.package,
      price: b.price.toString(),
      status: b.status,
      createdAt: b.createdAt.toISOString()
    }));

    res.json({ success: true, data: mapped });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch bookings' });
  }
});

// GET /api/admin/partners
router.get('/partners', async (req: Request, res: Response) => {
  try {
    const partners = await db.partner.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const mapped = partners.map(p => ({
      id: p.id,
      name: p.ownerName || p.garageName,
      phone: p.phone,
      city: p.mapsLocation,
      experience: p.servicesOffered.join(', '),
      status: p.status,
      createdAt: p.createdAt.toISOString()
    }));

    res.json({ success: true, data: mapped });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch partners' });
  }
});

// PATCH /api/admin/booking-status/:id
router.patch('/booking-status/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await db.booking.update({
      where: { id },
      data: { status }
    });

    res.json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update booking status' });
  }
});

// PATCH /api/admin/partner-status/:id
router.patch('/partner-status/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const partner = await db.partner.update({
      where: { id },
      data: { status }
    });

    res.json({ success: true, data: partner });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update partner status' });
  }
});

export default router;
