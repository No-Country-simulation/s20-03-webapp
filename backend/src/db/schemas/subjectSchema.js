const Schema = require('mongoose').Schema;

const subjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false }
}, { timestamps: true });

module.exports = subjectSchema;