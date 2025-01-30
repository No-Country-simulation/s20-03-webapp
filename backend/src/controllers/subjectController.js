const mongoose = require('mongoose');
const attendanceModel = require('../db/models/attendanceModel');
const courseModel = require('../db/models/courseModel');
const subjectModel = require('../db/models/subjectModel');

const subjectController = {
    getAttendance: async (req, res) => {
        const attendance = await attendanceModel.find({student: req.user.id}).populate('students.student').sort({ startDate: -1 });
        console.log(attendance);
        res.json(attendance);
    },
}

module.exports = subjectController;