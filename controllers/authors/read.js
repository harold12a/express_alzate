import Author from "../../models/Author.js"

export default async (req, res, next) => {
    try {
        let active_true = await Author.find({active:true})
        let active_false = await Author.find({active:false})
        if (active_true || active_false) {
            return res.status(200).json({
                response: {active_true,active_false},
                message: 'authors found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'authors not found'
            })
        }
    } catch (error) {
        next(error)
    }
}