import { Router } from 'express';

/**
 * This contains all the application routes
 */
const router = Router();

router.get('/', (req, res) => {
    res.render('index', { name: 'World' });
});

export default router;
