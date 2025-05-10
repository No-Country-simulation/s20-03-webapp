const config = require('../config');
const jwt = require('jsonwebtoken');
const responses = require('../utils/responses');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
    }
    try {
        req.user = jwt.verify(token, config.auth.secret);
        next();
    } catch (error) {
        console.error(error);
        return res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
    }
};

module.exports = authMiddleware;
