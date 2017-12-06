const mongoose = required('mongoose');

const { Schema } = mongoose;

const AnnouncementSchema = new Schema({
    content : {
        type: String,
        require: true
    },
    date: {
        type: String
    }
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);

module.exports = Announcement;