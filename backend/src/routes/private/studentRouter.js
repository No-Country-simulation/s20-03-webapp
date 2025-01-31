const studentRouter = require('express').Router();
const responses = require('../../utils/responses');
const studentsController = require('../../controllers/studentsController');

studentRouter.get('/courses', studentsController.getCourses);
studentRouter.get('/attendances', studentsController.getAttendances);


studentRouter.get('*', (req, res) => {
    console.log(req.url)
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = studentRouter;