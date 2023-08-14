import User from "../../models/User.js";
import Author from "../../models/Author.js";

export default async(req,res,next)=>{
    try {
        let one = await User.findByIdAndUpdate(req.params.id,{
            role:1
        },{
            new:true
        })
        let author = await Author.findOneAndUpdate({user_id:req.params.id},{
            active: true
        },{
            new:true
        })
        if(one){return res.status(200).json({
            success: true,
            response: one,
            message:"Role change"
        })
    }else{
        return res.status(400).json({
            success: false,
            response:null,
            message:"not found"
    })  
    }
    } catch (error) {
        next(error)
    }
}
