const mongoose = require('mongoose');
const courseSchema = require('../schemas/courseSchema');

const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;
