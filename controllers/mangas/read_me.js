import Manga from "../../models/Manga.js";

export default async function read_me(req, res, next) {

    try {
        let all = await Manga.find({ author_id: req.body.author_id }).populate('category_id').sort({ title: 1 })
        let mangaByCategory = {}
        for (let each of all) {
            // each es cada uno de los mangas del array all
            // each tiene todas las prpiedades del manga tengoque componer un objeto con las listas ordenadas por categoria 
            // let manga = {shonen: lista de mangas shonen de este author , shojo: lista de mangas shojo  de este author ...}
            if (mangaByCategory[each.category_id.name]) {
                mangaByCategory[each.category_id.name].push(each)
            } else {
                mangaByCategory[each.category_id.name] = [each]
            }
        }
        return res.status(200).json({
            response: mangaByCategory,
            success: true,
            message: 'Mangas Found'
        })


    } catch (error) {
        next(error);

    }

}
