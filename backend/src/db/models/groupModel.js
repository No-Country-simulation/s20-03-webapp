const mongoose = require('mongoose');
const groupSchema = require('../schemas/groupSchema');

const groupModel = mongoose.model('Group', groupSchema);

module.exports = groupModel;
