// packages
import express from 'express';
// controllers
import {
    registerUser,
    loginUser
} from '../controllers/auth.js';


const router = express.Router();

// user routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
export default router;