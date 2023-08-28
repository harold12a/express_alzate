import Chapter from "../../models/Chapter.js";

export default async(req, res, next) => {

    try {
        let one = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: 'update successfully'
            })
        } else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Chapters not found'
            })
        }
    } catch (error) {
       next(error)
    }

}