import User from '../../models/User.js';

export default async (req,res,next) => {
    try {
        await User.findOneAndUpdate(
            // objeto de busqueda
            // objetos a cambiar
            {email:req.body.email},
            {online:true},
     
        )
        return res.status(200).json({
            success: true,
            responde:{
                user:req.body.user,
                token:req.body.token
            },
            messges:['signed in!']
        })
    } catch (error) {
        return next(error);
    }

}