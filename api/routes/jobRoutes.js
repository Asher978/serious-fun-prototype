const jobRouter = require('express').Router(),
    jobController = require('./../controllers/jobController');

jobRouter.get('/', jobController.getAll);
jobRouter.post('/', jobController.addJob);
jobRouter.delete('/:jobId', jobController.removeJob);

module.exports = jobRouter;