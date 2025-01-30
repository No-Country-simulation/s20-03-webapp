// Configurations and imports
const config = require('./config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');
const authRouter = require('./routes/authRouter');
const privateRouter = require('./routes/privateRouter');
const dbConnection = require('./db/connection');

// Connect to the database
dbConnection();

// Create the express app
const app = express();

// Middlewares
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

// Main routes
app.use('/auth', authRouter);
app.use('/private', authMiddleware, roleMiddleware, privateRouter);

// Start the server
app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});
