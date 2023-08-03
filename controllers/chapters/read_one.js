import Chapter from '../../models/Chapter.js';

export default async (req, res, next) => {
    try {
        let id = req.params.id;
        let one = await Chapter.findById(id, "title cover_photo pages -_id")
        let allChapters = await Chapter.findOne({ _id: { $gt: id } });

        return res.status(200).json({
            success: true,
            response: one,
            next: allChapters ? allChapters._id : null
        })
    } catch (error) {
        next(error);
    }
}


