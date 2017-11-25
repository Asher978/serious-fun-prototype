const classRouter = require('express').Router(),
    classController = require('./../controllers/classController');

classRouter.get('/', classController.getAll);

module.exports = classRouter;