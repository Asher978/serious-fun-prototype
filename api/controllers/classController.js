const mongoose = require('mongoose'),
    _ = require('lodash');

const Class = mongoose.model('Class');

const ClassController = {
    getAll : (req, res) => {
        console.log('this are all the classes');
        Class.find({},(err, classes) => {
            res.send(classes);
        });
    },
}

module.exports = ClassController;