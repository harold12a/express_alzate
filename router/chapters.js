import { Router } from "express"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import next_order from "../middlewares/next_order.js"
import add_cover_photo from "../middlewares/add_cover_photo.js"
import has_permition from "../middlewares/has_permition.js"
import is_active from "../middlewares/is_active.js"
import is_property_of from "../middlewares/is_property_of.js"
import exists_order from "../middlewares/exists_order.js"
import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"
import schema_create from "../schemas/chapters/create.js"
import read_one from "../controllers/chapters/read_one.js"


let chaptersRouter = Router()

chaptersRouter.get('/', read)
chaptersRouter.post('/',
    passport.authenticate('jwt', { session: false }),
    validator(schema_create), 
    exists_order,
    next_order,
    has_permition,
    is_active,
    is_property_of,
    add_cover_photo,
    create)
chaptersRouter.get('/:id',
passport.authenticate('jwt', {session: false}),
read_one)

export default chaptersRouter
