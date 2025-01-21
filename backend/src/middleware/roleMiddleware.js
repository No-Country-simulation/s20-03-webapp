const responses = require('../utils/responses');

const roleMiddleware = async (req, res, next) => {
    const route = req.url.split('/')[1];
    const { role } = req.user;
    switch (route) {
        case 'manager':
            if (role !== 'manager') {
                return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
            };
            return next();
        case 'teacher':
            if (role !== 'teacher') {
                return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
            };
            return next();
        case 'student':
            if (role !== 'student') {
                return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
            };
            return next();
        case 'parent':
            if (role !== 'parent') {
                return res.status(responses.auth.forbidden.status).json(responses.auth.forbidden);
            };
            return next();
        default:
            return res.status(responses.common.notImplemented.status).json(responses.common.notImplemented);
    };
};

module.exports = roleMiddleware;
