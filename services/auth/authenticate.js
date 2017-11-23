const User = require('../../api/models/User');

const authenticate = (req,res,next) => {
    var token = req.header('x-auth');
    console.log(token);
    User.findByToken(token).then((user) => {
        console.log(user);
        if(!user){
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch(err=>{
        res.status(401).send('could not authenticate the request');
    })
}

module.exports = authenticate;