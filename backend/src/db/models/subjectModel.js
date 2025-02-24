const mongoose = require('mongoose');
const subjectSchema = require('../schemas/subjectSchema');

const subjectModel = mongoose.model('Subject', subjectSchema);

module.exports = subjectModel;
