const mongoose = require('mongoose'); 

const { Schema } = mongoose;

const DonorSchema = new Schema({
    title : {
        type: String,
        require: true
    },
    Amount : {
        type: String,
        require: true
    },
    firstName : {
        type: String,
        require: true
    },
    lastName : {
        type: String
    }
});

const Donor = mongoose.model('Donor', DonorSchema);

module.exports = Donor;