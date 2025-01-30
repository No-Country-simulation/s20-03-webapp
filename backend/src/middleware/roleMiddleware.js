const responses = require('../utils/responses');

const roleMiddleware = async (req, res, next) => {
    const route = req.url.split('/')[1];
    const { role } = req.user;
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
    return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
};

module.exports = roleMiddleware;
