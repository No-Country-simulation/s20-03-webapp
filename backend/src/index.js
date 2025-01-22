const config = require('./config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');
const authRouter = require('./routes/authRouter');
const privateRouter = require('./routes/privateRouter');
const dbConnection = require('./db/connection');

dbConnection();
const app = express();

app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/auth', authRouter);
app.use('/private', authMiddleware, roleMiddleware, privateRouter);

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});
