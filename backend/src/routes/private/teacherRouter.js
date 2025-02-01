const teacherRouter = require('express').Router();
const responses = require('../../utils/responses');
const attendanceController = require('../../controllers/attendanceController');
const gradingController = require('../../controllers/gradingController');

teacherRouter.post('/attendance', attendanceController.newAttendance);
teacherRouter.post('/grading/create', gradingController.newGrading);

teacherRouter.get('/', (req, res) => {
    res.status(responses.common.success.status).json(responses.common.success);
});

teacherRouter.get('*', (req, res) => {
    console.log(req.url)
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = teacherRouter;