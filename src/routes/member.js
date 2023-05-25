// packages
import express from 'express';
// controllers
import {
    addMember,
    getAllMember,
    getMemberById,
    updateMemberById,
    deleteMemberById,
} from '../controllers/member.js';


const router = express.Router();

// member routes
router.route('/').post(addMember);
router.route('/').get(getAllMember);
router.route('/:memberId').get(getMemberById);
router.route('/:memberId').patch(updateMemberById);
router.route('/:memberId').delete(deleteMemberById);

export default router;