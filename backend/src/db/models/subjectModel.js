const mongoose = require('mongoose');
const subjectSchema = require('../schemas/subjectSchema');

const subjectModel = mongoose.models.Subject || mongoose.model('Subject', subjectSchema);

module.exports = subjectModel;
