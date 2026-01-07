const mongoose = require('mongoose');
const attendanceSchema = require('../schemas/attendanceSchema');

const attendanceModel = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);

module.exports = attendanceModel;
