import Planeta from "../../../../models/Planeta"
import PlanetaEnano from "../../../../models/PlanetaEnano"
import Satelite from "../../../../models/Satelite";
import Asteroide from "../../../../models/Asteroide";
import Cometa from "../../../../models/Cometa";
import Estrella from "../../../../models/Estrella";
import connectDb from "../../../../lib/connectDb";

export default async function handler(req, res){
  await connectDb()

  const {method, query: {id, category}} = req
  console.log(category)
  console.log(id)

  const methodDataApi = async(method, coll, id) => {
    switch (method) {
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
        
    
      default:
        return res.status(400).json({success: false, error: "Método inválido"})
    }
  }
  
  switch (method) {
    
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
  
    default:
      return res.status(400).json({success: false, error: "Método inválido"})
  }

}