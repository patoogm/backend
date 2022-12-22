const User = require('../models/users')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const createUser = async(req, res) => {
  const { name, lastName, email, password, dni } = req.body
  const saltRounds = 15

  const passwordEncripted = bcrypt.hashSync(password, saltRounds)

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const nuevoUsuario = new User({
      name,
      lastName,
      dni,
      email,
      password: passwordEncripted
    })
  
    await nuevoUsuario.save()
  
    res.json({
      mensaje: `Usuario ${name} ${lastName} creado con exito`
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createUser }
