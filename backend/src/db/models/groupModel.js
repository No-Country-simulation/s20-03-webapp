const mongoose = require('mongoose');
const groupSchema = require('../schemas/groupSchema');

const groupModel = mongoose.models.Group || mongoose.model('Group', groupSchema);

module.exports = groupModel;
