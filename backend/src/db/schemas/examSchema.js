const Schema = require('mongoose').Schema;

const examSchema = new Schema({
    title: { type: String, required: true },
    notes: { type: String, required: false },
    result: { type: Number, required: true },
}, { timestamps: true });

module.exports = examSchema;