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
  }
})

export default mongoose.models.Estrella || mongoose.model("Estrella", EstrellaSchema)