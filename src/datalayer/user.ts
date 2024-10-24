import { prisma } from "../lib/prisma";
import { Prisma } from "@prisma/client";
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

export function allUsers(){
  return prisma.user.findMany()
}

export function updateUser(id: number, data: Prisma.UserUncheckedUpdateInput) {
  return prisma.user.update({
    where: {
      userId : id,
    },
    data,
  });
}

export function deleteUser(id: number) {
  return prisma.user.delete({
    where: {
      userId: id,
    },
  });
}