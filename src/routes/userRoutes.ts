import { getUser, createUser, deleteUser, putUser } from '../controllers/userController';
import { FastifyInstance } from 'fastify';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/:id', getUser);
  fastify.put('/:id', putUser);
  fastify.post('/', createUser);
  fastify.delete('/:id', deleteUser);
}
