var express = require('express');
var app = express.Router();
var userController = require('../controllers/user.controllers');
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin')


app.post('/user', userController.addUser);

app.get('/users', checkAuthentication, userController.getUsers); 

app.get('/user', checkAuthentication, userController.getUser); 

app.delete('/user/:id', [checkAuthentication, isAdmin], userController.deleteUser); 

app.put('/user/:id', checkAuthentication, userController.updateUser); 

app.post('/login', userController.login);

module.exports = app;