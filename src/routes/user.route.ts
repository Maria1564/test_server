import { Router } from "express";
import { authMiddleware } from "../middlewares/checkAuth.middlewares";
import * as userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/:id", authMiddleware, userController.getUser);

export default userRouter;
