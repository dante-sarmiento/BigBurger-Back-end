var express = require('express');
var app = express.Router();
var userController = require('../controllers/user.controllers');


app.post('/user', userController.addUser);

app.get('/users', userController.getUsers);

app.get('/user', userController.getUser);

app.delete('/user', userController.deleteUser);

app.put('/user/:upd_id', userController.updateUser);

app.post('/login', userController.login);

module.exports = app;