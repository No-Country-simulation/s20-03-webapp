const mongoose = require('mongoose');
const gradeSchema = require('../schemas/gradeSchema');

const gradeModel = mongoose.model('Grade', gradeSchema);

module.exports = gradeModel;
