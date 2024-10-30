import { FastifyRequest,FastifyReply, RequestParamsDefault } from "fastify";
import { z } from 'zod';
import { createNewProduct, fetchProduct,deleteProductById, updateProductById, fetchAllProducts } from "../service/productService";
import { Product } from "../models/type";

interface ProductProps {
    id:number;
}



const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    active: z.boolean(),
    condition: z.string(),
    userId: z.number()
});

export const getProduct= async (request: FastifyRequest, reply: FastifyReply) => {
    
    const {id} = request.params as ProductProps;
    try{
        const product = await fetchProduct(id);
        reply.status(200);
        return product;
    }catch(error: unknown){
        if(error instanceof Error){
            reply.status(404);
            return {message: error.message};
        }
        else{
            reply.status(500);
            return {message: 'Error fetching user'};
        }
    }

  };
  
export const createProduct = async (request: FastifyRequest,reply: FastifyReply) => {

  const validation = productSchema.safeParse(request.body);

  if(!validation.success){
    reply.status(400);
    return {message: validation.error.errors};
  }

  try{
    const product = await createNewProduct(request.body as Product);
    reply.status(201);
    return product;
  }catch(error:unknown){
    if(error instanceof Error){
      reply.status(400);
      return {message: error.message};
    }
    else{
      reply.status(500);
      return {message: 'Error creating product'};
    }
  }
  
} 
export const deleteProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    const {id} = request.params as ProductProps;
    try{
    await deleteProductById(id);
    }catch(error:unknown){
        if(error instanceof Error){
            reply.status(404);
            return {message: error.message};
        }
        else{
            reply.status(500);
            return {message: 'Error deleting product'};
        }
    }
};

export const updateProduct = async (request: FastifyRequest,reply: FastifyReply) => {
  const validation = productSchema.partial().safeParse(request.body);
  if(!validation.success){
    reply.status(400);
    return {message: validation.error.errors};
  }
  try{
    const {id} = request.params as ProductProps;
    const product = await updateProductById(id, request.body as Partial<Product>);
    return product;
  }
  catch(error:unknown){
    if(error instanceof Error){
      reply.status(404);
      return {message: error.message};
    }else{
      reply.status(500);
      return {message: 'Error updating product'};
    }
  }

};

export const getProducts = async (request: FastifyRequest,reply: FastifyReply) => {
  try{const products = await fetchAllProducts();
    reply.status(200);
    return products;
  }catch(error:unknown){
    if(error instanceof Error){
      reply.status(404);
      return {message: error.message};
    }else{
      reply.status(500);
      return {message: 'Error fetching products'};
    }
  }

};

