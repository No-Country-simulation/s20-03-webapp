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
// CORS configuration to allow requests from frontend
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

// Main routes
app.use('/auth', authRouter);
app.use('/private', authMiddleware, roleMiddleware, privateRouter);

// Opción para manejar las solicitudes preflight
// app.options('*', (req, res) => {
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Asegúrate que coincida con tu frontend
//     res.send();
//   });
  
// Start the server
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
