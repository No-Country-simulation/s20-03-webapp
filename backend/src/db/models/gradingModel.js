const mongoose = require('mongoose');
const gradingSchema = require('../schemas/gradingSchema');

const gradingModel = mongoose.models.Grading || mongoose.model('Grading', gradingSchema);

module.exports = gradingModel;