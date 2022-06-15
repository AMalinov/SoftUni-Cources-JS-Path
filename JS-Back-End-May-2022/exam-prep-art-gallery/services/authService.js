const User = require('../models/User');

exports.create = (userdata) => User.create(userdata);