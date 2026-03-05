import { prisma } from "../prisma";
const userClient = prisma.user;

export const getUser = async (userId: string, requestedUserId: string) => {
  const currentUser = await userClient.findUnique({
    where: {
      id: userId,
    },
  });

  if (!currentUser) {
    throw new Error("UNAUTHORIZED");
  }

  if (currentUser.id !== requestedUserId && currentUser.role !== "ADMIN") {
    throw new Error("FORBIDDEN");
  }

  const user = await userClient.findUnique({
    where: {
      id: requestedUserId,
    },
  });

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  const { hashPassword, ...userData } = user;
  return userData;
};
