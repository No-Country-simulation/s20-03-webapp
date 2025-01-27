require('dotenv').config(); // Carga las variables de entorno
const mongoose = require('mongoose');
const CourseStudentModel = require('../models/courseStudentModel');
const dbConnection = require('../db/connections');

// Configuración inicial
(async () => {
    try {
        // Conectar a la base de datos
        await dbConnection();

        // IDs de ejemplo (reemplazar con IDs válidos de tu base de datos)
        const studentId = '64abcd1234abcd1234abcd12'; // ID del estudiante
        const courseId1 = '64abcd1234abcd1234abcd34'; // ID del curso 1
        const courseId2 = '64abcd1234abcd1234abcd56'; // ID del curso 2

        console.log('--- Probando inscribir estudiante ---');
        try {
            const enrollment = await CourseStudentModel.enrollStudent(studentId, courseId1);
            console.log('Estudiante inscrito en el curso:', enrollment);
        } catch (error) {
            console.error('Error al inscribir estudiante:', error.message);
        }

        console.log('\n--- Probando mover estudiante a otro curso ---');
        try {
            const newEnrollment = await CourseStudentModel.moveStudent(studentId, courseId2);
            console.log('Estudiante movido al nuevo curso:', newEnrollment);
        } catch (error) {
            console.error('Error al mover estudiante:', error.message);
        }

        console.log('\n--- Probando obtener todos los cursos de un estudiante ---');
        try {
            const courses = await CourseStudentModel.getStudentCourses(studentId);
            console.log('Cursos del estudiante:', courses);
        } catch (error) {
            console.error('Error al obtener cursos del estudiante:', error.message);
        }

        // Finalizar conexión con la base de datos
        await mongoose.disconnect();
        console.log('Conexión con la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la ejecución del script:', error.message);
        process.exit(1);
    }
})();
