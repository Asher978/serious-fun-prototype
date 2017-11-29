const mongoose = require('mongoose'),
    _ = require('lodash');

const School = mongoose.model('School');

const schoolController = {
    getAll : (req, res) => {
        School.find({},(err, schools)=>{
            res.send(schools);
        });
    },
    findById : (req, res) => {
        School.findById(req.params.school_id).populate('classes').exec((err, school) => {
            res.send({
                "status": "ok",
                school
            });
        })
    },
    newSchool : (req, res) => {
        let body = _.pick(req.body, ['schoolName', 'st_Addr', 'city', 'state', 'zipcode', 'description', 'picture_url']);
        console.log(body);
        const new_School = new School(body);
        new_School.save().then(()=>{
            res.send(new_School);
        }).catch(err=>{
            console.log(err);
            res.send(err);
        });
    },
    removeSchool : (req, res) => {
        let body = _.pick(req.body, ["school_id"]);
        console.log(body);
        School.findByIdAndRemove({_id: body.school_id}).then(()=>{
            res.send({
                status: 'ok',
                school_id: body.school_id
            });
            }).catch(err=> {
                console.log(err);
                res.send(err);
            });
    },
    updateSchool : (req, res) => {
        let body = _.pick(req.body, ['schoolName', 'st_Addr', 'city', 'state', 'zipcode', 'description', 'picture_url']);
        School.findOneAndUpdate(req.params.schoolId, body, {"new": true}, (err, school) => {
            console.log(err);
            res.send({
                "status" : "ok",
                school: school
            });
        });
    }  

}

module.exports = schoolController;