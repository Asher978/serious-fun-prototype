const schoolRoutes = require('express').Router(),
      schoolController = require('./../controllers/schoolController');

schoolRoutes.post('/add', schoolController.newSchool);
schoolRoutes.delete('/delete', schoolController.removeSchool);

module.exports = schoolRoutes;