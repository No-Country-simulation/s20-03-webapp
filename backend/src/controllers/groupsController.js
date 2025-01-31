const groupModel = require('../db/models/groupModel');
const responses = require('../utils/responses');

const groupsController = {
    getGroups: async (req, res) => {
        try {
            const groups = await groupModel.find();
            if (!groups) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound.message);
            }
            res.status(responses.common.success.status).json(responses.common.payload(groups));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getGroup: async (req, res) => {
        const { groupId } = req.body;
        try {
            const group = await groupModel.findById(groupId);
            if (!group) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound.message);
            }
            res.status(responses.common.success.status).json(responses.common.payload(group));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createGroup: async (req, res) => {
        const { title, manager, teacher, students, levelId } = req.body;
        try {
            const newGroup = await groupModel.create({ title, manager, teacher, students, levelId });
            res.status(responses.common.success.status).json(responses.common.payload(newGroup));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    addStudent: async (req, res) => {
        const { groupId, studentId } = req.body;
        try {
            const group = await groupModel.findById(groupId);
            if (!group) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound.message);
            }
            if (group.students.includes(studentId)) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict.message);
            }
            group.students.push(studentId);
            const newGroup = await group.save();
            res.status(responses.common.success.status).json(responses.common.payload(newGroup));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
    remStudent: async (req, res) => {
        const {groupId, studentId} = req.body;
        try {
            const group = await groupModel.findById(groupId);
            if (!group) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound.message);
            }
            if (!group.students.includes(studentId)) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            group.students = group.students.filter(student => !student.equals(studentId));
            const newGroup = await group.save();
            res.status(responses.common.success.status).json(responses.common.payload(newGroup));
        } catch (error) {
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    }
}

module.exports = groupsController;