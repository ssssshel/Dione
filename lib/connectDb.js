import mongoose from "mongoose"

const URI_MONGO = process.env.URI_MONGO

if(!URI_MONGO){
  throw new Error(
    'Por favor, defina las variables de entorno que permiten establecer la conexión con la DB'
  )
}

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO, {
      bufferCommands: false
    })
    console.log("Conexión con la DB exitosa!!!")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDb