const mongoose = require('mongoose');
const levelSchema = require('../schemas/levelSchema');

const levelModel = mongoose.model('Level', levelSchema);

module.exports = levelModel;
