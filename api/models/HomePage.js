import { Module } from 'module';

const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const HomePageSchema = new Schema({
    title1 : {
        type: String,
        required:true,
        maxlength: 35
    },
    content1 : {
        type: String,
        required: true
    },
    title2 : {
        type: String,
        required:true,
        maxlength: 35        
    },
    content2 : {
        type: String,
        required: true
    },
    title3 : {
        type: String,
        required:true,
        maxlength: 35        
    },
    content3 : {
        type: String,
        required: true
    },
    bodyTitle1 : {
        type: String,
        required:true,
        maxlength: 35 
    },
    bodyTitle2 : {
        type: String,
        required:true,
        maxlength: 35 
    }
});

const HomePage = mongoose.model('HomePage', HomePageSchema);

module.exports = HomePage;