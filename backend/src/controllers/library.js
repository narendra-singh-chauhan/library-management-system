// packages
import mongoose from 'mongoose';
import createError from 'http-errors';
// models
import Library from '../models/library.js';


// add a new library
export const addLibrary = async (req, res, next) => {
    try {
        const newLibrary = new Library(req.body);
        const savedLibrary = await newLibrary.save();

        if (!savedLibrary) throw createError(404, 'Failed to add a new library.');
        res.status(201).json(savedLibrary);
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(createError(422, error.message));
        }
        next(error);
    }
};

// get all libraries
export const getAllLibrary = async (req, res, next) => {
    try {
        const allLibrary = await Library.find();

        if (!allLibrary) throw createError(404, 'No libraries found.');
        res.status(200).json(allLibrary);
    } catch (error) {
        next(error);
    }
};

// get library by id
export const getLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;
        const library = await Library.findById(libraryId);

        if (!library) throw createError(404, 'Library does not exist.');
        res.status(200).json(library);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid library id.'));
        }
        next(error);
    }
};

// update library by id
export const updateLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;
        const updatedLibrary = await Library.findByIdAndUpdate(libraryId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedLibrary) throw createError(404, 'Library does not exist.');
        res.status(200).json(updatedLibrary);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid library id.'));
        }
        next(error);
    }
};

// delete library by id
export const deleteLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;
        const deletedLibrary = await Library.findByIdAndDelete(libraryId);

        if (!deletedLibrary) throw createError(404, 'Library does not exist.');

        res.status(200).json(deletedLibrary);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid library id.'));
        }
        next(error);
    }
};