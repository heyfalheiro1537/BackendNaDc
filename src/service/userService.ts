import { getUserById,createUser } from "../datalayer/user";
import {User} from "../models/type";



export async function fetchUser(id: number) {

  const user = await getUserById(id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
}

export async function createNewUser(user: User) {

  if (!user.name) {
    throw new Error("Campo nome é obrigatório");
  }
  if (!user.email) {
    throw new Error("Campo email é obrigatório");
  }
  if (!user.password) {
    throw new Error("Campo senha é obrigatório");
  }
  if (!user.address) {
    throw new Error("Campo endereço é obrigatório");
  }
  if (!user.phone) {
    throw new Error("Campo telefone é obrigatório");
  }
  return createUser(user);

}