import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUser(
      (req as any).userId,
      req.params.id as string,
    );

    res.json(user);
  } catch (error: any) {
    if (error.message === "UNAUTHORIZED") {
      return res.status(401).json({
        errorMessage: "Пользователь не авторизован",
      });
    }

    if (error.message === "FORBIDDEN") {
      return res.status(403).json({
        errorMessage: "Недостаточно прав доступа",
      });
    }

    if (error.message === "USER_NOT_FOUND") {
      return res.status(404).json({
        errorMessage: "Пользователь не найден",
      });
    }

    console.log(error);
    res.status(500).json({ errorMessage: "Что-то случилось с сервером" });
  }
};
