import Item from "../../../models/Item";
import connectDb from "../../../lib/connectDB";

export default async function handler(req, res){
  await connectDb()

  // POST api/item

  const {method} = req

  switch(method){
    case 'POST':
      try {
        const item = new Item(req.body)
        await item.save()
        return res.status(200).json({success: true, item})

      } catch (error) {
        return res.status(403).json({success: false, error: "no c puede "})
        
      }
    
    default:
      return res.status(500).json({success: false, error: "Falla del servidor"})
  }
}