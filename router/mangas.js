import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";
import has_permition from "../middlewares/has_permition.js";
import read_news from "../controllers/mangas/read_news.js";
import passport from "../middlewares/passport.js";
import read_me from "../controllers/mangas/read_me.js"
import update from "../controllers/mangas/update.js";
import destroy from "../controllers/mangas/destroy.js";
import is_message_of from "../middlewares/is_message_of.js";


let mangasRouter = Router()


mangasRouter.post('/', passport.authenticate('jwt', { session: false }),create)
mangasRouter.post('/',passport.authenticate('jwt', { session: false }), validator(schema_create), create)
mangasRouter.get('/',passport.authenticate('jwt', { session: false }), read)
mangasRouter.get('/news', passport.authenticate("jwt",{session:false}), has_permition, read_news)
mangasRouter.get('/me',passport.authenticate('jwt',{session:false}),has_permition,read_me)
mangasRouter.put('/:id',passport.authenticate('jwt',{session:false}),is_message_of,update)
mangasRouter.delete('/:id',passport.authenticate('jwt',{session:false}),is_message_of,destroy)


export default mangasRouter