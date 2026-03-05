import { Router } from "express";
import * as authControllers from "../controllers/auth.controller";
import { registerValidation } from "../validations";
import { validate } from "../middlewares/validation.middlewares";

const authRouter = Router();

export default authRouter.post(
  "/register",
  registerValidation,
  validate,
  authControllers.registerUser,
);
