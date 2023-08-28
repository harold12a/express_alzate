import Company from "../../models/Company.js"

export default async (req, res, next) => {
    try {
        let active_true = await Company.find({ active: true })
        let active_false = await Company.find({ active: false })
        if (active_true || active_false) {
            return res.status(200).json({
                response: { active_true, active_false },
                message: 'companies found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'companies not found'
            })
        }
    } catch (error) {
        next(error)
    }
}