
const not_found_hanlder = (req,res,next)=>{
    return res.status(404).json({
        success:false,
        messages:`${req.method} ${req.url} not found`
    })
}

export default not_found_hanlder

