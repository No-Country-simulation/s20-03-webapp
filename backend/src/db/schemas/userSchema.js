const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    birthdate: {type: Date, required: false, default: null},
    avatar: { type: String, default: 'avatar.webp' },
    role: { type: String, enum: ['schoolAdmin', 'teacher', 'student', 'parent'], default: 'student' },
    active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = userSchema;
