/**
 * user routes.
 */

'use strict'

const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')

userRouter.get('/users', userController.getAllUsers);
userRouter.get('/users/:id', userController.getUserById);
userRouter.delete('/users/:id', userController.deleteUser);

module.exports = userRouter;