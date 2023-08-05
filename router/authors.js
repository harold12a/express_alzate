import { Router } from "express";
import create from "../controllers/authors/create.js";
import read from "../controllers/authors/read.js";
import validator from '../middlewares/validator.js';
import schema_create from '../schemas/authors/create.js'
import passport from "../middlewares/passport.js";
import read_me from "../controllers/authors/read_me.js";
import has_permition from "../middlewares/has_permition.js";

let authorsRouter = Router()

authorsRouter.post('/', passport.authenticate("jwt",{"session":false}), validator(schema_create) ,create)
authorsRouter.get('/',passport.authenticate("jwt",{"session":false}),read)
authorsRouter.get('/me',passport.authenticate("jwt",{"session":false}), has_permition, read_me) 

export default authorsRouter