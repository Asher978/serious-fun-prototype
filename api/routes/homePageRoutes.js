const homePageRouter = require('express').Router(),
    homePageController = require('./../controllers/homePageController');

homePageRouter.get('/',homePageController.retrieveData);
homePageRouter.post('/', homePageController.setData);

module.exports = homePageRouter;