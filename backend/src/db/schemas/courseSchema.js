const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: { type: String, required: true, unique: true }, // Ejemplo: "Primer año", "Primer grado", "1", "1º"
        division: { type: String, required: true }, // Ejemplo: "A", "B"
        level: { type: String, required: true, default: "Primaria" }, // Ejemplo: "Primaria", "Secundaria"
        coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Referencia al coordinador
        description: { type: String, default: null }, // Opcional
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
