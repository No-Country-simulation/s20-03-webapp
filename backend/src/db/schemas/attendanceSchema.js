const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    date: { type: Date, default: Date.now }, // Fecha de la asistencia
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Curso
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }, // Asignatura
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Profesor responsable
    students: [
        {
            student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Estudiante
            status: { type: String, enum: ['present', 'absent', 'late'], required: true }, // Estado de asistencia
        },
    ],
});

module.exports = attendanceSchema;
