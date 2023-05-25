// packages
import mongoose from 'mongoose';


const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);

export default Member;