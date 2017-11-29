const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// PS 17, 28-37 29th Street
// Astoria, NY 11102
// Mr. Ronald Velez, Site Director
// Ms. Jessica Ibarra, Site Supervisor
const SchoolSchema = new Schema({
    schoolName: {
        type: String,
        require: true,
        minlength: 6,
        unique: true
    },
    st_Addr : {
        type: String,
        required: true,
        minlength : 6
    },
    city : {
        type: String, 
        required: true,
        minlength:  5
    },
    state : {
        type: String,
        required: true,
        maxlength: 2
    },
    zipcode : {
        type: String,
        required: true,
        maxlength: 5
    },
    description : {
        type: String,
        required: true,
        minlength: 20
    },
    picture_url : {
        type : String,
        required : true
    },
    classes : [{
        type: Schema.Types.ObjectId,
        ref : 'Class'
    }]
}); 

const School = mongoose.model('School', SchoolSchema);

module.exports = School;