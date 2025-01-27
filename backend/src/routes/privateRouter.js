const privateRouter = require('express').Router();
const managerRouter = require('./private/managerRouter');
const teacherRouter = require('./private/teacherRouter');
const studentRouter = require('./private/studentRouter');
const parentRouter = require('./private/parentRouter');
const roleMiddleware = require('../middleware/roleMiddleware');

privateRouter.use(roleMiddleware);

privateRouter.use('/manager', managerRouter);

privateRouter.use('/teacher', teacherRouter);

privateRouter.use('/student', studentRouter);

privateRouter.use('/parent', parentRouter);

module.exports = privateRouter;