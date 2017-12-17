const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReviewSchema = new Schema({
    quote : {
        type: String,
        require: true,
        unique : true
    },
    reviewer : {
        type: String,
        require: true
    },
    typeOfR :{
        type: String,
        require: true
    } 
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;