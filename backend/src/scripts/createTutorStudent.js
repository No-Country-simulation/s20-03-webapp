require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const config = require('../config'); // Cargar configuración
const User = require('../db/models/userModel'); // Modelo de usuario
const TutorStudent = require('../db/models/tutorStudentModel'); // Modelo de la relación


console.log('MONGODB_URI:', process.env.MONGODB_URI);


// Conectar a la base de datos
mongoose
  .connect(config.database.connectionString, config.database.options)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Crear un tutor, un estudiante y la relación entre ellos
const createTutorStudentRelation = async () => {
  try {
    // Crear un tutor
    const tutor = new User({
      username: 'parent1',
      password: 'securePassword123',
      name: 'John',
      lastname: 'Doe',
      role: 'parent',
      email: 'johndoe@example.com',
    });
    await tutor.save();
    console.log('Tutor created:', tutor);

    // Crear un estudiante
    const student = new User({
      username: 'student1',
      password: 'securePassword123',
      name: 'Jane',
      lastname: 'Smith',
      role: 'student',
      email: 'janesmith@example.com',
    });
    await student.save();
    console.log('Student created:', student);

    // Crear la relación en la tabla intermedia
    const relation = new TutorStudent({
      tutor: tutor._id,
      student: student._id,
    });
    await relation.save();
    console.log('Tutor-Student relation created:', relation);
  } catch (err) {
    console.error('Error creating relation:', err);
  } finally {
    // Cerrar la conexión a la base de datos
    mongoose.connection.close();
  }
};

console.log('MONGODB_URI:', process.env.MONGODB_URI);


// Ejecutar la función
createTutorStudentRelation();

console.log('MONGODB_URI:', process.env.MONGODB_URI);
