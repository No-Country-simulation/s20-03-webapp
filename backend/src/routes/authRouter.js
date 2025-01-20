const authRouter = require('express').Router();

authRouter.get('*', (req, res) => {
    res.send('Auth route');
});

module.exports = authRouter;