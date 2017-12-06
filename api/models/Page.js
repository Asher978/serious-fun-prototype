const mongoose = require('mongoose');

const { Schema } = new Schema;

const PageSchema = new Schema({
    pageTitle : {
        type: String,
        require: true
    },
    pageContent : {
        type: String,
        require: true
    } 
});

const Page = mongoose.model('Page', PageSchema);

module.exports = Page;