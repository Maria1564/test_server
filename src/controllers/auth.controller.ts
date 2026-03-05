import { Response, Request } from "express";
import * as authService from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await authService.createUser(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Что-то случилось с сервером" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Что-то случилось с сервером" });
  }
};


