import User from "../models/User.js"

export default async(req,res,next)=> {
    try {
        let one = await User.findOne({ email:req.body.email })
        if (one) {
            req.user = {
                email: one.email,
                password: one.password,
                role: one.role,
                photo: one.photo
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            messages: ['user does not exist!']
        })
    } catch (error) {
        next(error)
    }
}