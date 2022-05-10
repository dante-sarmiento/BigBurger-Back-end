var express = require('express');

var api = express.Router();
var userController = require('../controllers/user.controllers');
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin')


api.post('/user', userController.addUser);

api.get('/users', checkAuthentication, userController.getUsers); 

api.get('/user', checkAuthentication, userController.getUser); 

api.delete('/user/:id', [checkAuthentication, isAdmin], userController.deleteUser); 

api.put('/user/:id', checkAuthentication, userController.updateUser); 

api.post('/login', userController.login);

module.exports = api;

