require('dotenv').config(); // Cargar variables del archivo .env

const config = {
    server: {
        port: parseInt(process.env.SERVER_PORT),
    },
    database: {
        connectionString: process.env.MONGODB_URI,
        options: {}, // Opciones adicionales si las necesitas
    },
    auth: {
        secret: process.env.SECRET_KEY,
        expiresIn: process.env.EXPIRES_IN,
        salt: parseInt(process.env.SALT_ROUNDS),
    },
    cors: {
        origin: process.env.CORS_ORIGIN,
        credentials: process.env.CORS_CREDENTIALS === 'true', // Convertir a booleano si es necesario
    }
};

module.exports = config;
