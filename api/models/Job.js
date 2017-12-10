const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
    location: {
        type: String,
        require: true
    },
    title : {
        type: String,
        require: true
    },
    job_link: {
        type: String,
        require: true
    }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;