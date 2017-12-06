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