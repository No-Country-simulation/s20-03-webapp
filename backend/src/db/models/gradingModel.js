const mongoose = require('mongoose');
const gradingSchema = require('../schemas/gradingSchema');

const gradingModel = mongoose.model('Grading', gradingSchema);

module.exports = gradingModel;