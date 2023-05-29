// packages
import mongoose from 'mongoose';
import createError from 'http-errors';
// models
import User from '../models/user.js';


// add a new user
export const addUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        if (!savedUser) throw createError(404, 'Failed to add a new user.');
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(createError(422, error.message));
        }
        next(error);
    }
};

// get all users
export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        if (!users) throw createError.NotFound('No users found.');
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// get user by id
export const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) throw createError.NotFound('User does not exist.');
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid user id.'));
        }
        next(error);
    }
};

// update user by id
export const updateUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) throw createError(404, 'User does not exist.');
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid user id.'));
        }
        next(error);
    }
};

// delete user by id
export const deleteUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) throw createError(404, 'User does not exist.');
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.CastError) {
            return next(createError(400, 'Invalid user id.'));
        }
        next(error);
    }
};