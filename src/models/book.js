// packages
import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
    libraryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Library',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publication: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;