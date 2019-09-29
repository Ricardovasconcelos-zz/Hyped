const express = require('express')
const HypeController = require('./controllers/hypeController')
const routes = express.Router()


routes.get('/hype', HypeController.index)

routes.post('/hype/newHype', HypeController.store)

module.exports = routes