const mongoose = require('mongoose');
const attendanceSchema = require('../schemas/attendanceSchema');

const attendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = attendanceModel;
