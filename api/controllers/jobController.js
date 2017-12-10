const mongoose = require('mongoose'),
    _ = require('lodash');

const Job = mongoose.model('Job')

const ClassesController = {
    getAll : (req,res) => {
        Job.find({}, (err,jobs)=>{
            res.send({
                'message' : 'ok',
                jobs
            });
        });
    },
    addJob : (req, res) => {
        let { location , title, jobLink} = req.body,
        newJob = new Job({ location, title, jobLink });
        newJob.save((err, savedJob) =>{
            res.send({
                'message': 'ok',
                savedJob
            }); 
        })
    },
    removeJob : (req, res) => {
        Job.findByIdAndRemove(req.params.jobId,(err, job) => {
            res.send({
                "message": "job was succesfully removed",
                job
            })
        })
    }
}

module.exports = ClassesController;