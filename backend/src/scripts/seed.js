// scripts/seed.js
require('dotenv').config(); // Carga las variables de entorno (DB URL, SALT, etc.)
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

// IMPORTANTE: Ajusta estas rutas a donde realmente están tus modelos
const User = require('../../src/db/models/userModel');
const Grade = require('../../src/db/models/gradeModel');
// Asumo que tienes estos modelos creados, si no, coméntalos y la parte de notas
const Course = require('../../src/db/models/courseModel'); 
const Subject = require('../../src/db/models/subjectModel');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/classrun';

// Función auxiliar para elegir random de un array
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('🔌 Conectado a la DB...');

    // 1. LIMPIEZA (Borrar todo lo anterior)
    await Promise.all([
      User.deleteMany({}),
      Grade.deleteMany({}),
      Course.deleteMany({}),
      Subject.deleteMany({})
    ]);
    console.log('🧹 Base de datos limpia.');

    // 2. CREAR CURSOS Y MATERIAS (Necesarios para las notas)
    // Crear Cursos (Ej: 1A, 2B)
    const coursesData = ['1ro A', '2do B', '3ro C', '4to A'].map(c => ({ title: c })); // Ajusta al schema de Course
    const courses = await Course.insertMany(coursesData);
    console.log(`📚 ${courses.length} Cursos creados.`);

    // Crear Materias (Ej: Matematicas, Historia)
    const subjectsData = ['Matemáticas', 'Historia', 'Lengua', 'Inglés', 'Física'].map(s => ({ title: s })); // Ajusta al schema de Subject
    const subjects = await Subject.insertMany(subjectsData);
    console.log(`📖 ${subjects.length} Materias creadas.`);

    // 3. CREAR USUARIOS (Usando un loop para que corra el pre-save hook de bcrypt)
    
    // --- USUARIO DEMO (Admin) ---
    const admin = new User({
      username: 'admin_demo',
      password: '123456', // El pre-save hook lo hasheará
      name: 'Director',
      lastname: 'Principal',
      dni: '11111111',
      phonenumber: '123456789',
      role: 'schoolAdmin',
      email: 'admin@classrun.com',
      address: faker.location.streetAddress(),
      active: true
    });
    await admin.save();
    console.log('👤 Usuario Admin Demo creado.');

    // --- NUEVO: PROFESOR DEMO FIJO ---
    const demoTeacher = new User({
      username: 'teacher_demo', // Usuario fijo
      password: '123456',
      name: 'Profe',
      lastname: 'Demo',
      dni: '22222222',
      phonenumber: '123456789',
      role: 'teacher',
      email: 'teacher@demo.com', // Email fijo
      address: 'Calle Falsa 123',
      active: true
    });
    await demoTeacher.save();
    console.log('👨‍🏫 Profesor Demo creado (teacher@demo.com).');

    // --- PROFESORES ---
    const teachers = [];
    for (let i = 0; i < 5; i++) {
      const teacher = new User({
        username: faker.internet.userName() + '_prof',
        password: '123456',
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        dni: faker.string.numeric(8),
        phonenumber: faker.phone.number(),
        role: 'teacher',
        email: faker.internet.email(),
        address: faker.location.streetAddress()
      });
      await teacher.save();
      teachers.push(teacher);
    }
    console.log(`👨‍🏫 5 Profesores creados.`);

    // --- NUEVO: ALUMNO DEMO FIJO ---
    const demoStudent = new User({
      username: 'student_demo', // Usuario fijo
      password: '123456',
      name: 'Alumno',
      lastname: 'Visitante',
      dni: '33333333',
      phonenumber: '987654321',
      role: 'student',
      email: 'student@demo.com', // Email fijo
      address: 'Avenida Siempre Viva 742',
      active: true
    });
    await demoStudent.save();
    console.log('👨‍🎓 Alumno Demo creado (student@demo.com).');

    // --- ALUMNOS ---
    const students = [];
    for (let i = 0; i < 20; i++) {
      const student = new User({
        username: faker.internet.userName() + '_alum',
        password: '123456',
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        dni: faker.string.numeric(8),
        phonenumber: faker.phone.number(),
        role: 'student',
        email: faker.internet.email(),
        address: faker.location.streetAddress()
      });
      await student.save();
      students.push(student);
    }
    console.log(`👨‍🎓 20 Alumnos creados.`);

    // 4. CREAR NOTAS (Grades) - Aquí es donde unimos todo
    const gradesData = [];

    // Para cada alumno, le creamos 3 notas aleatorias
    for (const student of students) {
      for (let k = 0; k < 3; k++) {
        gradesData.push({
          course: random(courses)._id,
          subject: random(subjects)._id,
          teacher: random(teachers)._id,
          student: student._id,
          evaluationType: random(['Examen', 'Trabajo Práctico', 'Oral']),
          score: faker.number.int({ min: 1, max: 10 }),
          date: faker.date.past()
        });
      }
    }

    await Grade.insertMany(gradesData);
    console.log(`📝 ${gradesData.length} Notas cargadas.`);

    console.log('✅ ¡Todo listo! Base de datos poblada para el portfolio.');
    process.exit();

  } catch (error) {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }
};

seedDatabase();