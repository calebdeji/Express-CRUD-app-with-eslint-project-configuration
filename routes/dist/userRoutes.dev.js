"use strict";

var express = require('express');

var userController = require('./../controllers/userController');

var router = express.Router();
router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser)["delete"](userController.deleteUser);
module.exports = router;