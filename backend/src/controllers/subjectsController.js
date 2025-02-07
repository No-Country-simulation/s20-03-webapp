const subjectModel = require('../db/models/subjectModel');
const responses = require('../utils/responses');

const subjectsController = {
    getSubjects: async (req, res) => {
        try {
            const subjects = await subjectModel.find();
            if (!subjects) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(subjects));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    newSubject: async (req, res) => {
        const { title, teacherId, description } = req.body;
        try {
            const newSubject = await subjectModel.create({ title, teacherId, description });
            res.status(responses.common.success.status).json(responses.common.payload(newSubject));
        } catch (error) {
            if (error.code === 11000) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    remSubject: async (req, res) => {
        const { subjectId } = req.body;
        try {
            const result = await subjectModel.findByIdAndDelete(subjectId);
            if (!result) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            res.status(responses.common.success.status).json(responses.common.success);
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    }
}

module.exports = subjectsController;