const Schema = require('mongoose').Schema;

const notificationSchema = new Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    relevance: { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'low' }
}, { timestamps: true });

module.exports = notificationSchema;