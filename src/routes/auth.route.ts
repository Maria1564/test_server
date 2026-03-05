import { Router } from "express";
import * as authControllers from "../controllers/auth.controller";
import { registerValidation, loginValidation } from "../validations";
import { validate } from "../middlewares/validation.middlewares";

const authRouter = Router();

authRouter.post(
  "/register",
  registerValidation,
  validate,
  authControllers.registerUser,
);

authRouter.post("/login", loginValidation, validate, authControllers.loginUser);

export default authRouter;
