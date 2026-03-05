import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type JwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";

    const payload = jwt.verify(token, "secret123") as JwtPayload;

    (req as any).userId = payload.id;
    next();
  } catch (error) {
    (console.log(error),
      res.status(401).json({ errorMessage: "Неверный токен" }));
  }
};
