const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const responses = require('../utils/responses');

const coursesController = {
    getCourses: async (req, res) => {
        try {
            const courses = await courseModel.find().populate({
                path: 'levels',
                select: 'title description',
                populate: {
                    path: 'subjects',
                    select: 'title description',
                },
            });
            if (!courses) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(courses));
        } catch (error) {
            console.error(error);
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    newCourse: async (req, res) => {
        const { title, description, levels, startDate, endDate, status } = req.body;
        try {
            const newCourse = await courseModel.create({ title, description, levels, startDate, endDate, status });
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            if (error.code === 11000) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    addLevel: async (req, res) => {
        const { courseId, levelId } = req.body;
        try {
            const course = await courseModel.findById(courseId);
            const level = await levelModel.findById(levelId);
            if (!course || !level) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (course.levels.includes(levelId)) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            course.levels.push(levelId);
            const newCourse = await course.save();
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
    remLevel: async (req, res) => {
        const { courseId, levelId } = req.body;
        try {
            const course = await courseModel.findById(courseId);
            const level = await levelModel.findById(levelId);
            if (!course || !level) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            if (!course.grades.includes(levelId)) {
                return res.status(responses.common.notFound.status).json(responses.common.notFound);
            }
            course.levels = course.levels.filter((level) => level._id === levelId);
            const newCourse = await course.save();
            res.status(responses.common.success.status).json(responses.common.payload(newCourse));
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
        }
    },
};

module.exports = coursesController;