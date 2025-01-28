const privateRouter = require('express').Router();
const adminRouter = require('./private/adminRouter');
const teacherRouter = require('./private/teacherRouter');
const studentRouter = require('./private/studentRouter');
const parentRouter = require('./private/parentRouter');
const roleMiddleware = require('../middleware/roleMiddleware');
const responses = require('../utils/responses');

privateRouter.use(roleMiddleware);

privateRouter.use('/admin', adminRouter);

privateRouter.use('/teacher', teacherRouter);

privateRouter.use('/student', studentRouter);

privateRouter.use('/parent', parentRouter);

privateRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = privateRouter;