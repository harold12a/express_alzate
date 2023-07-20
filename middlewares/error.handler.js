const error_handler = (error,req,res,next)=>{
    console.log(error);
    return res.status(500).json({
        success:false,
        response: null,  
        messages: ['not desde error hanlder!']
    })
};

export default error_handler