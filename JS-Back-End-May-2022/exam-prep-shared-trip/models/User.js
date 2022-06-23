const { Schema, model, default: mongoose } = require('mongoose');

const emailPattern = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
    email: {
        type: String, required: [true, 'Email is required'], validate: {
            validator(value) {
                return emailPattern.test(value);
            },
            message: 'Email must be vallid and may contain only english letters'
        }
    },
    gender: {
        type: String,
        required: true,
        enum: {values: ['male', 'female'], message:'Gender is required'}
    },
    tripsHistory: {
        type: mongoose.Types.ObjectId,
        ref: 'Trip'
    },
    hashedPassword: { type: String, required: true }
});

const User = model('User', userSchema);

module.exports = User;