import Chapter from '../../models/Chapter.js';

export default async (req, res, next) => {
    try {
        let id = req.params.id;
        let one = await Chapter.find({_id:id})
        let allChapters = await Chapter.find({ manga_id: one.manga_id})
        

        if (one) {
            let responseData = {
                success: true,
                response: one,
                allChapters
            }
            return res.status(200).json({ responseData })
        } else {
            res.estatus(404).json({
                success: false,
                message: 'Chapter not found'
            })
        }

    } catch (error) {
        next(error);
    }
}


