var express = require('express');

var api = express.Router();
var userController = require('../controllers/user.controllers');
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin')


api.post('/user', userController.addUser);

api.get('/users', userController.getUsers);


app.get('/users', checkAuthentication, userController.getUsers); 

app.get('/user', checkAuthentication, userController.getUser); 

app.delete('/user/:id', [checkAuthentication, isAdmin], userController.deleteUser); 

app.put('/user/:id', checkAuthentication, userController.updateUser); 


module.exports = api;

