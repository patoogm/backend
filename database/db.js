const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDB = async() => {
  try {
    await mongoose.connect('mongodb+srv://DB13i:Pato1234@db13i.vmmgda5.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conexion Exitosa')
  } catch (error) {
    console.log(error)
  }
}

connectDB()

module.exports = { connectDB }