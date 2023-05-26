// packages
import mongoose from 'mongoose';
// models
import Library from '../models/library.js';
// utils
import { onError } from '../utils/onError.js';


// add a new library
export const addLibrary = async (req, res, next) => {
    try {
        const { name, location } = req.body;

        if (!name || !location) {
            return onError(400, 'Name and location parameter is required to add a new library.');
        }

        const newLibrary = new Library(req.body);
        const savedLibrary = await newLibrary.save();

        if (!savedLibrary) {
            return onError(400, 'Failed to add new library.');
        }

        res.status(201).json(savedLibrary);
    } catch (error) {
        next(error);
    }
};

// get all libraries
export const getAllLibrary = async (req, res, next) => {
    try {
        const allLibrary = await Library.find();

        if (!allLibrary) {
            return onError(400, 'Failed to fetch libraries...');
        }

        if (allLibrary.length === 0) {
            return onError(404, 'No libraries found.');
        }

        res.status(200).json(allLibrary);
    } catch (error) {
        next(error);
    }
};

// get library by id
export const getLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;

        if (!mongoose.Types.ObjectId.isValid(libraryId)) {
            return onError(400, 'Invalid library id.');
        }

        const library = await Library.findById(libraryId);

        if (!library) {
            return onError(404, 'Library not found.');
        }

        res.status(200).json(library);
    } catch (error) {
        next(error);
    }
};

// update library by id
export const updateLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;

        if (!mongoose.Types.ObjectId.isValid(libraryId)) {
            return onError(400, 'Invalid library id.');
        }

        const updatedLibrary = await Library.findByIdAndUpdate(libraryId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedLibrary) {
            return onError(400, 'Failed to update library.');
        }

        res.status(200).json(updatedLibrary);
    } catch (error) {
        next(error);
    }
};

// delete library by id
export const deleteLibraryById = async (req, res, next) => {
    try {
        const libraryId = req.params.libraryId;

        if (!mongoose.Types.ObjectId.isValid(libraryId)) {
            return onError(400, 'Invalid library id.');
        }

        const deletedLibrary = await Library.findByIdAndDelete(libraryId);

        if (!deletedLibrary) {
            return onError(400, 'Failed to delete library.');
        }

        res.status(200).json(deletedLibrary);
    } catch (error) {
        next(error);
    }
};