var express = require('express');
var app = express.Router();
var userController = require('../controllers/user.controllers');
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin')


app.post('/user', userController.addUser);

app.get('/users', userController.getUsers); //checkAuthentication

app.get('/user',  userController.getUser); //checkAuthentication,

app.delete('/user/:id', userController.deleteUser); //[checkAuthentication, isAdmin]

app.put('/user/:id',  userController.updateUser); //checkAuthentication,

app.post('/login', userController.login);

module.exports = app;