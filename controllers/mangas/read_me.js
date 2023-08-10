import Manga from "../../models/Manga.js";

export default async function read_me (req, res, next){

    try {
        let all = await Manga.find({author_id: req.body.author_id})
        if(all.length > 0){
            return res.status(200).json({
                response: all,
                success: true,
                message: 'Mangas Found'
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