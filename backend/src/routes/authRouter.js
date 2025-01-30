// Imports
const authRouter = require('express').Router();
const authController = require('../controllers/authController');
const responses = require('../utils/responses');

// Routes
// Login route
authRouter.post('/login', authController.login);

// Register route
authRouter.post('/register', authController.register);

// Fallback route
authRouter.get('*', (req, res) => {
    res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
});

// Export the router
module.exports = authRouter;
