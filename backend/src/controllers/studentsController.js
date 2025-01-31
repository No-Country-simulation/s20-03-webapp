const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const groupModel = require('../db/models/groupModel');
const responses = require('../utils/responses');


const studentsController = {
    getStudentCourses: async (req, res) => {
        try {
            const studentId = req.user.id; // ID del estudiante autenticado

            // 1️⃣ Buscar el grupo donde el estudiante está inscrito
            // Trae (groupId, LevelId)
            const group = await groupModel.findOne({ students: studentId }).select('levelId');
            console.log(group);
            if (!group) {
                return res.status(404).json({ message: 'El estudiante no está inscrito en ningún grupo.' });
            }
            
            // 2️⃣ Obtener el `levelId` del grupo
            const levelId = group.levelId;

            // 3️⃣ Buscar el curso que tenga este `levelId` en su array `levels`
            const course = await courseModel.findOne({ levels: levelId }).select('name division subjects');
            console.log(course);

            if (!course) {
                return res.status(404).json({ message: 'No se encontró un curso para el estudiante.' });
            }

            res.json({ course });
        } catch (error) {
            console.error('Error al obtener el curso del estudiante:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    getStudentAttendances: async (req, res) => {
        try {
            const studentId = req.user.id
            const courses = await groupModel.findById(groupId);
            console.log(courses);
            if (!courses) {
                return res.status(responses.common.noContent.status).json(responses.common.noContent);
            }
            res.status(responses.common.success.status).json(responses.common.payload(courses));
            res.json({ message: "Las asistencias" }); // Respuesta JSON simple
        } catch (error) {
            console.error(error);
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
    },
}


module.exports = studentsController;
