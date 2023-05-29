// packages
import mongoose from 'mongoose';
import createError from 'http-errors';
// models
import Book from '../models/book.js';


// add a new book
export const addBook = async (req, res, next) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();

        if (!books) throw createError.NotFound('Failed to add a new book.');
        res.status(201).json(savedBook);
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(createError(422, error.message));
        }
        next(error);
    }
};

// get all books
export const getAllBook = async (req, res, next) => {
    try {
        const books = await Book.find();

        if (!books) throw createError.NotFound('No books found.');
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

// get book by id
export const getBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);

        if (!user) throw createError.NotFound('Book does not exist.');
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid book id.'));
        }
        next(error);
    }
};

// update book by id
export const updateBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedBook) throw createError.NotFound('Book does not exist.');
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid book id.'));
        }
        next(error);
    }
};

// delete book by id
export const deleteBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (!deletedBook) throw createError.NotFound('Book does not exist.');
        res.status(200).json(deletedBook);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid book id.'));
        }
        next(error);
    }
};