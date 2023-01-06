import { Router } from 'express';
import superheroes from './superheroes';

const router = Router();

router.use('/superheroes', superheroes);

router.get('/', (req, res) => {
  res.json({ message: 'This is home' });
});

router.all('*', (req, res) => {
  res
    .status(404)
    .json({
      message: `Cannot ${req.method} ${req.path}`,
    });
});

export default router;
