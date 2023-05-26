// packages
import express from 'express';
// controllers
import {
    addLibrary,
    getAllLibrary,
    getLibraryById,
    updateLibraryById,
    deleteLibraryById,
} from '../controllers/library.js';


const router = express.Router();

// library routes
router.route('/').post(addLibrary);
router.route('/').get(getAllLibrary);
router.route('/:libraryId').get(getLibraryById);
router.route('/:libraryId').patch(updateLibraryById);
router.route('/:libraryId').delete(deleteLibraryById);

export default router;