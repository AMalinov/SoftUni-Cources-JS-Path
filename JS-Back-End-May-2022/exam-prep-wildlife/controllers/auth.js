const router = require('express').Router();

const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const mapErrors = require('../util/mappers');


router.get('/register', isGuest(),(req, res) => {
    res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\`t match');
        }

        const user = await register(req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); // TODO check redirect requirements
    } catch (err) {
        //TODO send error messages
        console.log(err);
        const errors = mapErrors(err);
        res.render('register', {data: { username: req.body.username }, errors });

    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

//TODO check form action, method, field names

router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); // TODO check redirect requirements
    } catch (err) {
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('login', {data: { username: req.body.username }, errors });
        console.log(err);
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;