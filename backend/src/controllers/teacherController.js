const subjectModel = require("../db/models/subjectModel");
const levelModel = require("../db/models/levelModel");
const courseModel = require("../db/models/courseModel");
const notificationModel = require("../db/models/notificationModel");
const homeworkModel = require("../db/models/homeworkModel");

const teacherController = {
  getSubjectsHomeworksAndNotif: async (req, res) => {
    try {
      // Paso 1: Obtener los subjects (materias) a cargo del profesor autenticado
      const subjects = await subjectModel
        .find({ teacherId: { $exists: true, $eq: req.user.id} })
        .exec();

      if (subjects.length === 0) {
        return res
          .status(404)
          .json({ message: "No tienes materias asignadas." });
      }

      // Paso 2: Buscar las tareas relacionadas con las materias del profesor
      const homeworks = await homeworkModel
        .find({
          subjectId: { $in: subjects.map((subject) => subject._id) },
        })
        .exec();

      // Paso 3: Buscar las notificaciones relacionadas con las materias y los estudiantes
      const notifications = await notificationModel
        .find({
          subjectId: { $in: subjects.map((subject) => subject._id) },
        })
        .populate("studentId", "name lastname") // Poblar el estudiante para obtener el nombre y apellido
        .exec();

      // Paso 4: Formatear la respuesta
      const result = subjects.map((subject) => {
        // Filtrar las tareas y notificaciones relacionadas con la materia
        const subjectHomeworks = homeworks.filter(
          (hw) => hw.subjectId.toString() === subject._id.toString()
        );
        const subjectNotifications = notifications.filter(
          (notification) =>
            notification.subjectId.toString() === subject._id.toString()
        );

        return {
          title: subject.title,
          description: subject.description,
          homeworks: subjectHomeworks.length
            ? subjectHomeworks.map((hw) => ({
                title: hw.title,
                description: hw.description,
                endDate: hw.endDate,
              }))
            : [], // Asegurarse de que esté vacío si no tiene tareas
          notifications: subjectNotifications.length
            ? subjectNotifications.map((notification) => ({
                title: notification.title,
                message: notification.message,
                studentName: `${notification.studentId.name} ${notification.studentId.lastname}`,
                subjectTitle: subject.title,
              }))
            : [], // Asegurarse de que esté vacío si no tiene notificaciones
        };
      });
      console.log(subjects);
      res.status(200).json({ subjects: result });
    } catch (err) {
      console.error("Error en la consulta:", err);
      res.status(500).json({ error: "Error al obtener los datos" });
    }
  },

  newNotification: async (req, res) => {
    try {
      const { title, subjectId, studentId, message } = req.body;
      const teacherId = req.user.id; // Se asume que el teacher está autenticado

      if (!subjectId || !studentId || !message || !title) {
        return res
          .status(400)
          .json({ message: "Todos los campos son requeridos." });
      }

      const newNotification = new notificationModel({
        title,
        subjectId,
        teacherId,
        studentId,
        message,
      });

      await newNotification.save();

      res.status(201).json({
        message: "Notificación creada exitosamente.",
        notification: newNotification,
      });
    } catch (error) {
      console.error("Error al crear la notificación:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  newNotification: async (req, res) => {
    try {
      const { title, subjectId, studentId, message } = req.body;
      const teacherId = req.user.id; // Se asume que el teacher está autenticado

      if (!subjectId || !studentId || !message || !title) {
        return res
          .status(400)
          .json({ message: "Todos los campos son requeridos." });
      }

      const newNotification = new notificationModel({
        title,
        subjectId,
        teacherId,
        studentId,
        message,
      });

      await newNotification.save();

      res.status(201).json({
        message: "Notificación creada exitosamente.",
        notification: newNotification,
      });
    } catch (error) {
      console.error("Error al crear la notificación:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = teacherController;
