const mongoose = require('mongoose');
const tutorStudentSchema = require('../schemas/tutorStudentSchema');

const TutorStudentModel = mongoose.models.TutorStudent || mongoose.model('TutorStudent', tutorStudentSchema);

module.exports = TutorStudentModel;
