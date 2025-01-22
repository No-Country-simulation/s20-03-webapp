const authRouter = require('express').Router();
const authController = require('../controllers/authController');
const responses = require('../utils/responses');

authRouter.post('/login', authController.login);

authRouter.post('/register', authController.register);

authRouter.get('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

module.exports = authRouter;
