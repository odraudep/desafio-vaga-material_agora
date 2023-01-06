import { Router } from 'express';
import { getSuperheroes } from '../controllers/superheroes';

const router = Router();

router.get('/', getSuperheroes);

export default router;
