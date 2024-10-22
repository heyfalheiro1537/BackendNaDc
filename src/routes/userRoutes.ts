import { getUser, createUser, deleteUser, putUser } from '../controllers/userController';
import { FastifyInstance } from 'fastify';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'integer' } 
        },
        required: ['id'] 
      }
    }
  }, getUser);
  
  fastify.post('/',{
    schema:{
        body:{
          type: 'object',
          properties:{
            name: { type: 'string' },
            email: { type: 'string' },
            password:{type:'string'},
            address:{type:'string'},
            phone:{type:'string'},
          }
      }
    }
  },createUser);

  fastify.put('/:id', putUser);

  

  fastify.delete('/:id', deleteUser);
  
}
