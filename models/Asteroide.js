import mongoose from "mongoose";

const AsteroideSchema = new mongoose.Schema({
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

export default mongoose.models.Asteroide ||  mongoose.model("Asteroide", AsteroideSchema)