// packages
import express from 'express';
// controllers
import {
    addUser,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
} from '../controllers/user.js';


const router = express.Router();

// user routes
router.route('/').post(addUser);
router.route('/').get(getAllUser);
router.route('/:userId').get(getUserById);
router.route('/:userId').patch(updateUserById);
router.route('/:userId').delete(deleteUserById);

export default router;