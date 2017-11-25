const classesRouter = require('express').Router(),
    classesController = require('./../controllers/classController');

classesRouter.get('/', classesController.getAll);
classesRouter.post('/', classesController.addClass);
classesRouter.put('/:classId', classesController.updateClass);
classesRouter.delete('/:classId', classesController.removeClass);

module.exports = classesRouter;