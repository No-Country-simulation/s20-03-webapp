const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const groupModel = require('../db/models/groupModel');
const attendanceModel = require('../db/models/attendanceModel');
const gradingModel = require('../db/models/gradingModel');
const responses = require('../utils/responses');
const mongoose = require('mongoose'); // Importar Mongoose


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
            const studentId = req.user.id; // ID del estudiante autenticado
            const { groupId, subjectId } = req.body; // IDs del grupo y materia
    
            // 1️⃣ Verificar si el grupo existe
            const group = await groupModel.findById(groupId);
            console.log(group)
            if (!group) {
                return res.status(404).json({ message: 'El grupo no existe.' });
            }
    
            // 2️⃣ Buscar asistencias del estudiante en esa materia
            const attendances = await attendanceModel.find({
                groupId: groupId,
                subjectId: subjectId,
                "students.student": studentId // Filtrar dentro del array de estudiantes
            })
            .populate("subjectId", "title") // Obtener solo el nombre de la materia
            .sort({ date: -1 }); // Ordenar por fecha descendente
    
            // 3️⃣ Validar si hay asistencias registradas
            if (attendances.length === 0) {
                return res.status(404).json({ message: 'No hay asistencias registradas para esta materia.' });
            }
    
            // 4️⃣ Formatear la respuesta para mostrar solo lo necesario
            const formattedAttendances = attendances.map(attendance => {
                const studentRecord = attendance.students.find(s => s.student.toString() === studentId);
                return {
                    date: attendance.date,
                    subject: attendance.subjectId.title, // Nombre de la asignatura
                    status: studentRecord ? studentRecord.status : 'unknown'
                };
            });
    
            res.json({ attendances: formattedAttendances });
    
        } catch (error) {
            console.error('Error al obtener asistencias del estudiante:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    getStudentGrading: async (req, res) => {
        try {
            const studentId = req.user.id; // ID del estudiante autenticado
            const {groupId, subjectId } = req.body; // IDs del grupo y materia
    
            // 1️⃣ Verificar si el grupo existe
            const group = await groupModel.findById(groupId);
            console.log(group)
            if (!group) {
                return res.status(404).json({ message: 'El grupo no existe.' });
            }
    
            // 2️⃣ Buscar examenes del estudiante en esa materia
            const gradings = await gradingModel.find({
                groupId: groupId,
                subjectId: subjectId,
                "students.student": studentId // Filtrar dentro del array de estudiantes
            })
            .populate("subjectId", "title") // Obtener solo el nombre de la materia
            .sort({ date: -1 }); // Ordenar por fecha descendente
    
            // 3️⃣ Validar si hay asistencias registradas
            if (gradings.length === 0) {
                return res.status(404).json({ message: 'No hay examenes y/o trabajos prácticos registradas para esta materia.' });
            }
    
            // 4️⃣ Formatear la respuesta para mostrar solo lo necesario
            const formattedGradings = gradings.map(grading => {
                const studentRecord = grading.students.find(s => s.student.toString() === studentId);
                return {
                    date: grading.date,
                    subject: grading.subjectId.title, // Nombre de la asignatura
                    grade: studentRecord ? studentRecord.grade : 'unknown'
                };
            });
    
            res.json({ gradings: formattedGradings });
    
        } catch (error) {
            console.error('Error al obtener examenes del estudiante:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    
}


module.exports = studentsController;
