const parentRouter = require('express').Router();
const responses = require('../../utils/responses');

parentRouter.all('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = parentRouter;