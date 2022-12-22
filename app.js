const express = require('express')
require('dotenv').config();
const users = require('./routes/users')
const app = express()
const cors = require('cors')
require('./database/db')

const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/users', users)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})