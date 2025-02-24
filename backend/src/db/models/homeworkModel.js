const mongoose = require('mongoose');
const homeworkSchema = require('../schemas/homeworkSchema');

const homeworkModel = mongoose.model('Homework', homeworkSchema);

module.exports = homeworkModel;