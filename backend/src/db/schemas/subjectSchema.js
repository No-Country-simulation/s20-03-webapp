const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para Subject (Materias)
const subjectSchema = new Schema({
    name: { type: String, required: true, unique: true },   // Nombre único de la materia
    description: { type: String, required: false },        // Descripción opcional
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Profesor responsable
}, { timestamps: true });

// Crear el modelo Subject
// const Subject = mongoose.model('Subject', subjectSchema);

module.exports = subjectSchema;
