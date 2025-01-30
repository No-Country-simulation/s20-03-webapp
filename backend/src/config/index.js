// App configuration
const config = {
    server: {
        port: parseInt(process.env.SERVER_PORT),
    },
    database: {
        connectionString: process.env.MONGODB_URI,
        options: {},
    },
    auth: {
        secret: process.env.SECRET_KEY,
        expiresIn: process.env.EXPIRES_IN,
        salt: parseInt(process.env.SALT_ROUNDS),
    },
    cors: {
        origin: process.env.CORS_ORIGIN,
        credentials: process.env.CORS_CREDENTIALS,
    }
};

// Export the configuration object
module.exports = config;
