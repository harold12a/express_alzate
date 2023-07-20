import bcryptjs from 'bcryptjs';
export default (req, res, next) => {
    if (bcryptjs.compareSync(req.body.password, req.user.password)) {   //compara las contraseñas y devuelte un booleano
        delete req.user.password;
        return next();
    }
    return res.status(400).json({ success: false, messages: ['Invalid credentials!'] });
}


