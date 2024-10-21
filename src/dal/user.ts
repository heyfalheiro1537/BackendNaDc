import { prisma } from "../lib/prisma";

export function getUserById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}