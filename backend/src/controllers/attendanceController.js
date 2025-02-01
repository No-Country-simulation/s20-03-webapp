const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const attendanceModel = require('../db/models/attendanceModel')
const responses = require('../utils/responses');

const attendanceController = {
    newAttendance: async (req, res) => {
        const { groupId, subjectId, students } = req.body;
        try {
            const attendance = await attendanceModel.create({ groupId, subjectId, students });
            console.log(attendance);
            res.status(responses.common.success.status).json(responses.common.payload(attendance));
        } catch (error) {
            if (error.code === 11000) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
};

module.exports = attendanceController;