const gradeModel = require('../db/models/gradeModel');
const subjectModel = require('../db/models/subjectModel');
const responses = require('../utils/responses');
const courseModel = require("../db/models/courseModel");

const gradesController = {
    getGrades: async (req, res) => {
        try {
            const grades = await gradeModel.find().populate({
                path: 'subjects',
                select: 'title description',
            });
            if (!grades) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(grades));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    newGrade: async (req, res) => {
        const { title, description, subjects, startDate, endDate, status } = req.body;
        try {
            const newGrade = await gradeModel.create({ title, description, subjects, startDate, endDate, status });
            res.status(201).json(responses.common.payload(newGrade));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    addSubject: async (req, res) => {
        const { gradeId, subjectId } = req.body;
        try {
            const grade = await gradeModel.findById(gradeId);
            const subject = await subjectModel.findById(subjectId);
            if (!grade || !subject) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (grade.subjects .includes(subjectId)) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            grade.subjects.push(subjectId);
            const newGrade = await grade.save();
            res.status(responses.common.success.status).json(responses.common.payload(newGrade));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
};

module.exports = gradesController;