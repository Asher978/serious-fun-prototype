const homePageRouter = require('express').Router();

homePageRouter.get('/',(req, res) => {
    console.log('this route works');
});

module.exports = homePageRouter;