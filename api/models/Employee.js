const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    //Board or Exec
    position : {
        type: String,
        require: true
    },
    name : {
        type: String,
        require: true
    },
    title : {
        type: String,
        require: true
    },
    picture_url : {
        type: String,
        require: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;