const Schema = require('mongoose').Schema;

const subjectSchema = new Schema({
    title: { type: String, required: true, index: true, unique: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    description: { type: String, required: false }
}, { timestamps: true });

module.exports = subjectSchema;
