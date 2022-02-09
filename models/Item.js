import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
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
  rotPeriod:{
    type: String,
  },
  orbPeriod:{
    type: String,
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
  periastron:{
    type: String
  },
  aphelion:{
    type: String
  },
  urlImg:{
    type: String
  },
  urlImg2:{
    type: String
  }
})

export default mongoose.models.Item || mongoose.model('Item', ItemSchema)