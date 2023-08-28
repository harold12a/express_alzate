import Manga from '../models/Manga.js'

export default async function (req, res, next) {

    if(req.user){
        const manga = await Manga.findOne({_id: req.params.id  })
        if(manga){
            return next()
        }
    }
    return res.status(403).json({
        success: false,
        response: null,
        message: ' not authorized'
    })
}