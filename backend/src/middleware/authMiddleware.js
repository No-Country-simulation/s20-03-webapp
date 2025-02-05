// Configurations and imports
const config = require('../config');
const jwt = require('jsonwebtoken');
const responses = require('../utils/responses');

// Middleware to check the access token
const authMiddleware = async (req, res, next) => {
    // Get the token from the cookies
    const token = req.cookies.token;
    // If the token is not present, return unauthorized
    if (!token) {
        return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
    }
    try {
        // Verify the token and set the user in the request object
        req.user = jwt.verify(token, config.auth.secret);
        next();
    } catch (error) {
        return res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
    }
};

// Export the middleware
module.exports = authMiddleware;
