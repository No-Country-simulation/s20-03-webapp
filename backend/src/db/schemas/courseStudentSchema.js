const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseStudentSchema = new Schema({
    studentId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    courseId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    endDate: { 
        type: Date, 
        required: false, 
        default: null 
    }
}, { timestamps: true });

// Crear índices compuestos para evitar duplicados no deseados
courseStudentSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('CourseStudent', courseStudentSchema);
