import Chapter from '../../models/Chapter.js';


export default async(req, res, next) => {
    try {
        const chapters = await Chapter.find({ manga_id: req.query.manga_id})
        if (chapters.length>0) {
            return res.status(200).json({
                success: true,
                response: chapters,
                message: 'chapters found',
            })
        } else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'chapters not found',
            })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }

}
