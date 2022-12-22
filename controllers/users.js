const User = require('../models/users')
const bcrypt = require('bcrypt')

const createUser = async(req, res) => {
  const { name, lastName, email, password } = req.body
  const saltRounds = 15

  const passwordEncripted = bcrypt.hashSync(password, saltRounds)

  try {
    const nuevoUsuario = new User({
      name,
      lastName,
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
