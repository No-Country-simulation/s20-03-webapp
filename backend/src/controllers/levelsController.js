const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const responses = require('../utils/responses');
const courseModel = require("../db/models/courseModel");

const levelsController = {
    getLevels: async (req, res) => {
        try {
            const levels = await levelModel.find().populate({
                path: 'subjects',
                select: 'title description',
            });
            if (!levels) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(levels));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    newLevel: async (req, res) => {
        const { title, description, subjects, startDate, endDate, status } = req.body;
        try {
            const newLevel = await levelModel.create({ title, description, subjects, startDate, endDate, status });
            res.status(201).json(responses.common.payload(newLevel));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    addSubject: async (req, res) => {
        const { levelId, subjectId } = req.body;
        try {
            const level = await levelModel.findById(levelId);
            const subject = await subjectModel.findById(subjectId);
            if (!level || !subject) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (level.subjects .includes(subjectId)) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            level.subjects.push(subjectId);
            const newLevel = await level.save();
            res.status(responses.common.success.status).json(responses.common.payload(newLevel));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
};

module.exports = levelsController;