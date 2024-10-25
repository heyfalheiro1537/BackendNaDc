import { getUserById, allUsers,createUser, deleteUser, updateUser as update} from "../datalayer/user";
import {User} from "../models/type";

export async function fetchUser(id: number) {

  const user = await getUserById(id);
  if (!user) {
    throw new Error(`User not found`);
  }
  return user;
}

export async function fetchAllUsers() {

  const users = await allUsers();
  if (!users) {
    throw new Error("Something went wrong");
  }
  return users;
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
  const usuario = await createUser(user);
  return usuario;

}

export async function updateUser(id:number, data: Partial<User>) {
  await update(id, data);
  const user = await getUserById(id);
  return user;
}

export async function deleteUserbyId(id:number){
  const user = await fetchUser(id);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  await deleteUser(id);

}