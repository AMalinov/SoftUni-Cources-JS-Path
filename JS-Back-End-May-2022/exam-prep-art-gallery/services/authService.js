const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/enviorments');

exports.create = (userdata) => User.create(userdata);
exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw {
            message: 'Cannot find username or password'
        };
    }


    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return new Error('Cannot find username or password');
    }
    return user;

    // if (isValid) {
    //     return user;
    // } else {
    //     throw {
    //         message: 'Cannot find username or password'
    //     };
    // }
};

exports.createToken = (user) => {
    const payload = { _id: user._id, username: user.username, password: user.password };
    // console.log(payload);
    const options = { expiresIn: '2d' };
    
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });
};