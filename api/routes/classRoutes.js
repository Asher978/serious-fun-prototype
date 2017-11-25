const classRouter = require('express').Router();

classRouter.get('/', (req, res) => {
    console.log('this is the class route');
    res.send('this is the class route'); 
});

module.exports = classRouter;