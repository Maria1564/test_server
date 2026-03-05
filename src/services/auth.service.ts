import { prisma } from "../prisma";
import bcrypt from "bcrypt";

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
