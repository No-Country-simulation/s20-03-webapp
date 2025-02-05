const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    date: { type: Date, default: Date.now }, // Fecha de la asistencia
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    students: [
        {
            student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Estudiante
            status: { type: String, enum: ['present', 'absent', 'late'], required: true }, // Estado de asistencia
        },
    ],
});

module.exports = attendanceSchema;
