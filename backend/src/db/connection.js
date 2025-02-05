// Configurations and imports
const config = require('../config');
const mongoose = require('mongoose');

// Connect to the database
const dbConnection = async () => {
    try {
        await mongoose.connect(config.database.connectionString, config.database.options);
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database: ', error);
        process.exit(1);
    }
};

// Export the function
module.exports = dbConnection;
