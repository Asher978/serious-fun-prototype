import { MongoClient } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mongodb';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SupporterSchema = new Schema({
    name: {
        type: String,
    },
    picture_url: {
        type: String,
        required: true
    }
});

const Supporter = mongoose.model('Supporter', SupporterSchema);

module.exports = Supporter;