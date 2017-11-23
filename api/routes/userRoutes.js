const userRoutes = require('express').Router(),
userController = require('../controllers/userController'),
authenticate = require('../../services/auth/authenticate.js');

userRoutes.post('/', userController.newUser);
userRoutes.post('/login', userController.signIn);
userRoutes.delete('/logout', authenticate, userController.signOut);

module.exports = userRoutes;