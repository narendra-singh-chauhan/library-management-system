// packages
import mongoose from 'mongoose';
// models
import Borrowed from '../models/borrowed.js';
// utils
import { onError } from '../utils/onError.js';


// add a book to borrowed books
export const addBookToBorrowedBooks = async (req, res, next) => {
    try {
        const { bookId, userId, borrowedDate, dueDate } = req.body;

        if (!bookId || !userId || !borrowedDate || !dueDate) {
            return onError(400, 'BookId, userId, borrowedDate and dueDate parameter is required to add a new library.');
        }

        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return onError(400, 'Invalid book id.');
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return onError(400, 'Invalid user id.');
        }

        const newBorrowedBook = new Borrowed({ bookId, userId, borrowedDate, dueDate });
        const savedBorrowedBook = await newBorrowedBook.save();

        if (!savedBorrowedBook) {
            return onError(400, 'Error while adding book to borrowed books.');
        }

        res.status(200).json(savedBorrowedBook);
    } catch (error) {
        next(error);
    }
};

// get all borrowed books
export const getAllBorrowedBook = async (req, res, next) => {
    try {
        const borrowedBooks = await Borrowed.find();

        if (!borrowedBooks) {
            return onError(400, 'Error while fetching borrowed books.');
        }

        res.status(200).json(borrowedBooks);
    } catch (error) {
        next(error);
    }
};

// get borrowed book by id
export const getBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;

        if (!borrowedBookId) {
            return onError(400, 'Borrowed book id is required.');
        }

        if (!mongoose.Types.ObjectId.isValid(borrowedBookId)) {
            return onError(400, 'Invalid borrowed book id.');
        }

        const BorrowedBook = await Borrowed.findById(borrowedBookId);

        if (!BorrowedBook) {
            return onError(400, 'Failed to get the borrowed book.');
        }

        res.status(200).json(BorrowedBook);
    } catch (error) {
        next(error);
    }
};

// update borrowed book by id
export const updateBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;

        if (!borrowedBookId) {
            return onError(400, 'Borrowed book id is required.');
        }

        if (!mongoose.Types.ObjectId.isValid(borrowedBookId)) {
            return onError(400, 'Invalid borrowed book id.');
        }

        const updatedBorrowedBook = await Borrowed.findByIdAndUpdate(borrowedBookId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedBorrowedBook) {
            return onError(400, 'Failed to update the borrowed book.');
        }

        res.status(200).json(updatedBorrowedBook);
    } catch (error) {
        next(error);
    }
};

// delete borrowed book by id
export const deleteBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;

        if (!borrowedBookId) {
            return onError(400, 'Borrowed book id is required.');
        }

        if (!mongoose.Types.ObjectId.isValid(borrowedBookId)) {
            return onError(400, 'Invalid borrowed book id.');
        }

        const deletedBorrowedBook = await Borrowed.findByIdAndDelete(borrowedBookId);

        if (!deletedBorrowedBook) {
            return onError(400, 'Failed to delete the borrowed book.');
        }

        res.status(200).json(deletedBorrowedBook);
    } catch (error) {
        next(error);
    }
};

