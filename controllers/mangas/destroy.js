import Manga from "../../models/Manga.js"
import Chapter from "../../models/Chapter.js"
export default async function destroy (req,res,next){

    try {
        let one = await Manga.findByIdAndDelete(req.params.id)
        let chapter = await Chapter.deleteMany({manga_id: req.params.id})
        if(one){
            return res.status(200).json({
                success: true,
                response: one,
                message: ' delete successfully'
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