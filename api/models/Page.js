const mongoose = require('mongoose');

const { Schema } = mongoose;

const PageSchema = new Schema({
    pageTitle : {
        type: String,
        require: true,
        unique : true
    },
    pageContent : {
        type: String,
        require: true
    } 
});

const Page = mongoose.model('Page', PageSchema);

module.exports = Page;