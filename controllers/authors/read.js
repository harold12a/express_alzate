import Author from "../../models/Author.js";

export default async (req,res, next)=>{
        try {
            let consultas = {};
            let pagination = {page:1, limit:4};
            if(req.query.page){
                pagination.page = req.query.page
            }

            if(req.query.name){
                consultas.name =  new RegExp(req.query.name,'i')
            }
            if(req.query.user_id){
                consultas.user_id = req.query.user_id.split(',')
            }
            let skip = (pagination.page > 0) ?
                (pagination.page - 1) * pagination.limit:0
            let limit = pagination.limit >0 ?
                pagination.limit : 0

            let all = await Author.find(consultas, 'name last_name city country createdAt photo').skip(skip).limit(limit).sort({name:1}).populate('user_id', 'name')
            if(all.length>0){
                let total = await Author.countDocuments(consultas)
                let pages = Math.ceil(total / pagination.limit)
                
                let prev_pages = pagination.page === 1? null : Number(pagination.page) -1
                let next_page = pagination.page === pages ? null : Number (pagination.page) +1
                
                return res.status(200).json({
                    response: all,
                    message:' authors founds!',
                    prev_pages,
                    next_page,
                })
            }else{
                return res.status(404).json({
                    response: null,
                    message:'  authors NOT founds!'

                });
            }
        } catch (error) {
            return res.status(500).json({
                        response: null,
                        message: 'error'
                   })
        }
    }

