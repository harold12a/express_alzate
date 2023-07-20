import Chapter from "../models/Chapter.js";

export default async (req, res, next) => {
    try {
        let one = await Chapter.findOne({
            order: req.body.order,
            manga_id: req.body.manga_id
        });

        if (one) {
            return res.status(500).json({
                success: false,
                response: null,
                messages: ['error']

            })
        } else {
            return next();

        }
    } catch (error) {
        return next(error);
    }


}