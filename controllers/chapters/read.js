import Chapter from "../../models/Chapter.js";
export default async (req, res, next) => {
    try {
        let consultas = {};
        let pagination = { page: 1, limit: 6 }
        

        if (req.query.manga_id) {
            consultas.manga_id = req.query.manga_id.split(',');
        }
        if (req.query.page) {
            pagination.page = req.query.page;
        }
       

        let skip = pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
        let limit = pagination.limit > 0 ? pagination.limit : 0;
        
        let all = await Chapter.find(consultas, 'manga_id  title cover_photo pages _id').populate('manga_id', 'title').skip(skip).limit(limit).sort( {order: 1});
        
        if (all.length > 0) {
            let total = await Chapter.countDocuments(consultas);
            let pages = Math.ceil(total / pagination.limit);
            let prev_page = Number(pagination.page) === 1 ? null : Number(pagination.page) - 1;
            let next_page = Number(pagination.page) === pages ? null : Number(pagination.page) + 1;

            return res.status(200).json({
                success: true,
                response: all,
                message: ['found'],
                prev: prev_page,
                next: next_page,
            })
        } else{
            return res.status(404).json({
                response: null,
                message: ['not found'],
            })
        }
    } catch (error) {
        next(error);
    }

} 