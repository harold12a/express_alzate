export default (req, res, next) => {
    let author_active = req.author.active
    let company_active = req.company.active

    if (author_active || company_active) {
        return next()
    }
    return res.status(400).json({
        response: null,
        messages: ['author or company does not active']
    })
}