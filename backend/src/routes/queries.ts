import { Router } from 'express';
import { createQuery } from '../controllers/queryController';
import { validateQuery } from '../middleware/validateQuery';

const router = Router();

router.post('/', validateQuery, createQuery);

export default router;
