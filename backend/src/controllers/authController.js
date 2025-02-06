const config = require('../config');
const jwt = require('jsonwebtoken');
const userModel = require('../db/models/userModel');
const responses = require('../utils/responses');

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await userModel.findOne({ username });
            if (!user) {
                return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
            }
            if (!user.active) {
                return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
            }
            const match = await user.matchPassword(password);
            if (!match) {
                return res.status(responses.auth.unauthorized.status).json(responses.auth.unauthorized);
            }
            const token = jwt.sign({ id: user._id, role: user.role }, config.auth.secret, { expiresIn: config.auth.expiresIn });
            const payload = {
                id: user._id,
                name: user.name,
                lastname: user.lastname,
                role: user.role
            };
            res.cookie('token', token, { httpOnly: true });
            res.status(responses.common.success.status).json({token, payload});
        } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError).json(responses.common.internalServerError);
        }
    },
    logout: async (req, res) => {
        res.clearCookie('token', { path: '/' }) // Elimina la cookie del navegador
        res.status(200).json({ message: 'Logout exitoso' })
    },
    register: async (req, res) => {
        try {
            const { username, password, name, lastname, birthdate, phonenumber, role, email, address, avatar} = req.body;
            const user = await userModel.create({ username, password, name, lastname, birthdate, phonenumber, role, email, address, avatar });
            const payload = {
                id: user._id,
                username: user.username,
                name: user.name,
                lastname: user.lastname,
                birthdate: user.birthdate,
                phonenumber: user.phonenumber,
                role: user.role,
                email: user.email,
                address: user.address,
                avatar: user.avatar,
                active: user.active
            };
            res.status(responses.common.success.status).json(responses.common.payload(payload));
          } catch (error) {
            console.error(error);
            res.status(responses.common.internalServerError.status).json(responses.common.internalServerError);
          }
    }
}

module.exports = authController;
