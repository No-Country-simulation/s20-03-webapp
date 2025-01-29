const studentRouter = require('express').Router();
const responses = require('../../utils/responses');
const courseController = require('../../controllers/courseController')

studentRouter.get('/courses', courseController.getCourses)


studentRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});





module.exports = studentRouter;