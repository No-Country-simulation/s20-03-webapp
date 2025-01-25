const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del curso
const courseSchema = new Schema({
    name: { type: String, required: true },
    grade: { type: String, required: true },
    section: { type: String, required: true },
    coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Crear y exportar el modelo de curso
const Course = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
