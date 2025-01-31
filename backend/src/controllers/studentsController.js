const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const responses = require('../utils/responses');

const studentController = {
    
    getCourses: async (req, res) => {
        const { id } = req.body;
        try {
            const courses = await courseModel.findById(id);
            console.log(courses);
            if (!courses) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(courses));
        } catch (error) {
            console.error(error);
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
    getAttendances: async (req, res) => {
        const { groupId, studentId } = req.body;
        try {
            const courses = await courseModel.findById(groupId);
            console.log(courses);
            if (!courses) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(courses));
        } catch (error) {
            console.error(error);
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
}


module.exports = studentController;
