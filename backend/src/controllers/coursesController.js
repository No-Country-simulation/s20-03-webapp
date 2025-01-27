const courseModel = require('../db/models/courseModel');
const gradeModel = require('../db/models/gradeModel');
const responses = require('../utils/responses');

const coursesController = {
    getCourses: async (req, res) => {
        try {
            const courses = await courseModel.find().populate('grades');
            if (!courses) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(courses));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    newCourse: async (req, res) => {
        const { title, description, grades, startDate, endDate, status } = req.body;
        try {
            const newCourse = await courseModel.create({ title, description, grades, startDate, endDate, status });
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    addGrade: async (req, res) => {
        const { courseId } = req.params;
        try {
            const course = await courseModel.findById(courseId);
            res.status(responses.common.success.status).json(responses.common.payload(course));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
    remGrade: (req, res) => {
        res.status(200).json({ message: 'addGrade' });
    },
};

module.exports = coursesController;