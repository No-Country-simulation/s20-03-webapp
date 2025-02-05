// Imports
const privateRouter = require('express').Router();
const managerRouter = require('./private/managerRouter');
const teacherRouter = require('./private/teacherRouter');
const studentRouter = require('./private/studentRouter');
const parentRouter = require('./private/parentRouter');
const roleMiddleware = require('../middleware/roleMiddleware');

// Use roleMiddleware to prevent unauthorized access
privateRouter.use(roleMiddleware);

// Routes
// schoolAdmin route
privateRouter.use('/manager', managerRouter);

// teacher route
privateRouter.use('/teacher', teacherRouter);

// student route
privateRouter.use('/student', studentRouter);

// parent route
privateRouter.use('/parent', parentRouter);

// Export the router
module.exports = privateRouter;
