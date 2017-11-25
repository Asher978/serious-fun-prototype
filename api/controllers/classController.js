const mongoose = require('mongoose'),
    _ = require('lodash');

const Class = mongoose.model('Class');

const ClassesController = {
    getAll : (req, res) => {
        Class.find({},(err, classes) => {
            res.send(classes);
        });
    },
    addClass : (req,res) => {
        let body = _.pick(req.body,['className', 'desc', 'price', 'picture_url']),
        newClass = new Class(body);
        newClass.save((err, newclass) => {
            res.send({
                "status": "ok",
                "newClass":newclass
            });
        });
        console.log(body);
    },
    updateClass : (req, res) => {
        let body = _.pick(req.body,['className', 'desc', 'price', 'picture_url']);
        Class.findByIdAndUpdate(req.params.classId, body, {"new" : true}, (err, updClass) => {
            res.send({
                "status" : "ok",
                "updatedClass" :updClass
            });
        })        
    },
    removeClass : (req, res) => {
        Class.findByIdAndRemove(req.params.classId,(err, removedClass) => {
            console.log(removedClass);
            res.send({
                "status" : "ok",
                "removedClass": removedClass
            });
        });
    }
}

module.exports = ClassesController;