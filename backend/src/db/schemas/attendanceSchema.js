const Schema = require('mongoose').Schema;

const attendanceSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    date: { type: Date, required: true },
    status: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = attendanceSchema;