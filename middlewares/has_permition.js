import Author from "../models/Author.js"
import Company from "../models/Company.js"

export default async (req,res,next) =>{
    
    if(req.user.role ===1 || req.user.role ===2){

        let author = await Author.findOne({user_id:req.user._id})
        if(author){
            req.body.author_id = author._id
            return next()
        }
        let company = await Company.findOne({user_id:req.user._id})
        if(company){
            req.body.company_id = company._id
            return next()
        }    
    }
    return res.status(404).json({
        success: true,
        response:null,
        message: ['not allow']
    })
}