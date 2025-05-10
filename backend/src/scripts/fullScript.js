require("dotenv").config({ path: "../.env" }); // Variables de entorno
const mongoose = require("mongoose");
const UserModel = require("../db/models/userModel"); // Asegúrate de tener este modelo
const CourseModel = require("../db/models/courseModel");
const SubjectModel = require("../db/models/subjectModel");
const GradeModel = require("../db/models/gradeModel");
const AttendanceModel = require("../db/models/attendanceModel");
const dbConnection = require("../db/connection");

const createRelations = async () => {
  try {
    // Conectar a la base de datos
    await dbConnection();
    console.log("Conexión a la base de datos exitosa.");

    // Crear coordinadores
    console.log("--- Creando coordinadores ---");
    const coordinator1 = new UserModel({
      name: "Coord. Pedro",
      username: "pedro",
      password: "pedro123",
      role: "schoolAdmin",
    });
    const coordinator2 = new UserModel({
      name: "Coord. Lucas",
      username: "lucas",
      password: "lucas123",
      role: "schoolAdmin",
    });
    await coordinator1.save();
    await coordinator2.save();
    console.log("Coordinadores creados:", [
      coordinator1.name,
      coordinator2.name,
    ]);

    // Crear estudiantes
    console.log("--- Creando estudiantes ---");
    const student1 = new UserModel({
      name: "Est. Jose",
      lastname: "Ramirez",
      username: "jose",
      password: "jose123",
      dni: "36000111",
      role: "student",
    });
    const student2 = new UserModel({
      name: "Est. Maria",
      lastname: "Lopez",
      username: "maria",
      password: "maria123",
      dni: "25000111",
      role: "student",
    });
    const student3 = new UserModel({
      name: "Est. Elizabeth",
      lastname: "Garay",
      username: "elizabeth",
      password: "elizabeth123",
      dni: "41000111",
      role: "student",
    });
    await Promise.all([student1.save(), student2.save(), student3.save()]);
    console.log("Estudiantes creados:", [
      student1.name,
      student2.name,
      student3.name,
    ]);

    // Crear profesores
    console.log("--- Creando profesores ---");
    const teacher1 = new UserModel({ name: "Profe Sandro",      username: "sandro",
        password: "sandro123", role: "teacher" });
    const teacher2 = new UserModel({ name: "Profe Azariel",      username: "azariel",
        password: "azariel123", role: "teacher" });
    const teacher3 = new UserModel({ name: "Profe Eduardo",      username: "eduardo",
        password: "eduardo123", role: "teacher" });
    await Promise.all([teacher1.save(), teacher2.save(), teacher3.save()]);
    console.log("Profesores creados:", [
      teacher1.name,
      teacher2.name,
      teacher3.name,
    ]);

    // Crear cursos
    console.log("--- Creando cursos ---");
    const course1 = new CourseModel({
      name: "Course 5B",
      division: "B",
      level: "High School",
      coordinator: coordinator1._id,
    });
    const course2 = new CourseModel({
      name: "Course 6C",
      division: "C",
      level: "High School",
      coordinator: coordinator2._id,
    });

    await Promise.all([course1.save(), course2.save()]);
    console.log("Cursos creados:", [course1.name, course2.name]);

    // Crear asignaturas
    console.log("--- Creando asignaturas ---");
    const subject1 = new SubjectModel({ name: "Math", teacher: teacher1._id });
    const subject2 = new SubjectModel({
      name: "History",
      teacher: teacher2._id,
    });
    const subject3 = new SubjectModel({
      name: "Science",
      teacher: teacher3._id,
    });
    const subject4 = new SubjectModel({ name: "Music", teacher: teacher1._id });
    await Promise.all([
      subject1.save(),
      subject2.save(),
      subject3.save(),
      subject4.save(),
    ]);
    console.log("Asignaturas creadas:", [
      subject1.name,
      subject2.name,
      subject3.name,
      subject4.name,
    ]);

    // Asignar materias a cursos
    console.log("--- Asignando materias a cursos ---");
    course1.subjects.push(subject1._id, subject2._id);
    course2.subjects.push(subject2._id, subject3._id, subject4._id);
    await Promise.all([course1.save(), course2.save()]);
    console.log("Materias asignadas a los cursos con éxito.");

    // Crear asistencias
    console.log("--- Registrando asistencias ---");
    const attendance1 = new AttendanceModel({
      course: course1._id,
      subject: subject1._id,
      teacher: teacher1._id,
      students: [
        { student: student1._id, status: "present" },
        { student: student2._id, status: "absent" },
      ],
    });
    const attendance2 = new AttendanceModel({
      course: course2._id,
      subject: subject3._id,
      teacher: teacher3._id,
      students: [
        { student: student3._id, status: "present" },
        { student: student1._id, status: "present" },
      ],
    });
    await Promise.all([attendance1.save(), attendance2.save()]);
    console.log("Asistencias registradas:", [attendance1._id, attendance2._id]);

    // Crear calificaciones
    console.log("--- Registrando calificaciones ---");
    const grade1 = new GradeModel({
      course: course1._id,
      subject: subject1._id,
      teacher: teacher1._id,
      student: student1._id,
      evaluationType: "First Exam",
      score: 8,
    });
    const grade2 = new GradeModel({
      course: course2._id,
      subject: subject3._id,
      teacher: teacher3._id,
      student: student3._id,
      evaluationType: "Final Exam",
      score: 9,
    });
    const grade3 = new GradeModel({
      course: course1._id,
      subject: subject1._id,
      teacher: teacher1._id,
      student: student1._id,
      evaluationType: "Oral exam",
      score: 6,
    });
    const grade4 = new GradeModel({
      course: course1._id,
      subject: subject1._id,
      teacher: teacher1._id,
      student: student2._id,
      evaluationType: "First Exam",
      score: 7,
    });
    await Promise.all(
      [grade1.save(), grade2.save()],
      grade3.save(),
      grade4.save()
    );
    console.log("Calificaciones registradas:", [
      grade1._id,
      grade2._id,
      grade3._id,
      grade4._id,
    ]);

    // Desconectar de la base de datos
    await mongoose.disconnect();
    console.log("--- Conexión cerrada ---");
  } catch (error) {
    console.error("Error durante la creación de relaciones:", error.message);
    process.exit(1);
  }
};

createRelations();
