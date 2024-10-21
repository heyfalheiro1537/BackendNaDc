import { FastifyRequest,FastifyReply } from "fastify";

export const getProduct= async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params;
    // Logic to get the Product from the database
    return { message: `Fetching Product with ID: ${id}` };
  };
  
  export const createProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    //const {props} request.body as type
    const { name } = request.body;
    // Logic to create a Product in the database
    return { message: `Product ${name} has been created` };
  };
  
  export const deleteProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    const { id } = request.params;
    // Logic to delete the Product from the database
    return { message: `Product with ID ${id} has been deleted` };
  };