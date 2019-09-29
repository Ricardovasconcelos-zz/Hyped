const express = require('express')
const HypeController = require('./controllers/hypeController')
require('./database/database')
const routes = express.Router()


routes.get('/hype', HypeController.index)

routes.post('/newHype', HypeController.store)

module.exports = routes