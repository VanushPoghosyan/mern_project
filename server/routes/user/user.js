import {Router} from 'express';
import * as userRouter from "../../controllers/user/user.js";
import { checkAuth } from '../../middlewares/checkAuth.js';

const router = new Router();

router.post("/register",userRouter.register);
router.post("/login",userRouter.login);
router.get("/check",checkAuth,userRouter.checkAuth);

export default router;