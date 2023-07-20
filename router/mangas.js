import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/mangas/create.js";
import passport from "passport";
import has_permition from "../middlewares/has_permition.js";
import read_news from "../controllers/mangas/read_news.js";

let mangasRouter = Router()

mangasRouter.post('/',create);
mangasRouter.post('/', validator(schema_create), create);
mangasRouter.get('/', read);
mangasRouter.get('/news', passport.authenticate("jwt",{"session":false}), has_permition, read_news)

export default mangasRouter