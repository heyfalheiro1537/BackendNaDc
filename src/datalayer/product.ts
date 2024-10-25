import { prisma } from "../lib/prisma";
import { Prisma } from "@prisma/client";
import { Product } from "../models/type";

export function getProductById(id: number) {
  return prisma.product.findUnique({
    where: {
      productId : id,
    },
  });
}

export function createProduct(product: Product) {
  return prisma.product.create({
    data: product,
  });
}

export function allProducts(){
  return prisma.product.findMany()
}

export function updateProduct(id: number, data: Prisma.ProductUncheckedUpdateInput) {
  return prisma.product.update({
    where: {
      productId : id,
    },
    data,
  });
}

export function deleteProduct(id: number) {
  return prisma.product.delete({
    where: {
      productId: id,
    },
  });
}