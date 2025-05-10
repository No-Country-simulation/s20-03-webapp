const mongoose = require('mongoose');
const courseStudentSchema = require('../schemas/courseStudentSchema');

const courseStudentModel = mongoose.model('Coursestudent', courseStudentSchema);

module.exports = courseStudentModel;
