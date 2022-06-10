const { getPosts, getPostById } = require('../services/post');
const { postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('home', { title: 'Home page' });
});

router.get('/catalog', async (req, res) => {
    const posts = (await getPosts()).map(postViewModel);
    res.render('catalog', { title: 'Catalog Page', posts });
});

router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const post = postViewModel(await getPostById(id));
    res.render('details', { title: post.title , post});
});

module.exports = router;