const studentRouter = require('express').Router();
const responses = require('../../utils/responses');
const studentsController = require('../../controllers/studentsController');

studentRouter.get('/courses', studentsController.getStudentCourses);
studentRouter.get('/attendances', studentsController.getStudentAttendances);
studentRouter.get('/gradings', studentsController.getStudentGrading);
studentRouter.get('/homeworks', studentsController.getStudentHomeworkByGroup);
studentRouter.get('/studentData', studentsController.getSubjectsHomeworksAndNotif);

studentRouter.get('*', (req, res) => {
    console.log(req.url);
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = studentRouter;