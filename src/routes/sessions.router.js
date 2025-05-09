import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', sessionsController.register);
router.post('/login', sessionsController.login);
router.get('/current', sessionsController.current);
router.post('/unprotected/login', sessionsController.unprotectedLogin);
router.get('/unprotected/current', sessionsController.unprotectedCurrent);

export default router;