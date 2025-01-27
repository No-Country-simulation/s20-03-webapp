const Schema = require('mongoose').Schema;

const groupSchema = new Schema({
    title: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
}, { timestamps: true });

module.exports = groupSchema;