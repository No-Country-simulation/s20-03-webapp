const Schema = require('mongoose').Schema;

const gradingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: {type: Date, required: false, default: Date.now() },
    groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: false },
    students: [
        {
            student: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Estudiante
            grade: { type: String, required: true }, // Calificacion
        },
    ],
}, { timestamps: true });

module.exports = gradingSchema;