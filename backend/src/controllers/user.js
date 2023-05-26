// packages
import mongoose from 'mongoose';
// models
import User from '../models/user.js';
// utils
import { onError } from '../utils/onError.js';


// add a new user
export const addUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, dob, address, role } = req.body;

        if (!firstName || !lastName || !email || !phone || !address) {
            return res.status(400).json({ error: 'firstName, lastName, email, phone, and address parameters are required to add a new user.' });
        }

        const { street, city, state, postalCode } = address;

        if (!street || !city || !state || !postalCode) {
            return res.status(400).json({ error: 'street, city, state and postalCode fields are required in address.' });
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            dob,
            address,
            role,
        });

        const savedUser = await newUser.save();

        if (!savedUser) {
            return res.status(400).json({ error: 'Failed to add a new user.' });
        }

        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
};

// get all users
export const getAllUser = async (req, res, next) => {
    try {
        const allUsers = await User.find();

        if (!allUsers) {
            return onError(400, 'Failed to fetch users...');
        }

        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

// get user by id
export const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return onError(400, 'Invalid user id.');
        }

        const user = await User.findById(userId);

        if (!user) {
            return onError(404, 'User not found.');
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// update user by id
export const updateUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return onError(400, 'Invalid user id.');
        }

        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return onError(400, 'Failed to update user.');
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// delete user by id
export const deleteUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return onError(400, 'Invalid user id.');
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return onError(400, 'Failed to delete user.');
        }

        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};