const courseModel = require('../db/models/courseModel');
const levelModel = require('../db/models/levelModel');
const subjectModel = require('../db/models/subjectModel');
const groupModel = require('../db/models/groupModel');
const attendanceModel = require('../db/models/attendanceModel');
const gradingModel = require('../db/models/gradingModel');
const homeworkModel = require('../db/models/homeworkModel');
const responses = require('../utils/responses');
const mongoose = require('mongoose'); // Importar Mongoose


const teacherController = {
    getTeacherSubjects: async (req, res) => {
        try {
            const teacherId = req.user.id; // ID del profesor autenticado

            // Buscar todas las materias donde el profesor esté asignado
            const subjects = await subjectModel.find({ teacherId: teacherId }).select('title description'); // Selecciona title y description
            console.log(subjects); // Verifica en consola la respuesta

            if (!subjects || subjects.length === 0) {
                return res.status(404).json({ message: 'El profesor no posee materias a su cargo en ningún grupo.' });
            }

            res.json({ subjects });
        } catch (error) {
            console.error('Error al obtener las materias del profesor:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
}


module.exports = teacherController;
