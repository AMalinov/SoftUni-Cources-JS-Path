const router = require('express').Router();
const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const cube = req.body;

    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }

    try {
        await cubeService.create(cube);

        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }


});


router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    res.render('accessory/attach', { cube });
});

module.exports = router;