const mongoose = require('mongoose');
const notificationSchema = require('../schemas/notificationSchema');

const notificationModel = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);

module.exports = notificationModel;
