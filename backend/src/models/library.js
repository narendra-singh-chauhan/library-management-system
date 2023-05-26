// packages
import mongoose from 'mongoose';


const librarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Library = mongoose.model('Library', librarySchema);

export default Library;