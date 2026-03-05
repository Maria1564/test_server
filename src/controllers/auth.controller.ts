import { Response, Request } from "express";
import * as authService from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await authService.createUser(req.body)
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Что-то случилось с сервером" });
  }
};
