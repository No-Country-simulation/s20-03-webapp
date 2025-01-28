const adminRouter = require('express').Router();
const responses = require('../../utils/responses');

adminRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = adminRouter;