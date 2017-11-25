const classesRouter = require('express').Router(),
    classesController = require('./../controllers/classController');

classesRouter.get('/', classesController.getAll);
classesRouter.post('/', classesController.addClass);

module.exports = classesRouter;