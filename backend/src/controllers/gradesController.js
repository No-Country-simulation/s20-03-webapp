const gradeModel = require('../db/models/gradeModel');
const responses = require('../utils/responses');

const gradesController = {
    getGrades: async (req, res) => {
        try {
            const grades = await gradeModel.find();
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
    addSubject: (req, res) => {
        res.status(200).json({ message: 'addGrade' });
    },
};

module.exports = gradesController;