const subjectModel = require('../db/models/subjectModel');
const levelModel = require('../db/models/levelModel');
const courseModel = require('../db/models/courseModel');

const teacherController = {
    getTeacherSubjects: async (req, res) => {
        try {
            const teacherId = req.user.id; // ID del profesor autenticado

            // 1️⃣ Obtener las materias del profesor
            const subjects = await subjectModel.find({ teacherId }).select('title description _id');

            if (!subjects.length) {
                return res.status(404).json({ message: 'El profesor no tiene materias asignadas.' });
            }

            const subjectIds = subjects.map(sub => sub._id);

            // 2️⃣ Buscar los niveles que contienen esas materias
            const levels = await levelModel.find({ subjects: { $in: subjectIds } }).select('title subjects _id');

            if (!levels.length) {
                return res.status(404).json({ message: 'No se encontraron niveles asociados a estas materias.' });
            }

            // Crear un mapa de materias a niveles
            const levelMap = {};
            const subjectToLevelMap = {}; // Para saber a qué nivel pertenece cada materia
            levels.forEach(level => {
                level.subjects.forEach(subjectId => {
                    levelMap[level._id] = level.title; // Nivel mapeado por ID
                    subjectToLevelMap[subjectId] = level._id; // Relación materia -> nivel
                });
            });

            const levelIds = Object.keys(levelMap); // Obtener los IDs de los niveles encontrados

            // 3️⃣ Buscar los cursos que contienen esos niveles
            const courses = await courseModel.find({ levels: { $in: levelIds } }).select('title levels');

            if (!courses.length) {
                return res.status(404).json({ message: 'No se encontraron cursos asociados a estos niveles.' });
            }

            // Crear un mapa de niveles a cursos
            const courseMap = {};
            courses.forEach(course => {
                course.levels.forEach(levelId => {
                    courseMap[levelId] = course.title; // Relación nivel -> curso
                });
            });

            // 5️⃣ Construir la estructura de respuesta sin duplicados
            const subjectsTeacher = subjects.map(subject => {
                const levelId = subjectToLevelMap[subject._id]; // Obtener el ID del nivel de la materia
                const levelName = levelMap[levelId] || 'Nivel desconocido';
                const courseName = courseMap[levelId] || 'Curso desconocido';

                return {
                    title: subject.title,
                    description: subject.description,
                    level: levelName,
                    course: courseName
                };
            });

            res.json({ subjectsTeacher });
        } catch (error) {
            console.error('Error al obtener las materias del profesor:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
};

module.exports = teacherController;
