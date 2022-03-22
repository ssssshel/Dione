import Planeta from "../../../../models/Planeta"
import PlanetaEnano from "../../../../models/PlanetaEnano"
import Satelite from "../../../../models/Satelite";
import Asteroide from "../../../../models/Asteroide";
import Cometa from "../../../../models/Cometa";
import Estrella from "../../../../models/Estrella";
import {connectDb} from "../../../../lib/connectDb";

import { getSession } from "next-auth/react";

export default async function handler(req, res){
  await connectDb()

  const session = await getSession({req})

  if(!session){
    return res.status(403).json({error: "Forbidden / No autorizado"})
  }

  // POST api/item/:category

  const {method, query:{category}} = req

  switch(method){
    case 'POST':
      switch(category){
        case "planetas":
          try {
            const planeta = new Planeta(req.body)
            await planeta.save()
            return res.status(200).json({success: true, planeta})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo planeta"})
          }
          
        case "planetas-enanos":
          try {
            const planetaEnano = new PlanetaEnano(req.body)
            await planetaEnano.save()
            return res.status(200).json({success: true, planetaEnano})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo planeta enano"})
          }
          
        case "satelites":
          try {
            const satelite = new Satelite(req.body)
            await satelite.save()
            return res.status(200).json({success: true, satelite})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo satelite"})
          }

        case "asteroides":
          try {
            const asteroide = new Asteroide(req.body)
            await asteroide.save()
            return res.status(200).json({success: true, asteroide})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo asteroide"})
          }

        case "cometas":
          try {
            const cometa = new Cometa(req.body)
            await cometa.save()
            return res.status(200).json({success: true, cometa})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nuevo cometa"})
          }

        case "estrellas":
          try {
            const estrella = new Estrella(req.body)
            await estrella.save()
            return res.status(200).json({success: true, estrella})
      
          } catch (error) {
            return res.status(403).json({success: false, error: "Error al cargar nueva estrella"})
          }
        

        default:
          return res.status(500).json({success: false, error: "Categoria no válida o no especificada"})
      }
    
    default:
      return res.status(500).json({success: false, error: "Falla del servidor"})
  }
}