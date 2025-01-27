const mongoose = require('mongoose');
const tutorStudentSchema = require('../schemas/tutorStudentSchema');

const TutorStudentModel = mongoose.model('TutorStudent', tutorStudentSchema);

module.exports = TutorStudentModel;
