const { validateToken } = require('../services/user');

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const payload = validateToken(token);
            req.user = {
                email: payload.email,
                _id: payload._id,
                token
            };
        } catch (err) {
            return res.status(401).json({ message: 'Invallid access token. Please log in!' });
        }
    }

    next();
};