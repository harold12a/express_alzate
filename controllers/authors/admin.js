import Author from "../../models/Author.js"

export default async (req,res, next)=> {
  try {
    let all_active = await Author.find({active:true})
    let all_inactive = await Author.find({active:false})
    return res.status(200).json({
        response: {all_active,all_inactive},
        success:true,
        message:"Authors Found"
    }) 
} catch (error) {
    next (error)
  } 
}
