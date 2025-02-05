const Schema = require('mongoose').Schema;

const courseSchema = new Schema({
    title: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: false },
    levels: [{ type: Schema.Types.ObjectId, ref: 'Level', required: false }],
    startDate: { type: Date, required: false, default: Date.now() },
    endDate: { type: Date, required: false },
    status: { type: String, required: true, enum: ['scheduled', 'started', 'ended'], default: 'started' },
}, { timestamps: true });

module.exports = courseSchema;
