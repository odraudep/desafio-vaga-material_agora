import { Router } from 'express';
import { getSuperheroes, getSuperhero, searchSuperhero } from '../controllers/superheroes';

const router = Router();

router.get('/', getSuperheroes);
router.get('/:id', getSuperhero);
router.get('/search/:name', searchSuperhero);

export default router;
