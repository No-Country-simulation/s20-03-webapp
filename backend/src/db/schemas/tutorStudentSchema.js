const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorStudentSchema = new Schema(
  {
    tutor: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    student: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TutorStudent', tutorStudentSchema);
