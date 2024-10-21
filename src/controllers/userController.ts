import { FastifyRequest,FastifyReply, RequestParamsDefault } from "fastify";
import { User } from "../models/type";

export const getUser = async (request:FastifyRequest, reply :FastifyReply) => {
  
    const { id } = request.params as User;
    // Logic to get the user from the database
    return { message: `Fetching user with ID: ${id}` };
  
  };

 export const putUser = async (request:FastifyRequest, reply :FastifyReply) => {
  
    const { id } = request.params as User;
    // Logic to get update from the database
    return { message: `Fetching user with ID: ${id}` };
  
  };
  
  export const createUser = async (request:FastifyRequest, reply :FastifyReply) => {

    const { name } = request.body as User;
    // Logic to create a user in the database
    return { message: `User ${name} has been created` };
  
  };
  
  export const deleteUser = async (request:FastifyRequest, reply :FastifyReply) => {
    
    const { id } = request.params as User;
    // Logic to delete the user from the database
    return { message: `User with ID ${id} has been deleted` };
  
  };