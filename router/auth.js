import { Router } from "express";
//controller
import read from '../controllers/auth/read.js';
import register from '../controllers/auth/register.js';
import singin from "../controllers/auth/singin.js";
import singout from "../controllers/auth/signout.js";
import token from "../controllers/auth/sign-token.js";
// middlewares
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import update_role_1 from "../controllers/auth/update_role_1.js";
import has_permition from "../middlewares/has_permition.js";
// schemas
import register_schema from '../schemas/auth/register.js'
import singin_schema from "../schemas/auth/singin.js";


let authRouter = Router();

authRouter.post('/singin', validator(singin_schema), accountNotExists, isValidPassword, generateToken, singin);
authRouter.post('/token', passport.authenticate('jwt', { session: false }), generateToken, token);
authRouter.post('/register', validator(register_schema), accountExist, createHash, register);
authRouter.post('/signout', passport.authenticate('jwt', { session: false }), singout);
authRouter.get('/', passport.authenticate('jwt', { session: false }), read);
authRouter.put('/auth/role/author/:id', passport.authenticate('jwt',{session:false}),update_role_1)
export default authRouter
