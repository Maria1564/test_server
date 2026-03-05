import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

type UserRegisterDTO = {
  name: string;
  email: string;
  password: string;
  birthDate: string;
};

const authClient = prisma.user;

export const createUser = async (user: UserRegisterDTO) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(user.password, saltRounds);

  const newUser = await authClient.create({
    data: {
      email: user.email,
      name: user.name,
      birthDate: new Date(user.birthDate),
      hashPassword: passwordHash,
    },
  });

  const { hashPassword, ...userData } = newUser;
  return userData;
};

export const loginUser = async (email: string, password: string) => {
  const user = await authClient.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const passswordIsValid = await bcrypt.compare(password, user.hashPassword);

  if (!passswordIsValid) {
    return null;
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "1d" },
  );

  const { hashPassword, ...userData } = user;

  return {
    ...userData,
    token,
  };
};