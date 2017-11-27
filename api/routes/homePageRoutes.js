const homePageRouter = require('express').Router(),
    homePageController = require('./../controllers/homePageController');

homePageRouter.get('/',homePageController.retrieveData);
homePageRouter.post('/', homePageController.setData);
homePageRouter.put('/', homePageController.updateData);

module.exports = homePageRouter;