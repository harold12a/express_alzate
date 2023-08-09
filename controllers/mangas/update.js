import Manga from "../../models/Manga.js"

export default async function update (req,res,next){

    try {
        let one = await Manga.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(one){
            return res.status(200).json({
                success: true,
                response: one,
                message: ' update successfully'
            })
        }else{
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Mangas not found'
            })
        }
        
    } catch (error) {
        next(error);
    }
} 