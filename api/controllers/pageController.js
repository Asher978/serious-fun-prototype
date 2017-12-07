const mongoose = require('mongoose');

const Page = mongoose.model('Page');

const pageController = {
    getAll  : (req, res) => {
        var query = Page.find({}).select('pageTitle');
        query.exec((err, pages) => {
            console.log(pages)
            res.send({
                'message': 'ok',
                pages
            });
        });
    }, 
    findPage : (req, res) => {
        let { title } = req.params;
        Page.findOne({'pageTitle' : title },(err,page)=>{
            if(!err && page){
                let { pageTitle, pageContent, _id } = page;
                res.send({
                    'message' : 'ok',
                    _id,
                    pageTitle,
                    pageContent: JSON.parse(pageContent)
                });
            } else if(err == null){
                res.send({
                    'message' : 'error',
                    'err' : 'No page found'
                });
            } else {
                res.send({
                    'message' : 'error',
                    err
                });
            }
        });
    },
    addPage : (req, res) => {
        let { content, title } = req.body,
        newPage = new Page({
            pageTitle : title,
            pageContent : JSON.stringify(content)
        });
        newPage.save((err, page) => {
            if(!err){
                res.send({
                    'message': 'ok',
                    page
                });
            } else{
                res.send({
                    'message' : 'error',
                    err
                });
            }
        });    
    },
    updatePage : (req, res) => {
        let { content, pageTitle } = req.body,
        { pageId } = req.params,
        newPage = {
            pageContent : JSON.stringify(content)
        };
        Page.findByIdAndUpdate(pageId, newPage, {"new": true}, (err, page) =>{
            if(!err){
                let { pageTitle, pageContent, _id } = page;
                res.send({
                    'message': 'ok',
                    pageContent: JSON.parse(pageContent),
                    pageTitle,
                    _id
                });
            } else {
                res.send({
                    'message' : 'error',
                    err
                });
            }
        });
    }
}

module.exports = pageController;