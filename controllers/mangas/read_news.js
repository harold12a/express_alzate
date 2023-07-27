import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        let all = await Manga.find({ author_id: req.author._id })
        const dataSorted = all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (all.length < 4) {
            return res.status(200).json({
                success: true,
                response: { mangas: all, logo: "www.google.com" },
                message: 'Mangas found!'
            })
        } else if (all.length >= 4 && all.length < 8) {       
            const dataOld = dataSorted.slice(-2);
            const dataNew = dataSorted.slice(0, 2);
            const resultado = [...dataNew, ...dataOld];    
            return res.status(200).json({
                success: true,
                response: { all : resultado },
                message: 'Mangas found!'
            })
        } else if (all.length >= 8) {
            const dataOld = dataSorted.slice(-4);
            const dataNew = dataSorted.slice(0, 4);
            return res.status(200).json({
                success: true,
                response: { new: dataNew, old: dataOld },
                message: 'Mangas found!'
            })
        }
        else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Mangas not found'
            })
        }
    } catch (error) {
        next(error)
    }
}