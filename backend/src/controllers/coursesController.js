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
        const { courseId, gradeId } = req.body;
        try {
            const course = await courseModel.findById(courseId);
            const grade = await gradeModel.findById(gradeId);
            if (!course || !grade) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (course.grades.includes(gradeId)) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            course.grades.push(gradeId);
            const newCourse = await course.save();
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
    remGrade: async (req, res) => {
        const { courseId, gradeId } = req.body;
        try {
            const course = await courseModel.findById(courseId);
            const grade = await gradeModel.findById(gradeId);
            if (!course || !grade) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (!course.grades.includes(gradeId)) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            course.grades = course.grades.filter((grade) => grade._id === gradeId);
            console.log(course.grades);
            const newCourse = await course.save();
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
};

module.exports = coursesController;