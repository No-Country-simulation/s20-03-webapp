const CourseStudent = require('../schemas/courseStudentSchema');
const mongoose = require('mongoose');

class CourseStudentModel {
    /**
     * Inscribe a un estudiante en un curso.
     * @param {ObjectId} studentId - ID del estudiante.
     * @param {ObjectId} courseId - ID del curso.
     * @returns {Object} - El registro creado.
     */
    static async enrollStudent(studentId, courseId) {
        // Verificar si el estudiante ya está inscrito en el curso
        const existingEnrollment = await CourseStudent.findOne({ studentId, courseId, endDate: null });
        if (existingEnrollment) {
            throw new Error('El estudiante ya está inscrito en este curso.');
        }

        // Crear nueva inscripción
        const enrollment = new CourseStudent({ studentId, courseId });
        return await enrollment.save();
    }

    /**
     * Mueve a un estudiante a otro curso.
     * @param {ObjectId} studentId - ID del estudiante.
     * @param {ObjectId} newCourseId - ID del nuevo curso.
     * @returns {Object} - El registro actualizado.
     */
    static async moveStudent(studentId, newCourseId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            // Cerrar la inscripción actual
            const currentEnrollment = await CourseStudent.findOneAndUpdate(
                { studentId, endDate: null },
                { endDate: new Date() },
                { new: true, session }
            );

            if (!currentEnrollment) {
                throw new Error('El estudiante no está inscrito actualmente en ningún curso.');
            }

            // Inscribir al estudiante en el nuevo curso
            const newEnrollment = new CourseStudent({ studentId, courseId: newCourseId });
            await newEnrollment.save({ session });

            await session.commitTransaction();
            return newEnrollment;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    /**
     * Obtiene todos los cursos de un estudiante.
     * @param {ObjectId} studentId - ID del estudiante.
     * @returns {Array} - Lista de inscripciones del estudiante.
     */
    static async getStudentCourses(studentId) {
        return await CourseStudent.find({ studentId }).populate('courseId').sort({ startDate: -1 });
    }
}

module.exports = CourseStudentModel;
