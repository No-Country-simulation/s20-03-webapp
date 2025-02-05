const mongoose = require('mongoose');
const gradeSchema = require('../schemas/gradeSchema');

const gradeModel = mongoose.model('User', gradeSchema);

module.exports = gradeModel;
