import { FastifyRequest,FastifyReply, RequestParamsDefault } from "fastify";

interface ProductProps {
    id:number;
}

export const getProduct= async (request: FastifyRequest, reply: FastifyReply) => {

    const {id} = request.params as ProductProps ;

    //go to service layer
    
    return { message: `Fetching Product with ID: ${id}` };

  };
  
  export const createProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    //const {props} request.body as type
    const { id } = request.body as ProductProps ;
    // Logic to create a Product in the database
    return { message: `Product ${id} has been created` };
  };
  
  export const deleteProduct = async (request: FastifyRequest,reply: FastifyReply) => {
    const { id} = request.params as ProductProps;

    // Logic to delete the Product from the database
    return { message: `Product with ID ${id} has been deleted` };
  };