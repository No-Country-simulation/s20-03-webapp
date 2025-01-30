const Schema = require('mongoose').Schema;

const levelSchema = new Schema({
    title: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: false },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject', required: false }],
    startDate: { type: Date, required: false, default: Date.now() },
    endDate: { type: Date, required: false },
    status: { type: String, required: true, enum: ['scheduled', 'started', 'ended'], default: 'started' },
}, { timestamps: true });

module.exports = levelSchema;