const managerRouter = require('express').Router();
const coursesController = require('../../controllers/coursesController');
const gradesController = require('../../controllers/gradesController');
const responses = require('../../utils/responses');

managerRouter.get('/courses', coursesController.getCourses);

managerRouter.post('/courses/create', coursesController.newCourse);

managerRouter.post('/courses/:courseId/grades/add', coursesController.addGrade);

managerRouter.post('/courses/:courseId/grades/add', coursesController.remGrade);

managerRouter.get('/grades', gradesController.getGrades);

managerRouter.post('/grades/create', gradesController.newGrade);

managerRouter.post('/grades/:gradeId/subjects/add', gradesController.addSubject);

managerRouter.get('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = managerRouter;