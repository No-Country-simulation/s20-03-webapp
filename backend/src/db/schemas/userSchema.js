const config = require('../../config');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastname: {type: String, required: true},
    dni: {type: String, required:false, default: null},
    birthdate: {type: Date, required: false, default: null},
    phonenumber: { type: String, required: true },
    role: { type: String, enum: ['schoolAdmin', 'teacher', 'student', 'parent'], default: 'student' },
    email: {type: String, required: false, default: null},
    address: {type: String, required: false, default: null},
    avatar: { type: String, default: 'avatar.webp' },
    active: { type: Boolean, default: true },
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(config.auth.salt);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (error) {
            next(error);
        }
    }
});

userSchema.pre('findOneAndUpdate', async function(next) {
    if (this._update.password) {
        try {
            const salt = await bcrypt.genSalt(config.auth.salt);
            this._update.password = await bcrypt.hash(this._update.password, salt);
            next();
        } catch (error) {
            next(error);
        }
    }
});

userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = userSchema;
