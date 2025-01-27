const studentRouter = require('express').Router();
const responses = require('../../utils/responses');

studentRouter.get('/', (req, res) => {
    res.status(responses.common.success.status).json(responses.common.success);
});

studentRouter.get('*', (req, res) => {
    console.log(req.url)
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = studentRouter;