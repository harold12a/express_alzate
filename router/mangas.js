import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";
import passport from "../middlewares/passport.js";

let mangasRouter = Router()

mangasRouter.post('/', passport.authenticate('jwt', { session: false }),create)
mangasRouter.post('/',passport.authenticate('jwt', { session: false }), validator(schema_create), create)
mangasRouter.get('/',passport.authenticate('jwt', { session: false }), read)


export default mangasRouter