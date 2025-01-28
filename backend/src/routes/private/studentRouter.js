const teacherRouter = require('express').Router();
const responses = require('../../utils/responses');

teacherRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = teacherRouter;