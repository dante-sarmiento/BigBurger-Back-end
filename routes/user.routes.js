var express = require('express');

var api = express.Router();
var userController = require('../controllers/user.controllers');


api.post('/user', userController.addUser);

api.get('/users', userController.getUsers);

api.get('/user', userController.getUser);

api.delete('/user', userController.deleteUser);

api.put('/user/:upd_id', userController.updateUser);

api.post('/login', userController.login);

module.exports = api;

