// packages
import mongoose from 'mongoose';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// models
import User from '../models/user.js';

export const registerUser = async (req, res, next) => {
    try {
        // check if user already exist or not.
        const foundUser = await User.findOne({ email: req.body.email });
        // throw error if user already exist.
        if (foundUser) {
            throw createError(400, 'User already exist.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // throw error if password not hashed.
        if (!hashedPassword) {
            throw createError(400, 'Feiled to hash the password.');
        }


        const newUser = new User({ ...req.body, password: hashedPassword });
        const savedUser = await newUser.save();
        // throw error if user does not created.
        if (!savedUser) throw createError(404, 'Failed to add a new user.');

        // generate access token 
        const accessToken = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5s' });
        const refreshToken = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1y' });

        // remove unwanted fields from the user object before sending it in the response
        const user = { ...savedUser._doc }; // Create a copy of the user object
        delete user.createdAt;
        delete user.updatedAt;
        delete user.__v;
        delete user.password;

        // send user with access and refresh token in response
        res.status(201).json({ user, accessToken, refreshToken });
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            return next(createError(422, error.message));
        }
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // check if user already exist or not.
        const foundUser = await User.findOne({ email });
        // throw error if user already exist.
        if (!foundUser) {
            throw createError(400, 'User does not exist.');
        }

        const isPasswordMatched = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordMatched) {
            throw createError(400, 'Incorrect user password.');
        }

        // generate access token 
        const accessToken = jwt.sign({ userId: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '20s' });
        const refreshToken = jwt.sign({ userId: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1y' });

        // remove unwanted fields from the user object before sending it in the response
        const user = { ...foundUser._doc }; // Create a copy of the user object
        delete user.createdAt;
        delete user.updatedAt;
        delete user.__v;
        delete user.password;

        // send user with access and refresh token in response
        res.status(201).json({ user, accessToken, refreshToken });

    } catch (error) {
        console.log(error);
        next(error);
    }
}