
import Manga from '../models/Manga.js'

export default async (req, res, next ) => {
  try {
    const {manga_id} = req.body

    let manga = await Manga.findOne({
      _id: manga_id
    })
    let author_rid = req.author._id
    let company_rid = req.company._id

    if(author_rid === manga.author_id) {
        return next()
    }

    if(company_rid === manga.company_id) {
      return next()
    }

    return res.status(400).json({
        response: null,
        messages: ['Not authorized!']
    })

  } catch (error) {
    return next(error)
  }
}
