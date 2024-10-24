import { FastifyRequest,FastifyReply} from "fastify";
import { User } from "../models/type";
import { fetchUser,fetchAllUsers,createNewUser,updateUser,deleteUserbyId } from "../service/userService";

interface UserProps {
  id:number;
}

export const getAllUser = async (request:FastifyRequest, reply :FastifyReply) => {
  
  try {
    const users = await fetchAllUsers();
    reply.status(200).send(users);
    return users;
  } catch (error : unknown) {
    if(error instanceof Error)
      reply.status(404).send({ message: error.message });
    else
      reply.status(500).send({ message: "Error fetching users" });
    return;
  }
  
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
 export const patchUser = async (request:FastifyRequest, reply :FastifyReply) => {
   
    const { id } = request.params as UserProps

    try{
      const user = await updateUser( id , request.body as Partial<User>);
      reply.status(200).send(user);
      return user;
    }catch(error: unknown){
      if(error instanceof Error)
        reply.status(404).send({ message: error.message });
      else
        reply.status(500).send({ message: "Error fetching user" });
      return;
    }
    
   
   
  
  };
  
  
  
  export const deleteUser = async (request:FastifyRequest, reply :FastifyReply) => {
    
    const { id } = request.params as UserProps;
    try{
      await deleteUserbyId(id);
    }catch(error: unknown){
      if(error instanceof Error)
        reply.status(404).send({ message: error.message });
      else
        reply.status(500).send({ message: "Error fetching user" });
      return;
    }
    reply.status(200).send({ message: `User with ID ${id} has been deleted` });
    return { message: `User with ID ${id} has been deleted` };

  
  
}