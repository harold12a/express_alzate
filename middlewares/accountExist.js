import User from "../models/User.js";
export default async (req,res,next)=>{
try {
    let one = await User.findOne({email:req.body.email})
    if(one){
        return res.status(400).json({
            success:false,
            messages:[' user already exists!']
        })
    }
   
    return next()



} catch (error) {
    next(error);
}
}