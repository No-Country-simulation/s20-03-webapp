const mongoose = require('mongoose');
const homeworkSchema = require('../schemas/homeworkSchema');

const homeworkModel = mongoose.models.Homework || mongoose.model('Homework', homeworkSchema);

module.exports = homeworkModel;