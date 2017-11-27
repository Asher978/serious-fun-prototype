const homePageRouter = require('express').Router(),
    homePageController = require('./../controllers/homePageController');

homePageRouter.get('/',homePageController.retrieveData);

module.exports = homePageRouter;