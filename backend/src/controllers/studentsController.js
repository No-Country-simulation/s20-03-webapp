const courseModel = require("../db/models/courseModel");
const levelModel = require("../db/models/levelModel");
const subjectModel = require("../db/models/subjectModel");
const groupModel = require("../db/models/groupModel");
const attendanceModel = require("../db/models/attendanceModel");
const gradingModel = require("../db/models/gradingModel");
const homeworkModel = require("../db/models/homeworkModel");
const notificationModel = require("../db/models/notificationModel");
const userModel = require("../db/models/userModel");
const responses = require("../utils/responses");
const mongoose = require("mongoose"); // Importar Mongoose

const studentsController = {
  getSubjectsHomeworksAndNotif: async (req, res) => {
    try {
      const student = req.user.id;
  
      // Paso 1: Obtener el grupo del estudiante y sus materias
      const group = await groupModel.findOne({ students: student })
        .select("title description levelId")
        .populate({
          path: "levelId",
          select: "_id title description subjects",
          populate: {
            path: "subjects",
            select: "_id title description",
          },
        })
        .exec();
  
      if (!group) {
        return res.status(404).json({ message: "No tienes grupos asignados." });
      }
  
      const level = group.levelId;
      const subjects = level.subjects;
  
      // Paso 2: Buscar las tareas relacionadas con las materias del estudiante
      const homeworks = await homeworkModel
        .find({
          subjectId: { $in: subjects.map((subject) => subject._id) },
        })
        .select("title description endDate subjectId") // Agregamos subjectId
        .exec();
  
      // Paso 3: Buscar las notificaciones dirigidas al estudiante
      const notifications = await notificationModel
        .find({ studentId: student }) // Solo buscar para este estudiante
        .select("title message subjectId") // Seleccionamos los campos necesarios
        .populate("subjectId", "title description") // Poblar datos de la materia
        .exec();
  
      // 🔥 Revisar si los datos están correctos antes de enviarlos
      console.log("Subjects:", subjects);
      console.log("Homeworks:", homeworks);
      console.log("Notifications:", notifications);
  
      // Paso 4: Estructurar la respuesta
      res.status(200).json({
        subjects: subjects.map((subject) => ({
          _id: subject._id,
          title: subject.title,
          description: subject.description,
        })),
        homeworks: homeworks.map((hw) => ({
          _id: hw._id,
          title: hw.title,
          description: hw.description,
          endDate: hw.endDate,
          subjectId: hw.subjectId, // Para relacionarlo con subjects
        })),
        notifications: notifications.map((notification) => ({
          _id: notification._id,
          title: notification.title,
          message: notification.message,
          subject: notification.subjectId, // Ya poblado con title y description
        })),
      });
    } catch (err) {
      console.error("Error en la consulta:", err);
      res.status(500).json({ error: "Error al obtener los datos" });
    }
  }
  ,



  getStudentCourses: async (req, res) => {
    try {
      const studentId = req.user.id; // ID del estudiante autenticado

      // 1️⃣ Buscar el grupo donde el estudiante está inscrito
      // Trae (groupId, LevelId)
      const group = await groupModel
        .findOne({ students: studentId })
        .select("levelId");
      console.log(group);
      if (!group) {
        return res
          .status(404)
          .json({ message: "El estudiante no está inscrito en ningún grupo." });
      }

      // 2️⃣ Obtener el `levelId` del grupo
      const levelId = group.levelId;

      // 3️⃣ Buscar el curso que tenga este `levelId` en su array `levels`
      const course = await courseModel
        .findOne({ levels: levelId })
        .select("name division subjects");
      console.log(course);

      if (!course) {
        return res
          .status(404)
          .json({ message: "No se encontró un curso para el estudiante." });
      }

      res.json({ course });
    } catch (error) {
      console.error("Error al obtener el curso del estudiante:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getStudentAttendances: async (req, res) => {
    try {
      const studentId = req.user.id; // ID del estudiante autenticado
      const { groupId, subjectId } = req.body; // IDs del grupo y materia

      // 1️⃣ Verificar si el grupo existe
      const group = await groupModel.findById(groupId);
      console.log(group);
      if (!group) {
        return res.status(404).json({ message: "El grupo no existe." });
      }

      // 2️⃣ Buscar asistencias del estudiante en esa materia
      const attendances = await attendanceModel
        .find({
          groupId: groupId,
          subjectId: subjectId,
          "students.student": studentId, // Filtrar dentro del array de estudiantes
        })
        .populate("subjectId", "title") // Obtener solo el nombre de la materia
        .sort({ date: -1 }); // Ordenar por fecha descendente

      // 3️⃣ Validar si hay asistencias registradas
      if (attendances.length === 0) {
        return res.status(404).json({
          message: "No hay asistencias registradas para esta materia.",
        });
      }

      // 4️⃣ Formatear la respuesta para mostrar solo lo necesario
      const formattedAttendances = attendances.map((attendance) => {
        const studentRecord = attendance.students.find(
          (s) => s.student.toString() === studentId
        );
        return {
          date: attendance.date,
          subject: attendance.subjectId.title, // Nombre de la asignatura
          status: studentRecord ? studentRecord.status : "unknown",
        };
      });

      res.json({ attendances: formattedAttendances });
    } catch (error) {
      console.error("Error al obtener asistencias del estudiante:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getStudentGrading: async (req, res) => {
    try {
      const studentId = req.user.id; // ID del estudiante autenticado
      const { groupId, subjectId } = req.body; // IDs del grupo y materia

      // 1️⃣ Verificar si el grupo existe
      const group = await groupModel.findById(groupId);
      console.log(group);
      if (!group) {
        return res.status(404).json({ message: "El grupo no existe." });
      }

      // 2️⃣ Buscar examenes del estudiante en esa materia
      const gradings = await gradingModel
        .find({
          groupId: groupId,
          subjectId: subjectId,
          "students.student": studentId, // Filtrar dentro del array de estudiantes
        })
        .populate("subjectId", "title") // Obtener solo el nombre de la materia
        .sort({ date: -1 }); // Ordenar por fecha descendente

      // 3️⃣ Validar si hay asistencias registradas
      if (gradings.length === 0) {
        return res.status(404).json({
          message:
            "No hay examenes y/o trabajos prácticos registradas para esta materia.",
        });
      }

      // 4️⃣ Formatear la respuesta para mostrar solo lo necesario
      const formattedGradings = gradings.map((grading) => {
        const studentRecord = grading.students.find(
          (s) => s.student.toString() === studentId
        );
        return {
          date: grading.date,
          subject: grading.subjectId.title, // Nombre de la asignatura
          grade: studentRecord ? studentRecord.grade : "unknown",
        };
      });

      res.json({ gradings: formattedGradings });
    } catch (error) {
      console.error("Error al obtener examenes del estudiante:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getStudentHomeworkByGroup: async (req, res) => {
    try {
      const { groupId, subjectId } = req.body; // IDs del grupo y materia

      // 1️⃣ Verificar si el grupo existe
      const group = await groupModel.findById(groupId);
      console.log(group);
      if (!group) {
        return res.status(404).json({ message: "El grupo no existe." });
      }

      // 2️⃣ Buscar examenes del estudiante en esa materia
      const homeworks = await homeworkModel
        .find({ groupId: groupId })
        .sort({ date: -1 }); // Ordenar por fecha descendente

      // 3️⃣ Validar si hay asistencias registradas
      if (homeworks.length === 0) {
        return res.status(404).json({
          message: "No hay tareas pendientes para este grupo-comision.",
        });
      }

      // 4️⃣ Formatear la respuesta para mostrar solo lo necesario
      // const formattedGradings = gradings.map(grading => {
      //     const studentRecord = grading.students.find(s => s.student.toString() === studentId);
      //     return {
      //         date: grading.date,
      //         subject: grading.subjectId.title, // Nombre de la asignatura
      //         grade: studentRecord ? studentRecord.grade : 'unknown'
      //     };
      // });

      // res.json({ gradings: formattedGradings });
      res.json({ homeworks });
    } catch (error) {
      console.error("Error al obtener tareas del estudiante:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = studentsController;
