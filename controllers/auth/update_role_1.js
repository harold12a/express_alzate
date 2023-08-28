import User from "../../models/User.js";
import Author from "../../models/Author.js";

export default async(req,res,next)=>{
    try {
        let one = await User.findByIdAndUpdate(req.params.id, {
            role:1
        },{
            new:true
        })
        let author = await Author.findOne({user_id:req.params.id})
        author.active= !author.active
        await author.save()
        if(one){return res.status(200).json({
            success: true,
            response : author,
            message:"Role change"
        })
    }else{
        return res.status(404).json({
            success: false,
            response:null,
            message:"not found"
        })
    }
    } catch (error) {
        next(error)
    }
}