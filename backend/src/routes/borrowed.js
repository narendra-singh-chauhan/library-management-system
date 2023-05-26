// packages
import express from 'express';
// controllers
import {
    addBookToBorrowedBooks,
    getAllBorrowedBook,
    getBorrowedBookById,
    updateBorrowedBookById,
    deleteBorrowedBookById,
} from '../controllers/borrowed.js';


const router = express.Router();

// borrowed book routes
router.route('/').post(addBookToBorrowedBooks);
router.route('/').get(getAllBorrowedBook);
router.route('/:borrowedBookId').get(getBorrowedBookById);
router.route('/:borrowedBookId').patch(updateBorrowedBookById);
router.route('/:borrowedBookId').delete(deleteBorrowedBookById);

export default router;