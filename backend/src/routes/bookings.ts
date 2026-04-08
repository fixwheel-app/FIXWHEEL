import { Router } from 'express';
import { createBooking } from '../controllers/bookingController';
import { validateBooking } from '../middleware/validateBooking';

const router = Router();

router.post('/', validateBooking, createBooking);

export default router;
