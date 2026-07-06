import { Router } from 'express';
import { requestAccountDeletion } from '../controllers/accountDeletionController';

const router = Router();

router.post('/', requestAccountDeletion);

export default router;
