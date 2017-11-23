const mongoose = require('mongoose'),
_ = require('lodash');
const User = mongoose.model('User'); 

const userController ={
    newUser: (req, res) => {
        let body = _.pick(req.body, ['username', 'password']);
        
        const new_User = new User(body);
        new_User.save().then(() => {
            return new_User.generateAuthToken();
        }).then( token => {
            res.header('x-auth',token ).send({
              user:new_User,
              auth : true
            });
        }).catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
    },
    signIn: (req, res) => {
        let body = _.pick(req.body, ['username', 'password']);
        
        User.findByCredentials(body.username, body.password).then(user => {
            user.generateAuthToken().then(token => {
                res.header('x-auth', token).send({
                  user,
                  auth: true
                });
            });
        }).catch(e => {
            res.status(400).send();
        })

    },
    signOut: (req,res) => {
        req.user.removeToken(req.token).then(() => {
            res.status(200).send({message: 'You Succesfully logged out'});
        }), () => {
            res.status(400).send({message : 'something went wrong'});
        }
    }   
}

module.exports = userController;