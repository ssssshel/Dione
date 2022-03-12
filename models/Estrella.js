import mongoose from "mongoose";

const EstrellaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  diameter: {
    type: String
  },
  mass: {
    type: String,
  },
  volume:{
    type: String,
  },
  density:{
    type: String,
  },
  gravity:{
    type: String,
  },
  temperature:{
    type: String,
  },

  urlImg:{
    type: String
  },
  urlImg2:{
    type: String
  }
})

export default mongoose.models.Estrella || mongoose.model("Estrella", EstrellaSchema)