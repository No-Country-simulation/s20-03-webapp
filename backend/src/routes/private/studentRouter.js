const studentRouter = require('express').Router();
const responses = require('../../utils/responses');
const courseController = require('../../controllers/courseController')
const subjectController = require('../../controllers/subjectController')

studentRouter.get('/courses', courseController.getCourses);
studentRouter.get('/subjects', courseController.getSubjects);
studentRouter.get('/attendances', subjectController.getAttendance);

studentRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});





module.exports = studentRouter;