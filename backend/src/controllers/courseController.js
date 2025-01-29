const courseStudentModel = require('../db/models/courseStudentModel')
const courseModel = require('../db/models/courseModel')

const courseController = {
    getCourses: async (req, res) => {
        const courses = await courseStudentModel.find({studentId: req.user.id}).populate('courseId').sort({ startDate: -1 })
        console.log(courses)
        res.json(courses);
    }
}

module.exports = courseController;