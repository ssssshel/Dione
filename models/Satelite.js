import mongoose from "mongoose";

const SateliteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category : {
    type: String,
    required: true
  },
  parent:{
    type: String,
    required: true
  },
  diameter: {
    type: String,
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
  orbPeriod:{
    type: String
  },
  orbRadius:{
    type: String
  },
  inclination:{
    type: String,
  },
  atmPressure:{
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

export default mongoose.models.Satelite || mongoose.model("Satelite", SateliteSchema)