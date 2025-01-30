const Schema = require('mongoose').Schema;

const classSchema = new Schema({
    date: { type: Date, required: true },

}, { timestamps: true });

module.exports = classSchema;