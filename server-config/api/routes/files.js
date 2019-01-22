const express = require('express')

const listControllers = require('../controllers/controllers')

const filesRouter = express.Router()

filesRouter.get('/getgenericfile', listControllers.getgenericfile)

filesRouter.get('/specificfile/:file', listControllers.specificfile)

module.exports = filesRouter