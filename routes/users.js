const express = require('express');
const { createUser } = require('../controllers/users');
const route = express.Router()

route.post('/', createUser)

module.exports = route