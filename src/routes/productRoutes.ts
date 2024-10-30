import { getProduct,getProducts, updateProduct, createProduct, deleteProduct } from '../controllers/productController';
import { FastifyInstance } from 'fastify';



export default async function productRoutes(fastify: FastifyInstance) {
    fastify.get('/:id',
        {
            schema: {
              params: {
                type: 'object',
                properties: {
                  id: { type: 'integer' } 
                },
                required: ['id'] 
              }
            }
          }, getProduct);

    fastify.get('/', getProducts);
    
    fastify.patch('/:id',{
        schema: {
          params: {
            type: 'object',
            properties: {
              id: { type: 'integer' } 
            },
            required: ['id'] 
          }
        }
      }, updateProduct);
    fastify.post('/', createProduct);
    fastify.delete('/:id',{
        schema: {
          params: {
            type: 'object',
            properties: {
              id: { type: 'integer' } 
            },
            required: ['id'] 
          }
        }
      }, deleteProduct);
}
