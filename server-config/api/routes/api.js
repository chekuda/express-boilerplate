const express = require('express')

const files = require('./files')

const apiRouter = express.Router()

apiRouter.use('/files', files)

module.exports = apiRouter
