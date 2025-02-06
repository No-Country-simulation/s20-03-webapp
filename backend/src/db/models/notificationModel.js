const mongoose = require('mongoose');
const notificationSchema = require('../schemas/notificationSchema');

const notificationModel = mongoose.model('Notification', notificationSchema);

module.exports = notificationModel;
