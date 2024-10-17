import express from 'express';
import { create, getAllUsers, getOne, update, userDelete } from '../controllers/user.controller.js';


const router = express.Router();

router.post('/create', create);
router.get('/getallusers', getAllUsers);
router.get('/getoneuser/:id', getOne);
router.put('/update/:id', update);
router.delete('/delete/:id', userDelete);

export default router;