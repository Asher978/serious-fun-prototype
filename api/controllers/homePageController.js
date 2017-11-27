const mongoose = require('mongoose'),
    _ = require('lodash');

const HomePage = mongoose.model('HomePage');

const homePageController = {
    retrieveData : (req, res) => {
        HomePage.find({}, (err, homePage) => {
            res.send({
                "status" : "ok",
                homePage
            });
        })
    }
}

module.exports = homePageController;