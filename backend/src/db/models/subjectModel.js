const mongoose = require('mongoose');
const subjectSchemaSchema = require('../schemas/subjectSchema');

const subjectModel = mongoose.model('Subject', subjectSchemaSchema);

module.exports = subjectModel;