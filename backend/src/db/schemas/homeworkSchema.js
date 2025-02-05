const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeworkSchema = new Schema({
    title: {type: String, required: true},
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    endDate: { type: Date }, // Fecha de finalizacion de tarea
    description: {type: String} 
}, { timestamps: true });

module.exports = homeworkSchema;