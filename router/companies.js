import { Router } from "express"
import read from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'
import admin from "../controllers/companies/admin.js"
import passport from "../middlewares/passport.js"
import update_role_2 from "../controllers/auth/update_role_2.js"
import has_permition from "../middlewares/has_permition.js"

let companiesRouter = Router()

companiesRouter.get('/', read)
companiesRouter.post('/', create)
companiesRouter.put('/auth/role/company/:id', passport.authenticate('jwt',{session:false}),update_role_2)
companiesRouter.get('/companies/admin', passport.authenticate("jwt",{"session":false}),admin)

export default companiesRouter
