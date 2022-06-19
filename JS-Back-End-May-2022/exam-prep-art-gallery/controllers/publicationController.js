const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const { isPublicationAuthor, preloadPublication } = require('../middlewares/publicationMiddlewares');
const publicationService = require('../services/publicationService');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', async (req, res) => {
    const publications = await publicationService.getAll().lean();
    res.render('publication', { publications });
});

router.get('/:publicationId/details', async (req, res) => {
    const publication = await publicationService.getOneDetailed(req.params.publicationId).lean();

    const isAuthor = publication.author._id == req.user?._id;

    res.render('publication/details', { ...publication, isAuthor });
});



router.get('/:publicationId/edit', preloadPublication, isPublicationAuthor, isAuth, (req, res) => {
    res.render('publication/edit', { ...req.publication })
});

router.post('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async (req, res) => {
    try {
        await publicationService.updateOne(req.params.publicationId, req.body);

        res.redirect(`/publications/${req.params.publicationId}/details`);
    } catch (error) {
        res.render('publication/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };

    try {
        await publicationService.create(publicationData);

        res.redirect('/publications');

    } catch (error) {
        res.render('publication/create', { ...req.body, error: getErrorMessage(error) });
    }
});

module.exports = router;