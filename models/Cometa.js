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
  rotPeriod:{
    type: String,
  },
  orbPeriod:{
    type: String,
  },
  temperature:{
    type: String,
  },
  periastron:{
    type: String
  },
  aphelion:{
    type: String
  },

  urlImg:{
    type: String,
    required: true,
  },
  urlImg2:{
    type: String,
    required: true
  }
})

export default mongoose.models.Cometa || mongoose.model("Cometa", CometaSchema)