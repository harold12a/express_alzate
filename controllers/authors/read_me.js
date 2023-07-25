import Author from "../../models/Author.js"

export default async (req, res, next) => {
    try {
        let all = await Author
            .findOne({ user_id: req.user._id }, "-_id")
            .populate("user_id", "-_id -password")
        if (all) {
            return res.status(200).json({
                success: true,
                response: {profile: all},
                message: 'author found!'
            })
        }
        else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'author not found'
            })
        }
    } catch (error) {
        next(error)
    }
}