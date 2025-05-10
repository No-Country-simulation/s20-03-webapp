const mongoose = require('mongoose');
const courseStudentModel = require('../db/models/courseStudentModel')
const courseModel = require('../db/models/courseModel')
const subjectModel = require('../db/models/subjectModel');

const courseController = {
    getCourses: async (req, res) => {
        const courses = await courseStudentModel.find({studentId: req.user.id}).populate({
            path:'courseId',
            select: 'name subjects -_id',
            populate: {
                path: 'subjects', 
                select: 'name -_id'
            }
        },).sort({ startDate: -1 })
        console.log(courses)
        res.json(courses);
    },
    getSubjects : async (req, res) => {
        try {
            const studentId = req.user.id;
    
            // Obtener los cursos en los que está inscrito el estudiante usando "studentId" y "courseId"
            const enrolledCourses = await courseStudentModel.find({ studentId }).select('courseId');
    
            console.log('Cursos encontrados:', enrolledCourses);
    
            if (enrolledCourses.length === 0) {
                return res.status(404).json({ message: 'No estás inscrito en ningún curso.' });
            }
    
            // Extraer los IDs de los cursos correctamente
            const courseIds = enrolledCourses.map(enrollment => enrollment.courseId).filter(Boolean);
    
            // console.log('IDs de cursos encontrados:', courseIds);
    
            // Buscar los cursos y sus asignaturas
            const coursesWithSubjects = await courseModel.find({ _id: { $in: courseIds } })
                .select('name subjects')
                .populate('subjects', 'name');    
            // console.log('Cursos con asignaturas:', coursesWithSubjects);
            const formattedResponse = coursesWithSubjects.map(course => ({
                [course.name]: course.subjects.map(subject => subject.name)
            }));
            
    
            // res.json({ courses: coursesWithSubjects });
            res.json({ courses: formattedResponse });
        } catch (error) {
            console.error('Error al obtener asignaturas:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
        getSubjects : async (req, res) => {
        try {
            const studentId = req.user.id;
    
            // Obtener los cursos en los que está inscrito el estudiante usando "studentId" y "courseId"
            const enrolledCourses = await courseStudentModel.find({ studentId }).select('courseId');
    
            console.log('Cursos encontrados:', enrolledCourses);
    
            if (enrolledCourses.length === 0) {
                return res.status(404).json({ message: 'No estás inscrito en ningún curso.' });
            }
    
            // Extraer los IDs de los cursos correctamente
            const courseIds = enrolledCourses.map(enrollment => enrollment.courseId).filter(Boolean);
    
            // console.log('IDs de cursos encontrados:', courseIds);
    
            // Buscar los cursos y sus asignaturas
            const coursesWithSubjects = await courseModel.find({ _id: { $in: courseIds } })
                .select('name subjects')
                .populate('subjects', 'name');    
            // console.log('Cursos con asignaturas:', coursesWithSubjects);
            const formattedResponse = coursesWithSubjects.map(course => ({
                [course.name]: course.subjects.map(subject => subject.name)
            }));
            
    
            // res.json({ courses: coursesWithSubjects });
            res.json({ courses: formattedResponse });
        } catch (error) {
            console.error('Error al obtener asignaturas:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }


}


module.exports = courseController;