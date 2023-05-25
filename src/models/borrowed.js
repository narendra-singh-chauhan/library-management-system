// packages
import mongoose from 'mongoose';


const borrowedSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    borrowedDate: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

const Borrowed = mongoose.model('Borrowed', borrowedSchema);

export default Borrowed;