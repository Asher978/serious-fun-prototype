const schoolRoutes = require('express').Router(),
      schoolController = require('./../controllers/schoolController');

schoolRoutes.post('/add', schoolController.newSchool);
module.exports = schoolRoutes;