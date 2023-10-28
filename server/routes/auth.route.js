import express from 'express';
import {
  LoginController,
  RegisterController,
} from '../controllers/auth.controller.js';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

//Register User
router.post('/register', RegisterController);

//Login User

router.post('/login', LoginController);

export default router;
