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
        origin: "http://localhost:3000",
        credentials: true, // Convertir a booleano si es necesario
    }
};

// Export the configuration object
module.exports = config;
