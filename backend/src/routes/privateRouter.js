const privateRouter = require('express').Router();

privateRouter.get('*', (req, res) => {
    res.send('Private route');
});

module.exports = privateRouter;