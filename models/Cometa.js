import mongoose from "mongoose";

const CometaSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  diameter:{
    type: String
  }
})

export default mongoose.models.Cometa || mongoose.model("Cometa", CometaSchema)