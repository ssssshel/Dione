import Planeta from "../../../../models/Planeta"
import PlanetaEnano from "../../../../models/PlanetaEnano"
import Satelite from "../../../../models/Satelite";
import Asteroide from "../../../../models/Asteroide";
import Cometa from "../../../../models/Cometa";
import Estrella from "../../../../models/Estrella";
import connectDb from "../../../../lib/connectDb";

export default async function handler(req, res){
  await connectDb()

  const {method, query: {id, category}, esp} = req
  
  // console.log(`cat: ${category}`)

  const methodDataApi = async(method, coll, id) => {
    switch (method) {

      case 'GET':
        try {
          const items = await coll.findById(id).lean()
          if(!items){
            return res.status(404).json({success: false})
          }
          return res.json({success: true, data: items})
        } catch (error) {
          return res.status(400).json({success: false, error: "Falla del servidor"})
        }

      case 'DELETE':
        try {
          const response = await coll.findByIdAndDelete(id)
          if(!response){
            return res.status(404).json({success: false})
          }
          return res.json({success: true, data: response})
        } catch (error) {
          return res.status(400).json({success: false, error: "Falla del servidor"})
        }
        
      case 'PUT':
        try {
          const item = await coll.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
          if(!item){
            return res.status(404).json({success: false})
          }

          return res.json({success: true, data: item})
        } catch (error) {
          return res.status(400).json({success: false, error: "Falla del servidor"})
        }
    
      default:
        return res.status(400).json({success: false, error: "Método inválido"})
    }
  }
  
  switch (method) {
    
    // GET api/data/:category/:id
    case 'GET':
      switch (category) {
        case "planetas":
          return methodDataApi("GET", Planeta, id)
        case "planetas-enanos":
          return methodDataApi("GET", PlanetaEnano, id)
        case "satelites":
          return methodDataApi("GET", Satelite, id)
        case "asteroides":
          return methodDataApi("GET", Asteroide, id)
        case "cometas":
          return methodDataApi("GET", Cometa, id)
        case "estrellas":
          return methodDataApi("GET", Estrella, id)
  
        default:
          throw new Error('Categoría inválida')
      }
      

    // DELETE api/data/:category/:id
    case 'DELETE':
      switch (category) {
        case "planetas":
          return methodDataApi("DELETE", Planeta, id)
        case "planetas-enanos":
          return methodDataApi("DELETE", PlanetaEnano, id)
        case "satelites":
          return methodDataApi("DELETE", Satelite, id)
        case "asteroides":
          return methodDataApi("DELETE", Asteroide, id)
        case "cometas":
          return methodDataApi("DELETE", Cometa, id)
        case "estrellas":
          return methodDataApi("DELETE", Estrella, id)

        default:
          throw new Error('Categoría inválida')
      }
      
      // PUT api/data/:category/:id
      case 'PUT':

        // if(category == "planetas"){
        //   methodDataApi("PUT", Planeta, id)
        // }else if(category == "planetas-enanos"){
        //   methodDataApi("PUT", PlanetaEnano, id)
        // }else if(category == "asteroides"){
        //   methodDataApi("PUT", Asteroide, id)
        // }else if(category == "cometas"){
        //   methodDataApi("PUT", Cometa, id)
        // }else if(category == "estrellas"){
        //   methodDataApi("PUT", Estrella, id)
        // }else if(esp == "satelites"){
        //   methodDataApi("PUT", Satelite, id)
        // }else{
        //   throw new Error('Categoría inválida')
        // }
        switch (category) {
          case "planetas":
            return methodDataApi("PUT", Planeta, id)
          case "planetas-enanos":
            return methodDataApi("PUT", PlanetaEnano, id)
          case "satelites":
            return methodDataApi("PUT", Satelite, id)
          case "asteroides":
            return methodDataApi("PUT", Asteroide, id)
          case "cometas":
            return methodDataApi("PUT", Cometa, id)
          case "estrellas":
            return methodDataApi("PUT", Estrella, id)
  
          default:
            throw new Error('Categoría inválida')
        }

    default:
      return res.status(400).json({success: false, error: "Método inválido"})
  }

}