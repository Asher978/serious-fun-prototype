const classRouter = require('express').Router(),
    classController = require('./../controllers/classController');

classRouter.get('/', classController.getAll);
classRouter.post('/', classController.addClass);

module.exports = classRouter;