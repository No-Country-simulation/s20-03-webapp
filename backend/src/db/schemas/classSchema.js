const Schema = require('mongoose').Schema;

const classSchema = new Schema({
    date: { type: Date, required: true },
    subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
}, { timestamps: true });

module.exports = classSchema;