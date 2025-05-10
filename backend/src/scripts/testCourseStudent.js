require('dotenv').config({ path: "../.env" }); // Carga las variables de entorno
const mongoose = require('mongoose');
const courseStudentModel = require('../db/models/courseStudentModel');
const dbConnection = require('../db/connection');

(async () => {
    try {
        // Conectar a la base de datos
        await dbConnection();
        // console.log('Conectado a la base de datos.');

        // Datos de inscripción (IDs de ejemplo, reemplázalos con IDs válidos)
        const enrollments = [
            { studentId: '67996d4debd39a41dc215c67', courseId: '67996d4debd39a41dc215c73' },
            { studentId: '67996d4debd39a41dc215c67', courseId: '67996d4debd39a41dc215c72' },
            { studentId: '67996d4debd39a41dc215c68', courseId: '67996d4debd39a41dc215c73' },
            { studentId: '67996d4debd39a41dc215c68', courseId: '67996d4debd39a41dc215c72' },
            { studentId: '67996d4debd39a41dc215c66', courseId: '67996d4debd39a41dc215c73' },
            { studentId: '67996d4debd39a41dc215c66', courseId: '67996d4debd39a41dc215c72' },
        ];

        // Insertar todos los registros de una sola vez
        await courseStudentModel.insertMany(enrollments);
        // console.log('Estudiantes inscritos correctamente.');

    } catch (error) {
        console.error('Error durante la ejecución del script:', error.message);
    } finally {
        // Cerrar conexión a la base de datos
        await mongoose.disconnect();
        console.log('Conexión con la base de datos cerrada.');
    }
})();
