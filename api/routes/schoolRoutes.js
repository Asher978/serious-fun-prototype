const schoolRoutes = require('express').Router(),
      schoolController = require('./../controllers/schoolController');

schoolRoutes.get('/', schoolController.getAll);
schoolRoutes.get('/:school_id', schoolController.findById);      
schoolRoutes.post('/add', schoolController.newSchool);
schoolRoutes.delete('/delete', schoolController.removeSchool);
schoolRoutes.put('/:schoolId', schoolController.updateSchool);


module.exports = schoolRoutes;