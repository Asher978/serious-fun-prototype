const mongoose = require('mongoose'),
    _ = require('lodash');

const School = mongoose.model('School');

const schoolController = {
    newSchool : (req, res) => {
        let body = _.pick(req.body, ['schoolName', 'st_Addr', 'city', 'state', 'zipcode']);
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
    }

}

module.exports = schoolController;