// Imports
const responses = require('../utils/responses');

// Middleware to check if the user has the correct role to access the route
const roleMiddleware = async (req, res, next) => {
    // Get the route from the URL
    const route = req.url.split('/')[1];
    // Get the role from the user object
    const { role } = req.user;
    // Check if the user has the correct role to access the route
    switch (route) {
        case 'manager':
            if (role === 'schoolAdmin') {
                return next();
            }
            break;
        case 'teacher':
            if (role === 'teacher') {
                return next();
            }
            break;
        case 'student':
            if (role === 'student') {
                return next();
            }
            break;
        case 'parent':
            if (role === 'parent') {
                return next();
            }
            break;
    }
    // Return forbidden response if the user does not have the correct role
    return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
};

// Export the middleware
module.exports = roleMiddleware;
