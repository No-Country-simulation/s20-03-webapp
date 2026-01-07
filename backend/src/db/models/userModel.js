const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const userModel = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = userModel;
