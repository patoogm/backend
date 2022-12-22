const express = require('express');
const { createUser } = require('../controllers/users');
const { body } = require('express-validator')
const route = express.Router()

route.post('/register', 
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 3, max: 20}).withMessage('Nombre invalido'),
body('lastName').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 3, max: 20}).withMessage('Apellido invalido'),
body('dni').trim().escape().isNumeric().isLength({min: 8, max: 8}).withMessage('DNI invalido'),
body('email').trim().escape().isEmail().not().isEmpty().withMessage('Email invalido'),
body('password').trim().escape().isLength({min: 8}).not().isEmpty().withMessage('Email invalido'),
createUser)

module.exports = route