const mongoose = require('mongoose');
const gradeSchema = require('../schemas/gradeSchema');

const gradeModel = mongoose.models.Grade || mongoose.model('Grade', gradeSchema);

module.exports = gradeModel;
