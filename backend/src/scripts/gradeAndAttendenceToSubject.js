require('dotenv').config({ path: '../.env' }); // Variables de entorno
const mongoose = require('mongoose');
const Attendance = require('../db/models/attendanceModel');
const Grade = require('../db/models/gradeModel');
const dbConnection = require('../db/connection');

// Función para validar IDs
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id) && id.length === 24;

(async () => {
    try {
        // Conectar a la base de datos
        await dbConnection();
        console.log('Conexión a la base de datos exitosa.');

        // IDs de prueba
        const courseId = '6795544eab7c7ffbe657df39'; // ID del curso
        const subjectId = '6797ab796001f1947beb2a18'; // ID de la materia
        const teacherId = '6795544eab7c7ffbe657df3e'; // ID del profesor
        const studentId1 = '6795544eab7c7ffbe657df3f'; // ID del estudiante 1
        const studentId2 = '67968b65b19970f39d03ac2d'; // ID del estudiante 2

        // Validar todos los IDs
        if (![courseId, subjectId, teacherId, studentId1, studentId2].every(isValidObjectId)) {
            throw new Error('Uno o más IDs proporcionados no son válidos.');
        }

        // --- Registrar Asistencia ---
        console.log('--- Registrando Asistencia ---');
        const attendance = new Attendance({
            course: new mongoose.Types.ObjectId(courseId),
            subject: new mongoose.Types.ObjectId(subjectId),
            teacher: new mongoose.Types.ObjectId(teacherId),
            students: [
                { student: new mongoose.Types.ObjectId(studentId1), status: 'present' },
                { student: new mongoose.Types.ObjectId(studentId2), status: 'absent' },
            ],
        });

        await attendance.save();
        console.log('Asistencia registrada con éxito:', attendance);

        // --- Registrar Calificación ---
        console.log('--- Registrando Calificación ---');
        const grade = new Grade({
            course: new mongoose.Types.ObjectId(courseId),
            subject: new mongoose.Types.ObjectId(subjectId),
            teacher: new mongoose.Types.ObjectId(teacherId),
            student: new mongoose.Types.ObjectId(studentId1),
            evaluationType: 'Primer examen trimestral',
            score: 9,
        });

        await grade.save();
        console.log('Calificación registrada con éxito:', grade);

        // Cerrar conexión
        await mongoose.disconnect();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la creación de datos:', error.message);
    }
})();
