import express from 'express';
import { create, getallusers } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create', create);
router.get('/getallusers', getallusers);

export default router;