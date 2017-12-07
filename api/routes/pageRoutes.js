const pageRoutes = require('express').Router(),
    pageController = require('../controllers/pageController');

pageRoutes.get('/:title', pageController.findPage);
pageRoutes.post('/',pageController.addPage);
pageRoutes.put('/:pageId', pageController.updatePage);

module.exports = pageRoutes;