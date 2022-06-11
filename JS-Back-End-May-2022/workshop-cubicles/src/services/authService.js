const bcrypt = require('bcrypt');
const User = require('../models/User');

const saltRounds = 10;

exports.register = async ({ username, password, repeatPassword }) => {
    // TODO: return form validation message
    if (password !== repeatPassword) {
        return false;
    }

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword
    });

    return createdUser;
    // User.create(userData);
};

exports.login = async ({ username, password }) => {
    let user = await User.findOne({ username });

    if (!user) {
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
        return user;
    } else {
        return;
    }
};