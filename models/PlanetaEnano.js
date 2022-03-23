import mongoose from "mongoose";

const PlanetaEnanoSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  urlImg2:{
    type: String,
    required: true
  }
})

export default mongoose.models.PlanetaEnano || mongoose.model("PlanetaEnano", PlanetaEnanoSchema)