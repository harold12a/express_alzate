import Manga from "../../models/Manga.js"

export default async (req, res,next) => {
    try {
        let all = await Manga.find()
        if (all) {
            return res.status(200).json({
                response: all,
                message: 'mangas found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'mangas not found'
            })
        }
    } catch (error) {
       next(error)
    }
}