const Schema = require('mongoose').Schema;

const notificationSchema = new Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    relevance: { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'low' }
}, { timestamps: true });

module.exports = notificationSchema;