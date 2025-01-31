const managerRouter = require('express').Router();
const coursesController = require('../../controllers/coursesController');
const levelsController = require('../../controllers/levelsController');
const subjectsController = require('../../controllers/subjectsController');
const groupsController = require('../../controllers/groupsController');
const responses = require('../../utils/responses');

managerRouter.get('/courses', coursesController.getCourses);

managerRouter.post('/courses/create', coursesController.newCourse);

managerRouter.post('/courses/level/add', coursesController.addLevel);

managerRouter.post('/courses/level/rem', coursesController.remLevel);

managerRouter.get('/levels', levelsController.getLevels);

managerRouter.post('/levels/create', levelsController.newLevel);

managerRouter.post('/levels/subjects/add', levelsController.addSubject);

managerRouter.get('/subjects', subjectsController.getSubjects);

managerRouter.post('/subjects/create', subjectsController.newSubject);

managerRouter.get('/groups', groupsController.getGroups);

managerRouter.get('/groups/getgroup', groupsController.getGroup);

managerRouter.post('/groups/create', groupsController.createGroup);

managerRouter.post('/groups/addstudent', groupsController.addStudent);

managerRouter.post('/groups/remstudent', groupsController.remStudent);

managerRouter.get('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = managerRouter;