// packages
import express from 'express';
// controllers
import {
    addBook,
    getAllBook,
    getBookById,
    updateBookById,
    deleteBookById,
} from '../controllers/book.js';


const router = express.Router();

// book routes
router.route('/').post(addBook);
router.route('/').get(getAllBook);
router.route('/:bookId').get(getBookById);
router.route('/:bookId').patch(updateBookById);
router.route('/:bookId').delete(deleteBookById);

export default router;