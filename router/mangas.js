import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";
import has_permition from "../middlewares/has_permition.js";
import read_news from "../controllers/mangas/read_news.js";
import passport from "../middlewares/passport.js";

let mangasRouter = Router()

mangasRouter.get('/news', passport.authenticate("jwt",{"session":false}), has_permition, read_news)
mangasRouter.post('/', passport.authenticate('jwt', { session: false }),create)
mangasRouter.post('/',passport.authenticate('jwt', { session: false }), validator(schema_create), create)
mangasRouter.get('/',passport.authenticate('jwt', { session: false }), read)

export default mangasRouter