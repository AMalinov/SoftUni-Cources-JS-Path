const router = require('express').Router();
const { isAuth, isGuest } = require('../middlewares/authMiddleware');


const { COOKIE_SESSION_NAME } = require('../constants');
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/login',isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login',isGuest, async (req, res) => {
    const { username, password } = req.body;

    const user = await authService.login(username, password);
    const token = await authService.createToken(user);

    res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });

    res.redirect('/');
});

router.get('/register',isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register',isGuest, async (req, res) => {
    const { password, repeatPassword, ...userData } = req.body;

    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Psswords must match' });
    }

    // Create user
    try {
        const createdUser = await authService.create({ password, ...userData });
        const token = await authService.createToken(createdUser);
        console.log(token);
        console.log(createdUser);
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');

    } catch (error) {
        // Add mongoose error mapper
        return res.render('auth/register', { error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/');
});

module.exports = router;
