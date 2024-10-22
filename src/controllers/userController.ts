import { FastifyRequest,FastifyReply} from "fastify";
import { User } from "../models/type";
import { fetchUser,createNewUser } from "../service/userService";

interface UserProps {
  id:number;
}

export const getUser = async (request:FastifyRequest, reply :FastifyReply) => {
  
    const { id } = request.params as UserProps
    
    try {
      const user = await fetchUser(id);
      reply.status(200).send(user);
      return user;
    } catch (error : unknown) {
      if(error instanceof Error)
        reply.status(404).send({ message: error.message });
      else
        reply.status(500).send({ message: "Error fetching user" });
      return;
    }
    
  };

  export const createUser = async (request:FastifyRequest, reply :FastifyReply) => {

    
    try {
      
      const { name } = request.body as User;
      await createNewUser(request.body as User);
      reply.status(201).send({ message: `User ${name} has been created` });
      return { message: `User ${name} has been created` };

    } catch (error: unknown) {

      if (error instanceof Error)
        reply.status(400).send({ message: error.message });
      else
        reply.status(500).send({ message: "Error creating user" });
      return;
    }

  
  };
 export const putUser = async (request:FastifyRequest, reply :FastifyReply) => {
  
    const { id } = request.params as UserProps
    // Logic to get update from the database
    return { message: `Fetching user with ID: ${id}` }
  
  };
  

  
  export const deleteUser = async (request:FastifyRequest, reply :FastifyReply) => {
    
    const { id } = request.params as UserProps;
    // Logic to delete the user from the database
    return { message: `User with ID ${id} has been deleted` };
  
  };