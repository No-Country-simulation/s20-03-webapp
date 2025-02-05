const parentRouter = require('express').Router();
const responses = require('../../utils/responses');

parentRouter.get('/', (req, res) => {
    res.status(responses.common.success.status).json(responses.common.success);
});

parentRouter.get('*', (req, res) => {
    console.log(req.url)
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = parentRouter;