import Chapter from "../../models/Chapter.js";

export default async(req, res, next) => {

    try {

        const one = await Chapter.findByIdAndDelete({ _id: req.params.id})

        if(one){
            return res.status(200).json({
                success: true,
                response: one,
                message: "chapter deleted",
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: " chapter not found",
        })
        
    }catch (error){
        next (error)
    }
    
}