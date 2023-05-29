// packages
import mongoose from 'mongoose';
import createError from 'http-errors';
// models
import Borrowed from '../models/borrowed.js';


// add a book to borrowed books
export const addBookToBorrowedBooks = async (req, res, next) => {
    try {
        const newBorrowedBook = new Borrowed(req.body);
        const savedBorrowedBook = await newBorrowedBook.save();

        if (!savedBorrowedBook) throw createError.NotFound('Failed to add a book to borrowed books.');
        res.status(200).json(savedBorrowedBook);
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(createError(422, error.message));
        }
        next(error);
    }
};

// get all borrowed books
export const getAllBorrowedBook = async (req, res, next) => {
    try {
        const borrowedBooks = await Borrowed.find();

        if (!borrowedBooks) throw createError.NotFound('No borrowed books found.');
        res.status(200).json(borrowedBooks);
    } catch (error) {
        next(error);
    }
};

// get borrowed book by id
export const getBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;
        const borrowedBook = await Borrowed.findById(borrowedBookId);

        if (!borrowedBook) throw createError.NotFound('Borrowed book does not exist.');
        res.status(200).json(borrowedBook);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid borrowed book id.'));
        }
        next(error);
    }
};

// update borrowed book by id
export const updateBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;
        const updatedBorrowedBook = await Borrowed.findByIdAndUpdate(borrowedBookId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedBorrowedBook) throw createError.NotFound('Borrowed book does not exist.');
        res.status(200).json(updatedBorrowedBook);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid borrowed book id.'));
        }
        next(error);
    }
};

// delete borrowed book by id
export const deleteBorrowedBookById = async (req, res, next) => {
    try {
        const borrowedBookId = req.params.borrowedBookId;
        const deletedBorrowedBook = await Borrowed.findByIdAndDelete(borrowedBookId);

        if (!deletedBorrowedBook) throw createError.NotFound('Borrowed book does not exist.');
        res.status(200).json(deletedBorrowedBook);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid borrowed book id.'));
        }
        next(error);
    }
};

