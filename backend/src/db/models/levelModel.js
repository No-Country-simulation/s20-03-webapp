const mongoose = require('mongoose');
const levelSchema = require('../schemas/levelSchema');

const levelModel = mongoose.models.Level || mongoose.model('Level', levelSchema);

module.exports = levelModel;
