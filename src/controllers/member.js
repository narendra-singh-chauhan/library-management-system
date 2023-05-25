// packages
import mongoose from 'mongoose';
// models
import Member from '../models/member.js';
// utils
import { onError } from '../utils/onError.js';


// add a new member
export const addMember = async (req, res, next) => {
    try {
        const { name, address, phone } = req.body;

        if (!name || !address || !phone) {
            return onError(400, 'Name, address and phone parameter is required to add a new book.');
        }

        const newMember = new Member(req.body);
        const savedMember = await newMember.save();

        if (!savedMember) {
            return onError(400, 'Failed to add new member.');
        }

        res.status(201).json(savedMember);
    } catch (error) {
        next(error);
    }
};

// get all members
export const getAllMember = async (req, res, next) => {
    try {
        const allMembers = await Member.find();

        if (!allMembers) {
            return onError(400, 'Failed to fetch members...');
        }

        if (allMembers.length === 0) {
            return onError(404, 'No members found.');
        }

        res.status(200).json(allMembers);
    } catch (error) {
        next(error);
    }
};

// get member by id
export const getMemberById = async (req, res, next) => {
    try {
        const memberId = req.params.memberId;

        if (!mongoose.Types.ObjectId.isValid(memberId)) {
            return onError(400, 'Invalid member id.');
        }

        const member = await Member.findById(memberId);

        if (!member) {
            return onError(404, 'Member not found.');
        }

        res.status(200).json(member);
    } catch (error) {
        next(error);
    }
};

// update member by id
export const updateMemberById = async (req, res, next) => {
    try {
        const memberId = req.params.memberId;

        if (!mongoose.Types.ObjectId.isValid(memberId)) {
            return onError(400, 'Invalid member id.');
        }

        const updatedMember = await Member.findByIdAndUpdate(memberId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedMember) {
            return onError(400, 'Failed to update member.');
        }

        res.status(200).json(updatedMember);
    } catch (error) {
        next(error);
    }
};

// delete member by id
export const deleteMemberById = async (req, res, next) => {
    try {
        const memberId = req.params.memberId;

        if (!mongoose.Types.ObjectId.isValid(memberId)) {
            return onError(400, 'Invalid member id.');
        }

        const deletedMember = await Member.findByIdAndDelete(memberId);

        if (!deletedMember) {
            return onError(400, 'Failed to delete member.');
        }

        res.status(200).json(deletedMember);
    } catch (error) {
        next(error);
    }
};