const jwt = require('jsonwebtoken');
const userModel = require('../db/models/userModel');
const responses = require('../utils/responses');

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
        }
        const match = await user.matchPassword(password);
        if (!match) {
            return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
        }
        const token = jwt.sign({ id: user._id, role: user.role }, config.auth.secret, { expiresIn: config.auth.expiresIn });
        payload = {
            id: user._id,
            fullname: user.fullname,
            role: user.role
        };
        res.cookie('token', token, { httpOnly: true });
        res.cookie('user', JSON.stringify({ username: user.username, role: user.role }), { httpOnly: true });
        res.status(responses.common.payload().status).json(responses.common.payload(payload));
    },
    register: (req, res) => {
        res.send('Register route');
    }
}

module.exports = authController;
