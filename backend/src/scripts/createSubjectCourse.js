require('dotenv').config({ path: '../.env' }); //Variables de entorno
const mongoose = require('mongoose');
const CourseModel = require('../db/models/courseModel');
const SubjectModel = require('../db/models/subjectModel');
const dbConnection = require('../db/connection');
//const courseStudentModel = require('../db/models/courseStudentModel');


// Configuración inicial
(async () => {
    try {
        // Conectar a la base de datos
        await dbConnection();

        console.log('--- Creando cursos de prueba ---');
        const course1 = new CourseModel({
            name: 'Curso 5',
            division: 'B',
            level: 'High School',
            coordinator: '64abcd1234abcd1234abcd78', // Asume que este ID es de un schoolAdmin
        });
        const course2 = new CourseModel({
            name: 'Curso 6',
            division: 'C',
            level: 'High School',
            coordinator: '64abcd1234abcd1234abcd78', // Asume que este ID es de un schoolAdmin
        });

        await course1.save();
        await course2.save();

        console.log('Cursos creados:', [course1.name, course2.name]);

        console.log('--- Creando asignaturas de prueba ---');
        const subject1 = new SubjectModel({
            name:'Matematicas',
            description: 'Contenido de la materia: Libro 2',
            teacher: '6795544eab7c7ffbe657df3e',
        });

        const subject2 = new SubjectModel({
            name:'Geografia',
            description: 'Contenido nacional',
            teacher: '6795544eab7c7ffbe657df3e',
        });

        await subject1.save();
        await subject2.save();

        console.log('Asignaturas creados:', [subject1.name, subject2.name]);

        // Asociar estudiantes a cursos (relación curso-estudiante)
        // const courseStudentModel = require('../db/models/courseStudentModel');

        console.log('--- Agregando asignaturas en los cursos ---');
        // await courseStudentModel.enrollStudent(student1._id, course1._id);
        // await courseStudentModel.enrollStudent(student2._id, course2._id);
        course1.subjects.push(subject1._id, subject2._id);
        course2.subjects.push(subject1._id);

        await course1.save();
        await course2.save();

        console.log('Asignaturas agregadas en los cursos con éxito.');

        // Finalizar conexión con la base de datos
        await mongoose.disconnect();
        console.log('Conexión con la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la creación de datos de prueba:', error.message);
        process.exit(1);
    }
})();
