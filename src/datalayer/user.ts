import { prisma } from "../lib/prisma";
import { User } from "../models/type";

export function getUserById(id: number) {
  return prisma.user.findUnique({
    where: {
      userId : id,
    },
  });
}

export function createUser(user: User) {
  return prisma.user.create({
    data: user,
  });
}

export function updateUser(id: number, user: User) {
  return prisma.user.update({
    where: {
      userId: id,
    },
    data: user,
  });
}

export function deleteUser(id: number) {
  return prisma.user.delete({
    where: {
      userId: id,
    },
  });
}