import Company from "../../models/Company.js";

export default async (req,res, next)=> {
  try {
    let all_active = await Company.find({active:true})
    let all_inactive = await Company.find({active:false})
    return res.status(200).json({
        response: {all_active,all_inactive},
        success:true,
        message:"Companies Found"
    })
} catch (error) {
    next (error)
  } 
}
