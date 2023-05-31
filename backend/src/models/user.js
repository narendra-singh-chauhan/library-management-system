// packages
import mongoose from 'mongoose';


// address schema
const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
}, { _id: false });

// user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        default: null,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'librarian', 'admin'],
        default: 'user',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;