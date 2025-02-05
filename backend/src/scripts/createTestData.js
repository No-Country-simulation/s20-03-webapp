require('dotenv').config({ path: '../.env' }); //Variables de entorno
const mongoose = require('mongoose');
const CourseModel = require('../db/models/courseModel');
const UserModel = require('../db/models/userModel');
const dbConnection = require('../db/connection');

// Configuración inicial
(async () => {
    try {
        // Conectar a la base de datos
        await dbConnection();

        console.log('--- Creando cursos de prueba ---');
        const course1 = new CourseModel({
            name: 'Curso 1A',
            grade: '1',
            section: 'A',
            coordinator: '64abcd1234abcd1234abcd78', // Asume que este ID es de un schoolAdmin
        });
        const course2 = new CourseModel({
            name: 'Curso 2C',
            grade: '2',
            section: 'C',
            coordinator: '64abcd1234abcd1234abcd78', // Asume que este ID es de un schoolAdmin
        });

        await course1.save();
        await course2.save();

        console.log('Cursos creados:', [course1.name, course2.name]);

        console.log('--- Creando estudiantes de prueba ---');
        const student1 = new UserModel({
            username: 'student1',
            password: 'password123',
            name: 'Juan',
            lastname: 'Pérez',
            role: 'student',
            email: 'juan.perez@example.com',
        });

        const student2 = new UserModel({
            username: 'student2',
            password: 'password123',
            name: 'Ana',
            lastname: 'García',
            role: 'student',
            email: 'ana.garcia@example.com',
        });

        await student1.save();
        await student2.save();

        console.log('Estudiantes creados:', [student1.username, student2.username]);

        // Asociar estudiantes a cursos (relación curso-estudiante)
        const courseStudentModel = require('../db/models/courseStudentModel');

        console.log('--- Inscribiendo estudiantes en los cursos ---');
        await courseStudentModel.enrollStudent(student1._id, course1._id);
        await courseStudentModel.enrollStudent(student2._id, course2._id);

        console.log('Estudiantes inscritos en los cursos con éxito.');

        // Finalizar conexión con la base de datos
        await mongoose.disconnect();
        console.log('Conexión con la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la creación de datos de prueba:', error.message);
        process.exit(1);
    }
})();
