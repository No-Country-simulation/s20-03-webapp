const groupModel = require('../models/groupModel');
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
        const { title, manager, teacher, students } = req.body;
        try {
            const newGroup = await groupModel.create({ title, manager, teacher, students });
            res.status(responses.common.success.status).json(responses.common.payload(newGroup));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}

module.exports = groupsController;