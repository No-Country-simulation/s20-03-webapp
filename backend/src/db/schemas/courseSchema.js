const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: { type: String, required: true, unique: true }, // Ejemplo: "Primer año", "Primer grado", "1", "1º"
        division: { type: String, required: true }, // Ejemplo: "A", "B", "2da", "2º"
        level: { type: String, required: true, default: "Primaria" }, // Ejemplo: "Primaria", "Secundaria"
        coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Referencia al coordinador
        description: { type: String, default: null }, // Opcional
        subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }], // Lista de materias del curso
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = courseSchema;
