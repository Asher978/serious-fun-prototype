const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//name
//description
//price
//picture ?? 
//school

const ClassSchema = new Schema({
    className: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        maxlength: 150,      
    },
    price: {
        type: Number,
        required: true,
        maxlength: 4
    },
    picture_url: {
        type: String,
        required: true,
    }
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;