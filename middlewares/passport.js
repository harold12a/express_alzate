import User from "../models/User.js"
import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"

export default passport.use(
    new Strategy(  // defino una nueva estrategia de passport para autenticar con jwt
        // primer parametro objeto de opciones de extraccion
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
            // extraigo de los encabezamientos la autorizacion 
            // token que me envia el cliente
            secretOrKey: process.env.SECRET_KEY
            // clave secreta encarga de toekizar / destokenizar la constraseñ
            // gurada como una variable de entorno
        },
        // se estaen los daos tokeizados y se guardan en una variable llamada jwt_payload
        async (jwt_payload, done) => {
            // donde es un next nivel mas alto
            // me permit configurar el error en el prime parametro
            // y permite continuar como el next
            try {
                // console.log(jwt_payload);
                let user = await User.findOne({ _id: jwt_payload._id })     
                    //  console.log(user);
                if (user) {    
                    delete user.password            // si encuentro el usuario autenticar
                    // elimino los datos sensibles
                    return done(null, user)  // dejo pasar el error= null y los dadtos del usuario autenticado
                } else {                     // si no lo encuentro
                    return done(null, false) // dejo pasar el error= null pero no envio datos de ningun usuario 
                }
            } catch (error) {
                return done(error, false)  // si ocurre el error dejo pasar con error= null y ningun dato del usurio
            }
        }
    )
)