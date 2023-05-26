// packages
import mongoose from 'mongoose';
// models
import Book from '../models/book.js';
// utils
import { onError } from '../utils/onError.js';


// add a new book
export const addBook = async (req, res, next) => {
    try {
        const { libraryId, title, author, publication } = req.body;

        if (!libraryId || !title || !author || !publication) {
            return onError(400, 'LibraryId, title, author and publication parameter is required to add a new book.');
        }

        if (!mongoose.Types.ObjectId.isValid(libraryId)) {
            return onError(400, 'Invalid library id.');
        }

        const newBook = new Book(req.body);
        const savedBook = await newBook.save();

        if (!savedBook) {
            return onError(400, 'Failed to add new book.');
        }

        res.status(201).json(savedBook);
    } catch (error) {
        next(error);
    }
};

// get all books
export const getAllBook = async (req, res, next) => {
    try {
        const allBooks = await Book.find();

        if (!allBooks) {
            return onError(400, 'Failed to fetch books...');
        }

        if (allBooks.length === 0) {
            return onError(404, 'No books found.');
        }

        res.status(200).json(allBooks);
    } catch (error) {
        next(error);
    }
};

// get book by id
export const getBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;

        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return onError(400, 'Invalid book id.');
        }

        const book = await Book.findById(bookId);

        if (!book) {
            return onError(404, 'Book not found.');
        }

        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// update book by id
export const updateBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;

        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return onError(400, 'Invalid book id.');
        }

        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedBook) {
            return onError(400, 'Failed to update book.');
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

// delete book by id
export const deleteBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;

        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return onError(400, 'Invalid book id.');
        }

        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return onError(400, 'Failed to delete book.');
        }

        res.status(200).json(deletedBook);
    } catch (error) {
        next(error);
    }
};