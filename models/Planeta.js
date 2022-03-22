import mongoose from "mongoose";

const PlanetaSchema = new mongoose.Schema({
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
  satellites: {
    type: String
  },
  urlImg:{
    type: String
  },
  urlImg2:{
    type: String
  }
})

export default mongoose.models.Planeta || mongoose.model('Planeta', PlanetaSchema)