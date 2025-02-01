const gradeSchema = new Schema({
    date: { type: Date, default: Date.now }, // Fecha del registro
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Curso
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }, // Asignatura
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Profesor responsable
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Estudiante
    evaluationType: { type: String, required: true }, // Tipo de evaluación (ej.: examen, trabajo)
    score: { type: Number, required: true, min: 0, max: 10 }, // Puntuación (puedes ajustar el rango)
});

module.exports = gradeSchema;
