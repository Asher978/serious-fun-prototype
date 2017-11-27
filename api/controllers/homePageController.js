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
    },
    setData : (req ,res) => {
        HomePage.find({}, (err, homePage) => {
            if(homePage.length>0){
                res.send({
                    "status" : "Error",
                    "message" : "Home Page was already set"
                });
            } else {
                let body = _.pick(req.body, 
                    ['title1','content1','title2','content2','title3','content3','bodyTitle1', 'bodyTitle2']),
                    new_Home = new HomePage(body);

                new_Home.save().then(() => {
                    res.send(new_Home);
                });
            }
        });
    },
    updateData : (req, res) => {
        let body = _.pick(req.body, 
            ['title1','content1','title2','content2','title3','content3','bodyTitle1', 'bodyTitle2'])
        HomePage.findOneAndUpdate({}, body, {"new": true}, (err, content) => {
            console.log(err);
            res.send({
                "status" : "ok",
                content
            });
        });
    }
}

module.exports = homePageController;