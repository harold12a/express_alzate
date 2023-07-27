import Chapter from '../../models/Chapter.js';

export default async (req,res,next)=>{
    try {
        let all = await Chapter.find()

        
        if(all.length > 0){
            return res.status(200).json({
                response: all,
                message: 'Chapter found'
            })
        }else{
            return res.status(404).json({
                response: null,
                message:' Chapter NOT founds!'
            });
        } 

    } catch (error) {
      return next(error)
    }

}

