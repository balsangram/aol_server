import express from 'express';
import { registerAdmin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', registerAdmin);

export default router;
