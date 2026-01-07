const User = require('../db/models/userModel');

const getAllUsers = async (req, res) => {
    try {
        console.log("Solicitud recibida: Obteniendo todos los usuarios...");

        const users = await User.find({}).select('-password');

        console.log(`Encontrados ${users.length} usuarios.`);
        res.status(200).json(users);

    } catch (error) {

        console.error(" Error al buscar usuarios:", error);
        res.status(500).json({message: "Error interno del servidor" });

    }

};

module.exports = {
        getAllUsers
    };