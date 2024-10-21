import { FastifyRequest,FastifyReply, RequestParamsDefault } from "fastify";
import { Product } from "../models/type";

export const getProduct= async (request: FastifyRequest, reply: FastifyReply) => {

    const {id} = request.params as Product;

    //go to service layer
    
    return { message: `Fetching Product with ID: ${id}` };

  };
  
  export const createProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    //const {props} request.body as type
    const { id } = request.body as Product;
    // Logic to create a Product in the database
    return { message: `Product ${id} has been created` };
  };
  
  export const deleteProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    const { id} = request.params as Product;
    
    // Logic to delete the Product from the database
    return { message: `Product with ID ${id} has been deleted` };
  };